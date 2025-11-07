import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why You Need an Agent to Sell Your Silverstone Ranch Home',
  description:
    'Maximize your Silverstone Ranch sale price with Dr. Jan Duffy. Learn how expert marketing, disclosure management, and negotiation protect your equity.',
  keywords: [
    'Silverstone Ranch listing agent',
    'sell Silverstone Ranch home',
    'Las Vegas home selling strategy',
    'Dr. Jan Duffy listing specialist',
    'Silverstone Ranch real estate marketing',
  ],
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Why You Need an Agent to Sell Your Silverstone Ranch Home',
  description:
    'Discover how Dr. Jan Duffy positions Silverstone Ranch properties for top dollar with pre-market prep, pricing strategy, and transparent golf course disclosures.',
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
    '@id': 'https://silverstoneranchhomes.com/sell-with-agent',
  },
}

const sellerAdvantages = [
  {
    title: 'Strategic Pricing & Positioning',
    description:
      'Leverage the latest November 2025 comps, buyer demand in Centennial Hills, and golf course disclosures to price for multiple offers without leaving money on the table.',
  },
  {
    title: 'High-Impact Marketing',
    description:
      'Professional photography, video, and targeted digital campaigns reach affluent relocation buyers seeking guard-gated homes with desert landscaping.',
  },
  {
    title: 'Negotiation Expertise',
    description:
      'Navigate appraisal gaps, inspection requests, and post-possession terms with an agent who has sold throughout Silverstone Ranch’s nine enclaves.',
  },
  {
    title: 'Compliance & Disclosure Guidance',
    description:
      'Ensure HOA, golf course, and property condition disclosures are complete to avoid contract delays or legal exposure.',
  },
]

const marketingPlan = [
  {
    title: 'Home Preparation & Staging',
    detail:
      'Customized checklists prioritize curb appeal, landscape refreshes, and interior staging to highlight Mediterranean architecture and indoor-outdoor living.',
  },
  {
    title: 'Launch Marketing Campaign',
    detail:
      'MLS launch, luxury syndication, social advertising, and geo-targeted email campaigns attract qualified buyers in the first 72 hours.',
  },
  {
    title: 'Offer Review & Negotiation',
    detail:
      'Score offers based on financing strength, contingency timelines, and occupancy needs to secure the best combination of price and terms.',
  },
  {
    title: 'Contract-to-Close Management',
    detail:
      'Coordinate inspections, appraisal, HOA docs, and closing logistics while keeping you informed at every milestone.',
  },
]

export default function SellWithAgentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
            Listing Representation
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why You Need an Agent to Sell Your Silverstone Ranch Home
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Retain maximum equity and close with confidence by teaming with Dr. Jan Duffy—a proven Silverstone Ranch listing specialist with data-driven marketing and negotiation expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {sellerAdvantages.map((item) => (
            <div key={item.title} className="bg-white rounded-lg shadow-lg p-8 border border-green-50">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h2>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Silverstone Ranch Listing Blueprint
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {marketingPlan.map((item) => (
              <div key={item.title} className="bg-green-50 rounded-lg p-6 border border-green-100">
                <h3 className="text-xl font-semibold text-green-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-xl p-8 md:p-12 text-white mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
            List with Dr. Jan Duffy for Maximum Exposure & Results
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3 text-green-100">
              <p>
                • Customized pricing strategy for each Silverstone enclave
              </p>
              <p>
                • Professional media and 3D experiences tailored to luxury buyers
              </p>
              <p>
                • Pre-qualified buyer pool, including relocation and cash purchasers
              </p>
              <p>
                • Transparent communication from listing agreement to closing day
              </p>
            </div>
            <div className="space-y-4">
              <Link
                href="/home-valuation"
                className="block text-center px-6 py-3 bg-white text-green-700 rounded-lg font-semibold hover:bg-green-50 transition-all shadow-lg hover:shadow-xl"
              >
                Get Your Home Valuation
              </Link>
              <Link
                href="/request-info"
                className="block text-center px-6 py-3 bg-green-500 text-white border-2 border-white rounded-lg font-semibold hover:bg-green-400 transition-all"
              >
                Request Listing Consultation
              </Link>
              <a
                href="tel:7025001530"
                className="block text-center px-6 py-3 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                Call Dr. Jan Duffy: (702) 500-1530
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Seller FAQs for Silverstone Ranch
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How do we handle the golf course disclosure?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The May 2025 auction results and dormant course status must be disclosed to buyers. Dr. Duffy provides approved language, comparable sales without golf frontage premiums, and landscaping recommendations to present your home’s value clearly.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What preparation yields the best ROI?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Fresh paint, updated lighting, and professional landscaping deliver the strongest buyer response. Dr. Duffy coordinates vetted vendors and stagings that accentuate desert architecture and guard-gated lifestyle.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Can I align my sale with a relocation timeline?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. Dr. Duffy negotiates lease-back or post-possession terms, coordinates out-of-state movers, and ensures your purchase timeline syncs with the Silverstone closing schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

