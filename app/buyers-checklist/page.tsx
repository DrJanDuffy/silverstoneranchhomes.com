import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Silverstone Ranch Buyer Checklist | Due Diligence & Closing Timeline',
  description:
    'Follow the step-by-step Silverstone Ranch buyer checklist created by Dr. Jan Duffy to cover financing, HOA disclosures, inspections, and closing coordination.',
  keywords: [
    'Silverstone Ranch buyer checklist',
    'buying a home due diligence Las Vegas',
    'Silverstone Ranch escrow timeline',
    'HOA documents Silverstone Ranch',
    'Silverstone Ranch inspection checklist',
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
        name: 'Buyer Checklist',
        item: 'https://silverstoneranchhomes.com/buyers-checklist',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Silverstone Ranch Buyer Checklist',
    description:
      'A step-by-step guide for purchasing a Silverstone Ranch home, including offer prep, inspections, HOA document review, and closing coordination.',
    supply: {
      '@type': 'HowToSupply',
      name: 'Earnest money deposit, inspection funds, HOA document fees',
    },
    tool: {
      '@type': 'HowToTool',
      name: 'Buyer agent guidance, lender pre-approval, inspection vendors',
    },
    totalTime: 'P45D',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Consult & Get Pre-Approved',
        text: 'Meet with Dr. Jan Duffy to align goals, secure financing pre-approval, and receive curated property lists.',
      },
      {
        '@type': 'HowToStep',
        name: 'Offer Strategy & Negotiation',
        text: 'Review comps, golf course disclosures, and HOA rules to craft a competitive yet protected offer.',
      },
      {
        '@type': 'HowToStep',
        name: 'Due Diligence Window',
        text: 'Order inspections, review HOA resale package, confirm insurance coverage, and evaluate environmental risks.',
      },
      {
        '@type': 'HowToStep',
        name: 'Closing & Move-In Coordination',
        text: 'Finalize loan conditions, walkthrough the property, and coordinate move-in with HOA gate passes and vendors.',
      },
    ],
  },
]

const checklistSections = [
  {
    title: 'Before You Write an Offer',
    items: [
      'Complete financing pre-approval or proof-of-funds for cash purchases.',
      'Discuss ideal floor plans, guard-gated priorities, and timing with Dr. Duffy.',
      'Review recent Silverstone Ranch comps plus golf course status disclosures.',
      'Plan 1–2 backup neighborhoods (Providence, Skye Canyon) in case inventory is limited.',
    ],
  },
  {
    title: 'Offer & Negotiation Phase',
    items: [
      'Structure earnest money deposits and contingency timelines with your agent.',
      'Include appraisal gap coverage or rate buydowns if competing with cash offers.',
      'Request HOA resale package, CC&Rs, and budget immediately upon acceptance.',
      'Schedule inspections within 5 days: general, HVAC, roof, sewer scope if recommended.',
    ],
  },
  {
    title: 'Due Diligence Within 10–15 Days',
    items: [
      'Analyze inspection reports and negotiate repairs, credits, or price adjustments.',
      'Review environmental risk guidance for heat, wind, flood, and wildfire planning.',
      'Confirm insurance coverage, including optional flood or windstorm riders.',
      'Evaluate HOA meeting minutes and special assessment history for upcoming projects.',
    ],
  },
  {
    title: 'Loan Approval & Closing Prep',
    items: [
      'Provide lenders updated documents; lock interest rate and order appraisal.',
      'Coordinate closing timeline with your current housing or relocation provider.',
      'Arrange utilities transfer, mover schedules, and HOA gate access forms.',
      'Plan final walkthrough 48 hours before closing to confirm condition and repairs.',
    ],
  },
]

const downloadableHighlights = [
  'Printable due diligence checklist in PDF format (provided after consultation).',
  'Vendor roster for inspections, HVAC service, landscapers, and insurance advisors.',
  'Budget worksheet covering closing costs, reserves, and post-move upgrades.',
]

export default function BuyersChecklistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-slate-200 text-slate-800 rounded-full text-sm font-semibold mb-6">
            Buyer Toolkit · November 2025
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Silverstone Ranch Buyer Checklist
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Follow this step-by-step guide from Dr. Jan Duffy to navigate financing, golf course disclosures, inspections, and closing coordination in Silverstone Ranch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {checklistSections.map((section) => (
            <div key={section.title} className="bg-white rounded-lg shadow-lg p-8 border border-slate-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h2>
              <ul className="space-y-3 text-sm text-gray-700">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Request the Full Buyer Toolkit
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3 text-sm text-gray-600">
              {downloadableHighlights.map((highlight) => (
                <div key={highlight} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <Link
                href="/request-info"
                className="block text-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                Request Buyer Toolkit Access
              </Link>
              <Link
                href="/book-tour"
                className="block text-center px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all"
              >
                Schedule Property Tours
              </Link>
              <a
                href="tel:7025001530"
                className="block text-center px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all"
              >
                Call Dr. Jan Duffy: (702) 500-1530
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Need Help with the Next Step?</h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl">
            Dr. Jan Duffy coordinates inspections, introduces trusted lenders, and ensures Silverstone Ranch HOA documentation is fully reviewed before you release contingencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/market-insights"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl text-center"
            >
              Review Market Insights
            </Link>
            <Link
              href="/environmental-risk"
              className="px-6 py-3 bg-blue-500 text-white border-2 border-white rounded-lg font-semibold hover:bg-blue-400 transition-all text-center"
            >
              Understand Environmental Risk
            </Link>
            <Link
              href="/buy-with-agent"
              className="px-6 py-3 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-all text-center"
            >
              Learn Why a Buyer Agent Matters
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

