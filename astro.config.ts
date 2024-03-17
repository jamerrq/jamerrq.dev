import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import deno from '@astrojs/deno'
import robotsTxt from 'astro-robots-txt'
import preact from '@astrojs/preact'
import pageInsight from 'astro-page-insight'
import sitemap from '@astrojs/sitemap'
import compress from 'astro-compress'
import { VitePWA } from 'vite-plugin-pwa'
import { manifest } from './src/utils/seoConfig'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    robotsTxt(),
    preact(),
    pageInsight(),
    sitemap({
      filter: (page) =>
        page !== 'https://jamerrq.deno.dev/board/' &&
        page !== 'https://jamerrq.deno.dev/es/board/'
    }),
    compress(),
    mdx()
  ],
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
  site: 'https://jamerrq.deno.dev',
  image: {
    domains: ['https://github.com/']
  },
  vite: {
    // ssr: {
    //   external:[]
    // },
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        manifest,
        workbox: {
          globDirectory: 'dist/client',
          globPatterns: [
            '**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}'
          ],
          // Don't fallback on document based (e.g. `/some-page`) requests
          // This removes an errant console.log message from showing up.
          navigateFallback: null
        }
      })
    ]
  }
})
