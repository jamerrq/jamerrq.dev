import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import deno from '@astrojs/deno'
import robotsTxt from 'astro-robots-txt'
import preact from '@astrojs/preact'

import pageInsight from 'astro-page-insight'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt(), preact(), pageInsight()],
  adapter: deno(),
  output: 'server',
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
      strategy: 'pathname'
    }
  },
  site: 'https://jamerrq.deno.dev/',
  image: {
    domains: ['https://github.com/']
  }
})
