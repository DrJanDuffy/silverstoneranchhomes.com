export default function PropertyDescription() {
  return (
    <section id="description" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 scroll-mt-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Property Description</h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Welcome to Silverstone Ranch, a premier master-planned community in North Las Vegas, Nevada. 
            This exceptional property at 7152 Royal Melbourne Drive represents the pinnacle of luxury living 
            in one of Las Vegas&apos; most sought-after neighborhoods.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">About Silverstone Ranch</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Silverstone Ranch was built between 2003-2008 and features one and two-story homes ranging 
            in size from 1,559 sq. ft. to 3,448 sq. ft. Silverstone Ranch is a community consisting of 
            nine distinct neighborhoods, some are non-gated, gated, and a guard-gated neighborhood that is 
            surrounded by the majestic Spring Mountains to the west and the Sheep Mountains to the North.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Neighborhoods</h3>
          
          <div className="space-y-4 mb-6">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">The Palms</h4>
              <p className="text-gray-700">
                A guard-gated community comprised of one and two-story homes built in 2004-2009 with some 
                lot sizes up to one third acre. Homes range in size from 1,900 to 4,050 sq. ft. offering 
                3 to 5 bedrooms and 2 to 3 car garages.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Pinehurst</h4>
              <p className="text-gray-700">
                A gated community built in 2004-2006, adjacent to the Silverstone Golf Club, and offers 
                single and two-story townhomes ranging in size from 1,345 to 2,015 sq. ft. with 2-4 bedrooms 
                and an attached two car garages.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Silverlake</h4>
              <p className="text-gray-700">
                A gated community of single-story homes built in 2004-2006. Homes range in size from 2,025 
                to 2,825 sq. ft. with 3 to 4 bedrooms and 2 to 3 car garages on lots approximately 7,000 sq. ft. 
                to one quarter acre.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Other Neighborhoods</h4>
              <p className="text-gray-700">
                The remaining non-gated neighborhoods include: Amberly, Clairbrook, Eastpoint, Greenfield, 
                Parkfield, and Somerset. The <strong>Princeville Collection</strong> at Silverstone Ranch 
                adjacent to the Silverstone Golf Club is comprised of single-family homes ranging in size from 
                3,064 to 3,744 sq. ft. with 3 to 4 bedrooms and 2.5 to 3.5 baths.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Amenities</h3>
          <p className="text-gray-700 leading-relaxed">
            Silverstone homeowners have access to a 6-acre family park with playgrounds, basketball and 
            tennis courts, picnic and barbecue areas, walking and biking trails, and lush greenbelts.
          </p>
        </div>
      </div>
    </section>
  )
}

