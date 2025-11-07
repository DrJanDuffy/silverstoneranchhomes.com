import Link from 'next/link'
import type { Metadata } from 'next'

const coreAmenities = [
  {
    icon: '🌳',
    title: 'Central Park & Greenbelts',
    description:
      'A 6-acre park anchors Silverstone Ranch with lawns, shade structures, picnic pavilions, and rolling greenbelts linking each village.',
  },
  {
    icon: '🎾',
    title: 'Tennis, Pickleball & Courts',
    description:
      'Lighted tennis and pickleball courts, basketball hoops, and open play areas keep residents active from sunrise to dusk.',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Playgrounds & Splash Pads',
    description:
      'Age-specific playgrounds, splash pads, and tot lots provide safe, shaded spaces for families to gather year-round.',
  },
  {
    icon: '🚶',
    title: 'Walking, Biking & Fitness Loops',
    description:
      'Miles of paved trails wrap the former fairways, connecting neighborhoods to parks, schools, and community amenities.',
  },
]

const wellnessHighlights = [
  {
    title: 'Centennial Hills YMCA',
    detail: 'Group fitness, indoor aquatics, and youth programs five minutes from the guard gate.',
  },
  {
    title: 'Mount Charleston & Summerlin Trails',
    detail: 'Elevation escapes, hiking, and cycling routes within 35 minutes.',
  },
  {
    title: 'Centennial Hills Hospital & Clinics',
    detail: 'A 226-bed hospital, VA clinic, and specialty practices within a 10-minute drive.',
  },
  {
    title: 'Floyd Lamb Park & Gilcrease Orchard',
    detail: 'Fishing lagoons, equestrian arenas, and seasonal farm events just north of the community.',
  },
]

export const metadata: Metadata = {
  title: 'Silverstone Ranch Amenities & Lifestyle | Parks, Trails, Clubhouse',
  description:
    'Explore Silverstone Ranch amenities: parks, trails, sports courts, clubhouse programming, HOA services, and nearby wellness resources curated for November 2025.',
}

