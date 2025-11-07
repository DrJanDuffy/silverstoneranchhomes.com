'use client'

import { useState } from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import Link from 'next/link'

import { propertyPhotos } from '@/lib/property-photos'

export default function PhotosPage() {
  const [showGallery, setShowGallery] = useState(false)

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
                  href="tel:7025001530"
                  className="block w-full px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all text-center font-semibold"
                >
                  Call (702) 500-1530
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

