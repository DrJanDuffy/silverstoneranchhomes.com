'use client'

import { useState } from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

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

export default function PhotoGallery() {
  const [showGallery, setShowGallery] = useState(false)

  const galleryItems = propertyPhotos.map((photo) => ({
    original: photo.original,
    thumbnail: photo.thumbnail,
    description: photo.description,
  }))

  return (
    <section id="photos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Silverstone Ranch Home for Sale | Photo Gallery
        </h2>

        {!showGallery ? (
          <div className="text-center">
            <button
              onClick={() => setShowGallery(true)}
              className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Launch Slideshow Viewer
            </button>
          </div>
        ) : (
          <div className="mb-8">
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
        )}

        {/* Photo Grid Preview */}
        {!showGallery && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {propertyPhotos.slice(0, 8).map((photo, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity bg-gray-200"
                onClick={() => setShowGallery(true)}
              >
                <img
                  src={photo.original}
                  alt={photo.description || `Property photo ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

