'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Gallery {
  _id: string
  title: string
  description?: string
  images: Array<{
    url: string
    caption?: string
  }>
}

export default function GalleryPage() {
  const [galleries, setGalleries] = useState<Gallery[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const response = await fetch('/api/gallery')
        const data = await response.json()
        if (data.success) {
          setGalleries(data.data || [])
        }
      } catch (error) {
        console.error('[v0] Fetch galleries error:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchGalleries()
  }, [])

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Gallery</h1>
          <p className="text-slate-400 text-lg">Explore our community moments</p>
        </motion.div>

        <div className="space-y-12">
          {loading ? (
            <p className="text-center text-slate-400">Loading galleries...</p>
          ) : galleries.length === 0 ? (
            <p className="text-center text-slate-400">No galleries found</p>
          ) : (
            galleries.map((gallery, galleryIndex) => (
              <motion.div
                key={gallery._id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">{gallery.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {gallery.images.map((image, imgIndex) => (
                    <motion.div
                      key={imgIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: imgIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700/50 group hover:border-blue-500/50 transition-all"
                    >
                      <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all">
                        <div className="text-center">
                          <div className="text-4xl mb-2">📸</div>
                          <p className="text-slate-400 text-sm">{image.caption || 'Image'}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
