/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: '.next',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '',
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig; 