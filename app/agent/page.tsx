import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, ExternalLink } from 'lucide-react'

export default function AgentPage() {
  const headshots = [
    {
      src: '/images/agent/dr-jan-duffy-headshot-01.jpg',
      caption: 'Studio portrait highlighting Dr. Duffy\'s client-first approach',
    },
    {
      src: '/images/agent/dr-jan-duffy-headshot-02.jpg',
      caption: 'Friendly headshot used across valuation and contact cards',
    },
    {
      src: '/images/agent/dr-jan-duffy-headshot-03.jpg',
      caption: 'Professional profile suited for relocation consultations',
    },
    {
      src: '/images/agent/dr-jan-duffy-headshot-04.jpg',
      caption: 'Neighborhood walk-through readiness',
    },
    {
      src: '/images/agent/dr-jan-duffy-headshot-05.jpg',
      caption: 'Community event presence in Centennial Hills',
    },
    {
      src: '/images/agent/dr-jan-duffy-headshot-06.jpg',
      caption: 'Media-ready portrait for market insights and podcasts',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Meet Dr. Jan Duffy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Top 1% Las Vegas REALTOR® specializing in Silverstone Ranch luxury homes
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Agent Photo */}
            <div className="relative">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-xl bg-gray-200">
                <Image
                  src="/images/agent/dr-jan-duffy-headshot-01.jpg"
                  alt="Dr. Jan Duffy REALTOR"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Agent Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                With specialized expertise in luxury homes and new construction in sought-after communities 
                like Silverstone Ranch, Dr. Duffy offers a complete home-buying solution.
              </h2>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4 text-xl">
                  Making Your Dream Home Attainable:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 text-xl">✓</span>
                    <span className="text-lg">Access to trusted lenders with competitive rates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 text-xl">✓</span>
                    <span className="text-lg">Variety of financing options to suit your needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 text-xl">✓</span>
                    <span className="text-lg">Quick pre-approval process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 text-xl">✓</span>
                    <span className="text-lg">Same-day private showings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 text-xl">✓</span>
                    <span className="text-lg">Expert negotiation for this luxury home</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 text-xl">✓</span>
                    <span className="text-lg">Seamless transaction management</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                As your dedicated agent, Dr. Duffy connects you with her network of preferred lenders who 
                can create the perfect financing package for this property. From conventional loans to 
                jumbo mortgages, her financial partners ensure you get the most favorable terms.
              </p>

              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Experience stress-free luxury home buying with an agent who handles every detail - from 
                financing to final keys. Available 24/7 to answer your questions and guide you through 
                each step.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Updated 2025 Headshots</h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto text-center mb-8">
            Browse the latest professional headshots for Dr. Jan Duffy. These assets are optimized for listing
            presentations, relocation packets, local media, and digital marketing campaigns throughout Silverstone
            Ranch and the greater Las Vegas market.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {headshots.map((photo) => (
              <figure
                key={photo.src}
                className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-sm transition hover:shadow-lg"
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  width={600}
                  height={750}
                  className="h-full w-full object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <figcaption className="px-4 py-3 text-sm text-gray-600">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Information</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <a
                href="tel:7025001530"
                className="text-lg font-semibold text-blue-600 hover:text-blue-700"
              >
                (702) 500-1530
              </a>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <a
                href="mailto:DrDuffySells@SilverStoneRanchHomes.com"
                className="text-lg font-semibold text-blue-600 hover:text-blue-700 break-all"
              >
                DrDuffySells@SilverStoneRanchHomes.com
              </a>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <ExternalLink className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Website</h3>
              <a
                href="https://letmehelpyourealtor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-600 hover:text-blue-700"
              >
                LetMeHelpYouRealtor.com
              </a>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              License: S.0197614.LLC
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Work With Dr. Jan Duffy?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-semibold text-gray-900 mb-2">Top 1% REALTOR®</h3>
              <p className="text-sm text-gray-600">
                Ranked among the top performing real estate agents in Las Vegas
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🏡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Silverstone Ranch Expert</h3>
              <p className="text-sm text-gray-600">
                Specialized knowledge of luxury homes in this premier community
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-semibold text-gray-900 mb-2">Financing Solutions</h3>
              <p className="text-sm text-gray-600">
                Access to trusted lenders with competitive rates and flexible terms
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-sm text-gray-600">
                Available 24/7 to answer questions and schedule showings
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Negotiation</h3>
              <p className="text-sm text-gray-600">
                Skilled negotiator ensuring you get the best deal possible
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="font-semibold text-gray-900 mb-2">Seamless Process</h3>
              <p className="text-sm text-gray-600">
                Handles every detail from financing to final keys
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Schedule your private showing today and let&apos;s discuss making this stunning 
            Silverstone Ranch home yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-tour"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
            >
              Book Your Tour
            </Link>
            <a
              href="tel:7025001530"
              className="px-8 py-3 bg-blue-500 text-white border-2 border-white rounded-lg hover:bg-blue-400 transition-all font-semibold"
            >
              Call (702) 500-1530
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

