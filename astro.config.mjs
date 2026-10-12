// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE_URL } from './src/data/site-url.mjs';

// BASE_PATH / SITE_URL env vars let the same code deploy to a sub-path (e.g. GitHub Pages).
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: process.env.SITE_URL || SITE_URL,
  base,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en-GB', es: 'es-ES' } },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  // Images are pre-sized in public/images, so no sharp dependency is needed at build time.
  image: { service: passthroughImageService() },
  vite: { plugins: [tailwindcss()] },
});
