import Link from 'next/link'

export default function PriceFeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Price & Features
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the exceptional features and value of 7152 Royal Melbourne Drive
          </p>
        </div>

        {/* Price Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 md:p-12 mb-12 text-center text-white">
          <p className="text-sm text-blue-100 mb-2 uppercase tracking-wide">Asking Price</p>
          <p className="text-5xl md:text-6xl font-bold mb-4">Contact for Pricing</p>
          <p className="text-lg text-blue-100">
            7152 Royal Melbourne Drive<br />
            Las Vegas, NV 89131
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-info"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
            >
              Request Pricing Information
            </Link>
            <a
              href="tel:7025001530"
              className="px-8 py-3 bg-blue-500 text-white border-2 border-white rounded-lg hover:bg-blue-400 transition-all font-semibold"
            >
              Call (702) 500-1530
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Property Features */}
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Property Features</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-lg">Granite countertops throughout</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-lg">Custom cherry wood cabinetry</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-lg">Stainless steel appliances</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-lg">Hardwood and tile flooring</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-lg">Plantation shutters</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-lg">Crown molding throughout</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-lg">Master suite with sitting area</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-lg">Spa-like master bathroom</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-lg">Resort-style covered patio</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-lg">Landscaped backyard</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-lg">Two-car garage</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-lg">Fireplace in living room and sunroom</span>
              </li>
            </ul>
          </div>

          {/* Property Specifications */}
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Property Specifications</h2>
            <dl className="space-y-6">
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <dt className="font-semibold text-gray-700 text-lg">Bedrooms</dt>
                <dd className="text-gray-900 font-bold text-xl">3-4</dd>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <dt className="font-semibold text-gray-700 text-lg">Bathrooms</dt>
                <dd className="text-gray-900 font-bold text-xl">2.5-3.5</dd>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <dt className="font-semibold text-gray-700 text-lg">Square Feet</dt>
                <dd className="text-gray-900 font-bold text-xl">2,000+ sq. ft.</dd>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <dt className="font-semibold text-gray-700 text-lg">Lot Size</dt>
                <dd className="text-gray-900 font-bold text-xl">Approx. 7,000+ sq. ft.</dd>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <dt className="font-semibold text-gray-700 text-lg">Year Built</dt>
                <dd className="text-gray-900 font-bold text-xl">2003-2008</dd>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <dt className="font-semibold text-gray-700 text-lg">Garage</dt>
                <dd className="text-gray-900 font-bold text-xl">2-3 Car</dd>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <dt className="font-semibold text-gray-700 text-lg">Community</dt>
                <dd className="text-gray-900 font-bold text-xl">Silverstone Ranch</dd>
              </div>
              <div className="flex justify-between items-center py-4">
                <dt className="font-semibold text-gray-700 text-lg">Property Type</dt>
                <dd className="text-gray-900 font-bold text-xl">Single Family</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Additional Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🏡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Premium Finishes</h3>
              <p className="text-gray-600 text-sm">
                High-end materials and craftsmanship throughout
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="font-semibold text-gray-900 mb-2">Outdoor Living</h3>
              <p className="text-gray-600 text-sm">
                Beautifully landscaped yard with resort-style patio
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="font-semibold text-gray-900 mb-2">Modern Updates</h3>
              <p className="text-gray-600 text-sm">
                Recently updated with contemporary features
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Make This Home Yours?</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact Dr. Jan Duffy to schedule a private showing or request more information about pricing and availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-tour"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
            >
              Schedule a Tour
            </Link>
            <Link
              href="/request-info"
              className="px-8 py-3 bg-blue-500 text-white border-2 border-white rounded-lg hover:bg-blue-400 transition-all font-semibold"
            >
              Request Information
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

