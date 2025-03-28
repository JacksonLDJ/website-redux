/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: '.next',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '',
};

module.exports = nextConfig; 