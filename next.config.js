/** @type {import('next').NextConfig} */
const path = require("node:path");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@styles": path.resolve(__dirname, "scss"),
    };
    return config;
  },
};

module.exports = nextConfig;
