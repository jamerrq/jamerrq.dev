import type { ManifestOptions } from 'vite-plugin-pwa'

export const seoConfig = {
  baseURL: 'https://jamerrq.dev/', // Production URL.
  description:
    "I'm a backend developer with a focus on Node.js, Python, C# (.NET) and TypeScript. I am passionate about building scalable and maintainable systems.",
  type: 'website',
  image: {
    url: 'https://jamerrq.dev/og-image3.png',
    alt: 'jamerrq.dev',
    width: 730,
    height: 382
  },
  siteName: 'jamerrq.dev',
  twitter: {
    card: 'summary_large_image'
  }
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
  name: 'jamerrq.dev',
  short_name: 'jamerrq.dev',
  description:
    "I'm a backend developer with a focus on Node.js, Python, C# (.NET) and TypeScript. I am passionate about building scalable and maintainable systems.",
  theme_color: '#0F0F0F',
  background_color: '#0F0F0F',
  display: 'fullscreen',
  icons: [
    {
      src: '/img/icons/favicon-192x192.png',
      sizes: '192x192',
      type: 'image/png'
    },
    {
      src: '/img/icons/favicon-512x512.png',
      sizes: '512x512',
      type: 'image/png'
    },
    {
      src: '/img/icons/favicon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable'
    }
  ]
}
