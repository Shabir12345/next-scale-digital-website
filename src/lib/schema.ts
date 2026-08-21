import { site } from '../data/site';

export type FaqItem = { q: string; a: string };

/** Strips tags so the JSON-LD answer matches the visible text, not the markup. */
const plain = (html: string) =>
  html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

export function faqSchema(items: FaqItem[], pageUrl: string) {
  return {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: plain(i.a) },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return {
    '@type': 'Service',
    '@id': `${opts.url}#service`,
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: opts.url,
    provider: { '@id': `${site.url}/#organization` },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: site.geo.lat,
        longitude: site.geo.lng,
      },
      geoRadius: site.serviceRadiusKm * 1000,
    },
  };
}
