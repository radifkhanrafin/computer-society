'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { Plus, Trash2 } from 'lucide-react'

export default function GalleryPage() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const { toast } = useToast()

  useEffect(() => { fetchData() }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/gallery')
      const result = await res.json()
      setData(result.data || [])
    } catch {
      toast({ title: 'Error', variant: 'destructive' })
    } finally {
      setLoading(false)
    }
  }

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, imageUrl }),
      })
      if (!res.ok) throw new Error('Failed')
      setTitle('')
      setImageUrl('')
      toast({ title: 'Success', description: 'Added successfully' })
      fetchData()
    } catch {
      toast({ title: 'Error', variant: 'destructive' })
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/gallery/${id}`, { method: 'DELETE' })
      toast({ title: 'Success', description: 'Deleted successfully' })
      fetchData()
    } catch {
      toast({ title: 'Error', variant: 'destructive' })
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Gallery Management</h1>
      <form onSubmit={handleAdd} className="border border-border rounded-lg p-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm"
            required
          />
          <input
            type="url"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm"
            required
          />
        </div>
        <Button type="submit"><Plus className="w-4 h-4 mr-2" /> Add Image</Button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item: any) => (
          <div key={item._id} className="border border-border rounded-lg overflow-hidden bg-card">
            {item.imageUrl && <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />}
            <div className="p-4">
              <h3 className="font-semibold text-sm">{item.title}</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDelete(item._id)}
                className="mt-2"
              >
                <Trash2 className="w-4 h-4" /> Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
