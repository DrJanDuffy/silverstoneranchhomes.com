export default function HomesForSalePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Homes For Sale in Silverstone Ranch
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Currently showcasing: <strong>7152 Royal Melbourne Drive</strong>
          </p>
          <p className="text-gray-600 mb-8">
            For more listings in Silverstone Ranch, please contact Dr. Jan Duffy.
          </p>
          <a
            href="/#agent"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Agent
          </a>
        </div>
      </div>
    </div>
  )
}

