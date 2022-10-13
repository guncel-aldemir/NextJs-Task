
/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  webpack(config, { isServer }) {
    if (!isServer) {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
            net: false,
        }
    }

    return config
}
  
}

module.exports = nextConfig
