/**
 * @type {import('next').NextConfig}
 */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  future: {
    webpack5: true,
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
  i18n: {
    locales: ['en-US', 'es'], // Lista de todos los locales a soportar
    defaultLocale: 'en-US', // Locale por defecto
  },
}

module.exports = withBundleAnalyzer(nextConfig)
