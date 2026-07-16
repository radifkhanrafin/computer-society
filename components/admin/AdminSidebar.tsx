'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const navigationItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: '📊' },
  { label: 'Members', href: '/admin/dashboard/members', icon: '👥' },
  { label: 'Committee', href: '/admin/dashboard/committee', icon: '🎯' },
  { label: 'Events', href: '/admin/dashboard/events', icon: '📅' },
  { label: 'Blogs', href: '/admin/dashboard/blogs', icon: '📝' },
  { label: 'Gallery', href: '/admin/dashboard/gallery', icon: '🖼️' },
  { label: 'Achievements', href: '/admin/dashboard/achievements', icon: '🏆' },
  { label: 'Sponsors', href: '/admin/dashboard/sponsors', icon: '💼' },
  { label: 'Settings', href: '/admin/dashboard/settings', icon: '⚙️' },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <motion.aside
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-slate-900 to-slate-800 border-r border-slate-700/50 overflow-y-auto pt-6"
    >
      <Link href="/" className="px-6 mb-8 block">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          WUBCS
        </div>
        <p className="text-xs text-slate-400 mt-1">Admin Panel</p>
      </Link>

      <nav className="space-y-1 px-3">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`px-4 py-3 rounded-lg flex items-center gap-3 font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-slate-300 hover:bg-slate-700/30'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </motion.div>
            </Link>
          )
        })}
      </nav>
    </motion.aside>
  )
}
