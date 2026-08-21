import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.nextscaledigital.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you'),
      changefreq: 'monthly',
      lastmod: new Date(),
    }),
  ],
});
