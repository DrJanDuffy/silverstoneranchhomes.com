'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { GA_MEASUREMENT_ID } from '@/lib/analytics'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
      return
    }

    const query = searchParams?.toString()
    const pagePath = query ? `${pathname}?${query}` : pathname

    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pagePath,
    })
  }, [pathname, searchParams])

  return null
}
