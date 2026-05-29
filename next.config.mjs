/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /** Allow opening dev site from LAN IP (e.g. http://192.168.1.5:3000) without broken JS bundles */
  allowedDevOrigins: ['192.168.1.5', 'localhost', '127.0.0.1'],
  output: 'export',
  images: {
    unoptimized: true,
  },
  /**
   * Use relative URLs for /_next/* so the exported `out/` folder works when opened from
   * a subpath (e.g. http://localhost/my-site/) or copied under XAMPP — absolute "/" breaks there.
   */
  assetPrefix: process.env.NODE_ENV === 'production' ? '.' : undefined,
};

export default nextConfig;
