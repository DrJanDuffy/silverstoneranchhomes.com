import Link from 'next/link'

export default function AreaInsightPage() {
  const recentSales = [
    {
      address: 'Silverstone Ranch Residence • Silverlake Enclave',
      listed: '$699,500',
      sold: '$710,000',
      daysOnMarket: 7,
      feature: 'Outdoor living upgrade + three-car garage',
    },
    {
      address: 'Guard-Gated Estate • The Palms',
      listed: '$785,000',
      sold: '$799,000',
      daysOnMarket: 9,
      feature: 'Remodeled kitchen, pool cabana, and view deck',
    },
    {
      address: 'Pinehurst Townhome • Golf Corridor',
      listed: '$415,000',
      sold: '$420,000',
      daysOnMarket: 11,
      feature: 'HOA-maintained landscape with shaded patio',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Silverstone Ranch: November 2025 Market Insights
          </h1>
          <p className="text-lg text-gray-600">Last updated: November 7, 2025</p>
        </div>

        {/* Market Advantage */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Market Advantage: Inventory at Multi-Year Lows</h2>
          <p className="text-gray-700 mb-6 text-lg">
            Sellers in Silverstone Ranch are uniquely positioned in today&apos;s market:
          </p>
          <ul className="space-y-4 text-gray-700 mb-6">
            <li className="flex items-start">
              <span className="text-green-600 mr-3 text-xl font-bold">•</span>
              <span className="text-lg">Only <strong>18 active listings</strong> community-wide (down 12% month-over-month)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 text-xl font-bold">•</span>
              <span className="text-lg"><strong>46 pre-approved buyers</strong> actively searching for homes</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 text-xl font-bold">•</span>
              <span className="text-lg">Multiple offers remain typical for renovated homes</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 text-xl font-bold">•</span>
              <span className="text-lg">Demand pushes accepted contracts to <strong>101.8% of list price</strong> on average</span>
            </li>
          </ul>
        </div>

        {/* Time to Sell */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Time to Sell: Accelerating Market Trends</h2>
          <p className="text-gray-700 mb-6 text-lg">
            Over the past 90 days, sales have gained momentum:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">13</div>
              <div className="text-sm text-gray-600">Average days on market</div>
              <div className="text-xs text-green-600 mt-1 font-semibold">(down from 17 last quarter)</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">4.8</div>
              <div className="text-sm text-gray-600">Days to first offer</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">7</div>
              <div className="text-sm text-gray-600">Showings before offer</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">82%</div>
              <div className="text-sm text-gray-600">Selling at or above list price</div>
            </div>
          </div>
        </div>

        {/* Recent Sales */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Recent Sales Highlighting Strong Values</h2>
          <p className="text-gray-700 mb-6 text-lg">
            Recent comparable sales in the neighborhood showcase Silverstone Ranch&apos;s strong market performance:
          </p>
          <div className="space-y-4">
            {recentSales.map((sale, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6 py-4 bg-gray-50 rounded-r-lg">
                <div className="font-semibold text-gray-900 text-lg mb-1">{sale.address}</div>
                <div className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Listed:</span> {sale.listed} |{' '}
                  <span className="font-medium">Sold:</span> {sale.sold} |{' '}
                  <span className="font-medium">Days on market:</span> {sale.daysOnMarket}
                </div>
                <div className="text-sm text-blue-600 font-semibold">
                  <strong>Key feature:</strong> {sale.feature}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price Momentum */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Price Momentum: Steady Appreciation</h2>
          <p className="text-gray-700 mb-6 text-lg">
            Silverstone Ranch continues to demonstrate impressive growth:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">+1.9%</div>
              <div className="text-sm text-gray-600">Trailing 30 days</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">+5.4%</div>
              <div className="text-sm text-gray-600">Year-to-date</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">+7.8%</div>
              <div className="text-sm text-gray-600">Year-over-year</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">+38%</div>
              <div className="text-sm text-gray-600">Five-year appreciation</div>
            </div>
          </div>
          <p className="text-gray-700 mt-6 text-lg">
            This consistent upward trend reflects sustained demand from relocation buyers, health-care professionals, and local move-up households seeking guard-gated living.
          </p>
        </div>

        {/* Optimal Selling Periods */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Timing for Maximum Return</h2>
          <p className="text-gray-700 mb-6 text-lg">Data highlights the following prime windows for selling:</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
              <h3 className="font-semibold text-gray-900 mb-3 text-xl">March 15 – May 30</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Highest buyer activity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Strongest offers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Fastest sales</span>
                </li>
              </ul>
            </div>
            <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
              <h3 className="font-semibold text-gray-900 mb-3 text-xl">September 1 – October 15</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Peak corporate relocations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Less competition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Highly motivated buyers</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">Current Market Opportunity:</h3>
            <p className="text-gray-700">
              The next 90 days present an ideal selling window thanks to limited resale inventory, relocation activity from California and Arizona, and buyers motivated to secure property before spring 2026 rate adjustments.
            </p>
          </div>
        </div>

        {/* Competitive Edge */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Competitive Edge in Silverstone Ranch</h2>
          <p className="text-gray-700 mb-6 text-lg">
            Silverstone Ranch residences continue to command premium offers thanks to:
          </p>
          <ul className="space-y-4 text-gray-700 mb-6">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <span className="text-lg">Above-average lot size</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <span className="text-lg">Homes bordering the former golf fairways</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <span className="text-lg">Recent updates</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">✓</span>
              <span className="text-lg">Energy-efficient features</span>
            </li>
          </ul>
          <p className="text-gray-700 text-lg">
            Combined with a tailored marketing strategy from Dr. Jan Duffy, these factors help Silverstone Ranch
            sellers capture top dollar in today&apos;s competitive market.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Get Your Personalized Market Analysis</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact Dr. Jan Duffy for a comprehensive market analysis of your Silverstone Ranch property 
            and learn how to maximize your home&apos;s value in today&apos;s market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/home-valuation"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
            >
              Get Home Valuation
            </Link>
            <Link
              href="/request-info"
              className="px-8 py-3 bg-blue-500 text-white border-2 border-white rounded-lg hover:bg-blue-400 transition-all font-semibold"
            >
              Request Market Analysis
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

