'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { X } from 'lucide-react'

const eventSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  date: z.string().min(1, 'Date is required'),
  location: z.string().min(1, 'Location is required'),
  imageUrl: z.string().optional(),
  registrationUrl: z.string().optional(),
})

type EventFormData = z.infer<typeof eventSchema>

interface EventFormProps {
  id?: string | null
  onClose: () => void
  onSuccess: () => void
}

export function EventForm({ id, onClose, onSuccess }: EventFormProps) {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
  })

  useEffect(() => {
    if (id) {
      fetch(`/api/events/${id}`)
        .then(res => res.json())
        .then(data => {
          const formData = data.data
          formData.date = new Date(formData.date).toISOString().split('T')[0]
          reset(formData)
        })
        .catch(() => toast({ title: 'Error', description: 'Failed to load data', variant: 'destructive' }))
    }
  }, [id, reset, toast])

  const onSubmit = async (data: EventFormData) => {
    setLoading(true)
    try {
      const method = id ? 'PUT' : 'POST'
      const url = id ? `/api/events/${id}` : '/api/events'
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
          <h2 className="text-xl font-bold">{id ? 'Edit' : 'Add'} Event</h2>
          <button onClick={onClose} className="text-foreground/50 hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Title *</label>
            <Input {...register('title')} placeholder="Event title" />
            {errors.title && <p className="text-sm text-red-500">{errors.title.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium">Description *</label>
            <textarea
              {...register('description')}
              placeholder="Event description"
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm"
              rows={3}
            />
            {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium">Date *</label>
            <Input {...register('date')} type="date" />
            {errors.date && <p className="text-sm text-red-500">{errors.date.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium">Location *</label>
            <Input {...register('location')} placeholder="Event location" />
            {errors.location && <p className="text-sm text-red-500">{errors.location.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium">Image URL</label>
            <Input {...register('imageUrl')} placeholder="https://..." />
          </div>
          <div>
            <label className="text-sm font-medium">Registration URL</label>
            <Input {...register('registrationUrl')} placeholder="https://..." />
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
