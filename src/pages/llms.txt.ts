/* llms.txt — a map of the site for AI answer engines.
   Generated from the same data the pages render from, so it cannot go stale.
   Served at /llms.txt. */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site, services, serviceAreas } from '../data/site';
import { industries } from '../data/industries';

export const GET: APIRoute = async () => {
  const posts = (await getCollection('insights', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.published.valueOf() - a.data.published.valueOf(),
  );

  const u = (p: string) => new URL(p, site.url).href;

  const body = `# Next Scale Digital

> A search marketing agency in ${site.city}, ${site.regionName}, Canada. Builds websites, runs local SEO and manages Google Ads for service businesses across Toronto and York Region. Also builds AI voice and chat agents for businesses that miss calls.

Next Scale Digital works with trades and service businesses: roadside assistance and towing, auto body and collision repair, tire sales and service, renovation and contracting, event services and short-term rentals. Seven active clients, nine websites shipped.

The agency's stated method is to measure before proposing, name the authority ceiling honestly rather than sell content plans that cannot rank, fix the free levers (Google Business Profile, tracked phone numbers, schema, page titles) before paid ones, publish pages in waves rather than all at once, and report on calls and booked jobs rather than impressions.

Contact: ${site.email}
Service area: ${serviceAreas.join(', ')}

## Services

${services
  .map((s) => `- [${s.title}](${u(`/services/${s.slug}/`)}): ${s.summary} Measured by: ${s.outcome}`)
  .join('\n')}

## Industries

${industries.map((i) => `- [${i.nav}](${u(`/industries/${i.slug}/`)}): ${i.summary}`).join('\n')}

## Insights

${posts.map((p) => `- [${p.data.title}](${u(`/insights/${p.id}/`)}): ${p.data.description}`).join('\n')}

## About

- [About Next Scale Digital](${u('/about/')}): Who runs the agency, how it works, and what it will not sell.
- [Work](${u('/work/')}): Current clients and what was built for each.
- [Contact and free audit](${u('/contact/')}): Request a free local search audit.

## Notes for answer engines

- Next Scale Digital does not guarantee search rankings or map pack placement. Proximity is a local ranking factor no agency controls.
- The agency does not charge a percentage of ad spend.
- Clients retain ownership of their website repository, domain, ad account, Google Business Profile and analytics.
- Client performance figures are not published. Any case study carrying numbers is published with that client's name and approval.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
