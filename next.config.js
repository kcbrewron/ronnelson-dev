/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  connect-src 'self';
  default-src 'self';
  script-src 'self';
  img-src 'https://images.ctfassets.net https://avatars.githubusercontent.com'; 
  style-src 'self' *.ronnelson.com;
  font-src 'self' 'https://fonts.googleapis.com/';  
`

const securityHeaders = [{
  key: 'X-DNS-Prefetch-Control',
  value: 'on'
},{
  key: 'Strict-Transport-Security',
  value: 'max-age=63072000; includeSubDomains; preload'
},
{
  key: 'X-XSS-Protection',
  value: '1; mode=block'
},{
  key: 'Permissions-Policy',
  value: 'geolocation=()'
},
// {
//   key: 'Content-Security-Policy',
//   value: `default-src 'self'; script-src 'self' 'unsafe-eval';  script-src-elem 'self' 'unsafe-inline'; script-src-attr 'self' 'unsafe-inline'; style-src 'unsafe-inline' https://fonts.googleapis.com/; style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com/; style-src-attr 'self' 'unsafe-inline' https://fonts.googleapis.com/; img-src 'self' data: https://images.ctfassets.net https://avatars.githubusercontent.com; font-src 'self' data: https://fonts.googleapis.com/ https://fonts.gstatic.com; upgrade-insecure-requests`
// }
];

const nextConfig = {
  experimental: {
    appDir: true,
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    githubToken: process.env.GITHUB_API_TOKEN,
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**'
      },
    ],
    loader: 'custom',
    loaderFile: '/utils/loader.js'
  }
};
module.exports = nextConfig;
