import { Phone, Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:7025001530"
                  className="hover:text-white transition-colors"
                >
                  (702) 500-1530
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:DrDuffySells@SilverStoneRanchHomes.com"
                  className="hover:text-white transition-colors"
                >
                  DrDuffySells@SilverStoneRanchHomes.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                <a
                  href="https://letmehelpyourealtor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LetMeHelpYouRealtor.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/home-valuation" className="hover:text-white transition-colors">
                  Home Valuation
                </a>
              </li>
              <li>
                <a href="/request-info" className="hover:text-white transition-colors">
                  Request Info
                </a>
              </li>
              <li>
                <a href="/book-tour" className="hover:text-white transition-colors">
                  Book Tour
                </a>
              </li>
              <li>
                <a href="/agent" className="hover:text-white transition-colors">
                  Agent
                </a>
              </li>
            </ul>
          </div>

          {/* Property Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Property</h3>
            <ul className="space-y-2">
              <li>
                <a href="/photos" className="hover:text-white transition-colors">
                  Photos
                </a>
              </li>
              <li>
                <a href="/description" className="hover:text-white transition-colors">
                  Description
                </a>
              </li>
              <li>
                <a href="/price-features" className="hover:text-white transition-colors">
                  Price & Features
                </a>
              </li>
              <li>
                <a href="/amenities" className="hover:text-white transition-colors">
                  Amenities
                </a>
              </li>
              <li>
                <a href="/map" className="hover:text-white transition-colors">
                  Map
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-center md:text-left">
              <p className="mb-2">
                © {new Date().getFullYear()} Silverstone Ranch Homes. All rights reserved.
              </p>
              <p className="text-gray-500">
                Dr. Jan Duffy REALTOR® | License: S.0197614.LLC
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-gray-400">
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <span>•</span>
              <a href="/sitemap.xml" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

