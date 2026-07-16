'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Event {
  _id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  status: 'upcoming' | 'ongoing' | 'completed'
  category: string
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'ongoing' | 'completed'>('all')

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events')
        const data = await response.json()
        if (data.success) {
          setEvents(data.data || [])
        }
      } catch (error) {
        console.error('Fetch events error:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const filteredEvents = filter === 'all' ? events : events.filter((e) => e.status === filter)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/50'
      case 'ongoing':
        return 'bg-green-500/20 text-green-300 border-green-500/50'
      case 'completed':
        return 'bg-slate-500/20 text-slate-300 border-slate-500/50'
      default:
        return 'bg-slate-500/20'
    }
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Events</h1>
          <p className="text-slate-400 text-lg">Discover and participate in our upcoming events</p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {(['all', 'upcoming', 'ongoing', 'completed'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === status
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:border-slate-600'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <p className="col-span-full text-center text-slate-400">Loading events...</p>
          ) : filteredEvents.length === 0 ? (
            <p className="col-span-full text-center text-slate-400">No events found</p>
          ) : (
            filteredEvents.map((event, index) => (
              <motion.div
                key={event._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden hover:border-blue-500/50 transition-all group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getStatusColor(event.status)}`}>
                      {event.status}
                    </span>
                    <span className="text-sm text-slate-400">{event.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-4">{event.description.substring(0, 100)}...</p>

                  <div className="space-y-2 text-sm text-slate-400">
                    <p>📅 {new Date(event.date).toLocaleDateString()}</p>
                    <p>⏰ {event.time}</p>
                    <p>📍 {event.location}</p>
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
