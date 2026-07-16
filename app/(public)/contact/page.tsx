'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState, FormEvent } from 'react'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    // Simulate sending message
    setTimeout(() => {
      setMessage('Thank you for your message! We will get back to you soon.')
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-bold text-white mb-4 text-center">Get In Touch</h1>
          <p className="text-slate-400 text-lg text-center mb-12">
            Have a question or want to collaborate? We&apos;d love to hear from you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center"
            >
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-slate-400">info@wubcs.org</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center"
            >
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-slate-400">+880 1XXX XXXXXX</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center"
            >
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-white font-semibold mb-2">Location</h3>
              <p className="text-slate-400">World University of Bangladesh, Dhaka</p>
            </motion.div>
          </div>

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 space-y-6"
          >
            {message && (
              <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg">
                <p className="text-green-400">{message}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <Input
                  required
                  placeholder="Your name"
                  className="bg-slate-700/50 border-slate-600 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <Input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="bg-slate-700/50 border-slate-600 text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
              <Input
                required
                placeholder="Message subject"
                className="bg-slate-700/50 border-slate-600 text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Your message..."
                className="w-full bg-slate-700/50 border border-slate-600 text-white rounded-lg p-3"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  )
}
