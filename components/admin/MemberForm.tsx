'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Member {
  _id?: string
  name: string
  email: string
  phone: string
  roll?: string
  department?: string
  batch?: string
  photo?: string
  bio?: string
  skills?: string[]
}

interface MemberFormProps {
  member?: Member | null
  onClose: () => void
}

export function MemberForm({ member, onClose }: MemberFormProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState<Member>(
    member || {
      name: '',
      email: '',
      phone: '',
      roll: '',
      department: '',
      batch: '',
      photo: '',
      bio: '',
      skills: [],
    }
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const method = member?._id ? 'PUT' : 'POST'
      const url = member?._id ? `/api/members/${member._id}` : '/api/members'

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Failed to save member')
        return
      }

      onClose()
    } catch (err) {
      setError('An error occurred')
      console.error('[v0] Form error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 mb-8 backdrop-blur-sm"
    >
      <h2 className="text-2xl font-bold text-white mb-6">
        {member ? 'Edit Member' : 'Add New Member'}
      </h2>

      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Name *
            </label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-slate-700/50 border-slate-600 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Email *
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-slate-700/50 border-slate-600 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Phone *
            </label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-slate-700/50 border-slate-600 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Department
            </label>
            <Input
              type="text"
              name="department"
              value={formData.department || ''}
              onChange={handleChange}
              className="bg-slate-700/50 border-slate-600 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Roll
            </label>
            <Input
              type="text"
              name="roll"
              value={formData.roll || ''}
              onChange={handleChange}
              className="bg-slate-700/50 border-slate-600 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Batch
            </label>
            <Input
              type="text"
              name="batch"
              value={formData.batch || ''}
              onChange={handleChange}
              className="bg-slate-700/50 border-slate-600 text-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Bio
          </label>
          <textarea
            name="bio"
            value={formData.bio || ''}
            onChange={handleChange}
            rows={3}
            className="w-full bg-slate-700/50 border border-slate-600 text-white rounded-lg p-2"
          />
        </div>

        <div className="flex gap-3 pt-4">
          <Button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Save Member'}
          </Button>
          <Button
            type="button"
            onClick={onClose}
            variant="outline"
            className="bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-600"
          >
            Cancel
          </Button>
        </div>
      </form>
    </motion.div>
  )
}
