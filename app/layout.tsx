import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CONTACT_INFO } from '@/lib/contact-info'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Silverstone Ranch Homes | Luxury Community in Northwest Las Vegas',
  description:
    'Explore Silverstone Ranch in Northwest Las Vegas—guard-gated enclaves, former golf course view corridors, resort amenities, and expert guidance from Dr. Jan Duffy for buying, selling, or investing in the community.',
  authors: [{ name: CONTACT_INFO.agentName }],
  keywords: [
    'Silverstone Ranch',
    'Silverstone Ranch Las Vegas',
    'Northwest Las Vegas community',
    'Centennial Hills real estate',
    'Las Vegas gated neighborhoods',
    'Dr. Jan Duffy',
    'Las Vegas REALTOR',
    'luxury homes Las Vegas',
  ],
  openGraph: {
    title: 'Silverstone Ranch Homes | Luxury Community in Northwest Las Vegas',
    description:
    'Discover Silverstone Ranch—guard-gated living, former golf fairway corridors, and personalized guidance from Dr. Jan Duffy throughout North Las Vegas.',
    type: 'website',
    locale: 'en_US',
    siteName: CONTACT_INFO.businessName,
    url: CONTACT_INFO.website.url,
    images: [
      {
        url: '/images/property/exterior-front-elevation.jpg',
        width: 1200,
        height: 630,
        alt: 'Silverstone Ranch luxury home with desert landscaping in Las Vegas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Silverstone Ranch Homes | Luxury Community Overview',
    description:
      'Tour Silverstone Ranch in North Las Vegas—honest updates on the closed golf course, gated enclaves, and expert representation from Dr. Jan Duffy.',
    images: ['/images/property/exterior-front-elevation.jpg'],
    site: CONTACT_INFO.website.url,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              name: 'Dr. Jan Duffy',
              jobTitle: 'REALTOR®',
              telephone: CONTACT_INFO.phone.display,
              email: CONTACT_INFO.email,
              address: {
                '@type': 'PostalAddress',
                streetAddress: CONTACT_INFO.address.street,
                addressLocality: CONTACT_INFO.address.city,
                addressRegion: CONTACT_INFO.address.state,
                postalCode: CONTACT_INFO.address.postalCode,
                addressCountry: CONTACT_INFO.address.country,
              },
              url: CONTACT_INFO.website.url,
              sameAs: [
                CONTACT_INFO.website.url,
                ...CONTACT_INFO.socialProfiles.map((profile) => profile.url),
              ],
              areaServed: CONTACT_INFO.serviceAreas,
              worksFor: {
                '@type': 'RealEstateAgent',
                name: CONTACT_INFO.businessName,
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Place',
              name: 'Silverstone Ranch Community',
              description:
                'Master-planned luxury community in Northwest Las Vegas featuring guard-gated enclaves, resort-style amenities, and residences along the former Silverstone golf fairways.',
              url: CONTACT_INFO.website.url,
              address: {
                '@type': 'PostalAddress',
                streetAddress: CONTACT_INFO.address.street,
                addressLocality: CONTACT_INFO.address.city,
                addressRegion: CONTACT_INFO.address.state,
                postalCode: CONTACT_INFO.address.postalCode,
                addressCountry: CONTACT_INFO.address.country,
              },
              areaServed: {
                '@type': 'AdministrativeArea',
                name: CONTACT_INFO.serviceAreas[1],
              },
              image: `${CONTACT_INFO.website.url}images/property/exterior-front-elevation.jpg`,
              telephone: CONTACT_INFO.phone.display,
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
