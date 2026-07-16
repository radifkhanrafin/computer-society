'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface Admin {
  id: string
  email: string
  name: string
}

export function AdminTopbar() {
  const router = useRouter()
  const [admin, setAdmin] = useState<Admin | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const response = await fetch('/api/auth/me')
        const data = await response.json()
        if (data.success) {
          setAdmin(data.data)
        }
      } catch (error) {
        console.error('[v0] Fetch admin error:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchAdmin()
  }, [])

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/admin/login')
    } catch (error) {
      console.error('[v0] Logout error:', error)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="h-16 bg-slate-800/50 backdrop-blur-lg border-b border-slate-700/50 px-6 flex items-center justify-between"
    >
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-semibold text-white">Dashboard</h2>
      </div>

      <div className="flex items-center gap-4">
        {!loading && admin && (
          <>
            <div className="text-right">
              <p className="text-sm font-medium text-white">{admin.name}</p>
              <p className="text-xs text-slate-400">{admin.email}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
              {admin.name.charAt(0).toUpperCase()}
            </div>
          </>
        )}
        <Button
          onClick={handleLogout}
          variant="outline"
          className="text-sm bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-600 hover:text-white"
        >
          Logout
        </Button>
      </div>
    </motion.div>
  )
}
