import Link from 'next/link'
import { Mountain, Instagram, Facebook, MessageCircle } from 'lucide-react'

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/k2trekandtours?igsh=MXNraGQ2dWN3Y2xpNw==', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/share/1CUDCJt3AC/', label: 'Facebook' },
  { icon: MessageCircle, href: 'https://wa.me/923325174988', label: 'WhatsApp' },
]

const destinations = ['Hunza Valley', 'Skardu', 'Fairy Meadows', 'K2 Base Camp', 'Nanga Parbat']
const tours = ['Cultural Tours', 'Trekking', 'Mountaineering', 'Photography Tours', 'Custom Packages']
const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Travel Guide', href: '/guide' },
  { label: 'Blog', href: '/blog' },
  { label: 'For Agencies', href: '/agencies' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0f0e0c] text-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Mountain className="w-6 h-6 text-[#c9a84c]" />
            <span className="text-lg font-semibold tracking-widest uppercase">
              K2 <span className="text-[#c9a84c]">Treks</span>
            </span>
          </Link>
          <p className="text-sm text-[#f5f0e8]/40 leading-relaxed max-w-xs">
            Northern Pakistan premier mountain tourism company. Expert local guides since 2012.
          </p>
          <div className="flex gap-3 mt-6">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} className="w-9 h-9 border border-[#f5f0e8]/15 rounded-full flex items-center justify-center text-[#f5f0e8]/40 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-200">
                  <Icon className="w-4 h-4" />
                </a>
              )
            })}
          </div>
        </div>
        <div>
          <h4 className="text-xs tracking-widest uppercase text-[#f5f0e8]/35 mb-5">Destinations</h4>
          <ul className="space-y-3">
            {destinations.map((item) => (
              <li key={item}>
                <Link href="/destinations" className="text-sm text-[#f5f0e8]/55 hover:text-[#c9a84c] transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs tracking-widest uppercase text-[#f5f0e8]/35 mb-5">Tours</h4>
          <ul className="space-y-3">
            {tours.map((item) => (
              <li key={item}>
                <Link href="/packages" className="text-sm text-[#f5f0e8]/55 hover:text-[#c9a84c] transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs tracking-widest uppercase text-[#f5f0e8]/35 mb-5">Company</h4>
          <ul className="space-y-3">
            {companyLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-sm text-[#f5f0e8]/55 hover:text-[#c9a84c] transition-colors">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#f5f0e8]/25">2025 K2 Trek and Tours. PTDC Licensed. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms', 'Sitemap'].map((item) => (
              <Link key={item} href="#" className="text-xs text-[#f5f0e8]/25 hover:text-[#c9a84c] transition-colors">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
