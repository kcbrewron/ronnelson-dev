/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    loader: 'custom',
    domains: ['images.ctfassets.net'],
  },
};
module.exports = nextConfig