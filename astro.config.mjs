import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jekahy.github.io',
  base: '/ehyrol',
  vite: {
    plugins: [tailwindcss()],
  },
});
