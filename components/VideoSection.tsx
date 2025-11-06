export default function VideoSection() {
  return (
    <section id="video" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Virtual Tour</h2>
        
        <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video mb-8">
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-gray-600">
              Video tour will be embedded here
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-700 mb-4">
            Experience this beautiful property through our virtual tour. Get a comprehensive 
            view of every room and space from the comfort of your home.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Schedule a Live Virtual Tour
          </button>
        </div>
      </div>
    </section>
  )
}

