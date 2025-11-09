import type { MetadataRoute } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = CONTACT_INFO.website.base

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/scripts/', '/reports/', '/_next/', '/assets/', '/static/'],
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
