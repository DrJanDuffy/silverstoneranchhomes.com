'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Home Valuation', href: '/home-valuation' },
  { label: 'Request Info', href: '/request-info' },
  { label: 'Homes For Sale', href: '/homes-for-sale' },
  { label: 'Photos', href: '/#photos' },
  { label: 'Description', href: '/#description' },
  { label: 'Price & Features', href: '/#price-features' },
  { label: 'Amenities', href: '/#amenities' },
  { label: 'Map', href: '/#map' },
  { label: 'Video', href: '/#video' },
  { label: 'Area Info', href: '/#area-info' },
  { label: 'Area Insight', href: '/#area-insight' },
  { label: 'Agent', href: '/#agent' },
  { label: 'Book Your Tour Now', href: '/book-tour' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      const id = href.substring(2)
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md backdrop-blur-sm bg-white/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              Silverstone Ranch Homes
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('/#')) {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }
                }}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex lg:items-center">
            <a
              href="tel:7025001530"
              className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
              (702) 500-1530
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('/#')) {
                    e.preventDefault()
                    handleNavClick(item.href)
                  } else {
                    setMobileMenuOpen(false)
                  }
                }}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:7025001530"
              className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-base font-semibold text-white hover:bg-blue-700 mt-4"
            >
              <Phone className="h-5 w-5" />
              (702) 500-1530
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

