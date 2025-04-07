/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    optimizePackageImports: ['@studio-freight/lenis'],
  },
};

export default nextConfig;
