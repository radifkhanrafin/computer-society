'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import CommitteeCard from '@/components/public/CommitteeCard'

interface CommitteeMember {
  _id: string
  name: string
  position: string
  email?: string
  photo?: string
  bio?: string
  order: number
}

export default function CommitteePage() {
  const [committee, setCommittee] = useState<CommitteeMember[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCommittee = async () => {
      try {
        const response = await fetch('/api/committee')
        const data = await response.json()
        if (data.success) {
          setCommittee(data.data || [])
        }
      } catch (error) {
        console.error('[v0] Fetch committee error:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCommittee()
  }, [])

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Our Committee</h1>
          <p className="text-slate-400 text-lg">Meet the leaders guiding our community</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <p className="col-span-full text-center text-slate-400">Loading committee...</p>
          ) : committee.length === 0 ? (
            <p className="col-span-full text-center text-slate-400">No committee members found</p>
          ) : (
            committee.map((member, index) => (
              <CommitteeCard key={member._id} member={member as any} index={index} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}
