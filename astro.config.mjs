// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://bataibato.github.io',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'ne',
    locales: ['ne', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
