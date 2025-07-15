/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: true, // Allow modern ESM packages
  },
  transpilePackages: [], // Avoid unnecessary transpile
  modularizeImports: {}, // Keep clean and modern
  // Optional: Enable React strict mode
  reactStrictMode: true,
  
};

export default nextConfig;
