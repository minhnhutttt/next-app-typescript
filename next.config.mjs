/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  reactStrictMode: true,
trailingSlash: true,
};

export default nextConfig;
