/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: true, // Allow modern ESM packages
  },
  transpilePackages: [], // Avoid unnecessary transpile
  modularizeImports: {}, // Keep clean and modern
  // Optional: Enable React strict mode
  reactStrictMode: true,
   eslint: {
    ignoreDuringBuilds: true, // Skip ESLint errors during production build
  },
  
};

export default nextConfig;
