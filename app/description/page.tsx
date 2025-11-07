import Link from 'next/link'

export default function DescriptionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Silverstone Ranch Community Overview
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the guard-gated neighborhoods, architectural styles, and lifestyle amenities that define
            Silverstone Ranch in Northwest Las Vegas.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-8">
          <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Silverstone Ranch is a premier master-planned community in North Las Vegas, Nevada, renowned for
            guard-gated privacy, curated landscaping, and homes designed for indoor-outdoor living. Each
            village blends Mediterranean-inspired architecture with modern floor plans ideal for today&apos;s
            lifestyles along the corridors of the former Silverstone golf course.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">About Silverstone Ranch</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Silverstone Ranch was built between 2003-2008 and features one and two-story homes ranging 
              in size from 1,559 sq. ft. to 3,448 sq. ft. Silverstone Ranch is a community consisting of 
              nine distinct neighborhoods, some are non-gated, gated, and a guard-gated neighborhood that is 
              surrounded by the majestic Spring Mountains to the west and the Sheep Mountains to the North.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Neighborhoods</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">The Palms</h3>
                <p className="text-gray-700 leading-relaxed">
                  A guard-gated community comprised of one and two-story homes built in 2004-2009 with some 
                  lot sizes up to one third acre. Homes range in size from 1,900 to 4,050 sq. ft. offering 
                  3 to 5 bedrooms and 2 to 3 car garages.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Pinehurst</h3>
                <p className="text-gray-700 leading-relaxed">
                  A gated community built in 2004-2006, adjacent to the Silverstone Golf Club, and offers 
                  single and two-story townhomes ranging in size from 1,345 to 2,015 sq. ft. with 2-4 bedrooms 
                  and an attached two car garages.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Silverlake</h3>
                <p className="text-gray-700 leading-relaxed">
                  A gated community of single-story homes built in 2004-2006. Homes range in size from 2,025 
                  to 2,825 sq. ft. with 3 to 4 bedrooms and 2 to 3 car garages on lots approximately 7,000 sq. ft. 
                  to one quarter acre.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Other Neighborhoods</h3>
                <p className="text-gray-700 leading-relaxed">
                  The remaining non-gated neighborhoods include: <strong>Amberly</strong>, <strong>Clairbrook</strong>, <strong>Eastpoint</strong>, <strong>Greenfield</strong>, 
                  <strong>Parkfield</strong>, and <strong>Somerset</strong>. The <strong>Princeville Collection</strong> at Silverstone Ranch 
                  adjacent to the Silverstone Golf Club is comprised of single-family homes ranging in size from 
                  3,064 to 3,744 sq. ft. with 3 to 4 bedrooms and 2.5 to 3.5 baths.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Community Amenities</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Silverstone homeowners have access to a 6-acre family park with playgrounds, basketball and 
              tennis courts, picnic and barbecue areas, walking and biking trails, and lush greenbelts.
            </p>
          </div>
        </div>

        {/* Community Snapshot */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Community Snapshot</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Location</div>
                <div className="text-gray-600">Silverstone Ranch · Centennial Hills · Las Vegas, NV 89131</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Lifestyle</div>
                <div className="text-gray-600">Guard-gated villages, parks, trails, former golf fairway corridors</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Home Collection</div>
                <div className="text-gray-600">Single-family designs · 2,000 – 4,000+ sq. ft. · 3-5 bedrooms · Former golf fairway corridors</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Year Built</div>
                <div className="text-gray-600">2003-2008</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Want to Learn More?</h2>
            <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
              Contact Dr. Jan Duffy for tailored guidance on available Silverstone Ranch residences and upcoming inventory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-info"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
            >
              Request Information
            </Link>
            <a
              href="tel:7025001530"
              className="px-8 py-3 bg-blue-500 text-white border-2 border-white rounded-lg hover:bg-blue-400 transition-all font-semibold"
            >
              Call (702) 500-1530
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

