const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //output: 'export',
  //trailingSlash: true,
  /* images: {
    unoptimized: true,
  }, */
}

module.exports = withNextIntl(nextConfig);