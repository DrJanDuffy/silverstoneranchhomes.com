'use client'

import { useState } from 'react'
import { X, Lock, Download } from 'lucide-react'

interface DocumentViewerProps {
  isOpen: boolean
  onClose: () => void
  documentUrl?: string
  documentTitle?: string
}

export default function DocumentViewer({
  isOpen,
  onClose,
  documentUrl = '/documents/property-details.pdf',
  documentTitle = 'Property Details',
}: DocumentViewerProps) {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState('')

  // In production, this would verify against a backend
  const correctPassword = 'silverstone2025' // Example password

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === correctPassword) {
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Incorrect password. Please try again.')
      setPassword('')
    }
  }

  const handleDownload = () => {
    if (documentUrl) {
      window.open(documentUrl, '_blank')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 animate-fade-in">
      <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full h-[90vh] flex flex-col animate-slide-up">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-900">{documentTitle}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-hidden">
          {!isAuthenticated ? (
            <div className="flex items-center justify-center h-full p-8">
              <div className="max-w-md w-full">
                <div className="text-center mb-6">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Lock className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Password Protected
                  </h3>
                  <p className="text-gray-600">
                    This document is password protected. Please enter the password to view.
                  </p>
                </div>

                <form onSubmit={handlePasswordSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                        setError('')
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter password"
                      autoFocus
                    />
                    {error && (
                      <p className="mt-1 text-sm text-red-600">{error}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-semibold"
                  >
                    Unlock Document
                  </button>
                </form>

                <p className="mt-4 text-sm text-gray-500 text-center">
                  Need the password? Contact Dr. Jan Duffy at{' '}
                  <a
                    href="tel:7025001530"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    (702) 500-1530
                  </a>
                </p>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col">
              <div className="p-4 border-b bg-gray-50 flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  Document unlocked. You can now view and download.
                </p>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-semibold"
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </button>
              </div>

              <div className="flex-1 overflow-auto p-4">
                <iframe
                  src={documentUrl}
                  className="w-full h-full border-0"
                  title={documentTitle}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

