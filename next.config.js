/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Disable CSS optimization to avoid dependency issues
    optimizeCss: false
  },
  images: {
    domains: ['example.com'],
  },
};

export default nextConfig;
