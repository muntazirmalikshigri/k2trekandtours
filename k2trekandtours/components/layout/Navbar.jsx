'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Mountain } from 'lucide-react'

const navLinks = [
  { label: 'Destinations', href: '/destinations' },
  { label: 'Packages', href: '/packages' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'For Agencies', href: '/agencies' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0f0e0c]/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Mountain className="w-6 h-6 text-[#c9a84c]" />
          <span className="font-semibold text-[#f5f0e8] text-lg tracking-widest uppercase">
            K2 <span className="text-[#c9a84c]">Treks</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[#f5f0e8]/70 hover:text-[#c9a84c] text-xs tracking-widest uppercase transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0f0e0c] text-xs tracking-widest uppercase px-5 py-2 transition-all duration-200"
            >
              Book Now
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-[#f5f0e8]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f0e0c]/95 backdrop-blur-md px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#f5f0e8]/70 hover:text-[#c9a84c] text-sm tracking-widest uppercase transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="border border-[#c9a84c] text-[#c9a84c] text-sm tracking-widest uppercase px-5 py-3 text-center"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  )
}
