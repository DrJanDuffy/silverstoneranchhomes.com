'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Phone, Mail } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/contact-info'

const valuationSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Phone number is required'),
  address: z.string().optional(),
  propertyDetails: z.string().optional(),
})

type ValuationFormData = z.infer<typeof valuationSchema>

const valuationSteps = [
  {
    title: 'Neighborhood Analytics',
    description:
      'Review Silverstone sub-association data, including inventory levels, average price per square foot, and absorption rates for the past 90 days.',
  },
  {
    title: 'Property Condition Review',
    description:
      'Document upgrades, roof age, HVAC service history, energy-efficient improvements, and landscape enhancements that influence buyer perception.',
  },
  {
    title: 'Comparable Sales & Active Competition',
    description:
      'Compare similar floor plans, lot orientations, and golf course adjacency to determine pricing lanes and negotiation leverage.',
  },
  {
    title: 'Pricing Strategy Roadmap',
    description:
      'Provide a tiered pricing plan with projected days on market, showing schedules, and escalation responses aligned with your timeline.',
  },
]

const marketFactors = [
  {
    label: 'Guard-Gated Demand',
    insight:
      'Silverstone remains a top choice for buyers prioritizing security and mature landscaping—driving consistent appreciation even as new northwest communities open.',
  },
  {
    label: 'Golf Course Status',
    insight:
      'The dormant course requires targeted disclosure and negotiation strategy. Dr. Duffy tracks city filings and HOA updates weekly to inform pricing.',
  },
  {
    label: 'Seasonal Trends',
    insight:
      'Relocation traffic peaks November through March. Sellers who prep in Q4 capture out-of-state interest seeking spring closings.',
  },
  {
    label: 'Renovation ROI',
    insight:
      'Smart thermostats, refreshed landscaping, and updated kitchens deliver the strongest return in Silverstone—often recouping 110%+ at resale.',
  },
]

const sellerBenefits = [
  {
    title: '30-Page Market Report',
    detail:
      'Includes micro-neighborhood stats, heat maps, buyer demographics, and trend commentary so you understand every variable impacting value.',
  },
  {
    title: 'Customized Listing Timeline',
    detail:
      'Receive a day-by-day playbook from pre-list prep through closing, covering staging, photography, marketing campaigns, and buyer follow-up cadence.',
  },
  {
    title: 'Offer Review Framework',
    detail:
      'Dr. Duffy summarizes pros and cons of each offer—financing strength, contingency lengths, rent-back terms—so you can compare apples to apples quickly.',
  },
  {
    title: 'Post-Sale Concierge',
    detail:
      'Coordinate movers, donation pickups, utility transfers, and relocation resources to simplify your transition after closing.',
  },
]

