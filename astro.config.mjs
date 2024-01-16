import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import deno from '@astrojs/deno';
import robotsTxt from "astro-robots-txt";
import preact from "@astrojs/preact";

import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt(), preact(), critters()],
  adapter: deno(),
  output: 'server',
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    fallback: {
      es: 'en'
    },
    routing: {
      prefixDefaultLocale: false
    }
  },
  site: 'https://jamerrq.deno.dev/'
});