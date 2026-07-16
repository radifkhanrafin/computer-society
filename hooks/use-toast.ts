import { useState, useCallback } from 'react'

interface Toast {
  id: string
  title: string
  description?: string
  variant?: 'default' | 'destructive'
}

let toastCount = 0
const toasts: Toast[] = []
const listeners: Set<(toasts: Toast[]) => void> = new Set()

const notifyListeners = () => {
  listeners.forEach(listener => listener([...toasts]))
}

export function useToast() {
  const [, setToasts] = useState<Toast[]>([])

  const toast = useCallback(({ title, description, variant = 'default' }: Omit<Toast, 'id'>) => {
    const id = String(++toastCount)
    const newToast: Toast = { id, title, description, variant }
    
    toasts.push(newToast)
    setToasts([...toasts])
    notifyListeners()

    // Auto-remove after 3 seconds
    setTimeout(() => {
      const index = toasts.findIndex(t => t.id === id)
      if (index > -1) {
        toasts.splice(index, 1)
        setToasts([...toasts])
        notifyListeners()
      }
    }, 3000)
  }, [])

  return { toast }
}
