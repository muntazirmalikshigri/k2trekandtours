'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const starsRef = useRef(null)

  useEffect(() => {
    const container = starsRef.current
    if (!container) return
    for (let i = 0; i < 120; i++) {
      const star = document.createElement('div')
      const size = Math.random() > 0.85 ? '3px' : '2px'
      star.style.cssText = `
        position: absolute;
        width: ${size};
        height: ${size};
        background: white;
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 70}%;
        opacity: ${0.2 + Math.random() * 0.8};
        animation: twinkle ${2 + Math.random() * 3}s ease-in-out infinite;
        animation-delay: ${Math.random() * 3}s;
      `
      container.appendChild(star)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-[#0a0e0a]">

      <div ref={starsRef} className="absolute inset-0 z-0" />

      <svg
        className="absolute bottom-0 left-0 right-0 w-full z-0"
        style={{ height: '75%' }}
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMax slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a0e0a" stopOpacity="0" />
            <stop offset="60%" stopColor="#0a0e0a" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0a0e0a" stopOpacity="0.95" />
          </linearGradient>
        </defs>
        <polygon points="0,600 0,380 100,200 220,320 360,80 500,260 640,30 800,220 940,110 1080,300 1200,150 1340,270 1440,190 1440,600" fill="rgba(255,255,255,0.018)" />
        <polygon points="0,600 0,450 80,300 200,400 320,230 460,360 600,180 740,320 860,220 1000,370 1120,250 1260,360 1380,280 1440,320 1440,600" fill="rgba(255,255,255,0.028)" />
        <polygon points="0,600 0,500 120,380 260,470 400,330 540,450 680,300 820,430 960,350 1100,460 1240,360 1360,450 1440,400 1440,600" fill="rgba(255,255,255,0.04)" />
        <polygon points="360,80 328,145 392,145" fill="rgba(255,255,255,0.22)" />
        <polygon points="640,30 608,95 672,95" fill="rgba(255,255,255,0.28)" />
        <polygon points="940,110 910,168 970,168" fill="rgba(255,255,255,0.18)" />
        <polygon points="1200,150 1172,205 1228,205" fill="rgba(255,255,255,0.15)" />
        <rect x="0" y="0" width="1440" height="600" fill="url(#heroGrad)" />
      </svg>

      <div
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(to bottom, rgba(10,14,10,0.05) 0%, rgba(10,14,10,0.0) 25%, rgba(10,14,10,0.55) 65%, rgba(10,14,10,0.92) 100%)' }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 md:pb-28">
        <div className="flex items-center gap-3 mb-6" style={{ animation: 'fadeUp 0.9s ease 0.2s both' }}>
          <div className="w-8 h-px bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-xs tracking-[0.22em] uppercase">Northern Pakistan</span>
        </div>

        <h1
          className="text-[#f5f0e8] leading-[0.95] mb-7"
          style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(52px, 8vw, 108px)', fontWeight: '300', animation: 'fadeUp 0.9s ease 0.4s both' }}
        >
          Where Mountains<br />
          <em style={{ color: '#c4b49a', fontStyle: 'italic' }}>Touch the Sky</em>
        </h1>

        <p
          className="text-[#f5f0e8]/55 max-w-lg mb-10 leading-relaxed"
          style={{ fontSize: '15px', fontWeight: '300', animation: 'fadeUp 0.9s ease 0.6s both' }}
        >
          Gilgit Baltistan — home to five 8000m peaks. Discover ancient valleys,
          glacier trails and Silk Road heritage with expert local guides.
        </p>

        <div className="flex flex-wrap gap-4 items-center" style={{ animation: 'fadeUp 0.9s ease 0.8s both' }}>
          <Link
            href="/packages"
            className="flex items-center gap-2 bg-[#c9a84c] text-[#0f0e0c] px-7 py-3.5 text-xs tracking-[0.12em] uppercase font-medium hover:bg-[#ddb85a] transition-all duration-200 hover:-translate-y-px"
          >
            Explore Packages
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/destinations"
            className="border border-[#f5f0e8]/30 text-[#f5f0e8]/80 px-7 py-3.5 text-xs tracking-[0.12em] uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-200"
          >
            View Destinations
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 right-10 z-10 flex flex-col items-center gap-2" style={{ animation: 'fadeIn 1.5s ease 1.2s both' }}>
        <span className="text-[#f5f0e8]/30 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-[#f5f0e8]/25 animate-bounce" />
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  )
}
