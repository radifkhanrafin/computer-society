'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'

interface Stats {
  members: number
  events: number
  blogs: number
  gallery: number
  committee: number
  achievements: number
  sponsors: number
}

const mockChartData = [
  { month: 'Jan', members: 12, events: 4, blogs: 3 },
  { month: 'Feb', members: 19, events: 6, blogs: 5 },
  { month: 'Mar', members: 25, events: 8, blogs: 7 },
  { month: 'Apr', members: 32, events: 5, blogs: 9 },
  { month: 'May', members: 38, events: 7, blogs: 11 },
  { month: 'Jun', members: 45, events: 6, blogs: 13 },
]

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({
    members: 0,
    events: 0,
    blogs: 0,
    gallery: 0,
    committee: 0,
    achievements: 0,
    sponsors: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [
          membersRes,
          eventsRes,
          blogsRes,
          galleryRes,
          committeeRes,
          achievementsRes,
          sponsorsRes,
        ] = await Promise.all([
          fetch('/api/members'),
          fetch('/api/events'),
          fetch('/api/blogs'),
          fetch('/api/gallery'),
          fetch('/api/committee'),
          fetch('/api/achievements'),
          fetch('/api/sponsors'),
        ])

        const membersData = await membersRes.json()
        const eventsData = await eventsRes.json()
        const blogsData = await blogsRes.json()
        const galleryData = await galleryRes.json()
        const committeeData = await committeeRes.json()
        const achievementsData = await achievementsRes.json()
        const sponsorsData = await sponsorsRes.json()

        setStats({
          members: membersData.data?.length || 0,
          events: eventsData.data?.length || 0,
          blogs: blogsData.data?.length || 0,
          gallery: galleryData.data?.length || 0,
          committee: committeeData.data?.length || 0,
          achievements: achievementsData.data?.length || 0,
          sponsors: sponsorsData.data?.length || 0,
        })
      } catch (error) {
        console.error('[v0] Fetch stats error:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  const statItems = [
    { label: 'Members', value: stats.members, icon: '👥', color: 'from-blue-600 to-blue-400' },
    { label: 'Events', value: stats.events, icon: '📅', color: 'from-purple-600 to-purple-400' },
    { label: 'Blogs', value: stats.blogs, icon: '📝', color: 'from-pink-600 to-pink-400' },
    { label: 'Gallery', value: stats.gallery, icon: '🖼️', color: 'from-green-600 to-green-400' },
    { label: 'Committee', value: stats.committee, icon: '🎯', color: 'from-yellow-600 to-yellow-400' },
    { label: 'Achievements', value: stats.achievements, icon: '🏆', color: 'from-orange-600 to-orange-400' },
    { label: 'Sponsors', value: stats.sponsors, icon: '💼', color: 'from-red-600 to-red-400' },
  ]

  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-slate-400">Welcome to WUBCS Admin Panel</p>
      </motion.div>

      {/* Statistics Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
      >
        {statItems.slice(0, 4).map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
            className={`bg-gradient-to-br ${item.color} rounded-xl p-6 shadow-lg border border-white/10`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm font-medium">{item.label}</p>
                <p className="text-4xl font-bold text-white mt-2">{loading ? '...' : item.value}</p>
              </div>
              <span className="text-4xl">{item.icon}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Statistics */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
      >
        {statItems.slice(4).map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.05 }}
            className={`bg-gradient-to-br ${item.color} rounded-xl p-6 shadow-lg border border-white/10`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm font-medium">{item.label}</p>
                <p className="text-3xl font-bold text-white mt-2">{loading ? '...' : item.value}</p>
              </div>
              <span className="text-3xl">{item.icon}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-white mb-4">Growth Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis stroke="rgba(255,255,255,0.5)" />
              <YAxis stroke="rgba(255,255,255,0.5)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              />
              <Line type="monotone" dataKey="members" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6' }} />
              <Line type="monotone" dataKey="blogs" stroke="#ec4899" strokeWidth={2} dot={{ fill: '#ec4899' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-white mb-4">Monthly Activities</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis stroke="rgba(255,255,255,0.5)" />
              <YAxis stroke="rgba(255,255,255,0.5)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              />
              <Bar dataKey="events" fill="#a855f7" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  )
}
