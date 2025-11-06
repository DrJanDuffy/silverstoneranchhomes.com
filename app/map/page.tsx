'use client'

import Link from 'next/link'

export default function MapPage() {
  const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Property Location & Map
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the prime location of 7152 Royal Melbourne Drive in the heart of Silverstone Ranch
          </p>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-xl p-4 md:p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Interactive Map</h2>
          <div className="bg-gray-100 rounded-lg overflow-hidden h-96 mb-6">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={mapsApiKey 
                ? `https://www.google.com/maps/embed/v1/place?key=${mapsApiKey}&q=7152+Royal+Melbourne+Drive,+Las+Vegas,+NV+89131`
                : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.123456789!2d-115.2772!3d36.2856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzYsMTcsMTY1LjI3NzIiLC0xMTUuMjc3MiwwLjI4NTY!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus'
              }
            />
          </div>
          <div className="text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=7152+Royal+Melbourne+Drive,+Las+Vegas,+NV+89131"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
            >
              Open in Google Maps
            </a>
          </div>
        </div>

        {/* Location Details */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Discover Las Vegas Luxury Living - Royal Melbourne Drive, Centennial Hills, Nevada
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Nestled in the heart of Northwest Las Vegas, Nevada, Centennial Hills&apos; Royal Melbourne 
              Drive offers a prestigious gated luxury oasis where modern elegance blends seamlessly with desert 
              charm. Imagine waking up to breathtaking, protected views of the Spring Mountains, stepping 
              outside your Mediterranean-inspired home, and experiencing a community crafted with sophistication 
              and convenience in mind.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              This exclusive, guard-gated enclave isn&apos;t just a place to live; it&apos;s a lifestyle upgrade. 
              Located just 10 minutes from designer shopping at Centennial Center, top-rated CCSD schools, and 
              the sprawling 680-acre Floyd Lamb Park, every detail has been designed to enhance your daily life. 
              The nearby 215 Beltway puts the Strip just 30 minutes away, while world-class healthcare at 
              Centennial Hills Hospital ensures peace of mind right in your neighborhood.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              Beyond its prime location, this luxury Las Vegas community boasts immaculately manicured landscapes, 
              resort-style amenities, and Mediterranean-inspired architecture that radiates elegance. Whether 
              you&apos;re lounging poolside, exploring nearby nature trails, or enjoying the upscale charm of the 
              neighborhood, you&apos;ll quickly see why Centennial Hills ranks among Las Vegas&apos; fastest-growing 
              luxury communities, with property values appreciating 15% annually.
            </p>
          </div>
        </div>

        {/* Nearby Points of Interest */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Nearby Points of Interest</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3">🛍️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Centennial Center</h3>
              <p className="text-sm text-gray-600">Designer shopping - 10 minutes away</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3">🏫</div>
              <h3 className="font-semibold text-gray-900 mb-2">Top-Rated Schools</h3>
              <p className="text-sm text-gray-600">CCSD schools nearby</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3">🌳</div>
              <h3 className="font-semibold text-gray-900 mb-2">Floyd Lamb Park</h3>
              <p className="text-sm text-gray-600">680-acre park - 10 minutes</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3">🛣️</div>
              <h3 className="font-semibold text-gray-900 mb-2">215 Beltway</h3>
              <p className="text-sm text-gray-600">Easy access to the Strip</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="font-semibold text-gray-900 mb-2">Centennial Hills Hospital</h3>
              <p className="text-sm text-gray-600">World-class healthcare nearby</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3">⛰️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Spring Mountains</h3>
              <p className="text-sm text-gray-600">Protected mountain views</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Visit This Location?</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Schedule a private tour to see this prime location in person and experience the Silverstone Ranch lifestyle.
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

