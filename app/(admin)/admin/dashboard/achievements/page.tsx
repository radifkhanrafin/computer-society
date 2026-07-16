'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/admin/DataTable'
import { useToast } from '@/hooks/use-toast'
import { Plus, Edit2, Trash2 } from 'lucide-react'
import { Input } from '@/components/ui/input'

export default function AchievementsPage() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [year, setYear] = useState('')
  const { toast } = useToast()

  useEffect(() => { fetchData() }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/achievements')
      const result = await res.json()
      setData(result.data || [])
    } catch {
      toast({ title: 'Error', variant: 'destructive' })
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch(editingId ? `/api/achievements/${editingId}` : '/api/achievements', {
        method: editingId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, year }),
      })
      if (!res.ok) throw new Error('Failed')
      setTitle('')
      setDescription('')
      setYear('')
      setEditingId(null)
      toast({ title: 'Success', description: 'Saved successfully' })
      fetchData()
    } catch {
      toast({ title: 'Error', variant: 'destructive' })
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/achievements/${id}`, { method: 'DELETE' })
      toast({ title: 'Success', description: 'Deleted successfully' })
      fetchData()
    } catch {
      toast({ title: 'Error', variant: 'destructive' })
    }
  }

  const columns = [
    { header: 'Title', accessor: 'title' },
    { header: 'Year', accessor: 'year' },
    { header: 'Description', accessor: 'description' },
    {
      header: 'Actions',
      accessor: 'actions',
      render: (row: any) => (
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={() => { setEditingId(row._id); setTitle(row.title); setDescription(row.description); setYear(row.year) }}>
            <Edit2 className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => handleDelete(row._id)}>
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Achievements Management</h1>
      <form onSubmit={handleSubmit} className="border border-border rounded-lg p-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <Input placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} required />
        </div>
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm" rows={2} required />
        <Button type="submit"><Plus className="w-4 h-4 mr-2" /> {editingId ? 'Update' : 'Add'}</Button>
        {editingId && <Button type="button" variant="outline" onClick={() => { setEditingId(null); setTitle(''); setDescription(''); setYear('') }}>Cancel</Button>}
      </form>
      <DataTable columns={columns} data={data} loading={loading} />
    </div>
  )
}
