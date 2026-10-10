import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The custom domain itself is set in the repository's Settings → Pages
// (see README). This value is used for canonical links and the sitemap.
export default defineConfig({
  site: 'https://markheimann.com',
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
