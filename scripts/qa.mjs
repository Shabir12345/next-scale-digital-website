/* Post-build QA. Walks dist/ and asserts the things that are easy to break
   silently: schema validity, unique + sized titles and descriptions, canonicals,
   heading order, internal link targets, image alt text.
   Run: node scripts/qa.mjs */
import { readFile, readdir } from 'node:fs/promises';
import { join, relative, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const SITE = 'https://www.nextscaledigital.com';

const problems = [];
const notes = [];
const fail = (f, m) => problems.push(`${f}: ${m}`);
const note = (f, m) => notes.push(`${f}: ${m}`);

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

async function walkAll(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walkAll(p)));
    else out.push(p);
  }
  return out;
}

const files = await walk(dist);
const assetPaths = new Set(
  (await walkAll(dist)).map((f) => '/' + relative(dist, f).replace(/\\/g, '/')),
);
const titles = new Map();
const descs = new Map();
const pagePaths = new Set(
  files.map((f) => {
    const rel = relative(dist, f).replace(/\\/g, '/');
    return '/' + rel.replace(/index\.html$/, '').replace(/\.html$/, '');
  }),
);

for (const f of files) {
  const name = relative(dist, f).replace(/\\/g, '/');
  const html = await readFile(f, 'utf8');
  const is404 = name === '404.html';

  // --- title ---
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
  if (!title) fail(name, 'no <title>');
  else {
    const t = title.replace(/&amp;/g, '&');
    if (t.length > 65) note(name, `title ${t.length} chars, may truncate in SERP`);
    if (t.length < 20) fail(name, `title suspiciously short (${t.length})`);
    if (titles.has(t)) fail(name, `duplicate title, shared with ${titles.get(t)}`);
    titles.set(t, name);
  }

  // --- description ---
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if (!desc) fail(name, 'no meta description');
  else {
    if (desc.length > 165) note(name, `description ${desc.length} chars, may truncate`);
    if (desc.length < 70) note(name, `description only ${desc.length} chars`);
    if (descs.has(desc)) fail(name, `duplicate description, shared with ${descs.get(desc)}`);
    descs.set(desc, name);
  }

  // --- canonical ---
  const canon = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  if (!canon) fail(name, 'no canonical');
  else if (!canon.startsWith(SITE)) fail(name, `canonical not absolute to site: ${canon}`);

  // --- robots ---
  const robots = html.match(/<meta name="robots" content="([^"]*)"/)?.[1];
  if (is404 && !robots?.includes('noindex')) fail(name, '404 is indexable');
  if (!is404 && robots?.includes('noindex')) fail(name, 'page is noindexed');

  // --- OG ---
  for (const p of ['og:title', 'og:description', 'og:url', 'og:image']) {
    if (!html.includes(`property="${p}"`)) fail(name, `missing ${p}`);
  }

  // --- h1 ---
  const h1s = [...html.matchAll(/<h1[^>]*>(.*?)<\/h1>/gs)];
  if (h1s.length === 0) fail(name, 'no <h1>');
  if (h1s.length > 1) fail(name, `${h1s.length} <h1> elements`);

  // --- heading order ---
  const heads = [...html.matchAll(/<h([1-4])[^>]*>/g)].map((m) => Number(m[1]));
  for (let i = 1; i < heads.length; i++) {
    if (heads[i] - heads[i - 1] > 1) {
      note(name, `heading jump h${heads[i - 1]} -> h${heads[i]}`);
      break;
    }
  }

  // --- JSON-LD ---
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)];
  if (blocks.length === 0) fail(name, 'no JSON-LD');
  for (const b of blocks) {
    let parsed;
    try {
      parsed = JSON.parse(b[1]);
    } catch (e) {
      fail(name, `JSON-LD does not parse: ${e.message}`);
      continue;
    }
    const graph = parsed['@graph'] ?? [parsed];
    for (const node of graph) {
      if (!node['@type']) fail(name, 'JSON-LD node without @type');
      const types = [].concat(node['@type']);
      if (types.includes('FAQPage')) {
        for (const q of node.mainEntity ?? []) {
          if (!q.acceptedAnswer?.text?.trim()) fail(name, `FAQ "${q.name}" has empty answer`);
          if (/<[a-z]/i.test(q.acceptedAnswer?.text ?? ''))
            fail(name, `FAQ "${q.name}" answer still contains HTML tags`);
        }
      }
      if (types.includes('BreadcrumbList')) {
        (node.itemListElement ?? []).forEach((li, i) => {
          if (li.position !== i + 1) fail(name, 'breadcrumb positions out of order');
          if (!String(li.item ?? '').startsWith(SITE)) fail(name, `breadcrumb item not absolute: ${li.item}`);
        });
      }
    }
  }

  // --- images ---
  for (const img of [...html.matchAll(/<img\b[^>]*>/g)]) {
    if (!/\balt=/.test(img[0])) fail(name, `<img> without alt: ${img[0].slice(0, 70)}`);
  }

  // --- internal links resolve ---
  // Anything with a file extension is a build asset; check it exists on disk
  // rather than against the page route set.
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const href = m[1];
    if (/\.[a-z0-9]+$/i.test(href)) {
      if (!assetPaths.has(href)) fail(name, `asset missing from dist: ${href}`);
      continue;
    }
    if (!pagePaths.has(href)) fail(name, `internal link 404s: ${href}`);
  }

  // --- copy rules that survive into markup ---
  // Copy rules apply to prose. aria-hidden subtrees are data glyphs (the grid's
  // "—" for not-ranking), so they are stripped before the ban checks run.
  const text = html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<(\w+)[^>]*aria-hidden="true"[^>]*>[\s\S]*?<\/\1>/g, ' ')
    .replace(/<[^>]+>/g, ' ');
  const banned = [
    'leverage', 'delve', 'seamless', 'cutting-edge', 'game changer', 'robust',
    'streamline', 'empower', 'utilize', 'best-in-class', 'transformative',
    'supercharge', 'harness', 'elevate your', 'unlock the power',
  ];
  for (const w of banned) {
    if (new RegExp(`\\b${w.replace(/[-\s]/g, '[-\\s]')}\\b`, 'i').test(text)) {
      note(name, `banned word present: "${w}"`);
    }
  }
  const em = (text.match(/—/g) || []).length;
  if (em > 0) note(name, `${em} em dash(es) in body text`);
}

// --- sitemap ---
const smIndex = await readFile(join(dist, 'sitemap-index.xml'), 'utf8').catch(() => null);
if (!smIndex) fail('sitemap-index.xml', 'missing');
const sm0 = await readFile(join(dist, 'sitemap-0.xml'), 'utf8').catch(() => null);
if (sm0) {
  const locs = [...sm0.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1]);
  const expected = [...pagePaths].filter((p) => p !== '/404');
  for (const p of expected) {
    if (!locs.includes(SITE + p)) fail('sitemap-0.xml', `missing page: ${p}`);
  }
  if (locs.some((l) => l.includes('/404'))) fail('sitemap-0.xml', '404 is listed');
}

console.log(`\nChecked ${files.length} pages.\n`);
if (problems.length) {
  console.log(`FAILURES (${problems.length}):`);
  problems.forEach((p) => console.log('  x ' + p));
} else {
  console.log('No failures.');
}
if (notes.length) {
  console.log(`\nNotes (${notes.length}):`);
  notes.forEach((n) => console.log('  - ' + n));
}
process.exit(problems.length ? 1 : 0);
