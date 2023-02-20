/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    githubToken: process.env.GITHUB_API_TOKEN,
  },
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**'
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathName: "/2tyl7ps8aucz/**"
      }
    ],
    loader: 'custom',
    loaderFile: './components/loader.js'
  }
};
module.exports = nextConfig;