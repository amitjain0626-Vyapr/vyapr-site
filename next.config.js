/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {}
  },
  webpack: (config, { isServer }) => {
    // 🛡️ Prevent accidental bundling of eslint.config.mjs
    config.externals.push('eslint.config.mjs');
    return config;
  }
};

module.exports = nextConfig;



