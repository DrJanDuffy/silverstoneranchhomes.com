export function RealscoutOfficeListings() {
  return (
    <section className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">Featured Silverstone Ranch Inventory</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Explore Current Silverstone Ranch Listings</h2>
          <p className="mt-4 text-slate-200">
            Browse the newest guard-gated homes for sale curated by Dr. Jan Duffy. Customize filters, request tours, and
            save favorites directly in RealScout.
          </p>
        </div>
        <div className="rounded-2xl border border-blue-500/40 bg-white/95 p-4 shadow-2xl shadow-blue-900/20">
          {/* RealScout Web Component */}
          <realscout-office-listings
            agent-encoded-id="QWdlbnQtMjI1MDUw"
            sort-order="NEWEST"
            listing-status="For Sale"
            property-types=",SFR"
            price-min="500000"
            price-max="600000"
          ></realscout-office-listings>
        </div>
      </div>
    </section>
  )
}
