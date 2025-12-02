'use client'

import dynamic from 'next/dynamic'

// Client component wrapper for lazy loading Realscout
const RealscoutOfficeListings = dynamic(() => import('@/components/RealscoutOfficeListings').then((mod) => ({ default: mod.RealscoutOfficeListings })), {
  ssr: false,
})

export function RealscoutOfficeListingsWrapper() {
  return <RealscoutOfficeListings />
}

