'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { X } from 'lucide-react'

const blogSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  author: z.string().min(1, 'Author is required'),
  content: z.string().min(1, 'Content is required'),
  imageUrl: z.string().optional(),
  tags: z.string().optional(),
})

type BlogFormData = z.infer<typeof blogSchema>

interface BlogFormProps {
  id?: string | null
  onClose: () => void
  onSuccess: () => void
}

export function BlogForm({ id, onClose, onSuccess }: BlogFormProps) {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const { register, handleSubmit, reset, formState: { errors } } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
  })

  useEffect(() => {
    if (id) {
      fetch(`/api/blogs/${id}`)
        .then(res => res.json())
        .then(data => reset(data.data))
        .catch(() => toast({ title: 'Error', description: 'Failed to load', variant: 'destructive' }))
    }
  }, [id, reset, toast])

  const onSubmit = async (data: BlogFormData) => {
    setLoading(true)
    try {
      const res = await fetch(id ? `/api/blogs/${id}` : '/api/blogs', {
        method: id ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed')
      toast({ title: 'Success', description: 'Saved successfully' })
      onSuccess()
    } catch {
      toast({ title: 'Error', description: 'Failed to save', variant: 'destructive' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-card rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{id ? 'Edit' : 'Add'} Blog</h2>
          <button onClick={onClose} className="text-foreground/50 hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Title *</label>
            <Input {...register('title')} placeholder="Blog title" />
            {errors.title && <p className="text-sm text-red-500">{errors.title.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium">Author *</label>
            <Input {...register('author')} placeholder="Author name" />
            {errors.author && <p className="text-sm text-red-500">{errors.author.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium">Content *</label>
            <textarea {...register('content')} placeholder="Blog content" className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm" rows={4} />
            {errors.content && <p className="text-sm text-red-500">{errors.content.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium">Image URL</label>
            <Input {...register('imageUrl')} placeholder="https://..." />
          </div>
          <div>
            <label className="text-sm font-medium">Tags (comma separated)</label>
            <Input {...register('tags')} placeholder="tech, tutorial" />
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
