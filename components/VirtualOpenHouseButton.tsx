'use client'

import { useState } from 'react'
import VirtualOpenHouseModal from './VirtualOpenHouseModal'
import { Video } from 'lucide-react'

export function VirtualOpenHouseButton() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700 scroll-mt-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-block p-3 bg-white/20 rounded-full mb-6">
            <Video className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Virtual Open House
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience 7152 Royal Melbourne Drive from the comfort of your home. 
            Join our live virtual tour and get all your questions answered in real-time.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            RSVP for Virtual Open House
          </button>
        </div>
      </section>

      {showModal && (
        <VirtualOpenHouseModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  )
}

