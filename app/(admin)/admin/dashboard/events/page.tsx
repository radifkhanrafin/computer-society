'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/admin/DataTable'
import { EventForm } from '@/components/admin/EventForm'
import { useToast } from '@/hooks/use-toast'
import { Plus, Edit2, Trash2 } from 'lucide-react'

export default function EventsPage() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/events')
      if (!res.ok) throw new Error('Failed to fetch')
      const result = await res.json()
      setData(result.data || [])
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to load data', variant: 'destructive' })
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return
    try {
      const res = await fetch(`/api/events/${id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('Failed to delete')
      toast({ title: 'Success', description: 'Deleted successfully' })
      fetchData()
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to delete', variant: 'destructive' })
    }
  }

  const columns = [
    { header: 'Title', accessor: 'title' },
    { header: 'Date', accessor: 'date', render: (v: string) => new Date(v).toLocaleDateString() },
    { header: 'Location', accessor: 'location' },
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
        <h1 className="text-3xl font-bold">Events Management</h1>
        <Button onClick={() => { setEditingId(null); setShowForm(true) }}>
          <Plus className="w-4 h-4 mr-2" /> Add Event
        </Button>
      </div>

      {showForm && (
        <EventForm
          id={editingId}
          onClose={() => setShowForm(false)}
          onSuccess={() => {
            setShowForm(false)
            fetchData()
          }}
        />
      )}

      <DataTable columns={columns} data={data} loading={loading} />
    </div>
  )
}
