'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Phone, Mail } from 'lucide-react'

const valuationSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Phone number is required'),
  address: z.string().optional(),
  propertyDetails: z.string().optional(),
})

type ValuationFormData = z.infer<typeof valuationSchema>

export default function HomeValuationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ValuationFormData>({
    resolver: zodResolver(valuationSchema),
  })

  const onSubmit = async (data: ValuationFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/valuation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSuccess(true)
        reset()
      } else {
        throw new Error('Failed to submit')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to submit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
            Free Home Valuation
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get Your Home&apos;s Value in 60 Seconds
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what your Silverstone Ranch home is worth in today&apos;s market. 
            Get a comprehensive market analysis and find out how to sell for 15% above market average.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">15%</div>
            <div className="text-sm text-gray-600">Above Market Average</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">60s</div>
            <div className="text-sm text-gray-600">Quick Valuation</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Free & No Obligation</div>
          </div>
        </div>

        {isSuccess ? (
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 mb-6">
              <svg
                className="h-10 w-10 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Thank You!</h2>
            <p className="text-lg text-gray-600 mb-2">
              We&apos;ve received your home valuation request.
            </p>
            <p className="text-gray-600 mb-8">
              Dr. Jan Duffy will contact you within 24 hours with your comprehensive 
              market analysis and property valuation.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => setIsSuccess(false)}
                className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                Submit Another Request
              </button>
              <div>
                <a
                  href="/"
                  className="inline-block text-blue-600 hover:text-blue-700 font-medium"
                >
                  Return to Home
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Complete the Form Below
              </h2>
              <p className="text-gray-600">
                Fill out the form and we&apos;ll provide you with a comprehensive home valuation 
                based on current market data for Silverstone Ranch.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone *
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Property Address
                </label>
                <input
                  {...register('address')}
                  type="text"
                  id="address"
                  placeholder="e.g., Silverstone Ranch address, Las Vegas, NV 89131"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                />
              </div>

              <div>
                <label
                  htmlFor="propertyDetails"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Property Details (bedrooms, bathrooms, square feet, etc.)
                </label>
                <textarea
                  {...register('propertyDetails')}
                  id="propertyDetails"
                  rows={4}
                  placeholder="e.g., 3 bedrooms, 2.5 bathrooms, 2,500 sq ft, built in 2005"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {isSubmitting ? 'Submitting...' : 'Get My Free Home Valuation'}
              </button>
            </form>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-gray-200 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    What You&apos;ll Receive
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Comprehensive market analysis for your property</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Comparable sales data from Silverstone Ranch</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Recommended listing price range</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Expert insights from Dr. Jan Duffy, Top 1% REALTOR®</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Agent Contact Card */}
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                      <img
                        src="/images/agent/dr-jan-duffy.jpg"
                        alt="Dr. Jan Duffy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Dr. Jan Duffy, Top 1% REALTOR®
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Specialized expertise in Silverstone Ranch luxury homes
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <a
                        href="tel:7025001530"
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        <Phone className="h-4 w-4" />
                        (702) 500-1530
                      </a>
                      <a
                        href="mailto:DrDuffySells@SilverStoneRanchHomes.com"
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        <Mail className="h-4 w-4" />
                        Email Me
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Privacy Note */}
              <div className="text-xs text-gray-500 text-center">
                Your information is secure and will only be used to provide your home valuation. 
                We respect your privacy and will never share your information.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

