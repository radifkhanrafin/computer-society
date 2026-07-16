'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/admin/DataTable'
import { BlogForm } from '@/components/admin/BlogForm'
import { useToast } from '@/hooks/use-toast'
import { Plus, Edit2, Trash2 } from 'lucide-react'

export default function BlogsPage() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => { fetchData() }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/blogs')
      const result = await res.json()
      setData(result.data || [])
    } catch {
      toast({ title: 'Error', description: 'Failed to load data', variant: 'destructive' })
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return
    try {
      await fetch(`/api/blogs/${id}`, { method: 'DELETE' })
      toast({ title: 'Success', description: 'Deleted successfully' })
      fetchData()
    } catch {
      toast({ title: 'Error', description: 'Failed to delete', variant: 'destructive' })
    }
  }

  const columns = [
    { header: 'Title', accessor: 'title' },
    { header: 'Author', accessor: 'author' },
    { header: 'Published', accessor: 'createdAt', render: (v: string) => new Date(v).toLocaleDateString() },
    {
      header: 'Actions',
      accessor: 'actions',
      render: (row: any) => (
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={() => { setEditingId(row._id); setShowForm(true) }}>
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
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Blog Management</h1>
        <Button onClick={() => { setEditingId(null); setShowForm(true) }}>
          <Plus className="w-4 h-4 mr-2" /> Add Blog
        </Button>
      </div>
      {showForm && <BlogForm id={editingId} onClose={() => setShowForm(false)} onSuccess={() => { setShowForm(false); fetchData() }} />}
      <DataTable columns={columns} data={data} loading={loading} />
    </div>
  )
}
