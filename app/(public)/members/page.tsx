'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'

interface Member {
  _id: string
  name: string
  email: string
  phone: string
  department?: string
  batch?: string
  photo?: string
  bio?: string
  skills?: string[]
}

export default function MembersPage() {
  const [members, setMembers] = useState<Member[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('/api/members')
        const data = await response.json()
        if (data.success) {
          setMembers(data.data || [])
        }
      } catch (error) {
        console.error('[v0] Fetch members error:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMembers()
  }, [])

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.department?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Our Members</h1>
          <p className="text-slate-400 text-lg">Meet the talented individuals in our community</p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Input
            placeholder="Search by name or department..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-slate-800/50 border-slate-700 text-white"
          />
        </motion.div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loading ? (
            <p className="col-span-full text-center text-slate-400">Loading members...</p>
          ) : filteredMembers.length === 0 ? (
            <p className="col-span-full text-center text-slate-400">No members found</p>
          ) : (
            filteredMembers.map((member, index) => (
              <motion.div
                key={member._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % 4) * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden hover:border-blue-500/50 transition-all group"
              >
                <div className="p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
                    {member.name.charAt(0)}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {member.name}
                  </h3>

                  {member.department && (
                    <p className="text-sm text-slate-400 mb-3">{member.department}</p>
                  )}

                  {member.batch && (
                    <p className="text-xs text-slate-500 mb-3">Batch: {member.batch}</p>
                  )}

                  {member.skills && member.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {member.skills.slice(0, 2).map((skill) => (
                        <span key={skill} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="pt-4 border-t border-slate-700/50 space-y-2 text-xs text-slate-400">
                    <p>📧 {member.email}</p>
                    <p>📱 {member.phone}</p>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
