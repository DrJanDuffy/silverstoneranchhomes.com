import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Silverstone Ranch Market Insights | November 2025 Housing Trends',
  description:
    'Review Silverstone Ranch housing trends for November 2025 including median prices, price per square foot, days on market, and buyer vs. seller conditions.',
  keywords: [
    'Silverstone Ranch market report',
    'Silverstone Ranch real estate trends 2025',
    'Centennial Hills housing data',
    'Las Vegas real estate statistics November 2025',
    'Silverstone Ranch days on market',
  ],
}

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://silverstoneranchhomes.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Market Insights',
        item: 'https://silverstoneranchhomes.com/market-insights',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Silverstone Ranch Real Estate Market Insights - November 2025',
    description:
      'Explore the latest Silverstone Ranch real estate performance metrics, including pricing trends, days on market, buyer demand, and future outlook as of November 2025.',
    author: {
      '@type': 'Person',
      name: 'Dr. Jan Duffy',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Silverstone Ranch Homes',
      url: 'https://silverstoneranchhomes.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://silverstoneranchhomes.com/market-insights',
    },
    datePublished: '2025-11-07',
    dateModified: '2025-11-07',
  },
]

const primaryMetrics = [
  {
    label: 'Median Sale Price',
    value: '$685,000',
    change: '+5.2% YoY',
    description:
      'Driven by renovated guard-gated homes and relocation buyers prioritizing security and proximity to the 215 beltway.',
  },
  {
    label: 'Price Per Sq. Ft.',
    value: '$284',
    change: '+3.8% YoY',
    description:
      'Tight inventory for single-story floor plans continues to push price per square foot higher across all enclaves.',
  },
  {
    label: 'Average Days on Market',
    value: '13 Days',
    change: '-4 Days MoM',
    description:
      'Well-prepped listings secure offers within two weeks; homes requiring updates average 24 days.',
  },
  {
    label: 'Active Listings',
    value: '18 Homes',
    change: '-12% MoM',
    description:
      'Seasonal slowdown plus limited resale inventory creates urgency for buyers with relocation timelines.',
  },
]

const buyerSellerSignals = [
  {
    title: 'Seller Advantage',
    insight:
      'Negotiable items include closing timeline and appliance packages, but price reductions are rare when homes are staged and priced to November 2025 comps.',
  },
  {
    title: 'Buyer Leverage',
    insight:
      'Use golf course status disclosures, HOA landscaping requirements, and appraisal data to request credits for landscape enhancements or closing costs.',
  },
  {
    title: 'Financing Trends',
    insight:
      'Jumbo loans and cash offers account for 48% of closed sales. Rate buydowns are increasingly used to compete with cash contingencies.',
  },
]

const recentSales = [
  {
    address: 'Silverlake Gated Residence',
    listPrice: '$699,500',
    salePrice: '$710,000',
    daysOnMarket: 7,
    highlight: 'Outdoor living upgrade plus three-car garage',
  },
  {
    address: 'The Palms Guard-Gated Estate',
    listPrice: '$785,000',
    salePrice: '$799,000',
    daysOnMarket: 9,
    highlight: 'Remodeled kitchen and pool cabana',
  },
  {
    address: 'Pinehurst Townhome',
    listPrice: '$415,000',
    salePrice: '$420,000',
    daysOnMarket: 11,
    highlight: 'Golf corridor views with HOA-maintained landscape',
  },
]

const zipComparisons = [
  { area: 'Silverstone Ranch (89131)', medianPrice: '$685K', dom: '13', pricePerSqFt: '$284' },
  { area: 'Providence (89166)', medianPrice: '$555K', dom: '18', pricePerSqFt: '$252' },
  { area: 'Skye Canyon (89166)', medianPrice: '$612K', dom: '21', pricePerSqFt: '$265' },
  { area: 'Summerlin North (89134)', medianPrice: '$745K', dom: '16', pricePerSqFt: '$301' },
]

export default function MarketInsightsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            Market Insights · November 2025
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Silverstone Ranch Real Estate Market Trends
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the Silverstone Ranch housing market with Dr. Jan Duffy’s latest pricing data, buyer demand indicators, and strategic guidance for both buyers and sellers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {primaryMetrics.map((metric) => (
            <div key={metric.label} className="bg-white rounded-lg shadow-lg p-6 border border-blue-50">
              <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">{metric.label}</p>
              <p className="text-3xl font-bold text-blue-700 mb-1">{metric.value}</p>
              <p className="text-sm font-semibold text-green-600 mb-3">{metric.change}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {buyerSellerSignals.map((signal) => (
            <div key={signal.title} className="bg-white rounded-lg shadow-lg p-8 border border-slate-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{signal.title}</h2>
              <p className="text-gray-600 leading-relaxed">{signal.insight}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Recent Closings</h2>
              <p className="text-sm text-gray-500">Recorded through November 3, 2025 · Source: MLS + Dr. Duffy private sales</p>
            </div>
            <Link
              href="/request-info"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              Request Comparable Sales Report
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {recentSales.map((sale) => (
              <div key={sale.address} className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{sale.address}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold text-gray-900">List:</span> {sale.listPrice}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold text-gray-900">Sold:</span> {sale.salePrice}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  <span className="font-semibold text-gray-900">DOM:</span> {sale.daysOnMarket}
                </p>
                <p className="text-sm text-gray-700">{sale.highlight}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Northwest Las Vegas Comparison Snapshot
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Area
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Median Price
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Days on Market
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price / Sq Ft
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {zipComparisons.map((item) => (
                  <tr key={item.area}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.area}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.medianPrice}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.dom}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.pricePerSqFt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 md:p-12 text-white mb-16">
          <h2 className="text-3xl font-bold mb-4">Tailored Strategy for Your Goals</h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl">
            Whether you’re upsizing within Silverstone Ranch or relocating to Centennial Hills, Dr. Jan Duffy delivers the data, negotiation advantage, and vendor support needed for a seamless move.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/home-valuation"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl text-center"
            >
              Get Updated Home Valuation
            </Link>
            <Link
              href="/buyers-checklist"
              className="px-6 py-3 bg-blue-500 text-white border-2 border-white rounded-lg font-semibold hover:bg-blue-400 transition-all text-center"
            >
              Review Buyer Due Diligence Checklist
            </Link>
            <a
              href="tel:7025001530"
              className="px-6 py-3 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-all text-center"
            >
              Call Dr. Jan Duffy • (702) 500-1530
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Will the dormant golf course impact my property value?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Buyers still pay premiums for guard-gated access, school zoning, and remodeled interiors. However, pricing models separate golf frontage value until redevelopment plans or landscaping enhancements are confirmed. Request Dr. Duffy’s valuation models to price confidently.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Are price reductions expected heading into 2026?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Inventory remains constrained and migration from California/Nevada job hubs continues. Expect moderate appreciation with stronger competition for move-in-ready properties and custom lots.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How can I position my offer to win in Silverstone Ranch?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Pair strong financing or cash reserves with appraisal gap coverage, flexible closing dates, and clear HOA compliance assurances. Dr. Duffy crafts competitive yet protected offers for every client scenario.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

