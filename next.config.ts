import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // This tells Vercel to ignore lint errors during deployment
    ignoreDuringBuilds: true,
  },
  typescript: {
    // This tells Vercel to ignore TypeScript errors during deployment
    ignoreBuildErrors: true,
  },
};

export default nextConfig;