export default function MarketInsights() {
  const recentSales = [
    {
      address: '7224 Royal Melbourne Dr',
      listed: '$679,000',
      sold: '$695,000',
      daysOnMarket: 8,
      feature: 'Updated kitchen',
    },
    {
      address: '7168 Royal Liverpool',
      listed: '$669,000',
      sold: '$679,000',
      daysOnMarket: 11,
      feature: 'Pool',
    },
    {
      address: '7135 Royal Aberdeen',
      listed: '$689,000',
      sold: '$712,000',
      daysOnMarket: 6,
      feature: 'Solar panels',
    },
  ]

  return (
    <section id="area-insight" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Silverstone Ranch: 2025 Seller&apos;s Market Insights
        </h2>
        <p className="text-center text-gray-600 mb-12">Last updated: March 30, 2025</p>

        {/* Market Advantage */}
        <div className="bg-white rounded-lg p-8 mb-8 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Market Advantage: Historically Low Inventory</h3>
          <p className="text-gray-700 mb-4">
            Sellers in Silverstone Ranch are uniquely positioned in today&apos;s market:
          </p>
          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="flex items-start">
              <span className="text-green-600 mr-2 font-bold">•</span>
              <span>Only <strong>6 active listings</strong> in your price range</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 font-bold">•</span>
              <span><strong>32 qualified buyers</strong> actively searching for homes</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 font-bold">•</span>
              <span>Multiple offers are becoming the norm</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 font-bold">•</span>
              <span>Homes selling for <strong>3-5% above asking price</strong> on average</span>
            </li>
          </ul>
        </div>

        {/* Time to Sell */}
        <div className="bg-white rounded-lg p-8 mb-8 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Time to Sell: Accelerating Market Trends</h3>
          <p className="text-gray-700 mb-4">
            Over the past 90 days, sales have gained momentum:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-sm text-gray-600">Average days on market</div>
              <div className="text-xs text-green-600 mt-1">(down from 21 last quarter)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.2</div>
              <div className="text-sm text-gray-600">Days to first offer</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-sm text-gray-600">Showings before offer</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-sm text-gray-600">Selling at or above list price</div>
            </div>
          </div>
        </div>

        {/* Recent Sales */}
        <div className="bg-white rounded-lg p-8 mb-8 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Recent Sales Highlighting Strong Values</h3>
          <p className="text-gray-700 mb-6">
            Recent comparable sales in the neighborhood showcase Silverstone Ranch&apos;s strong market performance:
          </p>
          <div className="space-y-4">
            {recentSales.map((sale, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                <div className="font-semibold text-gray-900">{sale.address}</div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Listed:</span> {sale.listed} |{' '}
                  <span className="font-medium">Sold:</span> {sale.sold} |{' '}
                  <span className="font-medium">Days on market:</span> {sale.daysOnMarket}
                </div>
                <div className="text-sm text-blue-600 mt-1">
                  <strong>Key feature:</strong> {sale.feature}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price Momentum */}
        <div className="bg-white rounded-lg p-8 mb-8 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Price Momentum: Steady Appreciation</h3>
          <p className="text-gray-700 mb-6">
            Silverstone Ranch continues to demonstrate impressive growth:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">+2.1%</div>
              <div className="text-sm text-gray-600">Current quarter</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">+8.2%</div>
              <div className="text-sm text-gray-600">Year-to-date</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">+15.4%</div>
              <div className="text-sm text-gray-600">Year-over-year</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">+42%</div>
              <div className="text-sm text-gray-600">Five-year total</div>
            </div>
          </div>
          <p className="text-gray-700 mt-6">
            This consistent upward trend reflects sustained high demand from buyers.
          </p>
        </div>

        {/* Optimal Selling Periods */}
        <div className="bg-white rounded-lg p-8 mb-8 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Strategic Timing for Maximum Return</h3>
          <p className="text-gray-700 mb-6">Data highlights the following prime windows for selling:</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
              <h4 className="font-semibold text-gray-900 mb-2">March 15 – May 30</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Highest buyer activity</li>
                <li>• Strongest offers</li>
                <li>• Fastest sales</li>
              </ul>
            </div>
            <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
              <h4 className="font-semibold text-gray-900 mb-2">September 1 – October 15</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Peak corporate relocations</li>
                <li>• Less competition</li>
                <li>• Highly motivated buyers</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <h4 className="font-semibold text-gray-900 mb-2">Current Market Opportunity:</h4>
            <p className="text-gray-700 text-sm">
              The next 60 days present an ideal selling window due to rising interest rates creating buyer 
              urgency, extremely low inventory levels, a robust pool of qualified buyers, and the approach 
              of peak selling season.
            </p>
          </div>
        </div>

        {/* Competitive Edge */}
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Your Home&apos;s Competitive Edge</h3>
          <p className="text-gray-700 mb-4">
            Your home boasts several key advantages in the current market:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Above-average lot size</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Premium golf course location</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Recent updates</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Energy-efficient features</span>
            </li>
          </ul>
          <p className="text-gray-700 mt-6">
            Combined with a tailored marketing strategy, these factors position your home to achieve top 
            dollar in today&apos;s competitive market.
          </p>
        </div>
      </div>
    </section>
  )
}

