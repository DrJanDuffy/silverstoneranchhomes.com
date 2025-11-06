'use client'

export default function PropertyMap() {
  const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  return (
    <section id="map" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Property Location</h2>
        
        <div className="bg-gray-100 rounded-lg overflow-hidden h-96 mb-8">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={mapsApiKey 
              ? `https://www.google.com/maps/embed/v1/place?key=${mapsApiKey}&q=7152+Royal+Melbourne+Drive,+Las+Vegas,+NV+89131`
              : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.123456789!2d-115.2772!3d36.2856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzYsMTcsMTY1LjI3NzIiLC0xMTUuMjc3MiwwLjI4NTY!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus'
            }
          />
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Discover Las Vegas Luxury Living - Royal Melbourne Drive, Centennial Hills, Nevada
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nestled in the heart of Northwest Las Vegas, Nevada, Centennial Hills&apos; Royal Melbourne 
            Drive offers a prestigious gated luxury oasis where modern elegance blends seamlessly with desert 
            charm. Imagine waking up to breathtaking, protected views of the Spring Mountains, stepping 
            outside your Mediterranean-inspired home, and experiencing a community crafted with sophistication 
            and convenience in mind.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            This exclusive, guard-gated enclave isn&apos;t just a place to live; it&apos;s a lifestyle upgrade. 
            Located just 10 minutes from designer shopping at Centennial Center, top-rated CCSD schools, and 
            the sprawling 680-acre Floyd Lamb Park, every detail has been designed to enhance your daily life. 
            The nearby 215 Beltway puts the Strip just 30 minutes away, while world-class healthcare at 
            Centennial Hills Hospital ensures peace of mind right in your neighborhood.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Beyond its prime location, this luxury Las Vegas community boasts immaculately manicured landscapes, 
            resort-style amenities, and Mediterranean-inspired architecture that radiates elegance. Whether 
            you&apos;re lounging poolside, exploring nearby nature trails, or enjoying the upscale charm of the 
            neighborhood, you&apos;ll quickly see why Centennial Hills ranks among Las Vegas&apos; fastest-growing 
            luxury communities, with property values appreciating 15% annually.
          </p>
        </div>
      </div>
    </section>
  )
}

