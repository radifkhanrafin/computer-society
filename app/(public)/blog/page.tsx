'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'

interface Blog {
  _id: string
  title: string
  excerpt: string
  author: string
  category: string
  publishedAt: string
  tags?: string[]
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs')
        const data = await response.json()
        if (data.success) {
          setBlogs(data.data || [])
        }
      } catch (error) {
        console.error(' Fetch blogs error:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-slate-400 text-lg">Insights and stories from our community</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Input
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-slate-800/50 border-slate-700 text-white"
          />
        </motion.div>

        <div className="space-y-6">
          {loading ? (
            <p className="text-center text-slate-400">Loading blog posts...</p>
          ) : filteredBlogs.length === 0 ? (
            <p className="text-center text-slate-400">No blog posts found</p>
          ) : (
            filteredBlogs.map((blog, index) => (
              <motion.article
                key={blog._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-8 hover:border-blue-500/50 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {blog.title}
                    </h2>
                    <div className="flex gap-4 text-sm text-slate-400">
                      <span>By {blog.author}</span>
                      <span>•</span>
                      <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>

                <p className="text-slate-300 mb-4 leading-relaxed">{blog.excerpt}</p>

                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <span key={tag} className="text-xs text-slate-400 bg-slate-700/30 px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.article>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
