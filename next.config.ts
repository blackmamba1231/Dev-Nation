import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["assets.aceternity.com","res.cloudinary.com"], // Add the hostname here
  },
};

export default nextConfig;
