import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// Full canonical URL for sitemaps / SEO (set in CI for production)
const site = process.env.PUBLIC_SITE_URL ?? 'https://example.github.io';
// GitHub project pages: set PUBLIC_BASE_PATH=/repo-name (no trailing slash)
const base = process.env.PUBLIC_BASE_PATH;

export default defineConfig({
  site,
  ...(base ? { base } : {}),
  output: 'static',
  trailingSlash: 'always',
  integrations: [icon()],
});

