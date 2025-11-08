import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { buildAction, buildFaqSchema, buildLocalBusinessSchema, buildServiceSchema, buildWebPageSchema } from '@/lib/seo'
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
  })

  const localBusinessSchema = buildLocalBusinessSchema()

  const conciergeServiceSchema = buildServiceSchema({
    name: 'Silverstone Ranch Concierge Desk',
    description:
      'Concierge support for property tours, HOA documents, relocation resources, and valuation consults within Silverstone Ranch.',
    serviceType: ['CustomerService', 'RealEstateConsultation'],
    actions: [
      buildAction({
        type: 'ContactAction',
        name: 'Call Silverstone Ranch Homes',
        target: `tel:${CONTACT_INFO.phone.tel}`,
      }),
      buildAction({
        type: 'ContactAction',
        name: 'Email Dr. Jan Duffy',
        target: `mailto:${CONTACT_INFO.email}`,
      }),
      buildAction({
        type: 'ScheduleAction',
        name: 'Chat with Concierge',
        target: `${CONTACT_INFO.website.base}${CONTACT_INFO.chat.url}`,
      }),
    ],
  })

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

  const schemaData = [pageSchema, localBusinessSchema, conciergeServiceSchema, faqSchema].filter(Boolean)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="contact-page" data={schemaData as Record<string, unknown>[]} />
      <ContactPageClient />
    </div>
  )
}

