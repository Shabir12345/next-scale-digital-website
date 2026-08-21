import { pricing } from './pricing';

/* Single source of truth for NAP, nav and service metadata.
   Anything that appears in more than one place lives here so schema, footer and
   page copy can never drift apart. */

export const site = {
  name: 'Next Scale Digital',
  legalName: 'Next Scale Digital',
  url: 'https://www.nextscaledigital.com',
  tagline: 'Search marketing for GTA service businesses',
  email: 'hello@nextscaledigital.com',
  // TODO(shabir): no public phone number exists yet. A local business without one
  // loses local-pack calls and cannot complete a Google Business Profile properly.
  // Add it here and it flows into schema, header, footer and the contact page.
  phone: '',
  foundingYear: 2024,
  // TODO(shabir): paste the GA4 measurement ID (G-XXXXXXXXXX) here. Until it is
  // set, no analytics script loads at all and the site ships zero third-party JS
  // beyond the font stylesheet.
  ga4Id: '',
  city: 'Aurora',
  region: 'ON',
  regionName: 'Ontario',
  country: 'CA',
  countryName: 'Canada',
  // Service-area business: no storefront, so no street address is published.
  geo: { lat: 44.0065, lng: -79.4504 },
  serviceRadiusKm: 60,
  social: {
    linkedin: 'https://www.linkedin.com/company/next-scale-digital',
  },
};

export const serviceAreas = [
  'Aurora', 'Newmarket', 'Richmond Hill', 'Markham', 'Vaughan', 'Toronto',
  'North York', 'Scarborough', 'Etobicoke', 'Brampton', 'Mississauga',
  'King City', 'Stouffville', 'Bradford', 'East Gwillimbury',
];

export type Service = {
  slug: string;
  nav: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  outcome: string;
};

export const services: Service[] = [
  {
    slug: 'local-seo',
    nav: 'Local SEO',
    title: 'Local SEO',
    h1: 'Local SEO for GTA service businesses',
    metaTitle: 'Local SEO Services in the GTA | Next Scale Digital',
    metaDescription:
      'Local SEO for Toronto and York Region service businesses. We measure where you rank across your service area, fix the Business Profile, and report the calls.',
    summary:
      'Get into the three-result map pack for the searches that happen near your shop.',
    outcome: 'Map pack position, measured from every corner of your service area.',
  },
  {
    slug: 'web-design',
    nav: 'Websites',
    title: 'Website design and build',
    h1: 'Websites built to be found and to book work',
    metaTitle: 'Website Design for GTA Service Businesses | Next Scale Digital',
    metaDescription:
      'Fast static websites for GTA trades and service businesses. Tracked phone numbers, service pages and schema wired in from the first build.',
    summary:
      'A site that loads fast, says what you do, and puts the phone number where a driver can hit it.',
    outcome: 'A site Google can read and a customer can call from in one tap.',
  },
  {
    slug: 'google-ads',
    nav: 'Google Ads',
    title: 'Google Ads management',
    h1: 'Google Ads with a break-even you can check',
    metaTitle: 'Google Ads Management in the GTA | Next Scale Digital',
    metaDescription:
      'Google Ads for GTA service businesses. Spend capped, conversions tracked to real calls, and a break-even close rate worked out before launch.',
    summary:
      'Paid search where the maths is done in front of you before a dollar is spent.',
    outcome: 'Cost per booked job, not cost per click.',
  },
  {
    slug: 'ai-voice-agents',
    nav: 'AI Voice Agents',
    title: 'AI voice and chat agents',
    h1: 'AI phone agents that answer when you cannot',
    metaTitle: 'AI Voice Agents for Small Business | Next Scale Digital',
    metaDescription:
      'Custom AI phone and chat agents for service businesses. Answers after hours, qualifies the caller, books the job, and writes it into your CRM.',
    summary:
      'The calls that arrive at 11pm get answered, qualified and logged.',
    outcome: 'Missed calls become booked jobs instead of voicemails.',
  },
];

/* Pricing joins the nav only when src/data/pricing.ts has real figures and
   `published: true`, so the nav can never link to a route that was not built. */
const baseNav = [
  { href: '/services/', label: 'Services' },
  { href: '/industries/', label: 'Industries' },
  { href: '/work/', label: 'Work' },
  { href: '/insights/', label: 'Insights' },
  { href: '/about/', label: 'About' },
];

export const nav = pricing.published
  ? [
      ...baseNav.slice(0, 2),
      { href: '/pricing/', label: 'Pricing' },
      ...baseNav.slice(2),
    ]
  : baseNav;

/* Real engagements only. Every entry here is a client NSD has actually shipped for.
   Metrics are deliberately absent: client performance data is not ours to publish. */
export const work = [
  { name: 'iFAST Roadside', sector: 'Roadside assistance', place: 'Toronto', built: 'Website, local SEO, call tracking' },
  { name: 'Golden North Mobile Tires', sector: 'Mobile tire service', place: 'GTA', built: 'Website, local SEO, AI search visibility' },
  { name: 'GTA Autobody', sector: 'Collision repair', place: 'Toronto', built: 'Website, Google Ads' },
  { name: 'Boss Tire', sector: 'Tire sales and service', place: 'Scarborough', built: 'Website rebuild, Google Ads, local SEO' },
  { name: 'Sadozai Renovations', sector: 'Home renovation', place: 'GTA', built: 'Website' },
  { name: 'Nova Vacation Homes', sector: 'Short-term rentals', place: 'GTA', built: 'AI voice agent, booking intake' },
  { name: 'Celebration Finds', sector: 'Event favours and gifts', place: 'Aurora', built: 'E-commerce site, SEO, content' },
];
