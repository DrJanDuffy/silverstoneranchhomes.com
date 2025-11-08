'use client'

import { useState } from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { buildWebPageSchema } from '@/lib/seo'

import { propertyPhotos } from '@/lib/property-photos'

export const metadata: Metadata = {
  title: 'Silverstone Ranch Photo Gallery',
  description:
    'Tour Silverstone Ranch through curated photography highlighting architecture, interiors, and outdoor living curated by Dr. Jan Duffy REALTOR®.',
  alternates: {
    canonical: '/photos',
  },
  openGraph: {
    title: 'Silverstone Ranch Photo Gallery',
    description:
      'Experience Silverstone Ranch architecture, interiors, and amenity spaces via curated photography and buyer resources.',
    url: `${CONTACT_INFO.website.base}/photos`,
    type: 'website',
  },
}

const photoCollections = [
  {
    title: 'Architectural Highlights',
    description:
      'Curb appeal moments showcasing stone accents, arched entries, and nighttime illumination that frames Silverstone facades.'
  },
  {
    title: 'Interior Living Spaces',
    description:
      'Great rooms, formal dining, and flex spaces styled for hosting, remote work, and everyday relaxation.'
  },
  {
    title: 'Chef-Inspired Kitchens',
    description:
      'Island seating, quartz counters, statement lighting, and pro-grade appliances ready for culinary adventures.'
  },
  {
    title: 'Primary Retreats',
    description:
      'Owner suites with lounge corners, spa baths, and custom closets—ideal for unwinding after desert sunsets.'
  },
  {
    title: 'Outdoor Sanctuaries',
    description:
      'Covered patios, fire pits, and resort-style pools framed by mature palm trees and mountain backdrops.'
  },
  {
    title: 'Community Lifestyle',
    description:
      'Walking trails, parks, and guard-gated entries that reinforce the Silverstone Ranch way of life.'
  }
]

const stagingTips = [
  {
    header: 'Capture the Golden Hour',
    detail:
      'Solar exposure in Silverstone delivers dramatic lighting between 4:30 pm and 6:00 pm. Schedule photography sessions then to maximize depth, shadow play, and sky gradients.'
  },
  {
    header: 'Highlight Indoor-Outdoor Flow',
    detail:
      'Open collapsible sliders, stage outdoor seating, and ensure landscaping lights are on. Buyers love seeing how patios extend living space year-round.'
  },
  {
    header: 'Showcase Smart Upgrades',
    detail:
      'Illuminate smart thermostats, EV-ready garages, and whole-home filtration systems—today’s buyers photograph details to share with decision makers remotely.'
  },
  {
    header: 'Plan a Storyboard',
    detail:
      'Organize shots by lifestyle moment: morning coffee patios, sunset fire pits, gourmet prep stations, and community amenities. Cinematic sequencing boosts engagement online.'
  }
]

const viewingTips = [
  {
    title: 'Buyers',
    bullets: [
      'Pair the gallery with floor plans to visualize furniture layouts and sunlight patterns.',
      'Ask Dr. Duffy for virtual walk-throughs and narrated highlights covering every major upgrade.',
      'Use high-resolution images to compare view corridors, fencing styles, and landscaping maturity across listings.'
    ]
  },
  {
    title: 'Sellers',
    bullets: [
      'Review this gallery to benchmark staging quality before scheduling new photography.',
      'Prepare a shot list covering curb appeal, interior transitions, storage solutions, and exterior amenities.',
      'Leverage lifestyle captions in listing marketing to connect visuals with tangible benefits (gated security, outdoor kitchens, etc.).'
    ]
  },
  {
    title: 'Investors',
    bullets: [
      'Document condition of flooring, cabinetry, and mechanical systems to evaluate renovation costs remotely.',
      'Track HOA-compliant landscaping ideas for future rental positioning and maintenance budgeting.',
      'Use photo metadata to build marketing funnels and furnished rental previews before acquisition closes.'
    ]
  }
]

