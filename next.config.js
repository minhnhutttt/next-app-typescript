/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //output: 'export',
  //trailingSlash: true,
  i18n: {
    locales: ['ja'],
    defaultLocale: 'ja',
  },
  /* images: {
    unoptimized: true,
  }, */
}

module.exports = nextConfig
