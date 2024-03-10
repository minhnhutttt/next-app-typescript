/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    env: {
      EMAIL_ADDRESS: process.env.EMAIL_ADDRESS,
    }
  };
  
  export default nextConfig;
  