export default function PhotosPage() {
  const [showGallery, setShowGallery] = useState(false)

  const path = '/photos'
  const pageSchema = buildWebPageSchema({
    path,
    name: 'Silverstone Ranch Photo Gallery',
    description:
      'Curated Silverstone Ranch photo gallery showcasing architecture, interiors, and community amenities for luxury buyers.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Photos', path },
    ],
  })

  const galleryItems = propertyPhotos.map((photo) => ({
    original: photo.original,
    originalAlt: photo.alt,
    originalTitle: photo.description,
    thumbnail: photo.thumbnail,
    thumbnailAlt: photo.alt,
    description: photo.description,
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="photos" data={pageSchema} />
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Silverstone Ranch Lifestyle Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore featured Silverstone Ranch residences, outdoor living spaces, and community amenities captured in
            high definition. These visuals showcase the craftsmanship and resort-inspired lifestyle available across the
            neighborhood.
          </p>
        </div>

        <section className="mb-16 bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Gallery Themes & Inspiration</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Each photo set is organized around how Silverstone residents live, entertain, and recharge. Use these themes to plan
            your own shoot, assess staging, or compare craftsmanship across listings.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            {photoCollections.map((group) => (
              <div key={group.title} className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{group.title}</h3>
                <p>{group.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Staging & Photography Blueprint</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Silverstone homes perform best online when photography showcases lifestyle benefits and climatic advantages. Pair the
            tips below with Dr. Duffy’s preferred vendor list to elevate your next photo session.
          </p>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            {stagingTips.map((tip) => (
              <div key={tip.header} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{tip.header}</h3>
                <p>{tip.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">How to Experience the Gallery</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Whether you are a buyer, seller, or investor, leverage these visuals to inform decisions and coordinate next steps.
            Each audience gains unique insight from Silverstone’s curated imagery.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            {viewingTips.map((audience) => (
              <div key={audience.title} className="rounded-2xl border border-amber-200 bg-amber-50/80 p-5">
                <h3 className="text-lg font-semibold text-amber-900 mb-2">{audience.title}</h3>
                <ul className="list-disc list-inside space-y-2">
                  {audience.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {!showGallery ? (
          <>
            <div className="text-center mb-12">
              <button
                onClick={() => setShowGallery(true)}
                className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Launch Full-Screen Slideshow
              </button>
            </div>

            {/* Photo Grid Preview */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Photo Preview ({propertyPhotos.length} Photos)
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {propertyPhotos.map((photo, index) => (
                  <figure
                    key={index}
                    className="group cursor-pointer"
                    onClick={() => setShowGallery(true)}
                  >
                    <picture>
                      <source srcSet={photo.original} type="image/jpeg" />
                      <img
                        src={photo.original}
                        alt={photo.alt}
                        className="w-full h-52 md:h-48 lg:h-56 object-cover rounded-lg shadow-sm group-hover:shadow-lg transition-shadow"
                        loading="lazy"
                      />
                    </picture>
                    {photo.description && (
                      <figcaption className="mt-3 text-sm text-gray-600 group-hover:text-gray-800">
                        {photo.description}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Full Photo Gallery</h2>
                <p className="text-gray-600 mt-1">
                  Click on any photo to view in full screen mode
                </p>
              </div>
              <button
                onClick={() => setShowGallery(false)}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all font-semibold"
              >
                Close Gallery
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-4">
              <ImageGallery
                items={galleryItems}
                showPlayButton={false}
                showFullscreenButton={true}
                showThumbnails={true}
                thumbnailPosition="bottom"
                slideInterval={3000}
                autoPlay={false}
              />
            </div>
          </div>
        )}

        {/* Community Info */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Why Buyers Love Silverstone Ranch
              </h2>
              <p className="text-gray-700 leading-relaxed">
                From bright sunrooms and chef-ready kitchens to expansive patios framed by mature landscaping, the
                gallery highlights how Silverstone Ranch homes maximize indoor-outdoor living. Every residence pairs
                premium finishes with community perks like gated entries, parks, and vistas across the former golf
                fairways.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Plan Your Silverstone Tour</h3>
              <div className="space-y-3">
                <Link
                  href="/request-info"
                  className="block w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl text-center font-semibold"
                >
                  Request Community Information
                </Link>
                <Link
                  href="/book-tour"
                  className="block w-full px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all text-center font-semibold"
                >
                  Schedule a Private Tour
                </Link>
                <a
                  href={`tel:${CONTACT_INFO.phone.tel}`}
                  className="block w-full px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all text-center font-semibold"
                >
                  Call {CONTACT_INFO.phone.display}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

