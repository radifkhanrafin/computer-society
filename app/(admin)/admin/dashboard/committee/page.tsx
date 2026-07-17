'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/admin/DataTable'
import { CommitteeForm } from '@/components/admin/CommitteeForm'
import { useToast } from '@/hooks/use-toast'
import { Plus, Edit2, Trash2 } from 'lucide-react'
import Image from 'next/image'

export default function CommitteePage() {
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
      const res = await fetch('/api/committee')

      if (!res.ok) throw new Error('Failed to fetch')
      const result = await res.json()
      console.log('[CommitteePage] Fetched data:', result.data)
      setData(result.data || [])
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to load data', variant: 'destructive' })
    } finally {
      setLoading(false)
    }
  }

  const columns = [
    {
      key: "profilePicture",
      label: "Name",
      render: (value, row) => (
        <div className="flex items-center gap-3 min-w-50">
          <img
            src={value}
            alt={row.name}
            className="w-12 h-12 rounded-full  object-cover ring-2 ring-blue-500/30"
          />

          <div>
            <p className="font-semibold text-white">
              {row.name}
            </p>

            <p className="text-xs text-slate-400">
              {row.position}
            </p>
          </div>
        </div>
      ),
    },
    // { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'department', label: 'Department' },
    { key: 'batch', label: 'Batch' },
  ]


  console.log('[CommitteePage] Current data state:', data)
  const handleEdit = (id: string) => {
    setEditingId(id)
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return
    try {
      const res = await fetch(`/api/committee/${id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('Failed to delete')
      toast({ title: 'Success', description: 'Deleted successfully' })
      fetchData()
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to delete', variant: 'destructive' })
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Committee Management</h1>
        {/* <Button onClick={() => { setEditingId(null); setShowForm(true) }}>
          <Plus className="w-4 h-4 mr-2" /> Add Committee Member
        </Button> */}
      </div>

      {showForm && (
        <CommitteeForm
          id={editingId}
          onClose={() => setShowForm(false)}
          onSuccess={() => {
            setShowForm(false)
            fetchData()
          }}
        />
      )}

      <DataTable
        columns={columns}
        data={data}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
}
