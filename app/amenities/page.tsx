import Link from 'next/link'

export default function AmenitiesPage() {
  const amenities = [
    {
      title: '6-Acre Family Park',
      description: 'Spacious park with multiple recreational areas for families to enjoy',
      icon: '🌳',
      details: 'A massive 6-acre community park offering endless opportunities for recreation and relaxation.',
    },
    {
      title: 'Playgrounds',
      description: 'Safe, modern playground equipment for children of all ages',
      icon: '🎠',
      details: 'Multiple playground areas with age-appropriate equipment, safety surfacing, and shaded areas.',
    },
    {
      title: 'Basketball & Tennis Courts',
      description: 'Professional-grade courts for sports enthusiasts',
      icon: '🏀',
      details: 'Well-maintained basketball and tennis courts available for community use, perfect for staying active.',
    },
    {
      title: 'Picnic & Barbecue Areas',
      description: 'Perfect for family gatherings and outdoor dining',
      icon: '🍖',
      details: 'Designated picnic areas with barbecue facilities, ideal for community events and family celebrations.',
    },
    {
      title: 'Walking & Biking Trails',
      description: 'Scenic trails throughout the community',
      icon: '🚶',
      details: 'Extensive network of walking and biking trails connecting neighborhoods and providing safe routes for exercise.',
    },
    {
      title: 'Lush Greenbelts',
      description: 'Beautifully maintained green spaces',
      icon: '🌿',
      details: 'Carefully landscaped greenbelts throughout the community, creating a beautiful and serene environment.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Community Amenities
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Silverstone Ranch offers an exceptional lifestyle with world-class amenities 
            designed for families, active adults, and outdoor enthusiasts.
          </p>
        </div>

        {/* Main Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4 text-center">{amenity.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3 text-center">
                {amenity.title}
              </h2>
              <p className="text-gray-600 mb-4 text-center">{amenity.description}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{amenity.details}</p>
            </div>
          ))}
        </div>

        {/* Community Overview */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Silverstone Ranch Community
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Silverstone homeowners have access to a comprehensive <strong>6-acre family park</strong> with 
              playgrounds, basketball and tennis courts, picnic and barbecue areas, walking and biking trails, 
              and lush greenbelts. This master-planned community was designed with families in mind, offering 
              a perfect balance of recreation, relaxation, and natural beauty.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Whether you&apos;re looking to stay active, enjoy quality time with family, or simply relax in 
              beautiful surroundings, Silverstone Ranch provides the amenities and lifestyle you&apos;re seeking.
            </p>
          </div>
        </div>

        {/* Additional Community Features */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Additional Community Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Top Schools</h3>
              <p className="text-sm text-gray-600">Highly-rated school district</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Prime Location</h3>
              <p className="text-sm text-gray-600">North Las Vegas convenience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Gated Options</h3>
              <p className="text-sm text-gray-600">Security and privacy available</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Golf Access</h3>
              <p className="text-sm text-gray-600">Near Silverstone Golf Club</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Experience Silverstone Ranch</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Discover why so many families choose Silverstone Ranch as their home. Contact Dr. Jan Duffy 
            to learn more about available properties and community amenities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-info"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
            >
              Request Information
            </Link>
            <Link
              href="/homes-for-sale"
              className="px-8 py-3 bg-blue-500 text-white border-2 border-white rounded-lg hover:bg-blue-400 transition-all font-semibold"
            >
              View Available Homes
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

