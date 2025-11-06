export default function PriceFeatures() {
  return (
    <section id="price-features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Price & Features</h2>
        
        <div className="bg-blue-50 rounded-lg p-8 mb-8">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Asking Price</p>
            <p className="text-5xl font-bold text-blue-600 mb-4">Contact for Pricing</p>
            <p className="text-gray-700">
              7152 Royal Melbourne Drive<br />
              Las Vegas, NV 89131
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Property Features</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Granite countertops throughout</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Custom cherry wood cabinetry</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Stainless steel appliances</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Hardwood and tile flooring</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Plantation shutters</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Crown molding throughout</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Master suite with sitting area</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Spa-like master bathroom</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Resort-style covered patio</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Landscaped backyard</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Two-car garage</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Fireplace in living room and sunroom</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Property Specifications</h3>
            <dl className="space-y-4">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <dt className="font-medium text-gray-700">Bedrooms</dt>
                <dd className="text-gray-900">3-4</dd>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <dt className="font-medium text-gray-700">Bathrooms</dt>
                <dd className="text-gray-900">2.5-3.5</dd>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <dt className="font-medium text-gray-700">Square Feet</dt>
                <dd className="text-gray-900">2,000+ sq. ft.</dd>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <dt className="font-medium text-gray-700">Lot Size</dt>
                <dd className="text-gray-900">Approx. 7,000+ sq. ft.</dd>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <dt className="font-medium text-gray-700">Year Built</dt>
                <dd className="text-gray-900">2003-2008</dd>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <dt className="font-medium text-gray-700">Garage</dt>
                <dd className="text-gray-900">2-3 Car</dd>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <dt className="font-medium text-gray-700">Community</dt>
                <dd className="text-gray-900">Silverstone Ranch</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

