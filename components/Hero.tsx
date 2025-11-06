'use client'

import Image from 'next/image'
import { Phone, Mail } from 'lucide-react'
import ContactFormModal from './ContactFormModal'
import { useState } from 'react'

export default function Hero() {
  const [showContactModal, setShowContactModal] = useState(false)

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
              Ready Move In
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Get Top Dollar for Your Silverstone Ranch North Las Vegas Home – Fast
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Las Vegas, NV 89131
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-200">
                <Image
                  src="/images/agent/dr-jan-duffy.jpg"
                  alt="Dr. Jan Duffy REALTOR"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Dr. Jan Duffy REALTOR</p>
                <p className="text-sm text-gray-600">Silverstone Ranch Homes</p>
                <a
                  href="tel:7025001530"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 mt-1"
                >
                  <Phone className="h-4 w-4" />
                  (702) 500-1530
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => setShowContactModal(true)}
                className="w-full lg:w-auto px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Discover Your Home&apos;s Value in 60 Seconds & Sell for 15% Above Market Average
              </button>
              
              <button
                onClick={() => setShowContactModal(true)}
                className="w-full lg:w-auto px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 hover:border-blue-700 transition-all"
              >
                Claim Your Free Seller Strategy Session
              </button>
            </div>
          </div>

          {/* Right Column - Image or Additional Content */}
          <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl bg-gray-200">
            <Image
              src="/images/property/exterior-1.jpg"
              alt="7152 Royal Melbourne Drive, Silverstone Ranch"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {showContactModal && (
        <ContactFormModal
          isOpen={showContactModal}
          onClose={() => setShowContactModal(false)}
        />
      )}
    </section>
  )
}

