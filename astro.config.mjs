import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://skalaconvert.com',
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false }
  },
  integrations: [
    sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', es: 'es' } } })
  ],
  build: { inlineStylesheets: 'auto' }
});
