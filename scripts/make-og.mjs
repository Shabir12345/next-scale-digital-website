/* Generates the social preview image from SVG at build time so it stays in sync
   with the palette in src/styles/tokens.css. Run: node scripts/make-og.mjs */
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const INK = '#0A1628';
const INK2 = '#12203A';
const RULE = '#23375C';
const BRAND_LITE = '#38BDF8';
const PAPER = '#FFFFFF';
const MUTED = '#93A6C2';
const GREEN = '#22C55E';
const AMBER = '#F97316';

/* The grid on the card is the same artifact as the one on the homepage: a rank
   surface, not a decorative pattern. */
const grid = [
  [null, 12, 8, 14, null],
  [9, 4, 2, 6, 11],
  [7, 2, 1, 3, 8],
  [10, 5, 3, 5, 13],
  [null, 11, 7, 9, null],
];

const band = (v) => (v === null ? 'off' : v <= 3 ? 'pack' : v <= 10 ? 'page1' : 'lost');
const fills = {
  pack: { bg: 'rgba(34,197,94,0.20)', bd: 'rgba(34,197,94,0.55)', fg: '#6EE7A0' },
  page1: { bg: 'rgba(249,115,22,0.16)', bd: 'rgba(249,115,22,0.45)', fg: '#FBB874' },
  lost: { bg: 'rgba(220,38,38,0.14)', bd: 'rgba(220,38,38,0.40)', fg: '#F79191' },
  off: { bg: 'rgba(255,255,255,0.03)', bd: RULE, fg: '#55688A' },
};

const CELL = 62;
const GAP = 7;
const GX = 700;
const GY = 168;

