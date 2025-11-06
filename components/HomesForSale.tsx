export default function HomesForSale() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Homes For Sale
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Property Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-64 bg-gray-200">
              <img
                src="/images/property/exterior-1.jpg"
                alt="7152 Royal Melbourne Drive"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                7152 Royal Melbourne Drive
              </h3>
              <p className="text-gray-600 mb-4">Las Vegas, NV 89131</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-blue-600">
                  Contact for Pricing
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4 text-sm text-gray-600">
                <span>3-4 Beds</span>
                <span>•</span>
                <span>2.5-3.5 Baths</span>
                <span>•</span>
                <span>2,000+ sq ft</span>
              </div>
              <a
                href="/#photos"
                className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Details
              </a>
            </div>
          </div>

          {/* Placeholder for additional listings */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center border-2 border-dashed border-gray-300">
            <p className="text-gray-600 mb-4">
              More listings coming soon
            </p>
            <p className="text-sm text-gray-500">
              Contact Dr. Jan Duffy for more properties in Silverstone Ranch
            </p>
            <a
              href="/#agent"
              className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Agent
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

