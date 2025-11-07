import Link from 'next/link'

export const metadata = {
  title: 'Silverstone Golf Course Status Update 2025 | May Auction Details',
  description:
    'Official November 2025 update on the Silverstone Ranch golf course. Review May 2025 auction results, timeline, future scenarios, and buyer impact before purchasing in 89131.',
}

const timeline = [
  {
    date: '2003 – 2005',
    title: 'Silverstone Golf Club Opens',
    summary:
      '27-hole course anchors the new Silverstone Ranch master plan with luxury homes marketed around fairway views.',
  },
  {
    date: 'September 2015',
    title: 'Course Closure',
    summary:
      'Desert Lifestyles LLC shutters the golf course, triggering years of litigation between the operator, lenders, and homeowners.',
  },
  {
    date: '2016 – 2020',
    title: 'Ownership Disputes & Bankruptcy',
    summary:
      'Stoneridge Parkway LLC takes ownership but files for bankruptcy. Liens, lawsuits, and maintenance issues accumulate across the 270-acre property.',
  },
  {
    date: 'November 19, 2021',
    title: 'Clubhouse Destroyed by Fire',
    summary:
      'The 34,000 sq. ft. clubhouse burns down in an arson fire. Two juveniles are arrested. No redevelopment plan follows.',
  },
  {
    date: 'May 8, 2025',
    title: 'Golf Course Sold at Auction',
    summary:
      'Property sold for approximately $2.8M. Sale closes despite more than $12M in outstanding liens. Buyer identity becomes public upon deed recording (within 30 days).',
  },
  {
    date: 'November 2025',
    title: 'Current Status',
    summary:
      'Course remains closed and unmaintained. No redevelopment application has been filed with the City of Las Vegas or the Silverstone Ranch HOA.',
  },
]

const scenarios = [
  {
    title: 'Restoration Attempt',
    description:
      'The new owner could seek to repair irrigation, club facilities, and reopen the course. Requires 75% HOA approval, significant capital expenditure, and city permitting. No public plan has been announced.',
  },
  {
    title: 'Partial Development',
    description:
      'Portions of the land could be rezoned for residential or mixed-use projects. HOA covenants require super-majority approval and could trigger legal opposition from residents.',
  },
  {
    title: 'Open Space Maintenance',
    description:
      'Owner may keep land as open space with minimal improvements. This scenario maintains view corridors but does not guarantee landscaping upgrades.',
  },
  {
    title: 'Continued Uncertainty',
    description:
      'If no plan gains traction, the land could remain dormant. Buyers should factor in the possibility of ongoing maintenance challenges and unclear long-term outcomes.',
  },
]

const faqs = [
  {
    question: 'Can homeowners force the golf course to reopen?',
    answer:
      'Not directly. The new owner controls the property. Any redevelopment or restoration must comply with city zoning and obtain 75% approval from Silverstone Ranch homeowners per the recorded covenants.',
  },
  {
    question: 'Will my property value decline because the course is closed?',
    answer:
      'Values reflect the current condition—many buyers still value the community for schools, parks, and guard-gated security. However, premiums tied solely to golf frontage are no longer supported until a clear plan emerges.',
  },
  {
    question: 'Is there an HOA assessment planned to maintain the land?',
    answer:
      'No special assessments have been announced as of November 2025. Always request the latest reserve study and HOA financials during due diligence.',
  },
  {
    question: 'How will I know if development is proposed?',
    answer:
      'City of Las Vegas planning meetings and Silverstone Ranch HOA communications will publish notices before any vote. Subscribe below to receive curated updates from Dr. Jan Duffy.',
  },
]

