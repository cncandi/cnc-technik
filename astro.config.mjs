import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.PUBLIC_SITE_URL ?? 'https://cncandi.github.io';
const base = process.env.PUBLIC_BASE_PATH ?? '/cnc-technik';

export default defineConfig({
  site,
  base,
  output: 'static',
  integrations: [sitemap()],
});
