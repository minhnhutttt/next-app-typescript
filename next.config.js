/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //output: 'export',
  //trailingSlash: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  /* images: {
    unoptimized: true,
  }, */
}

module.exports = nextConfig
