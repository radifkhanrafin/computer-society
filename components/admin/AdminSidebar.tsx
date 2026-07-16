'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'

const navigationItems = [
  { label: 'Dashboard', href: '/admin/dashboard' },
  { label: 'Committee', href: '/admin/dashboard/committee' },
  { label: 'Members', href: '/admin/dashboard/members' },
  { label: 'Events', href: '/admin/dashboard/events' },
  { label: 'Blogs', href: '/admin/dashboard/blogs' },
  { label: 'Gallery', href: '/admin/dashboard/gallery' },
  { label: 'Achievements', href: '/admin/dashboard/achievements' },
  { label: 'Sponsors', href: '/admin/dashboard/sponsors' },
  { label: 'Settings', href: '/admin/dashboard/settings' },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <motion.aside
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      className="  fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-slate-900 to-slate-800 border-r border-slate-700/50 overflow-y-auto pt-6"
    >
      <Link href="/" className="  flex flex-col items-center gap-3 mb-8 ">
         <Image src="/wub.png" alt="WUBCS" width={80} height={60} />
        <p className="text-xs text-slate-400 mt-1">Admin Panel</p>
      </Link>

      <nav className="space-y-1 px-3">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href 
          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`px-4 py-3 my-2 rounded-lg flex items-center gap-3 font-medium transition-all ${
                  isActive
                    ? ' border-2 border-white hover:bg-white hover:text-black text-white shadow-lg'
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
