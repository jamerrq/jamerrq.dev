import { defineConfig } from 'astro/config'

// PWA Support
import { VitePWA } from 'vite-plugin-pwa'
import { manifest } from './src/utils/seoConfig'

// Integrations
import tailwind from '@astrojs/tailwind'
import deno from '@astrojs/deno'
import robotsTxt from 'astro-robots-txt'
import preact from '@astrojs/preact'
import pageInsight from 'astro-page-insight'
import sitemap from '@astrojs/sitemap'
import compress from 'astro-compress'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  adapter: deno(),
  compressHTML: true,
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
    mdx(),
    compress()
  ],
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
  build: {
    inlineStylesheets: 'always'
  },
  vite: {
    // build: {
    //   cssMinify: "lightningcss"
    // },
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        manifest,
        workbox: {
          globDirectory: 'dist/client',
          globPatterns: [
            '**/*.{webm,woff2}',
            'pizarra.webp',
            'bitwise_liminal_compressed_240p.webm'
          ],
          // Don't fallback on document based (e.g. `/some-page`) requests
          // This removes an errant console.log message from showing up.
          navigateFallback: null,
          runtimeCaching: [
            {
              urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'images',
                expiration: {
                  maxEntries: 100,
                  maxAgeSeconds: 30 * 24 * 60 * 60
                }
              }
            },
            {
              urlPattern: /\.(?:woff|woff2|ttf|eot|ico)$/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'fonts',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 30 * 24 * 60 * 60
                }
              }
            }
          ]
        }
      })
    ]
  }
})
