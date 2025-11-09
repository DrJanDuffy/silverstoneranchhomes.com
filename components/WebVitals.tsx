'use client'

import { useEffect } from 'react'
import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Send metrics to Google Analytics
    if (window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(
          metric.name === 'CLS' ? metric.value * 1000 : metric.value,
        ),
        event_label: metric.id,
        non_interaction: true,
      })
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(metric)
    }

    // You can also send to other analytics services here
    // Example: sending to Vercel Analytics
    if (window.va) {
      window.va('track', metric.name, {
        value: metric.value,
        id: metric.id,
        rating: metric.rating,
      })
    }
  })

  return null
}

// Extend Window type for gtag and va
declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      eventParameters?: Record<string, unknown>,
    ) => void
    va?: (
      command: string,
      eventName: string,
      eventParameters?: Record<string, unknown>,
    ) => void
  }
}