export default function HomeValuationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ValuationFormData>({
    resolver: zodResolver(valuationSchema),
  })

  const onSubmit = async (data: ValuationFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/valuation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSuccess(true)
        reset()
      } else {
        throw new Error('Failed to submit')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to submit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
            Free Home Valuation
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get Your Home&apos;s Value in 60 Seconds
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what your Silverstone Ranch home is worth in today&apos;s market. 
            Get a comprehensive market analysis and find out how to sell for 15% above market average.
          </p>
        </div>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Your Silverstone Valuation Works</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A quick online estimate rarely captures the nuance of Silverstone sub-associations, guard-gated premiums, and golf
            course disclosures. Dr. Duffy combines technology with on-the-ground insight so you receive a pricing strategy rooted
            in reality.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
            {valuationSteps.map((step) => (
              <div key={step.title} className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Market Factors Influencing 2025 Pricing</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            November 2025 market conditions favor well-presented Silverstone homes, yet strategic preparation remains essential.
            These data points guide pricing, staging, and negotiation planning.
          </p>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            {marketFactors.map((factor) => (
              <div key={factor.label} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{factor.label}</h3>
                <p>{factor.insight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">15%</div>
            <div className="text-sm text-gray-600">Above Market Average</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">60s</div>
            <div className="text-sm text-gray-600">Quick Valuation</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Free & No Obligation</div>
          </div>
        </div>

        {isSuccess ? (
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 mb-6">
              <svg
                className="h-10 w-10 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Thank You!</h2>
            <p className="text-lg text-gray-600 mb-2">
              We&apos;ve received your home valuation request.
            </p>
            <p className="text-gray-600 mb-8">
              Dr. Jan Duffy will contact you within 24 hours with your comprehensive 
              market analysis and property valuation.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => setIsSuccess(false)}
                className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                Submit Another Request
              </button>
              <div>
                <a
                  href="/"
                  className="inline-block text-blue-600 hover:text-blue-700 font-medium"
                >
                  Return to Home
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Complete the Form Below
              </h2>
              <p className="text-gray-600">
                Fill out the form and we&apos;ll provide you with a comprehensive home valuation 
                based on current market data for Silverstone Ranch.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone *
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Property Address
                </label>
                <input
                  {...register('address')}
                  type="text"
                  id="address"
                  placeholder="e.g., Silverstone Ranch address, Las Vegas, NV 89131"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                />
              </div>

              <div>
                <label
                  htmlFor="propertyDetails"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Property Details (bedrooms, bathrooms, square feet, etc.)
                </label>
                <textarea
                  {...register('propertyDetails')}
                  id="propertyDetails"
                  rows={4}
                  placeholder="e.g., 3 bedrooms, 2.5 bathrooms, 2,500 sq ft, built in 2005"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {isSubmitting ? 'Submitting...' : 'Get My Free Home Valuation'}
              </button>
            </form>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-gray-200 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    What You&apos;ll Receive
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Comprehensive market analysis for your property</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Comparable sales data from Silverstone Ranch</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Recommended listing price range</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Expert insights from Dr. Jan Duffy, Top 1% REALTOR®</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Agent Contact Card */}
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                      <img
                        src="/images/agent/dr-jan-duffy-headshot-03.jpg"
                        alt="Dr. Jan Duffy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Dr. Jan Duffy, Top 1% REALTOR®
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Specialized expertise in Silverstone Ranch luxury homes
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <a
                        href={`tel:${CONTACT_INFO.phone.tel}`}
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        <Phone className="h-4 w-4" />
                        {CONTACT_INFO.phone.display}
                      </a>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        <Mail className="h-4 w-4" />
                        Email Me
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Privacy Note */}
              <div className="text-xs text-gray-500 text-center">
                Your information is secure and will only be used to provide your home valuation. 
                We respect your privacy and will never share your information.
              </div>
            </div>
            <section className="mt-16 bg-white rounded-lg shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Sellers Gain from This Valuation</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Beyond a pricing number, you’ll receive strategic guidance designed to maximize proceeds and minimize stress. Dr.
                Duffy’s concierge approach keeps you informed and supported throughout the process.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
                {sellerBenefits.map((benefit) => (
                  <div key={benefit.title} className="rounded-2xl border border-amber-200 bg-amber-50/80 p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-amber-900 mb-2">{benefit.title}</h3>
                    <p>{benefit.detail}</p>
                  </div>
                ))}
              </div>
            </section>

              <section className="mt-16 bg-white rounded-lg shadow-xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Silverstone Valuation Methodology</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Online estimators rarely account for gated access, desert landscaping upgrades, or the nuances of the dormant golf
                  course. Dr. Duffy’s valuation process blends hyperlocal data with on-the-ground insight so you understand pricing
                  lanes and negotiation leverage before you hit the market.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
                  <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Micro-Neighborhood Comps</h3>
                    <p>Compare your home against recent sales in The Palms, Silverlake, Pinehurst, and non-gated enclaves, adjusting for lot orientation, upgrades, and golf course proximity.</p>
                  </div>
                  <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Buyer Demand Signals</h3>
                    <p>Track relocation interest, cash vs. financed purchases, and days-on-market trends to anticipate offer velocity and escalation tactics.</p>
                  </div>
                  <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Upgrade & Condition Audit</h3>
                    <p>Document flooring, kitchen, and outdoor enhancements alongside mechanical system age to craft value narratives buyers and appraisers respect.</p>
                  </div>
                </div>
              </section>

              <section className="mt-16 bg-white rounded-lg shadow-xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Market Trends to Watch</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  November 2025 performance demonstrates the resilience of Silverstone Ranch. Use these data points to prepare for the
                  next quarter and align listing decisions with buyer expectations.
                </p>
                <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
                  <li><strong>Median Sale Price:</strong> $685,000 (+5.2% YoY) with renovated single-story homes leading appreciation.</li>
                  <li><strong>Buyer Mix:</strong> 48% relocation cash or jumbo-financed purchasers; 32% move-up Las Vegas residents; 20% investors targeting townhomes.</li>
                  <li><strong>List-to-Sale Ratio:</strong> 101.8% when listings launch with professional staging, twilight photography, and transparent golf course disclosures.</li>
                  <li><strong>Days on Market:</strong> 13-day average with 72-hour negotiation windows for turnkey properties.</li>
                </ul>
              </section>

              <section className="mt-16 bg-white rounded-lg shadow-xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Seller Readiness Checklist</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Use this checklist to align timelines and resources before listing. Dr. Duffy’s concierge team can coordinate each step.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
                  <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-amber-900 mb-2">30–45 Days Before Launch</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Schedule landscaping refresh and exterior paint touch-ups.</li>
                      <li>Complete pre-list inspections (roof, HVAC, pool, plumbing).</li>
                      <li>Order HOA resale package and golf course disclosure addenda.</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-amber-900 mb-2">Launch Week Essentials</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Stage indoor-outdoor zones with cafe lighting and desert-friendly furnishings.</li>
                      <li>Coordinate twilight photography, video storytelling, and 3D tours.</li>
                      <li>Prepare a one-sheet summarizing recent upgrades and community amenities.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mt-16 bg-white rounded-lg shadow-xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Valuation Questions</h2>
                <div className="space-y-4">
                  <details className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
                    <summary className="cursor-pointer text-base font-semibold text-gray-900">How do dormant golf course views influence value?</summary>
                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                      Buyers recognize the unique setting but factor landscaping privacy and future development risk. Dr. Duffy balances pricing with allowances for view enhancements so you stay competitive while retaining leverage.</p>
                  </details>
                  <details className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
                    <summary className="cursor-pointer text-base font-semibold text-gray-900">Can upgrades recoup costs during resale?</summary>
                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                      Outdoor kitchens, refreshed primary baths, and smart-home packages deliver the strongest ROI. Your valuation report includes upgrade recommendations tied to current buyer demand.</p>
                  </details>
                  <details className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
                    <summary className="cursor-pointer text-base font-semibold text-gray-900">What if I’m 6–12 months from selling?</summary>
                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                      Dr. Duffy produces a rolling valuation update, contractor calendar, and seasonal maintenance plan so you can pace investments and monitor market shifts leading up to your launch window.</p>
                  </details>
                </div>
              </section>
          </div>
        )}
      </div>
    </div>
  )
}

