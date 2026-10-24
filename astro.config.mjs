// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://khubaibraza.com',
  server: {
    port: Number(process.env.PORT) || 4321,
  },
});
