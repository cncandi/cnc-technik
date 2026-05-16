import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.PUBLIC_SITE_URL ?? process.env.URL ?? 'https://cncandi.github.io';
const base = process.env.PUBLIC_BASE_PATH ?? (process.env.NETLIFY ? '/' : '/cnc-technik');

export default defineConfig({
  site,
  base,
  output: 'static',
  integrations: [sitemap()],
});
