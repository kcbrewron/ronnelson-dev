/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  swcMinify: true,
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "mdx"],
  productionBrowserSourceMaps: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
    ],
    loader: "custom",
    loaderFile: "/utils/loader.js",
  },
};
module.exports = nextConfig;
