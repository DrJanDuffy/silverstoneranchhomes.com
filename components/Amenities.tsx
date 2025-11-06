export default function Amenities() {
  const amenities = [
    {
      title: '6-Acre Family Park',
      description: 'Spacious park with multiple recreational areas',
      icon: '🌳',
    },
    {
      title: 'Playgrounds',
      description: 'Safe, modern playground equipment for children',
      icon: '🎠',
    },
    {
      title: 'Basketball & Tennis Courts',
      description: 'Professional-grade courts for sports enthusiasts',
      icon: '🏀',
    },
    {
      title: 'Picnic & Barbecue Areas',
      description: 'Perfect for family gatherings and outdoor dining',
      icon: '🍖',
    },
    {
      title: 'Walking & Biking Trails',
      description: 'Scenic trails throughout the community',
      icon: '🚶',
    },
    {
      title: 'Lush Greenbelts',
      description: 'Beautifully maintained green spaces',
      icon: '🌿',
    },
  ]

  return (
    <section id="amenities" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Community Amenities</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{amenity.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {amenity.title}
              </h3>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700">
            Silverstone homeowners have access to a comprehensive 6-acre family park with 
            playgrounds, basketball and tennis courts, picnic and barbecue areas, walking 
            and biking trails, and lush greenbelts.
          </p>
        </div>
      </div>
    </section>
  )
}

