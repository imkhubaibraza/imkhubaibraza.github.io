// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://imkhubaibraza.github.io',
  server: {
    port: Number(process.env.PORT) || 4321,
  },
});
