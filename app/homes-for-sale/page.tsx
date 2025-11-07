import Image from 'next/image'
import Link from 'next/link'

const marketSnapshot = [
  {
    label: 'Median Sale Price',
    value: '$685,000',
    caption: '+5.2% year-over-year',
  },
  {
    label: 'Price Per Sq. Ft.',
    value: '$284',
    caption: 'Single-story homes command premium',
  },
  {
    label: 'Avg. Days on Market',
    value: '13 Days',
    caption: 'Down from 17 last quarter',
  },
  {
    label: 'Active Listings',
    value: '18 Homes',
    caption: '-12% month-over-month',
  },
]

export default function HomesForSalePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Homes For Sale in Silverstone Ranch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover luxury homes in one of Las Vegas&apos; premier communities. 
            Experience the perfect blend of elegance, comfort, and modern living.
          </p>
        </div>

        {/* Market Snapshot & Search Filters */}
        <div className="mb-16 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8 border border-blue-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">November 2025 Market Snapshot</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketSnapshot.map((item) => (
                <div key={item.label} className="rounded-lg border border-blue-100 bg-blue-50 p-4 text-center">
                  <div className="text-sm uppercase tracking-wide text-blue-700 font-semibold mb-1">
                    {item.label}
                  </div>
                  <div className="text-2xl font-bold text-blue-900 mb-1">{item.value}</div>
                  <div className="text-xs text-blue-700">{item.caption}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border border-blue-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Search Filters</h2>
            <p className="text-sm text-gray-600 mb-6">
              Narrow the current Silverstone Ranch inventory by price, size, or days on market. Ask Dr. Duffy for private and coming-soon listings not shown online.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="minPrice" className="text-xs font-semibold text-gray-600 uppercase tracking-wide block mb-1">
                    Min Price
                  </label>
                  <input
                    id="minPrice"
                    type="text"
                    placeholder="$550,000"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label htmlFor="maxPrice" className="text-xs font-semibold text-gray-600 uppercase tracking-wide block mb-1">
                    Max Price
                  </label>
                  <input
                    id="maxPrice"
                    type="text"
                    placeholder="$900,000"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="beds" className="text-xs font-semibold text-gray-600 uppercase tracking-wide block mb-1">
                    Bedrooms
                  </label>
                  <select
                    id="beds"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="3+">3+</option>
                    <option value="4+">4+</option>
                    <option value="5+">5+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="baths" className="text-xs font-semibold text-gray-600 uppercase tracking-wide block mb-1">
                    Bathrooms
                  </label>
                  <select
                    id="baths"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="2+">2+</option>
                    <option value="2.5+">2.5+</option>
                    <option value="3+">3+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="dom" className="text-xs font-semibold text-gray-600 uppercase tracking-wide block mb-1">
                  Max Days on Market
                </label>
                <input
                  id="dom"
                  type="range"
                  min="0"
                  max="60"
                  defaultValue="21"
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0</span>
                  <span>21</span>
                  <span>60</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  id="excludeGolf"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="excludeGolf" className="text-sm text-gray-700">
                  Exclude homes overlooking dormant golf course land
                </label>
              </div>

              <button
                type="button"
                className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-all"
              >
                Request Matching Listings
              </button>
            </form>
            <p className="mt-4 text-xs text-gray-500">
              Silverstone Ranch inventory updates hourly. Submit the form and Dr. Duffy will send curated options plus coming-soon homes you won&apos;t find on public portals.
            </p>
          </div>
        </div>

        {/* Featured Property */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Featured Property
          </h2>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto bg-gray-200">
                <Image
                  src="/images/property/exterior-front-elevation.jpg"
                  alt="Silverstone Ranch luxury residence"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-3">
                    Featured Listing
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Signature Silverstone Residence
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    Silverstone Ranch · Centennial Hills · Las Vegas, NV 89131
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">3-4</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">2.5-3.5</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">2,000+</div>
                    <div className="text-sm text-gray-600">Square Feet</div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  Stunning Silverstone Ranch residence featuring modern upgrades, spacious indoor-outdoor living,
                  and premium finishes. Enjoy guard-gated privacy, access to community parks, and proximity to top
                  Centennial Hills conveniences.
                </p>
                <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                  ⚠️ Former golf course frontage: The Silverstone golf course has been closed since 2015. Following the
                  May 2025 auction, no reopening or redevelopment plan has been filed. Views from this portion of the
                  community currently overlook dormant land. Budget for landscape improvements and factor this
                  uncertainty into negotiations.
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/#photos"
                    className="flex-1 md:flex-none px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center font-semibold"
                  >
                    View Photos
                  </Link>
                  <Link
                    href="/request-info"
                    className="flex-1 md:flex-none px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all font-semibold text-center"
                  >
                    Request Info
                  </Link>
                  <Link
                    href="/book-tour"
                    className="flex-1 md:flex-none px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all font-semibold text-center"
                  >
                    Book Tour
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Listings Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            More Properties Available
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center border-2 border-dashed border-gray-300">
            <div className="max-w-2xl mx-auto">
              <div className="mb-6">
                <svg
                  className="mx-auto h-16 w-16 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Explore More Silverstone Ranch Properties
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Dr. Jan Duffy has access to exclusive listings throughout Silverstone Ranch 
                and the greater Las Vegas area. Contact us to discover homes that match 
                your lifestyle and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#agent"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
                >
                  Contact Agent
                </Link>
                <Link
                  href="/home-valuation"
                  className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all font-semibold"
                >
                  Get Home Valuation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Community Information */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Why Choose Silverstone Ranch?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Top-Rated Schools
              </h3>
              <p className="text-gray-600">
                Excellent school district with highly-rated public and private schools 
                serving the community.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Prime Location
              </h3>
              <p className="text-gray-600">
                Conveniently located in North Las Vegas with easy access to shopping, 
                dining, entertainment, and major employment centers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Luxury Amenities
              </h3>
              <p className="text-gray-600">
                Community features include parks, walking trails, recreational facilities, 
                and beautifully maintained common areas.
              </p>
            </div>
          </div>
        </div>

        {/* Agent Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Dr. Jan Duffy, Top 1% REALTOR®, specializes in Silverstone Ranch properties. 
            Get expert guidance and access to exclusive listings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7025001530"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
            >
              Call (702) 500-1530
            </a>
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

