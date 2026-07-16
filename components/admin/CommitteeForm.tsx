'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { X } from 'lucide-react'

const committeeSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  position: z.string().min(1, 'Position is required'),
  email: z.string().email('Valid email required').optional().or(z.literal('')),
  year: z.string().min(1, 'Year is required'),
  bio: z.string().optional(),
  imageUrl: z.string().optional(),
})

type CommitteeFormData = z.infer<typeof committeeSchema>

interface CommitteeFormProps {
  id?: string | null
  onClose: () => void
  onSuccess: () => void
}

export function CommitteeForm({ id, onClose, onSuccess }: CommitteeFormProps) {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CommitteeFormData>({
    resolver: zodResolver(committeeSchema),
  })

  useEffect(() => {
    if (id) {
      fetch(`/api/committee/${id}`)
        .then(res => res.json())
        .then(data => reset(data.data))
        .catch(() => toast({ title: 'Error', description: 'Failed to load data', variant: 'destructive' }))
    }
  }, [id, reset, toast])

  const onSubmit = async (data: CommitteeFormData) => {
    setLoading(true)
    try {
      const method = id ? 'PUT' : 'POST'
      const url = id ? `/api/committee/${id}` : '/api/committee'
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed to save')
      toast({ title: 'Success', description: 'Saved successfully' })
      onSuccess()
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to save', variant: 'destructive' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-card rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{id ? 'Edit' : 'Add'} Committee Member</h2>
          <button onClick={onClose} className="text-foreground/50 hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Name *</label>
            <Input {...register('name')} placeholder="Full name" />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium">Position *</label>
            <Input {...register('position')} placeholder="Position" />
            {errors.position && <p className="text-sm text-red-500">{errors.position.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <Input {...register('email')} placeholder="Email" type="email" />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium">Year *</label>
            <Input {...register('year')} placeholder="2024" />
            {errors.year && <p className="text-sm text-red-500">{errors.year.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium">Bio</label>
            <textarea
              {...register('bio')}
              placeholder="Short bio"
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm"
              rows={3}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Image URL</label>
            <Input {...register('imageUrl')} placeholder="https://..." />
          </div>
          <div className="flex gap-2 pt-4">
            <Button type="submit" disabled={loading} className="flex-1">
              {loading ? 'Saving...' : 'Save'}
            </Button>
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
