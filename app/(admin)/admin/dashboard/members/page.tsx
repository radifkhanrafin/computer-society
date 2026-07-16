'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DataTable } from '@/components/admin/DataTable'
import { Button } from '@/components/ui/button'
import MemberForm from '@/components/admin/MemberForm'

interface Member {
  _id: string
  name: string
  email: string
  phone: string
  department?: string
  batch?: string
  photo?: string
}

export default function MembersPage() {
  const [members, setMembers] = useState<Member[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingMember, setEditingMember] = useState<Member | null>(null)

  useEffect(() => {
    fetchMembers()
  }, [])

  const fetchMembers = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/members')
      const data = await response.json()
      if (data.success) {
        setMembers(data.data || [])
      }
    } catch (error) {
      console.error('Fetch members error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (member: Member) => {
    if (!confirm('Are you sure you want to delete this member?')) return

    try {
      const response = await fetch(`/api/members/${member._id}`, { method: 'DELETE' })
      const data = await response.json()
      if (data.success) {
        setMembers(members.filter((m) => m._id !== member._id))
      }
    } catch (error) {
      console.error('Delete member error:', error)
    }
  }

  const handleFormClose = () => {
    setShowForm(false)
    setEditingMember(null)
    fetchMembers()
  }

  const columns = [
    {
      key: "profilePicture",
      label: "Name",
      render: (value, row) => (
        <div className="flex  md:min-w-56 items-center gap-3">
          <img
            src={value}
            alt={row.name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500/30"
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
    { key: 'isActive', label: 'Active',
       render: (value, row) => (
        <p className={`px-2 py-1 rounded-full text-xs font-semibold ${value ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
          {value ? 'Active' : 'Inactive'}
        </p>  
       )
     },
  ]

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-8"
      >
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Members</h1>
          <p className="text-slate-400">Manage organization members</p>
        </div>
        <Button
          onClick={() => setShowForm(!showForm)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
        >
          {showForm ? 'Cancel' : 'Add Member'}
        </Button>
      </motion.div>

      {showForm && (
        <MemberForm member={editingMember as any} onClose={handleFormClose} />
      )}

      <DataTable
        data={members}
        columns={columns}
        onEdit={(member) => {
          setEditingMember(member)
          setShowForm(true)
        }}
        onDelete={handleDelete}
        loading={loading}
      />
    </div>
  )
}