export default function GolfCourseStatusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-16">
        <header className="space-y-6 text-center md:text-left">
          <div className="inline-flex items-center rounded-full border border-amber-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
            Updated November 2025
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Silverstone Ranch Golf Course Status & Buyer Guidance
          </h1>
          <p className="text-lg text-slate-700">
            The Silverstone golf course has been closed since 2015. In May 2025 it changed hands at auction, but no
            redevelopment plan has been announced. Review the verified history, explore realistic scenarios, and learn
            how to factor this uncertainty into purchase decisions.
          </p>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-left shadow-sm">
            <h2 className="text-xl font-semibold text-amber-900">May 2025 Auction at a Glance</h2>
            <ul className="mt-4 space-y-3 text-sm text-amber-900">
              <li>• 270-acre property sold on May 8, 2025 for approximately $2.8 million.</li>
              <li>• Sale closed despite more than $12 million in recorded liens.</li>
              <li>• Buyer identity released upon deed recording (within 30 days of sale).</li>
              <li>• Any redevelopment requires 75% approval from Silverstone Ranch homeowners plus city permitting.</li>
              <li>• Fairways remain unmaintained; former clubhouse site is vacant due to the 2021 fire.</li>
            </ul>
            <p className="mt-4 font-semibold text-amber-900">
              Buyer Impact: Do not assume the golf course will return. Adjust valuations, marketing language, and
              landscaping expectations accordingly.
            </p>
          </div>
        </header>

        <section className="space-y-5">
          <h2 className="text-3xl font-bold text-slate-900">What Buyers Need to Know Right Now</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Views & Landscaping</h3>
              <p className="mt-3 text-sm text-slate-700">
                Homes marketed with “golf course views” currently overlook dormant land with intermittent maintenance. Budget for private landscaping enhancements if view aesthetics are important.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">HOA Voting Rights</h3>
              <p className="mt-3 text-sm text-slate-700">
                Any proposal to repurpose or redevelop requires a 75% affirmative vote of Silverstone Ranch homeowners. Monitor HOA agendas and attend town halls to stay informed.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Valuation Strategy</h3>
              <p className="mt-3 text-sm text-slate-700">
                Appraisals should reflect comparable homes without an operating course. Dr. Jan Duffy provides pricing models that separate school district value, guard-gated security, and the former golf premium.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Disclosure Requirement</h3>
              <p className="mt-3 text-sm text-slate-700">
                Nevada law obligates sellers to disclose the ongoing course closure and auction sale. Ensure your purchase agreement acknowledges the unknown future use of the land.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Timeline: 2003 – 2025</h2>
          <div className="space-y-4">
            {timeline.map((item) => (
              <div key={item.date} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold uppercase tracking-wide text-blue-700">{item.date}</div>
                <h3 className="mt-1 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{item.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Potential Future Scenarios</h2>
          <p className="text-sm text-slate-600">
            No plan has been filed as of November 2025. The possibilities below are distilled from HOA counsel, planning
            experts, and conversations with community stakeholders.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {scenarios.map((scenario) => (
              <article key={scenario.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">{scenario.title}</h3>
                <p className="mt-3 text-sm text-slate-700">{scenario.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-base font-semibold text-slate-900">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm text-slate-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 p-10 text-white shadow-xl">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold">Stay Updated on Golf Course Developments</h2>
              <p className="text-sm text-blue-100">
                Receive curated alerts when public records reveal the new owner&apos;s plans, HOA voting dates are announced,
                or city hearings are scheduled. No spam—just actionable intelligence for Silverstone Ranch homeowners and
                buyers.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link
                href="/request-info"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Get Golf Course Alerts
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Discuss Buyer Strategy with Dr. Duffy
              </Link>
            </div>
          </div>
        </section>

        <footer className="space-y-4 text-xs text-slate-500">
          <p>
            Disclaimer: Information is deemed reliable but not guaranteed. Verify all facts, timelines, and HOA
            requirements independently with the Silverstone Ranch Master Association and the City of Las Vegas before
            closing on a property.
          </p>
          <p>
            Need a comprehensive due diligence plan? Visit the{' '}
            <Link href="/buyers-checklist" className="font-semibold text-blue-700 hover:text-blue-900">
              Silverstone Ranch Buyer&apos;s Checklist
            </Link>{' '}
            to review HOA financials, environmental risk, school zoning, and more.
          </p>
        </footer>
      </div>
    </div>
  )
}

