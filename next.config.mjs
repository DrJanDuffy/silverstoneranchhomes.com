// Tailwind CSS v3 - no native bindings required

const CANONICAL_HOST = 'www.silverstoneranchhomes.com'
const CANONICAL_BASE = `https://${CANONICAL_HOST}`

const nextConfig = {
  outputFileTracingRoot: process.cwd(),
  webpack: (config, { isServer }) => {
    // Exclude node_modules CSS from PostCSS processing to avoid Tailwind native binding issues
    config.module.rules.forEach((rule) => {
      if (rule.oneOf) {
        rule.oneOf.forEach((oneOf) => {
          if (
            oneOf.use &&
            Array.isArray(oneOf.use) &&
            oneOf.use.some((use) => use.loader && use.loader.includes('postcss-loader'))
          ) {
            // Exclude node_modules CSS files from PostCSS
            const existingExclude = Array.isArray(oneOf.exclude)
              ? oneOf.exclude
              : oneOf.exclude
              ? [oneOf.exclude]
              : []
            oneOf.exclude = [
              ...existingExclude,
              /node_modules/,
            ]
          }
        })
      }
    })
    return config
  },
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
