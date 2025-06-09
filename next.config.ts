import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  swcMinify: true,
};

export default nextConfig;

