'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { Plus, Trash2 } from 'lucide-react'
import { Input } from '@/components/ui/input'

export default function SponsorsPage() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [logoUrl, setLogoUrl] = useState('')
  const [website, setWebsite] = useState('')
  const { toast } = useToast()

  useEffect(() => { fetchData() }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/sponsors')
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
      const res = await fetch('/api/sponsors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, logoUrl, website }),
      })
      if (!res.ok) throw new Error('Failed')
      setName('')
      setLogoUrl('')
      setWebsite('')
      toast({ title: 'Success', description: 'Added successfully' })
      fetchData()
    } catch {
      toast({ title: 'Error', variant: 'destructive' })
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/sponsors/${id}`, { method: 'DELETE' })
      toast({ title: 'Success', description: 'Deleted successfully' })
      fetchData()
    } catch {
      toast({ title: 'Error', variant: 'destructive' })
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Sponsors Management</h1>
      <form onSubmit={handleAdd} className="border border-border rounded-lg p-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input placeholder="Company Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <Input placeholder="Logo URL" value={logoUrl} onChange={(e) => setLogoUrl(e.target.value)} required />
          <Input placeholder="Website" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </div>
        <Button type="submit"><Plus className="w-4 h-4 mr-2" /> Add Sponsor</Button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item: any) => (
          <div key={item._id} className="border border-border rounded-lg p-4 bg-card">
            {item.logoUrl && <img src={item.logoUrl} alt={item.name} className="w-full h-24 object-contain mb-2" />}
            <h3 className="font-semibold text-sm">{item.name}</h3>
            {item.website && <p className="text-xs text-foreground/60 truncate">{item.website}</p>}
            <Button variant="ghost" size="sm" onClick={() => handleDelete(item._id)} className="mt-2">
              <Trash2 className="w-4 h-4" /> Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
