import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Navbar } from '@/components/public/Navbar'
import { Footer } from '@/components/public/Footer'

export const metadata: Metadata = {
  title: 'WUBCS - World University of Bangladesh Computer Society',
  description: 'World University of Bangladesh Computer Society - Innovation, learning, and tech community',
  generator: 'v0.app',
  applicationName: 'WUBCS',
  referrer: 'origin-when-cross-origin',
  keywords: ['WUBCS', 'World University of Bangladesh', 'Computer Society', 'Tech Community', 'Innovation', 'Learning'],
  authors: [{ name: 'Md. Mahfuz Hossain', url: 'https://mahfuzhossain.com' }]
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white">
        {/* Global Background */}
        <div className="fixed inset-0 -z-50 overflow-hidden">
          {/* Main Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black" />

          {/* Blue Glow */}
          <div className="absolute top-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[180px]" />

          {/* Purple Glow */}
          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[180px]" />

          {/* Cyan Glow */}
          <div className="absolute top-1/2 left-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[160px]" />

          {/* Optional Grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div> 
        <Analytics />
        {/*
          The children prop will render the content of the page that uses this layout.
          This is where the main content of each page will be injected.
        */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
