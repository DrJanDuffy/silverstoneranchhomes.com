import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Silverstone Ranch Environmental Risk Assessment | 30-Year Outlook',
  description:
    'Review heat, wildfire, flood, and wind risks for Silverstone Ranch with mitigation strategies and planning tips for homeowners and buyers in Northwest Las Vegas.',
  keywords: [
    'Silverstone Ranch environmental risk',
    'Las Vegas climate risk 2055',
    'Silverstone Ranch flood risk',
    'Silverstone Ranch wildfire preparedness',
    'heat risk Silverstone Ranch homes',
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
        name: 'Environmental Risk',
        item: 'https://silverstoneranchhomes.com/environmental-risk',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Silverstone Ranch Environmental Risk Assessment - November 2025',
    description:
      'Understand environmental and climate-related risks impacting Silverstone Ranch homes over the next 30 years, including mitigation steps for buyers and residents.',
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
      '@id': 'https://silverstoneranchhomes.com/environmental-risk',
    },
    datePublished: '2025-11-07',
    dateModified: '2025-11-07',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the heat risk outlook for Silverstone Ranch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Heat risk is Moderate to High with average summer highs reaching 109°F by 2055. Homes with upgraded HVAC, low-E windows, and desert landscaping perform best. Dr. Jan Duffy connects buyers with energy efficiency contractors to mitigate costs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Silverstone Ranch face wildfire exposure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wildfire risk is Moderate due to proximity to desert preserves. Maintaining defensible space, using fire-resistant roof materials, and enrolling in HOA landscape maintenance are recommended strategies.',
        },
      },
    ],
  },
]

const riskCategories = [
  {
    name: 'Extreme Heat',
    level: 'High',
    projection: 'Average summer highs projected at 109°F by 2055 with more frequent heat advisories.',
    guidance: [
      'Upgrade to high-SEER HVAC systems with smart thermostats.',
      'Install low-E dual pane windows and reflective roof coatings.',
      'Incorporate drought-tolerant landscaping with irrigation audits to conserve water.',
    ],
    color: 'bg-red-50 border-red-200 text-red-900',
  },
  {
    name: 'Wildfire Exposure',
    level: 'Moderate',
    projection: 'Desert preserves north of the community present ember exposure during extended drought seasons.',
    guidance: [
      'Maintain defensible space: clear brush within 30 feet of structures.',
      'Use Class A fire-rated roofing and metal mesh vent covers.',
      'Confirm HOA-approved desert landscaping plans include non-combustible ground cover near foundations.',
    ],
    color: 'bg-orange-50 border-orange-200 text-orange-900',
  },
  {
    name: 'Flooding & Monsoon Storms',
    level: 'Low to Moderate',
    projection: 'Flash flooding risk during monsoon bursts remains due to nearby washes; FEMA Zone X but 2055 projections suggest stronger summer storms.',
    guidance: [
      'Ensure lot grading directs water away from the home and check French drains annually.',
      'Install backflow preventers on irrigation lines and check roof scuppers each spring.',
      'Discuss flood insurance riders even if not lender-required.',
    ],
    color: 'bg-blue-50 border-blue-200 text-blue-900',
  },
  {
    name: 'High Wind Events',
    level: 'Moderate',
    projection: 'Wind gusts exceeding 50 mph are expected 6–8 times per year with microbursts during monsoon season.',
    guidance: [
      'Schedule annual roof inspections and secure clay or concrete tiles.',
      'Upgrade garage doors to wind-rated models to protect structural integrity.',
      'Install outdoor roller shades and anchor patio furnishings to prevent debris.',
    ],
    color: 'bg-teal-50 border-teal-200 text-teal-900',
  },
]

const planningChecklist = [
  {
    title: 'Energy & Cooling Plan',
    description:
      'Budget for HVAC tune-ups twice per year, smart thermostats, and solar screens to manage rising summer temperatures.',
  },
  {
    title: 'Insurance Review',
    description:
      'Meet with a licensed insurance advisor to evaluate riders for flood, wind, and wildfire coverage under Nevada policies.',
  },
  {
    title: 'HOA Compliance',
    description:
      'Coordinate with the Silverstone Ranch HOA for approved landscape materials, desert plant palettes, and maintenance schedules that align with risk mitigation.',
  },
  {
    title: 'Emergency Preparedness',
    description:
      'Create evacuation plans, confirm local shelter locations, and assemble desert-ready emergency kits for family and pets.',
  },
]

export default function EnvironmentalRiskPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold mb-6">
            Environmental Readiness · Updated November 2025
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Silverstone Ranch Environmental Risk Assessment
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Understand the climate-related considerations for Silverstone Ranch and how Dr. Jan Duffy helps homeowners and buyers plan for heat, wildfire, flood, and wind exposure over the next 30 years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {riskCategories.map((risk) => (
            <div key={risk.name} className={`rounded-lg border shadow-lg p-8 ${risk.color}`}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">{risk.name}</h2>
                <span className="text-sm font-semibold uppercase tracking-wide">{risk.level} Risk</span>
              </div>
              <p className="text-base font-medium mb-4">{risk.projection}</p>
              <ul className="space-y-2 text-sm">
                {risk.guidance.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-current"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            30-Year Planning Checklist for Silverstone Ranch Residents
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {planningChecklist.map((item) => (
              <div key={item.title} className="bg-emerald-50 rounded-lg p-6 border border-emerald-100">
                <h3 className="text-xl font-semibold text-emerald-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-lg shadow-xl p-8 md:p-12 text-white mb-16">
          <h2 className="text-3xl font-bold mb-4">Partner with Local Experts</h2>
          <p className="text-lg text-emerald-100 mb-6 max-w-2xl">
            Dr. Jan Duffy collaborates with HVAC specialists, insurance advisors, and landscaping crews experienced in desert climate resilience. Gain a full plan before you buy, sell, or renovate within Silverstone Ranch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/buyers-checklist"
              className="px-6 py-3 bg-white text-emerald-700 rounded-lg font-semibold hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl text-center"
            >
              Review Buyer Due Diligence Checklist
            </Link>
            <Link
              href="/request-info"
              className="px-6 py-3 bg-emerald-500 text-white border-2 border-white rounded-lg font-semibold hover:bg-emerald-400 transition-all text-center"
            >
              Request Environmental Consult
            </Link>
            <a
              href="tel:7025001530"
              className="px-6 py-3 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-all text-center"
            >
              Call Dr. Jan Duffy · (702) 500-1530
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What home upgrades best counter Silverstone heat risk?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Prioritize HVAC upgrades, attic insulation, low-E windows, and automated shading. Desert-friendly landscaping reduces heat islands and conserves water. Dr. Duffy’s vendor partners provide quotes aligned with your budget.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Are special assessments expected for HOA landscape changes?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Current HOA reserves cover ongoing common area maintenance, but drought mitigation initiatives may surface. Stay informed via HOA newsletters and request the latest budget during escrow to plan ahead.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How soon should I line up contractors after closing?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Schedule HVAC evaluations, irrigation audits, and roofing inspections within the first 60 days of ownership to address any seasonal needs before peak summer or monsoon periods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

