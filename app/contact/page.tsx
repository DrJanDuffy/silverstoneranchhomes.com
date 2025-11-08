import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import {
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildWebPageSchema,
  buildRealEstateServices,
  buildEnhancedOrganizationSchema,
} from '@/lib/seo'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact Silverstone Ranch Homes | Dr. Jan Duffy REALTOR®',
  description:
    'Contact Dr. Jan Duffy and the Silverstone Ranch Homes team for tours, valuations, or community questions. Call, email, or chat anytime.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Silverstone Ranch Homes',
    description:
      'Reach the Silverstone Ranch Homes concierge team for property tours, valuations, and HOA guidance. Connect by phone, email, or chat.',
    url: `${CONTACT_INFO.website.base}/contact`,
    type: 'website',
  },
}

export default function ContactPage() {
  const path = '/contact'
  const pageSchema = buildWebPageSchema({
    path,
    name: 'Contact Silverstone Ranch Homes',
    description:
      'Connect with the Silverstone Ranch Homes concierge team by phone, email, or chat for Las Vegas real estate support.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Contact', path },
    ],
    type: 'ContactPage',
  })

  const localBusinessSchema = buildLocalBusinessSchema()
  const organizationSchema = buildEnhancedOrganizationSchema()
  const services = buildRealEstateServices()

  const faqSchema = buildFaqSchema(path, [
    {
      question: 'Can I schedule a private tour outside of business hours?',
      answer:
        'Yes. The Silverstone Ranch Homes team arranges private tours and virtual walk-throughs around your schedule, including evenings and weekends.',
    },
    {
      question: 'Do you offer relocation assistance?',
      answer:
        'Dr. Jan Duffy provides concierge relocation support—lender introductions, guard gate registration, school resources, and vendor coordination.',
    },
    {
      question: 'How quickly will I receive a response?',
      answer:
        'Expect a personal reply within the same day. Urgent inquiries are typically answered within two hours.',
    },
  ])

  const schemaData = [pageSchema, organizationSchema, localBusinessSchema, faqSchema, ...services].filter(Boolean)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="contact-page" data={schemaData as Record<string, unknown>[]} />
      <ContactPageClient />
    </div>
  )
}

