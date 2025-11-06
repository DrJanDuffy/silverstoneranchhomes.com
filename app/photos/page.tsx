'use client'

import { useState } from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import Link from 'next/link'

interface Photo {
  original: string
  thumbnail: string
  description?: string
}

const propertyPhotos: Photo[] = [
  {
    original: '/images/property/exterior-1.jpg',
    thumbnail: '/images/property/exterior-1-thumb.jpg',
    description:
      'Pristine yellow home in Silverstone Ranch showcases a white two-car garage with decorative cross accent. This well-maintained property features clean architectural lines and professional landscaping, creating inviting curb appeal.',
  },
  {
    original: '/images/property/backyard-1.jpg',
    thumbnail: '/images/property/backyard-1-thumb.jpg',
    description:
      'Large, beautifully landscaped backyard perfect for outdoor activities, entertaining, and relaxation. Enjoy plenty of space for family gatherings, gardening, or simply unwinding in your private outdoor oasis.',
  },
  {
    original: '/images/property/family-room-1.jpg',
    thumbnail: '/images/property/family-room-1-thumb.jpg',
    description:
      'This welcoming family room serves as the perfect entertainment space. Featuring a wall-mounted TV and broad windows with plantation shutters, the room balances natural light with modern convenience. Crown molding and sage green walls create an elegant foundation, while a copper-toned ceiling fan ensures comfort.',
  },
  {
    original: '/images/property/sunroom-1.jpg',
    thumbnail: '/images/property/sunroom-1-thumb.jpg',
    description:
      'Sunroom that features a cozy fireplace, combining the beauty of natural light with the warmth of a crackling fire. This serene space is perfect for unwinding, reading, or simply enjoying quiet moments any time of year.',
  },
  {
    original: '/images/property/kitchen-1.jpg',
    thumbnail: '/images/property/kitchen-1-thumb.jpg',
    description:
      'This spacious kitchen exemplifies open-concept living at its finest. The sleek granite countertops and custom cherry wood cabinetry provide both beauty and functionality. A convenient breakfast bar with modern pendant lighting creates casual seating, while the open design flows seamlessly into the family living area.',
  },
  {
    original: '/images/property/kitchen-2.jpg',
    thumbnail: '/images/property/kitchen-2-thumb.jpg',
    description:
      'A masterfully designed kitchen showcases rich cherry cabinetry topped with elegant crown molding. The expansive granite countertops feature a striking burgundy-colored breakfast bar. Premium stainless steel appliances, including a wall oven and microwave, complement the modern design.',
  },
  {
    original: '/images/property/master-bedroom-1.jpg',
    thumbnail: '/images/property/master-bedroom-1-thumb.jpg',
    description:
      'This spacious master retreat offers a serene escape with its thoughtful design. A grand wood bed frame anchors the room, complemented by a cozy sitting area with plush seating. Large windows with plantation shutters and sheer curtains provide abundant natural light while maintaining privacy.',
  },
  {
    original: '/images/property/master-bathroom-1.jpg',
    thumbnail: '/images/property/master-bathroom-1-thumb.jpg',
    description:
      'This spa-like master bathroom features an expansive curved vanity with rich cherry cabinetry and light-colored quartz countertops. A spacious glass-enclosed shower with custom tile work anchors one end, while decorative tile accents create visual interest.',
  },
  {
    original: '/images/property/patio-1.jpg',
    thumbnail: '/images/property/patio-1-thumb.jpg',
    description:
      'Resort-style covered patio features custom lattice sunshade with ambient string lighting, stucco walls, and a glass entry door. Upscale outdoor living space includes comfortable lounge seating with blue and brown cushions, decorative wall art, and attractive paver accents, perfect for year-round entertaining.',
  },
  {
    original: '/images/property/foyer-1.jpg',
    thumbnail: '/images/property/foyer-1-thumb.jpg',
    description:
      'Elegant foyer features custom inlaid marble floor medallion and decorative glass entry door. Bright space enhanced by plantation shutters, sage green walls, and a dramatic domed ceiling with pendant light. Spacious hallway with designer accents creates a sophisticated entrance.',
  },
  {
    original: '/images/property/living-room-1.jpg',
    thumbnail: '/images/property/living-room-1-thumb.jpg',
    description:
      'Spacious living room showcases a cozy fireplace, plantation shutters, and elegant open-concept design. Features include warm hardwood and tile flooring transitions, high ceilings, and abundant natural light. Perfect blend of formal living and comfortable entertaining space.',
  },
  {
    original: '/images/property/dining-room-1.jpg',
    thumbnail: '/images/property/dining-room-1-thumb.jpg',
    description:
      'This light-filled dining area showcases sophisticated design with its crystal chandelier and circular dining arrangement. Crisp white crown molding and decorative wall niches provide elegant architectural detail against soft sage walls.',
  },
]

export default function PhotosPage() {
  const [showGallery, setShowGallery] = useState(false)

  const galleryItems = propertyPhotos.map((photo) => ({
    original: photo.original,
    thumbnail: photo.thumbnail,
    description: photo.description,
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Property Photo Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore 7152 Royal Melbourne Drive through our comprehensive photo collection. 
            View every room, outdoor space, and detail of this stunning Silverstone Ranch home.
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {propertyPhotos.map((photo, index) => (
                  <div
                    key={index}
                    className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity bg-gray-200 group"
                    onClick={() => setShowGallery(true)}
                  >
                    <img
                      src={photo.original}
                      alt={photo.description || `Property photo ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
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

        {/* Property Info */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7152 Royal Melbourne Drive
              </h2>
              <p className="text-gray-600 mb-6">
                Las Vegas, NV 89131 • Silverstone Ranch
              </p>
              <p className="text-gray-700 leading-relaxed">
                This stunning property features modern upgrades, spacious layouts, and premium 
                finishes throughout. Every detail has been carefully considered to create a 
                home that combines elegance with comfort.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Interested in This Property?</h3>
              <div className="space-y-3">
                <Link
                  href="/request-info"
                  className="block w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl text-center font-semibold"
                >
                  Request More Information
                </Link>
                <Link
                  href="/book-tour"
                  className="block w-full px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all text-center font-semibold"
                >
                  Schedule a Tour
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

