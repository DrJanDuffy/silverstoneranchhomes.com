export const GA_MEASUREMENT_ID = 'G-5K8JNE7X31'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

type GtagEventParams = Record<string, unknown>

export function trackEvent(eventName: string, params: GtagEventParams = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }

  window.gtag('event', eventName, params)
}
