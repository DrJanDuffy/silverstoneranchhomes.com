import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. The page may have been moved, 
          deleted, or the URL may be incorrect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
          >
            Go to Homepage
          </Link>
          <Link
            href="/homes-for-sale"
            className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all font-semibold"
          >
            View Properties
          </Link>
        </div>
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Pages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/home-valuation" className="text-blue-600 hover:text-blue-700">
              Home Valuation
            </Link>
            <Link href="/request-info" className="text-blue-600 hover:text-blue-700">
              Request Info
            </Link>
            <Link href="/photos" className="text-blue-600 hover:text-blue-700">
              Photos
            </Link>
            <Link href="/agent" className="text-blue-600 hover:text-blue-700">
              Agent
            </Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-700">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

