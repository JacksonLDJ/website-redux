/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: '.next',
  images: {
    unoptimized: true,
  },
  assetPrefix: './',
  trailingSlash: true,
};

module.exports = nextConfig; 