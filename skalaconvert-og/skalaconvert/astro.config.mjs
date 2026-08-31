import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://skalaconvert.com',
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false }
  },
  integrations: [
    sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', de: 'de-DE' } } })
  ],
  build: { inlineStylesheets: 'auto' }
});
