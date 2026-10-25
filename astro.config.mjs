import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Replace with your GitHub Pages URL:
  // e.g. site: 'https://jekahy.github.io'
  site: 'https://jekahy.github.io',
  // If hosted at a sub-path like /my_web_page/, uncomment and set:
  // base: '/my_web_page',
  integrations: [tailwind()],
});
