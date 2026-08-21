/* Body content for the four service pages.
   Kept as data rather than four near-identical .astro files so the page shell,
   schema and internal linking stay identical across all of them. */

export type ServiceContent = {
  slug: string;
  serviceType: string;
  intro: string;
  problem: { heading: string; body: string[] };
  includes: { title: string; detail: string }[];
  measured: { metric: string; note: string }[];
  notFor: string;
  faqs: { q: string; a: string }[];
};

export const serviceContent: Record<string, ServiceContent> = {
  'local-seo': {
    slug: 'local-seo',
    serviceType: 'Local search engine optimization',
    intro:
      'Three businesses appear in the map results above the organic listings. For a service business in the GTA, those three slots take most of the calls. Everything below is about getting into them, and being able to prove whether you are.',
    problem: {
      heading: 'One rank check tells you almost nothing',
      body: [
        'Most reporting shows a single position for a keyword, checked from one point in the city. That number is close to meaningless for a business whose customers are spread across a service area.',
        'A shop can hold the top map slot when the search happens two streets away and be absent from the same search four kilometres north. The average of those is a number nobody can act on. We check from a grid of points across the area you actually serve, and report where you hold and where you disappear.',
        'The other half of the problem is that the map pack is not won on your website. It is won on the Google Business Profile, the categories on it, the services listed under it, the review flow, and whether your name, address and phone match everywhere else on the internet. Those are the levers, and most of them are free.',
      ],
    },
    includes: [
      {
        title: 'Grid rank audit',
        detail:
          'Your position for each target keyword measured from multiple points across the service area, repeated monthly so movement is visible rather than asserted.',
      },
      {
        title: 'Google Business Profile build-out',
        detail:
          'Primary and secondary categories, the full service list, service area, hours, attributes, description and photo cadence. This moves local visibility more than anything else on the account, and it is usually half-finished.',
      },
      {
        title: 'Citation and NAP cleanup',
        detail:
          'Name, address and phone reconciled across the directories that Google cross-references. Mismatches here quietly cap what the profile can do.',
      },
      {
        title: 'Review flow',
        detail:
          'A repeatable way to ask, plus owner responses written and posted on the backlog. Review count and recency both feed local ranking.',
      },
      {
        title: 'Location and service pages',
        detail:
          'Pages that name the suburb and the service together, published in waves and confirmed indexed in Search Console before the next wave goes out.',
      },
      {
        title: 'Local schema',
        detail:
          'LocalBusiness or the correct subtype, service markup, geo data and breadcrumbs, so the entity Google builds for you matches the business you actually run.',
      },
    ],
    measured: [
      { metric: 'Grid positions held', note: 'How many points on the map show you in the top three' },
      { metric: 'Profile calls and direction requests', note: 'Straight from the Business Profile' },
      { metric: 'Impressions and clicks by query', note: 'From Search Console, split by page' },
      { metric: 'Review count and average', note: 'Tracked monthly against the two nearest competitors' },
    ],
    notFor:
      'If you sell nationally and have no physical service area, this is the wrong service. Say so and we will point you at the organic and paid work instead.',
    faqs: [
      {
        q: 'Why does my ranking change depending on where I search from?',
        a: '<p>Google personalises local results by the searcher&rsquo;s location. The map pack it shows someone standing in Vaughan is drawn from a different candidate set than the one it shows someone in Scarborough. Proximity is one of the three main local ranking factors, alongside relevance and prominence.</p><p>This is why a single rank check is misleading, and why a grid is the only honest way to report local position.</p>',
      },
      {
        q: 'Can you guarantee the map pack?',
        a: '<p>No, and neither can anyone else. Proximity is a factor nobody controls: a competitor physically closer to the searcher has an advantage you cannot buy. What is controllable is relevance and prominence, which is where the work goes.</p>',
      },
      {
        q: 'How much of this needs a new website?',
        a: '<p>Less than most agencies will tell you. Profile work, citations and reviews run independently of the site. The site matters for the service and location pages and for the schema, and those can usually be added to what you already have.</p>',
      },
    ],
  },

  'web-design': {
    slug: 'web-design',
    serviceType: 'Website design and development',
    intro:
      'A website for a service business has one job: turn someone who is already looking for you into a phone call. Most of the sites we audit fail at that for reasons that have nothing to do with how they look.',
    problem: {
      heading: 'The three things that break a service website',
      body: [
        'The phone number is not a link. Someone on a phone with a flat tire has to memorise ten digits and switch apps to dial. A tel: link is one line of HTML and it changes the conversion rate of the whole site.',
        'The pages never name a place. A page titled "Our Services" cannot rank for anything, because it matches no search anyone performs. A page about brake repair in Newmarket can.',
        'The site is slow and the fault is usually a script. A page carrying a CSS framework loaded from a CDN, four animation libraries and a chart library is downloading a megabyte before it renders a word. On a phone on mobile data, in a parking lot, that is the whole visit.',
      ],
    },
    includes: [
      {
        title: 'Static build',
        detail:
          'Every page rendered to HTML ahead of time. Nothing waits on a server or a database when a visitor arrives. Hosting is cheap and there is nothing to patch.',
      },
      {
        title: 'A page per service, per area',
        detail:
          'Built out in waves rather than published all at once, so each set gets indexed before the next depends on it.',
      },
      {
        title: 'Tracked, tappable contact',
        detail:
          'Tel links, a form that actually delivers, and conversion tracking wired to both before launch instead of after.',
      },
      {
        title: 'Schema from the first build',
        detail:
          'Organization, LocalBusiness, Service, FAQ and breadcrumbs, generated from the same data the page renders from so they cannot drift.',
      },
      {
        title: 'Titles and descriptions written, not generated',
        detail:
          'Every page gets its own, sized to what Google will actually display.',
      },
      {
        title: 'Handover in your name',
        detail:
          'The repository, the domain, the analytics and the Search Console property are yours. If we part ways you keep all of it.',
      },
    ],
    measured: [
      { metric: 'Pages indexed', note: 'Confirmed in Search Console, not assumed' },
      { metric: 'Core Web Vitals', note: 'Field data from real visitors, not a lab score' },
      { metric: 'Calls and form submissions', note: 'Split by source and landing page' },
      { metric: 'Time to first byte', note: 'Static hosting should sit well under half a second' },
    ],
    notFor:
      'If you need a booking engine, a customer portal or live inventory, that is an application rather than a marketing site. We build those too, but they are scoped separately.',
    faqs: [
      {
        q: 'Do you use WordPress?',
        a: '<p>Not by default. Most service business sites do not need a database, a plugin stack or a monthly patch cycle. A static site is faster, cheaper to host and has almost no attack surface.</p><p>If your team needs to publish frequently we wire in a content editor. If you are already on WordPress and it is working, we improve it rather than replace it.</p>',
      },
      {
        q: 'How long does a build take?',
        a: '<p>A core site of eight to twelve pages usually takes three to five weeks from content sign-off. The variable is almost never the build. It is how quickly photos, prices and service details come back.</p>',
      },
      {
        q: 'Who owns the site when we finish?',
        a: '<p>You do. The code sits in a repository in your name, the domain stays on your registrar, and hosting is in your account. There is no proprietary platform to be locked into.</p>',
      },
    ],
  },

  'google-ads': {
    slug: 'google-ads',
    serviceType: 'Pay-per-click advertising management',
    intro:
      'Paid search is the only channel that can produce a call this afternoon. It is also the fastest way to spend four thousand dollars on nothing. The difference is whether the arithmetic was done before the campaign went live.',
    problem: {
      heading: 'Most accounts have never had the break-even calculated',
      body: [
        'Before a campaign launches there is one number that decides whether it can work: the share of leads you have to close for the ads to pay for themselves. It comes from your average ticket, your margin and the cost per click in your category. It takes about ten minutes to work out.',
        'That number varies enormously by service. A repair with a four-hundred-dollar average ticket might break even closing four calls in ten. A low-margin service in the same account, bidding on clicks that cost the same, might need to close nearly all of them. One of those is a business. The other is a donation.',
        'When it has not been calculated, the account gets judged on cost per click and click-through rate, which are the two metrics least connected to whether money was made.',
      ],
    },
    includes: [
      {
        title: 'Break-even model before launch',
        detail:
          'Built from your ticket sizes and margins, with the cost per click pulled for your actual keywords in your actual city. Services that cannot clear it do not get a campaign.',
      },
      {
        title: 'Conversion tracking that counts calls',
        detail:
          'Call tracking, form tracking and, where it matters, call duration thresholds so a thirty-second wrong number is not recorded as a lead.',
      },
      {
        title: 'A hard monthly spend cap',
        detail:
          'Agreed in writing and set in the account. No surprise months.',
      },
      {
        title: 'Negative keyword discipline',
        detail:
          'Reviewed weekly at the start. Most wasted spend in a new account goes to searches you would never want to appear for.',
      },
      {
        title: 'Landing pages that match the ad',
        detail:
          'A click on a winter tire ad lands on winter tires, not the homepage. This is usually the cheapest improvement available to an existing account.',
      },
      {
        title: 'Location targeting by performance',
        detail:
          'Bids adjusted by the areas that actually convert rather than a uniform radius.',
      },
    ],
    measured: [
      { metric: 'Cost per booked job', note: 'Not cost per click, not cost per lead' },
      { metric: 'Close rate against break-even', note: 'The number that decides whether to continue' },
      { metric: 'Search terms report', note: 'What people actually typed, reviewed with you' },
      { metric: 'Spend against cap', note: 'Reported every month whether or not it is asked for' },
    ],
    notFor:
      'If your category has a cost per click above thirty dollars and a ticket under a hundred, paid search is unlikely to clear break-even. We will show you the maths and recommend against it.',
    faqs: [
      {
        q: 'What should we budget to start?',
        a: '<p>Enough to gather data inside a month, which in most GTA service categories means the cost of roughly thirty to fifty clicks a week. At a fifteen dollar cost per click that is around two to three thousand a month. Below that the account takes so long to learn that you pay for the education twice.</p><p>If that is out of range, local SEO is the better first investment.</p>',
      },
      {
        q: 'Do you charge a percentage of spend?',
        a: '<p>No. A percentage of spend pays the agency more for spending more, which is the wrong incentive. Management is a flat monthly fee agreed up front.</p>',
      },
      {
        q: 'Can we run ads and SEO at the same time?',
        a: '<p>Yes, and the ads data makes the SEO better. The search terms report shows you which queries actually convert, months before organic data would. We use it to decide which pages to build.</p>',
      },
    ],
  },

  'ai-voice-agents': {
    slug: 'ai-voice-agents',
    serviceType: 'AI voice and chat agent development',
    intro:
      'The marketing gets the phone to ring. What happens on the twelfth ring decides whether it was worth paying for. For businesses where the calls arrive at inconvenient hours, an AI agent picks up, works out what the caller needs, and writes it down.',
    problem: {
      heading: 'A missed call is a lost job, not a callback',
      body: [
        'In emergency service categories the caller is not leaving a voicemail. They are dialling the next result. The window between a tow truck search and a booked job is often under two minutes, and it closes whether or not anyone was free to answer.',
        'Answering services solve the pickup and create a new problem: a human reading a script who cannot answer a question about your service area, your rates, or whether you handle that vehicle. The message arrives an hour later with half the details missing.',
        'An agent built on your business can answer the questions, qualify the job, take the address, and drop a structured record into wherever your work already lives.',
      ],
    },
    includes: [
      {
        title: 'Discovery on your actual calls',
        detail:
          'The agent is built from how your business really answers the phone, including what it declines. Generic scripts are the reason most of these fail.',
      },
      {
        title: 'Qualification and intake',
        detail:
          'Service type, location, vehicle or property details, urgency and callback number, captured in a structure rather than a transcript.',
      },
      {
        title: 'Handoff rules',
        detail:
          'Defined conditions where the agent stops and routes to a person. Knowing what it should not attempt matters more than what it can.',
      },
      {
        title: 'CRM and calendar write-back',
        detail:
          'The record lands where you already work, not in a separate dashboard nobody opens.',
      },
      {
        title: 'After-hours and overflow modes',
        detail:
          'Answer everything, or answer only what rings out. Both are configurations rather than separate builds.',
      },
      {
        title: 'Transcripts and review',
        detail:
          'Every call recorded, transcribed and reviewable, so the agent can be corrected on the cases it gets wrong.',
      },
    ],
    measured: [
      { metric: 'Calls answered outside business hours', note: 'The baseline is whatever went to voicemail before' },
      { metric: 'Qualified intakes captured', note: 'Complete records, not partial ones' },
      { metric: 'Handoff rate', note: 'How often a human was needed, and for what' },
      { metric: 'Booked jobs from agent calls', note: 'Traced through to the work order' },
    ],
    notFor:
      'If your call volume is low and someone always picks up, this will not pay for itself. It earns its keep where calls are missed, not where they are answered.',
    faqs: [
      {
        q: 'Will callers know it is not a person?',
        a: '<p>They should, and the agent says so. Trying to pass an AI off as a human is the fastest way to lose the caller when it eventually slips. Stating it up front and then being useful is what keeps them on the line.</p>',
      },
      {
        q: 'What happens when it cannot answer something?',
        a: '<p>It says it does not know, takes the details and routes to a person. The handoff rules are defined during the build, and the failure case is a normal callback rather than a wrong answer given confidently.</p>',
      },
      {
        q: 'Does this replace our receptionist?',
        a: '<p>Not in the businesses we have built it for. It covers the hours nobody is at the desk, and the overflow when everyone is on another line. Those are the calls that were being lost anyway.</p>',
      },
    ],
  },
};
