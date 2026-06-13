import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "images.pexels.com",
      "www.pexels.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

export default nextConfig;
