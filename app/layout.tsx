import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

import NotificationModal from '@/components/ui/NotificationModal' 
import ThemeProvider from '@/components/ui/ThemeProvider'

export const metadata: Metadata = {
  title: 'WUBCS - World University of Bangladesh Computer Society',
  description:
    'World University of Bangladesh Computer Society - Innovation, learning, and tech community',
  generator: 'mahfuz.web.dev',
  icons: {
    icon: '/wub.png',
    shortcut: '/favicon.ico',
    apple: '/wub.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
        <ThemeProvider>
          <NotificationModal />

          {/* Global Background */}
<div className="fixed inset-0 -z-50 overflow-hidden">
  {/* Main Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-black from-slate-50 via-white to-slate-100" />

  {/* Blue Glow */}
  <div className="absolute top-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full dark:bg-blue-600/15 bg-blue-500/10 blur-[180px]" />

  {/* Purple Glow */}
  <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full dark:bg-purple-600/15 bg-purple-500/10 blur-[180px]" />

  {/* Cyan Glow */}
  <div className="absolute top-1/2 left-0 h-[450px] w-[450px] rounded-full dark:bg-cyan-500/10 bg-cyan-400/10 blur-[160px]" />

  {/* Grid */}
  <div
    className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
    style={{
      backgroundImage: `
        linear-gradient(currentColor 1px, transparent 1px),
        linear-gradient(90deg, currentColor 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px',
    }}
  />
</div>

          {children}

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}