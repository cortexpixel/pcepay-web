/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Static assets are served from /public/assets as plain strings, so the
    // default <img> tag is used (mirroring the original Vite project).
    unoptimized: true,
  },
};

export default nextConfig;
