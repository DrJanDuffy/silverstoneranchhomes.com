import Link from 'next/link'

export default function AreaInfoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Silverstone Ranch Area Information
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover life in Silverstone Ranch—one of Centennial Hills&apos; most coveted master-planned communities in
            Northwest Las Vegas.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Nestled in the heart of Northwest Las Vegas, Silverstone Ranch offers a prestigious gated oasis where
              modern elegance blends seamlessly with desert charm. Imagine waking up to protected Spring Mountain
              views, stepping outside your Mediterranean-inspired home, and experiencing a community crafted with
              sophistication and convenience in mind.
            </p>

          <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
            <strong className="font-semibold">Golf Course Disclosure:</strong> The Silverstone golf course has been
            closed since 2015 and was sold at auction in May 2025. The new owner has not announced a redevelopment plan,
            so properties along the former fairways currently overlook dormant land.
            <Link
              href="/golf-course-status"
              className="ml-2 font-semibold text-amber-900 underline decoration-amber-500 decoration-2 underline-offset-4 hover:text-amber-700"
            >
              View the detailed status update →
            </Link>
          </div>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              This guard-gated enclave isn&apos;t just a place to live; it&apos;s a lifestyle upgrade. Located minutes from
              designer shopping at Centennial Center, top-rated CCSD schools, and the sprawling 680-acre Floyd Lamb
              Park, every detail has been designed to enhance daily living. The nearby 215 Beltway places the Strip
              within 30 minutes, while Centennial Hills Hospital ensures world-class healthcare in your backyard.
            </p>

            <div className="bg-blue-50 rounded-lg p-6 my-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Prime Location Benefits</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">📍</span>
                  <div>
                    <strong className="text-gray-900">10 minutes</strong> from designer shopping at Centennial Center
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">🏫</span>
                  <div>
                    <strong className="text-gray-900">Top-rated CCSD schools</strong> in the area
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">🌳</span>
                  <div>
                    <strong className="text-gray-900">680-acre Floyd Lamb Park</strong> for outdoor recreation
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">🛣️</span>
                  <div>
                    <strong className="text-gray-900">215 Beltway access</strong> - Strip just 30 minutes away
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-xl">🏥</span>
                  <div>
                    <strong className="text-gray-900">Centennial Hills Hospital</strong> for world-class healthcare
                  </div>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Beyond its prime location, this luxury Las Vegas community boasts immaculately manicured 
              landscapes, resort-style amenities, and Mediterranean-inspired architecture that radiates 
              elegance. Whether you&apos;re lounging poolside, exploring nearby nature trails, or enjoying 
              the upscale charm of the neighborhood, you&apos;ll quickly see why Centennial Hills ranks among 
              Las Vegas&apos; fastest-growing luxury communities, with property values appreciating 15% annually.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              Silverstone Ranch remains one of Las Vegas&apos; most desirable communities—where style, luxury, and
              convenience converge. Request a private tour with Dr. Jan Duffy to explore which neighborhood enclave
              aligns with your goals.
            </p>
          </div>
        </div>

        {/* Nearby Amenities Grid */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nearby Amenities & Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3">🛍️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Shopping</h3>
              <p className="text-sm text-gray-600">Centennial Center - 10 min</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3">🍽️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Dining</h3>
              <p className="text-sm text-gray-600">Upscale restaurants nearby</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
              <p className="text-sm text-gray-600">Top-rated CCSD schools</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="font-semibold text-gray-900 mb-2">Healthcare</h3>
              <p className="text-sm text-gray-600">Centennial Hills Hospital</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3">🌳</div>
              <h3 className="font-semibold text-gray-900 mb-2">Parks</h3>
              <p className="text-sm text-gray-600">Floyd Lamb Park - 680 acres</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3">🎰</div>
              <h3 className="font-semibold text-gray-900 mb-2">Entertainment</h3>
              <p className="text-sm text-gray-600">Las Vegas Strip - 30 min</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Explore This Prime Location</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Experience the Centennial Hills lifestyle firsthand. Schedule a tour to see why Silverstone Ranch remains a
            top Las Vegas destination for luxury living.
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
              Request Area Information
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

