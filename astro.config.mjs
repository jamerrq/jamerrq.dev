import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import deno from '@astrojs/deno'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  adapter: deno(),
  output: 'server',
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    fallback: {
      'es': 'en'
    }
  }
})
