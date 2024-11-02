/* import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

export default defineConfig({
  site: process.env.ASTRO_SITE_URL || 'http://localhost:4321',
  base: process.env.ASTRO_SITE_URL.includes('github.io') ? '/masterchef' : '/',
  output: 'static',
}); */


import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const siteUrl = process.env.ASTRO_SITE_URL || 'http://localhost:4321';
const baseUrl = siteUrl.includes('github.io') ? '/masterchef' : '/';

export default defineConfig({
  site: siteUrl,
  base: baseUrl,
  output: 'static',
});
