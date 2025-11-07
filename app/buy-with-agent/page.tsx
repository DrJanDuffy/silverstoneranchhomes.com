import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why You Need a Buyer Agent for Silverstone Ranch Homes',
  description:
    'Discover why partnering with Dr. Jan Duffy as your buyer agent in Silverstone Ranch gives you negotiation leverage, inside access to listings, and a seamless closing.',
  keywords: [
    'Silverstone Ranch buyer agent',
    'buying a home Silverstone Ranch',
    'Las Vegas buyer representation',
    'Dr. Jan Duffy real estate agent',
    'Silverstone Ranch real estate guidance',
  ],
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Why You Need a Buyer Agent for Silverstone Ranch Homes',
  description:
    'Expert guidance from Dr. Jan Duffy helps Silverstone Ranch buyers uncover inventory, negotiate pricing, and navigate HOA due diligence in Northwest Las Vegas.',
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
    '@id': 'https://silverstoneranchhomes.com/buy-with-agent',
  },
}

const benefitHighlights = [
  {
    title: 'Unlock Guard-Gated Inventory',
    description:
      'Gain access to homes that never hit public portals through Dr. Duffy’s Silverstone Ranch network of homeowners, lenders, and relocation partners.',
  },
  {
    title: 'Negotiate with Market Precision',
    description:
      'Use current November 2025 pricing models, HOA assessments, and golf course disclosures to secure fair value without overpaying for view corridors.',
  },
  {
    title: 'Navigate HOA & Golf Course Disclosures',
    description:
      'Understand community covenants, dormant golf course status, and future development scenarios before submitting an offer.',
  },
  {
    title: 'Protect Your Earnest Money',
    description:
      'Coordinate inspections, appraisal timelines, and contingency releases so your investment is secure throughout closing.',
  },
]

const processSteps = [
  {
    title: 'Strategy Consultation',
    detail:
      'Clarify must-haves, financing readiness, and timelines. Receive curated neighborhood insights and comparable sales for each Silverstone enclave.',
  },
  {
    title: 'Pre-Market Property Alerts',
    detail:
      'Leverage Dr. Duffy’s private database for move-in ready homes, remodel opportunities, and new construction nearby before they hit MLS.',
  },
  {
    title: 'Offer Structuring & Negotiation',
    detail:
      'Craft competitive offers with escalation clauses, appraisal gap coverage, and seller concessions aligned to the latest market data.',
  },
  {
    title: 'Due Diligence & Closing',
    detail:
      'Coordinate inspections, review HOA resale packages, negotiate repairs, and ensure a smooth handoff on closing day.',
  },
]

export default function BuyWithAgentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            Buyer Representation
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why You Need a Buyer Agent for Silverstone Ranch Homes
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Partner with Dr. Jan Duffy to unlock off-market inventory, negotiate confidently, and complete due diligence in the Silverstone Ranch community of Northwest Las Vegas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefitHighlights.map((item) => (
            <div key={item.title} className="bg-white rounded-lg shadow-lg p-8 border border-blue-50">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h2>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            The Silverstone Ranch Buying Framework
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {processSteps.map((step) => (
              <div key={step.title} className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 md:p-12 text-white mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
            Secure Your Silverstone Ranch Home with Expert Representation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3 text-blue-100">
              <p>
                • Personalized relocation guidance for out-of-state buyers
              </p>
              <p>
                • Daily market monitoring for price reductions and new releases
              </p>
              <p>
                • HOA document review and golf course status disclosures
              </p>
              <p>
                • Trusted lender, inspector, and contractor introductions
              </p>
            </div>
            <div className="space-y-4">
              <Link
                href="/request-info"
                className="block text-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
              >
                Request Buyer Strategy Session
              </Link>
              <Link
                href="/book-tour"
                className="block text-center px-6 py-3 bg-blue-500 text-white border-2 border-white rounded-lg font-semibold hover:bg-blue-400 transition-all"
              >
                Schedule a Private Tour
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
            Buyer Questions Answered
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How competitive is Silverstone Ranch in late 2025?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The community remains a preferred choice for guard-gated security, top Centennial Hills schools, and proximity to Floyd Lamb Park. Homes are averaging under two weeks on market with multiple offers on renovated properties. Dr. Duffy monitors every price adjustment and notifies clients immediately.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Can I negotiate despite a seller’s market?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. Updated market stats, appraisal data, and the dormant golf course timeline provide leverage. Dr. Duffy structures offers that balance aggressive terms with protections for appraisal, inspection, and HOA reviews.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What due diligence is unique to Silverstone Ranch?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Buyers must review HOA resale packages, understand golf course status, confirm school zoning, and verify landscape maintenance obligations. Dr. Duffy helps decode every document so you purchase with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

