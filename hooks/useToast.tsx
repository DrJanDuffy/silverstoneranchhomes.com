'use client'

import { useState, useCallback } from 'react'
import { Toast, ToastType } from '@/components/ui/toast'

interface ToastState {
  message: string
  type: ToastType
  id: number
}

export function useToast() {
  const [toast, setToast] = useState<ToastState | null>(null)

  const showToast = useCallback((message: string, type: ToastType = 'info') => {
    setToast({ message, type, id: Date.now() })
  }, [])

  const hideToast = useCallback(() => {
    setToast(null)
  }, [])

  const ToastComponent = toast ? (
    <Toast
      key={toast.id}
      message={toast.message}
      type={toast.type}
      onClose={hideToast}
    />
  ) : null

  return { showToast, ToastComponent }
}
