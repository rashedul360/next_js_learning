/** @type {import('next').NextConfig} */
const nextConfig = {
 compress: false,
 devIndicators: {
  buildActivity: false,
 },

 productionBrowserSourceMaps: true,
 images: {
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  formats: ["image/webp"],

  remotePatterns: [
   {
    protocol: "https",
    hostname: "i.ibb.co",
    port: "",
    pathname: "/Pr7gfMq/**",
   },
  ],
 },
};

module.exports = nextConfig;