export default function AmenitiesPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-3">Lifestyle Guide · Updated November 2025</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Silverstone Ranch Amenities & Lifestyle
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Silverstone Ranch delivers a guarded, resort-inspired experience in Centennial Hills. From a 6-acre central park
            to miles of walking loops, the community is designed for families, active adults, and professionals balancing
            luxury with everyday convenience. This guide breaks down the amenity pillars that set Silverstone apart and
            shows how Dr. Jan Duffy helps buyers experience each feature firsthand.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200" id="core-amenities">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Community Amenities</h2>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            The master association invests heavily in common-space upkeep and recreational programming. Landscaped entries,
            rolling greenbelts, and targeted lighting elevate the arrival experience day and night. Residents benefit from
            on-site amenities maintained year-round by professional crews—a key differentiator among Northwest Las Vegas
            enclaves.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {coreAmenities.map((amenity) => (
              <div key={amenity.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm">
                <div className="text-4xl mb-4">{amenity.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{amenity.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200" id="clubhouse-programming">
        <div className="mx-auto max-w-5xl grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Clubhouse Programming & Social Calendar</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              HOA staff coordinate an evolving calendar of events at the main clubhouse. Seasonal celebrations, movie nights,
              youth camps, and themed tastings foster social connection. Meeting rooms and covered patios are available for
              private reservations with refundable deposits, making it easy to host milestone events without leaving the
              neighborhood.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Amenities You Can Reserve</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>Clubhouse great room with catering kitchen and AV hookups for presentations.</li>
              <li>Pool cabanas and shade structures—ideal for summer birthdays or weekend socials.</li>
              <li>Tennis and pickleball courts with night lighting for league play.</li>
              <li>Park pavilions with built-in grills for family reunions and outdoor celebrations.</li>
            </ul>
            <p className="text-gray-700 mt-4 text-sm">
              Reservation requests can be submitted via the CAMCO homeowner portal. Dr. Jan Duffy provides clients with the
              latest fee schedule and insurance requirements so plans stay on track.
            </p>
          </div>
          <aside className="rounded-2xl border border-blue-100 bg-white shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tour Amenities with Dr. Jan Duffy</h3>
            <p className="text-sm text-gray-700 mb-4">
              Schedule a curated community tour covering parks, clubhouse facilities, guard gate operations, and nearby
              conveniences. Dr. Duffy also introduces you to HOA representatives and preferred service vendors.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/book-tour"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
              >
                Schedule a Community Tour
              </Link>
              <Link
                href="/request-info"
                className="inline-flex items-center justify-center rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition"
              >
                Download Amenity Map
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200" id="outdoor-living">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Outdoor Living & Trail Network</h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Silverstone Ranch prioritizes outdoor recreation. Trail loops stitch together each sub-association, allowing
            residents to walk, jog, and bike without crossing major roads. Many pathways border the former golf fairways,
            granting uninterrupted desert vistas. Fitness stations, pet-friendly waste stations, and shaded rest nodes are
            strategically installed to support everyday routines.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Trail Highlights</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li><span className="font-semibold text-blue-600">Fairway Loop:</span> 2.3-mile circuit encircling the dormant golf corridors—ideal for sunrise walks.</li>
            <li><span className="font-semibold text-blue-600">Park Connector:</span> Shortcuts linking Pinehurst, Tuscany, and The Palms to the central park and playgrounds.</li>
            <li><span className="font-semibold text-blue-600">Neighborhood Spurs:</span> Cul-de-sac cut-throughs that lead to nearby schools and bus stops.</li>
            <li><span className="font-semibold text-blue-600">Bike-Friendly Streets:</span> Low-traffic residential lanes with traffic calming and widened shoulders.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200" id="hoa-services">
        <div className="mx-auto max-w-5xl grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">HOA Services & Resident Support</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              The master association, managed by CAMCO, oversees 24/7 guard services, landscaping along the parkways,
              reserve planning, and community communications. Sub-associations within Silverstone Ranch—such as The Palms,
              Tuscany, and Pinehurst—layer on additional services like front-yard maintenance or exterior paint schedules.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Homeowner Tools</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>Online payment portal with automatic draft and credit card options.</li>
              <li>Architectural review submissions handled through a digital ticketing system.</li>
              <li>Visitor management for guard gates via smartphone apps and QR codes.</li>
              <li>Community alerts and event calendars distributed through email and SMS.</li>
            </ul>
          </div>
          <aside className="rounded-2xl border border-blue-100 bg-white shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need the Latest HOA Docs?</h3>
            <p className="text-sm text-gray-700 mb-4">
              Dr. Jan Duffy coordinates resale demand letters, status certificates, and architectural guidelines for buyers
              and sellers—ensuring smooth contingencies and on-time closings.
            </p>
            <Link
              href="/request-info"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
            >
              Request HOA Documentation Support
            </Link>
          </aside>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200" id="wellness-network">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Wellness & Recreation Network Beyond the Gates</h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Centennial Hills is a wellness-forward district. Residents couple on-site amenities with a network of nearby
            resources, including boutique fitness studios, medical centers, and outdoor adventures. Whether you prefer
            curated fitness classes or weekend hikes, Silverstone Ranch keeps healthy living convenient.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {wellnessHighlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200" id="next-steps">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Plan Your Silverstone Ranch Experience</h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Ready to explore amenities in person? Reach out to Dr. Jan Duffy for a curated tour, HOA document review, and a
            tailored lifestyle consultation. Whether you are relocating, upsizing, or investing, you’ll receive concierge
            support across lending, staging, and contract negotiations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/book-tour"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
            >
              Schedule Amenities Tour
            </Link>
            <Link
              href="/homes-for-sale"
              className="inline-flex items-center justify-center rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition"
            >
              Browse Homes Near the Park
            </Link>
            <Link
              href="/buyers-checklist"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition"
            >
              Download Buyer Checklist
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

