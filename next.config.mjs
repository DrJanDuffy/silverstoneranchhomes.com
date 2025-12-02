// Ensure Tailwind native mode is disabled before any imports
process.env.TAILWIND_DISABLE_NATIVE = 'true'
process.env.npm_config_tailwind_disable_native = 'true'

const CANONICAL_HOST = 'www.silverstoneranchhomes.com'
const CANONICAL_BASE = `https://${CANONICAL_HOST}`

const nextConfig = {
  outputFileTracingRoot: process.cwd(),
  async redirects() {
    return [
      // Redirect old short URLs to new canonical paths
      // Note: Host-based redirects (www/non-www, HTTP/HTTPS) are handled by middleware.ts
      {
        source: '/tour',
        destination: '/book-tour',
        permanent: true,
      },
      {
        source: '/ap',
        destination: '/amenities',
        permanent: true,
      },
      {
        source: '/lc',
        destination: '/sell-with-agent',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        // Cache static assets aggressively
        source: '/:path*\\.(ico|png|jpg|jpeg|gif|svg|webp|woff|woff2|ttf|eot|css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache _next/static assets
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache images
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig
