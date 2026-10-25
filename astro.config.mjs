import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Custom domain configured on Cloudflare & GitHub Pages:
  site: 'https://eugene.hyrol.net',
  integrations: [tailwind()],
});
