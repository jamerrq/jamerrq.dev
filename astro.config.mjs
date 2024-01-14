import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import deno from '@astrojs/deno'

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
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
})
