/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    legacyBrowsers: false, // ✅ THIS LINE IS CRUCIAL to fix legacy JS issue
    esmExternals: true,    // ✅ Optional but useful
  },
  swcMinify: true,         // ✅ Make sure SWC minifier is enabled
  reactStrictMode: true,
};

export default nextConfig;
