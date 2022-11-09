/**
 * @type {import('next').NextConfig}
 */
 const { i18n } = require('./next-i18next.config')
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
  i18n,
}

module.exports = withBundleAnalyzer(nextConfig)
