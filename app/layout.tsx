import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: '7152 Royal Melbourne Drive | Silverstone Ranch Homes | Las Vegas, NV',
  description:
    'Get Top Dollar for Your Silverstone Ranch North Las Vegas Home – Fast. Discover Your Home\'s Value in 60 Seconds & Sell for 15% Above Market Average. Contact Dr. Jan Duffy REALTOR® at (702) 500-1530',
  authors: [{ name: 'Dr. Jan Duffy' }],
  keywords: [
    'Silverstone Ranch',
    'Las Vegas real estate',
    'North Las Vegas homes',
    'Royal Melbourne Drive',
    'Centennial Hills',
    'Dr. Jan Duffy',
    'real estate agent',
    'home for sale',
  ],
  openGraph: {
    title: '7152 Royal Melbourne Drive | Silverstone Ranch Homes',
    description:
      'Get Top Dollar for Your Silverstone Ranch North Las Vegas Home – Fast. Discover Your Home\'s Value in 60 Seconds.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Silverstone Ranch Homes',
    images: [
      {
        url: '/images/property/exterior-1.jpg',
        width: 1200,
        height: 630,
        alt: '7152 Royal Melbourne Drive, Silverstone Ranch',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '7152 Royal Melbourne Drive | Silverstone Ranch Homes',
    description:
      'Get Top Dollar for Your Silverstone Ranch North Las Vegas Home – Fast.',
    images: ['/images/property/exterior-1.jpg'],
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
              telephone: '(702) 500-1530',
              email: 'DrDuffySells@SilverStoneRanchHomes.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Las Vegas',
                addressRegion: 'NV',
                postalCode: '89131',
                addressCountry: 'US',
              },
              url: 'https://silverstoneranchhomes.com',
              sameAs: ['https://letmehelpyourealtor.com'],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateListing',
              name: '7152 Royal Melbourne Drive',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '7152 Royal Melbourne Drive',
                addressLocality: 'Las Vegas',
                addressRegion: 'NV',
                postalCode: '89131',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '36.2856',
                longitude: '-115.2772',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
