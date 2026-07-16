import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col items-center justify-center" >
            <Image src="/wub.png" alt="WUBCS" width={100} height={80} />

          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/members" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Members
                </Link>
              </li>
              <li>
                <Link href="/committee" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Committee
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div  className="flex flex-col gap-4 items-center justify-center">
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 items-center justify-center">
              <a
                href="https://www.facebook.com/wubcs"
                tearget="_blank"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors text-white"
              >
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-400 flex items-center justify-center transition-colors text-white"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-pink-600 flex items-center justify-center transition-colors text-white"
              >
                📷
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/50 pt-8">
          <p className="text-center text-slate-400 text-sm">
            © {new Date().getFullYear()} WUBCS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
