// Astro config file
import { defineConfig } from 'astro/config'

// PWA
import AstroPWA from '@vite-pwa/astro'
import { manifest } from './src/utils/seoConfig'

// Integrations
import tailwind from '@astrojs/tailwind'
import deno from '@astrojs/deno'
import robotsTxt from 'astro-robots-txt'
import preact from '@astrojs/preact'
import pageInsight from 'astro-page-insight'
import sitemap from '@astrojs/sitemap'
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
      filter: (page) => page !== 'https://jamerrq.dev/board/'
    }),
    mdx(),
    AstroPWA({
      registerType: 'autoUpdate',
      manifest,
      devOptions: {
        enabled: true
      },
      workbox: {
        globDirectory: 'dist/client',
        globPatterns: [
          // '**/*.{woff2}',
          // '_astro/*.module.*.js',
          // '_astro/client.*.js',
          // '_astro/hoisted.*.js',
          // '_astro/*icons.*.js',
          // '_astro/preload-helper.*.js',
          // '_astro/workbox-*.js'
          '**/*'
        ],
        // Don't fallback on document based (e.g. `/some-page`) requests
        // This removes an errant console.log message from showing up.
        navigateFallback: null, // 'offline.html' <- working on this
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
  site: 'https://jamerrq.dev',
  image: {
    domains: ['https://github.com/']
  },
  build: {
    inlineStylesheets: 'always'
  },
  vite: {
    build: {
      cssMinify: 'lightningcss'
    }
  },
  redirects: {
    '/oss': '/oss/0',
    '/opensource': '/oss/0',
    '/linux-terminal': '/blog/linux-tools-improve-workflow'
  }
})
