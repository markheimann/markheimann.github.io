import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// If you move to a custom domain, change `site` here and add a
// public/CNAME file containing the domain (see README).
export default defineConfig({
  site: 'https://markheimann.github.io',
  integrations: [sitemap()],
  // Keep whitespace as written, so spaces around inline links survive.
  compressHTML: false,
  // Write research.html rather than research/index.html, so the old
  // extensionless URLs (/academic, /other) keep the same shape.
  build: { format: 'file' },
  redirects: {
    '/academic': '/research',
    '/other': '/chess',
  },
});
