import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';

// Cargar variables de entorno dependiendo del entorno
dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.development'
});

const siteUrl = process.env.ASTRO_SITE_URL || 'http://localhost:4321';
const baseUrl = siteUrl === 'http://localhost:4321' ? '/' : '/masterchef';

export default defineConfig({
  site: siteUrl,
  base: baseUrl,
  output: 'static',
});
