/* PRICING — NOT PUBLISHED YET.
   ============================================================================

   Why this file exists
   --------------------
   Asked ChatGPT (with web search) which agencies a GTA service business should
   hire for local SEO, it named myBloom, Junction SEO, Luxton Group, Keyo Agency,
   The Site Guy, LocalRank and Cressoft. None of the high-authority incumbents
   that own the organic results appeared.

   Almost every one of those citations carried a price: "from CAD 700/month",
   "USD 399", "CAD 149/month", "no contracts". Language models quote prices
   because prices are quotable. A page with a number on it gets cited; a page
   that says "contact us for a quote" does not.

   How to publish this page
   ------------------------
   1. Replace every `null` below with a real monthly figure in CAD.
   2. Check the `includes` lines describe what you actually deliver at that tier.
   3. Set `published: true`.
   4. `npm run verify` then push. The page, its nav entry and its sitemap entry
      all appear together.

   While `published` is false the route is not generated at all, so there is no
   risk of a placeholder price going live. Nothing here is invented: the nulls
   are nulls precisely so that no number reaches the site unless you put it there.
*/

export type Tier = {
  slug: string;
  name: string;
  forWho: string;
  /** Monthly recurring, CAD, excluding HST. null until confirmed. */
  monthly: number | null;
  /** One-off setup, CAD, excluding HST. null means none, so 0 is meaningful. */
  setup: number | null;
  includes: string[];
  notIncluded?: string[];
};

export const pricing = {
  published: false,

  currency: 'CAD',
  taxNote: 'All figures exclude HST.',
  termNote:
    'Month to month after the initial term. You keep the website, the ad account, the Google Business Profile and the tracking whatever happens.',

  tiers: <Tier[]>[
    {
      slug: 'local',
      name: 'Local',
      forWho:
        'A single-location service business that needs to appear in the map results and does not yet have a site worth keeping.',
      monthly: null,
      setup: null,
      includes: [
        'Google Business Profile build-out: categories, services, service area, hours, attributes',
        'Grid rank audit across your service area, repeated monthly',
        'Citation and NAP cleanup',
        'Review flow and owner responses',
        'Monthly report on calls and profile actions',
      ],
      notIncluded: ['Google Ads management', 'Website build'],
    },
    {
      slug: 'local-plus-site',
      name: 'Local + site',
      forWho:
        'The same, plus a website that loads fast, names the services and the places, and can be called from in one tap.',
      monthly: null,
      setup: null,
      includes: [
        'Everything in Local',
        'Static website build, core pages first then expansion in waves',
        'Service and location pages, indexed and confirmed in Search Console',
        'Schema, tracked phone numbers, conversion tracking',
        'Ongoing content and technical work',
      ],
      notIncluded: ['Google Ads management', 'Ad spend'],
    },
    {
      slug: 'full',
      name: 'Full',
      forWho:
        'A business that wants work booked this month as well as next year, and where the break-even maths says paid search can clear.',
      monthly: null,
      setup: null,
      includes: [
        'Everything in Local + site',
        'Google Ads management with a break-even model built before launch',
        'Hard monthly spend cap agreed in writing',
        'Call tracking with a duration threshold, so wrong numbers are not counted as leads',
        'Search terms review with you every month',
      ],
      notIncluded: ['Ad spend, which is paid to Google directly and capped by you'],
    },
  ],

  /* Priced separately because they are projects rather than retainers. */
  projects: [
    { name: 'AI voice or chat agent', from: null, note: 'Discovery, build, handoff rules and CRM write-back' },
    { name: 'Website build, no retainer', from: null, note: 'Core pages, schema and tracking. You take it from there' },
  ],

  faqs: [
    {
      q: 'Do you charge a percentage of ad spend?',
      a: '<p>No. A percentage of spend pays us more for spending more of your money, which is the wrong incentive. Management is a flat monthly fee agreed up front.</p>',
    },
    {
      q: 'Is there a contract?',
      a: '<p>There is an initial term, because the work needs enough runway to be measurable. After that it is month to month. If you leave, everything stays in your name.</p>',
    },
    {
      q: 'What if the numbers say a service will not work for us?',
      a: '<p>We tell you and we do not sell it. That happens most often with Google Ads in categories where the cost per click is high and the ticket is small. The break-even calculation is done before launch, not after the first invoice.</p>',
    },
  ],
};