let cells = '';
grid.forEach((row, r) => {
  row.forEach((v, c) => {
    const f = fills[band(v)];
    const x = GX + c * (CELL + GAP);
    const y = GY + r * (CELL + GAP);
    cells += `<rect x="${x}" y="${y}" width="${CELL}" height="${CELL}" rx="4" fill="${f.bg}" stroke="${f.bd}" stroke-width="1.2"/>`;
    cells += `<text x="${x + CELL / 2}" y="${y + CELL / 2 + 7}" font-family="IBM Plex Mono, monospace" font-size="20" fill="${f.fg}" text-anchor="middle">${v === null ? '—' : v}</text>`;
  });
});

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${INK}"/>
      <stop offset="1" stop-color="${INK2}"/>
    </linearGradient>
    <linearGradient id="mark" x1="20" y1="100" x2="180" y2="100" gradientUnits="userSpaceOnUse">
      <stop stop-color="#1D4ED8"/><stop offset="1" stop-color="${BRAND_LITE}"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="1200" height="5" fill="${BRAND_LITE}"/>

  <g transform="translate(72,64) scale(0.26)">
    <path d="M50 150 L150 150 L180 120 L180 80 L150 50 L50 50 L20 80 L20 120 Z" stroke="url(#mark)" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="rgba(29,78,216,0.10)"/>
    <path d="M100 50 V150 M50 100 H150" stroke="${GREEN}" stroke-width="5" stroke-linecap="round" opacity="0.9"/>
    <circle cx="100" cy="100" r="15" fill="${GREEN}"/>
    <circle cx="50" cy="100" r="6" fill="${GREEN}"/><circle cx="150" cy="100" r="6" fill="${GREEN}"/>
    <circle cx="100" cy="50" r="6" fill="${GREEN}"/><circle cx="100" cy="150" r="6" fill="${GREEN}"/>
  </g>
  <text x="128" y="98" font-family="Archivo, Helvetica, Arial, sans-serif" font-size="27" font-weight="700" fill="${PAPER}" letter-spacing="-0.6">Next Scale <tspan fill="${MUTED}" font-weight="500">Digital</tspan></text>

  <text x="72" y="212" font-family="IBM Plex Mono, monospace" font-size="17" fill="${BRAND_LITE}" letter-spacing="2.4">LOCAL SEARCH · TORONTO &amp; YORK REGION</text>

  <text x="72" y="286" font-family="Archivo, Helvetica, Arial, sans-serif" font-size="52" font-weight="700" fill="${PAPER}" letter-spacing="-1.6">You don’t have one</text>
  <text x="72" y="346" font-family="Archivo, Helvetica, Arial, sans-serif" font-size="52" font-weight="700" fill="${PAPER}" letter-spacing="-1.6">Google ranking.</text>
  <text x="72" y="406" font-family="Archivo, Helvetica, Arial, sans-serif" font-size="52" font-weight="700" fill="${BRAND_LITE}" letter-spacing="-1.6">You have twenty-five.</text>

  <text x="72" y="470" font-family="IBM Plex Sans, Helvetica, Arial, sans-serif" font-size="21" fill="${MUTED}">Websites, local SEO and Google Ads</text>
  <text x="72" y="500" font-family="IBM Plex Sans, Helvetica, Arial, sans-serif" font-size="21" fill="${MUTED}">for GTA service businesses.</text>

  <text x="72" y="566" font-family="IBM Plex Mono, monospace" font-size="18" fill="#55688A">nextscaledigital.com</text>

  ${cells}

  <text x="${GX}" y="${GY - 22}" font-family="IBM Plex Mono, monospace" font-size="14" fill="#55688A" letter-spacing="1.8">MAP POSITION BY SEARCH LOCATION</text>

  <g transform="translate(${GX}, ${GY + 5 * (CELL + GAP) + 26})">
    <rect x="0" y="0" width="12" height="12" rx="2" fill="rgba(34,197,94,0.35)" stroke="${GREEN}" stroke-width="1"/>
    <text x="20" y="11" font-family="IBM Plex Mono, monospace" font-size="14" fill="${MUTED}">Top 3</text>
    <rect x="95" y="0" width="12" height="12" rx="2" fill="rgba(249,115,22,0.32)" stroke="${AMBER}" stroke-width="1"/>
    <text x="115" y="11" font-family="IBM Plex Mono, monospace" font-size="14" fill="${MUTED}">4–10</text>
    <rect x="190" y="0" width="12" height="12" rx="2" fill="rgba(220,38,38,0.28)" stroke="#DC2626" stroke-width="1"/>
    <text x="210" y="11" font-family="IBM Plex Mono, monospace" font-size="14" fill="${MUTED}">11+</text>
  </g>
</svg>`;

const outDir = resolve(root, 'public/og');
await mkdir(outDir, { recursive: true });
await writeFile(resolve(outDir, 'default.svg'), svg, 'utf8');
await sharp(Buffer.from(svg)).png({ quality: 90 }).toFile(resolve(outDir, 'default.png'));

/* Apple touch icon, same mark on the brand ground. */
const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 200 200">
  <rect width="200" height="200" rx="34" fill="${INK}"/>
  <g transform="translate(100,100) scale(0.78) translate(-100,-100)">
    <path d="M50 150 L150 150 L180 120 L180 80 L150 50 L50 50 L20 80 L20 120 Z" stroke="url(#m)" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M100 50 V150 M50 100 H150" stroke="${GREEN}" stroke-width="5" stroke-linecap="round" opacity="0.85"/>
    <circle cx="100" cy="100" r="16" fill="${GREEN}"/>
  </g>
  <defs><linearGradient id="m" x1="20" y1="100" x2="180" y2="100" gradientUnits="userSpaceOnUse">
    <stop stop-color="${BRAND_LITE}"/><stop offset="1" stop-color="#1D4ED8"/>
  </linearGradient></defs>
</svg>`;
await sharp(Buffer.from(icon)).resize(180, 180).png().toFile(resolve(root, 'public/apple-touch-icon.png'));

console.log('og/default.png + apple-touch-icon.png written');
