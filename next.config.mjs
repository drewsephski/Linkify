/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '.next',
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
    scrollRestoration: true
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000
  },
  headers: async () => [
    {
      source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif|js|css|woff|woff2|ttf|eot)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable'
        }
      ]
    }
  ]
};

export default nextConfig;
