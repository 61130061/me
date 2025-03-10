import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: process.env.PAGES_BASE_PATH,
  basePath: process.env.PAGES_BASE_PATH,
  /* config options here */
};

export default nextConfig;
