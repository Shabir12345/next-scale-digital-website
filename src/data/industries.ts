/* Industry pages exist because the head terms are unreachable.
   nextscaledigital.com has 17 referring domains against 200-5,768 for the agencies
   holding page one on "seo toronto". Vertical long-tail is where a site at this
   authority can actually rank, and it is also where NSD has real delivery history.

   Every claim on these pages has to be true of work NSD has actually done. */

export type Industry = {
  slug: string;
  nav: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  /** The one thing that makes search behave differently here */
  thesis: string;
  behaviour: { label: string; value: string }[];
  priorities: { title: string; detail: string }[];
  mistakes: string[];
  faqs: { q: string; a: string }[];
};

export const industries: Industry[] = [
  {
    slug: 'roadside-assistance',
    nav: 'Roadside assistance & towing',
    h1: 'Marketing for roadside assistance and towing companies',
    metaTitle: 'Marketing for Towing & Roadside Companies | Next Scale Digital',
    metaDescription:
      'Local SEO, websites and Google Ads for GTA towing companies. Built around emergency search: map pack position, tap-to-call, and answering the 2am call.',
    summary:
      'Emergency search, decided in under a minute, almost entirely on a phone.',
    thesis:
      'Nobody comparison-shops a tow truck. The customer is standing on a shoulder, they open Google, and they call one of the first three results. Everything about the marketing follows from that.',
    behaviour: [
      { label: 'Device', value: 'Overwhelmingly mobile, often on cellular data' },
      { label: 'Decision window', value: 'Under two minutes from search to call' },
      { label: 'Where the click goes', value: 'The map pack, not the organic results' },
      { label: 'Peak hours', value: 'Nights, weekends, and the first hard freeze' },
      { label: 'Repeat business', value: 'Low direct, high through fleet and insurance relationships' },
    ],
    priorities: [
      {
        title: 'The map pack is the entire channel',
        detail:
          'Organic position four is worth very little here, because the caller never scrolls that far. Work that improves the Google Business Profile outranks work that improves the website, and it is the first place the budget should go.',
      },
      {
        title: 'Tap-to-call above the fold, on every page',
        detail:
          'A phone number rendered as plain text costs you the call. So does a number that sits below a hero image on a slow-loading page. This is usually the single highest-return fix on a towing site.',
      },
      {
        title: 'Speed on a bad connection',
        detail:
          'The visit happens on the roadside, not on office wifi. A page carrying three animation libraries does not render before the customer gives up and dials the next result.',
      },
      {
        title: 'Service area pages that name real places',
        detail:
          'Highway names, exits and suburbs, because that is what people type. A single page listing thirty cities in a footer does not rank for any of them.',
      },
      {
        title: 'Answering after hours',
        detail:
          'The busiest hours are the ones nobody is at a desk. A missed call at 2am is not a callback opportunity, it is a job that went to a competitor. This is where an AI voice agent earns its cost.',
      },
    ],
    mistakes: [
      'Bidding on broad "towing" terms with no location targeting, which spends the budget on people three hundred kilometres away.',
      'Publishing forty city pages in one week, none of which get indexed, instead of six that do.',
      'Measuring the account on impressions when the only number that matters is answered calls.',
      'Leaving the Google Business Profile on one category when the business does lockouts, boosts, fuel delivery and winching too.',
    ],
    faqs: [
      {
        q: 'We serve the whole GTA. Should we list every city?',
        a: '<p>List the ones you genuinely reach quickly. A service area stretched across the entire region dilutes the profile and can push you out of the pack in the places you actually dominate. Trim on deliverability, never on ambition.</p>',
      },
      {
        q: 'Is Google Ads worth it for towing?',
        a: '<p>Often yes, because the intent is immediate and the ticket is decent. The cost per click is high, so the break-even needs calculating against your average job value before launch rather than after the first invoice.</p>',
      },
      {
        q: 'How do we compete with the big dispatch networks?',
        a: '<p>Not on the head terms. They are national, well linked, and they buy the broad keywords. Local operators win on proximity in the map pack and on the specific searches the networks do not bother with, like a highway name plus a service.</p>',
      },
    ],
  },

  {
    slug: 'auto-body-collision',
    nav: 'Auto body & collision',
    h1: 'Marketing for auto body and collision repair shops',
    metaTitle: 'SEO & Google Ads for Auto Body Shops | GTA | Next Scale Digital',
    metaDescription:
      'Local SEO, websites and Google Ads for GTA collision repair shops. Built around a high-ticket, insurance-driven decision that takes days, not minutes.',
    summary:
      'High ticket, insurance-mediated, and decided over days rather than seconds.',
    thesis:
      'A collision customer is shaken, dealing with an insurer, and choosing between shops over several days. They are not looking for the closest option. They are looking for the one that seems least likely to make the next two weeks worse.',
    behaviour: [
      { label: 'Ticket size', value: 'High, frequently four figures' },
      { label: 'Decision window', value: 'Two to seven days' },
      { label: 'Third party in the decision', value: 'The insurer, often steering' },
      { label: 'What gets checked', value: 'Reviews first, photos second, price rarely' },
      { label: 'Search pattern', value: 'Brand plus service, and "near me" with real comparison' },
    ],
    priorities: [
      {
        title: 'Reviews carry more weight here than anywhere else',
        detail:
          'The customer is choosing on trust with an insurer in the background. Review count, recency and owner responses move both the ranking and the decision. A shop with forty recent reviews beats a shop with a better website and nine.',
      },
      {
        title: 'Photograph the work',
        detail:
          'Before and after galleries do the job that copy cannot. They also give the Google Business Profile something to post, which is a ranking signal most shops leave idle.',
      },
      {
        title: 'Name the insurers and the brands you work with',
        detail:
          'People search for their insurer and their car make alongside the service. Those pages are specific, low competition, and they match how the decision is actually made.',
      },
      {
        title: 'Separate the services that pay from the ones that do not',
        detail:
          'A shop that does collision, detailing, paint correction and glass should not run one campaign. The break-even for a full respray and a headlight restoration are not remotely the same number.',
      },
    ],
    mistakes: [
      'One page called "Services" covering collision, paint, glass and detailing, ranking for none of them.',
      'Running ads for low-margin add-on services at the same cost per click as the high-ticket work.',
      'Never asking for reviews, in the one category where reviews decide the sale.',
      'A gallery of stock photos instead of the shop\'s own work.',
    ],
    faqs: [
      {
        q: 'Insurers send us most of our work. Is search still worth it?',
        a: '<p>The direct-to-consumer share is where the margin is, because there is no steering and no negotiated rate. Search is how you reach it. Shops relying entirely on insurer referral have no control over volume when the referrals slow.</p>',
      },
      {
        q: 'How many reviews do we need?',
        a: '<p>More than the shops ranking above you, and recent. Absolute count matters less than the gap and the freshness. A steady handful every month beats forty collected in one push two years ago.</p>',
      },
    ],
  },

  {
    slug: 'tire-shops',
    nav: 'Tire sales & service',
    h1: 'Marketing for tire shops and mobile tire services',
    metaTitle: 'SEO & Marketing for Tire Shops | GTA | Next Scale Digital',
    metaDescription:
      'Local SEO, websites and Google Ads for GTA tire shops and mobile tire services. Built around a category with two sharp seasonal peaks you can plan against.',
    summary:
      'Two sharp peaks a year, and a demand curve you can see coming months ahead.',
    thesis:
      'Tire demand is not steady and it is not unpredictable. It spikes on the first cold snap and again in spring, and the size of those spikes is measurable in advance. A shop that starts marketing when the phone gets quiet has already missed the season.',
    behaviour: [
      { label: 'Seasonality', value: 'Two peaks, roughly November and April' },
      { label: 'Peak volume', value: 'Changeover terms multiply several times over in season' },
      { label: 'Decision window', value: 'Same day to a week' },
      { label: 'Price sensitivity', value: 'High on the tire, low on the service' },
      { label: 'Competitive pressure', value: 'Dealerships, chains and mobile operators in the same pack' },
    ],
    priorities: [
      {
        title: 'Build the seasonal page before the season',
        detail:
          'A winter changeover page published in November is competing from a standing start. Published in August, it has time to be indexed and to gain position before the demand arrives.',
      },
      {
        title: 'Publish the price',
        detail:
          'Per-wheel and per-set pricing on the page filters out the calls that were never going to book and wins the ones comparing three shops. In a price-transparent category, hiding it costs more than it protects.',
      },
      {
        title: 'Storage is the retention product',
        detail:
          'A customer who stores tires with you returns twice a year without any marketing spend. It deserves its own page and its own place in the ads.',
      },
      {
        title: 'Mobile service is a different search',
        detail:
          'If you go to the customer, that is not the same keyword as a shop visit and it should not share a page. The intent, the price and the competitor set all differ.',
      },
    ],
    mistakes: [
      'Turning ads on in the second week of November, after the peak has started and the cost per click has doubled.',
      'A single page covering sales, changeover, storage, repair and balancing.',
      'Ignoring the spring peak entirely because the winter one felt like the whole year.',
      'Competing with the chains on the tire price instead of on service availability and turnaround.',
    ],
    faqs: [
      {
        q: 'When should we start on the winter season?',
        a: '<p>Content and pages by late summer, so there is time to index and gain position. Paid search closer in, because the demand curve is steep and there is no value in bidding into an empty month.</p>',
      },
      {
        q: 'Our prices are higher than the chains. Should we still publish them?',
        a: '<p>Yes, alongside what the price includes. The customer comparing three shops finds the number one way or another. Publishing it with the turnaround time and the warranty attached is a better outcome than making them call to find out.</p>',
      },
    ],
  },

  {
    slug: 'renovation-contractors',
    nav: 'Renovation & contracting',
    h1: 'Marketing for renovation and contracting businesses',
    metaTitle: 'SEO for Renovation Contractors in the GTA | Next Scale Digital',
    metaDescription:
      'Local SEO, websites and Google Ads for GTA renovation contractors. Built around a long, trust-led decision where the portfolio does most of the selling.',
    summary:
      'Long consideration, high ticket, and the portfolio does most of the selling.',
    thesis:
      'Nobody hires a contractor from a headline. They hire from photographs of finished work in houses that look like theirs, plus enough evidence that the project will not go sideways. The website is a portfolio with search attached, not a brochure.',
    behaviour: [
      { label: 'Decision window', value: 'Four to twelve weeks, sometimes longer' },
      { label: 'Ticket size', value: 'High, and highly variable by project type' },
      { label: 'Primary evidence', value: 'Photographs of completed work' },
      { label: 'Referral share', value: 'Substantial, which search work should support rather than replace' },
      { label: 'Search pattern', value: 'Project type plus neighbourhood, heavy research phase' },
    ],
    priorities: [
      {
        title: 'A page per project type, not per service category',
        detail:
          'Basement finishing, kitchen renovation and bathroom renovation are three different searches with three different budgets. One "Renovations" page competes for none of them.',
      },
      {
        title: 'Real project pages with real photographs',
        detail:
          'A finished project written up with the neighbourhood, the scope and the images ranks for searches a service page cannot reach, and it does the trust work at the same time.',
      },
      {
        title: 'Neighbourhood matters more than city',
        detail:
          'People search by the area they live in. A page about kitchen renovations in a named neighbourhood faces almost no competition and converts far better than a city-level page.',
      },
      {
        title: 'Slow lead, so capture the research visit',
        detail:
          'Most visitors are not ready to call. Something to take away, a real quote form, and a site that loads on the phone they are researching on all matter more than a booking widget.',
      },
    ],
    mistakes: [
      'Stock photography of kitchens the company did not build.',
      'One service page, one contact page, and nothing else.',
      'No project write-ups, in the category where finished work is the strongest available evidence.',
      'Paid search on broad renovation terms with a four-figure ticket and no lead tracking.',
    ],
    faqs: [
      {
        q: 'Most of our work is referral. Do we need SEO?',
        a: '<p>Referrals still check you online before they call, and what they find decides whether the referral converts. Beyond that, referral volume is not something you control. Search is how you add work in the months when the referrals do not come.</p>',
      },
      {
        q: 'How many project pages do we need?',
        a: '<p>Fewer than you think, published steadily. Six well-documented projects with real photographs outperform thirty thin entries. Add one or two a month rather than launching a large batch at once.</p>',
      },
    ],
  },
];

export const industryBySlug = Object.fromEntries(industries.map((i) => [i.slug, i]));
