'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const categories = ['All', 'Peaks', 'Valleys', 'Culture', 'Trekking', 'Lakes']

const photos = [
  { id: 1, title: 'K2 at Sunrise', category: 'Peaks', bg: 'linear-gradient(160deg, #1a2535 0%, #2a3a55 100%)', size: 'large' },
  { id: 2, title: 'Hunza Valley in Autumn', category: 'Valleys', bg: 'linear-gradient(160deg, #1a3a2a 0%, #3a5a2a 100%)', size: 'normal' },
  { id: 3, title: 'Baltit Fort', category: 'Culture', bg: 'linear-gradient(160deg, #3a2a1a 0%, #5a4a2a 100%)', size: 'normal' },
  { id: 4, title: 'Attabad Lake', category: 'Lakes', bg: 'linear-gradient(160deg, #1a2a3a 0%, #1a4a5a 100%)', size: 'large' },
  { id: 5, title: 'Concordia Trek', category: 'Trekking', bg: 'linear-gradient(160deg, #2a2a3a 0%, #3a3a5a 100%)', size: 'normal' },
  { id: 6, title: 'Fairy Meadows Camp', category: 'Trekking', bg: 'linear-gradient(160deg, #2a3a1a 0%, #3a4a2a 100%)', size: 'normal' },
  { id: 7, title: 'Nanga Parbat View', category: 'Peaks', bg: 'linear-gradient(160deg, #2a1a1a 0%, #4a2a1a 100%)', size: 'normal' },
  { id: 8, title: 'Skardu Desert', category: 'Valleys', bg: 'linear-gradient(160deg, #3a2a1a 0%, #5a4a2a 100%)', size: 'large' },
  { id: 9, title: 'Local Polo Match', category: 'Culture', bg: 'linear-gradient(160deg, #1a2a1a 0%, #2a3a2a 100%)', size: 'normal' },
  { id: 10, title: 'Satpara Lake', category: 'Lakes', bg: 'linear-gradient(160deg, #1a2535 0%, #1a3545 100%)', size: 'normal' },
  { id: 11, title: 'Karakoram Highway', category: 'Trekking', bg: 'linear-gradient(160deg, #2a2a2a 0%, #3a3a3a 100%)', size: 'normal' },
  { id: 12, title: 'Hunza Cherry Blossoms', category: 'Valleys', bg: 'linear-gradient(160deg, #3a1a2a 0%, #5a2a3a 100%)', size: 'normal' },
]

export default function GalleryPage() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? photos : photos.filter(p => p.category === active)

  function prev() {
    const i = filtered.findIndex(p => p.id === lightbox.id)
    setLightbox(filtered[(i - 1 + filtered.length) % filtered.length])
  }
  function next() {
    const i = filtered.findIndex(p => p.id === lightbox.id)
    setLightbox(filtered[(i + 1) % filtered.length])
  }

  return (
    <div className="bg-[#0f0e0c] min-h-screen">

      {/* Hero */}
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-[10px] tracking-[0.22em] uppercase">Visual Journey</span>
          </div>
          <h1 className="text-[#f5f0e8]" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: '300', lineHeight: '1.05' }}>
            Photo <em style={{ fontStyle: 'italic', color: '#c4b49a' }}>Gallery</em>
          </h1>
        </div>
      </div>

      {/* Filter */}
      <div className="px-6 mb-10">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-xs tracking-widest uppercase transition-all duration-200 ${
                active === cat
                  ? 'bg-[#c9a84c] text-[#0f0e0c]'
                  : 'border border-[#f5f0e8]/15 text-[#f5f0e8]/45 hover:border-[#c9a84c] hover:text-[#c9a84c]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((photo) => (
            <div
              key={photo.id}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-sm"
              style={{ background: photo.bg, height: photo.size === 'large' ? '380px' : '260px' }}
              onClick={() => setLightbox(photo)}
            >
              <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 400 300" preserveAspectRatio="xMidYMax slice">
                <polygon points="0,300 0,180 80,70 180,150 280,30 360,120 400,80 400,300" fill="rgba(255,255,255,0.05)" />
                <polygon points="280,30 256,76 304,76" fill="rgba(255,255,255,0.2)" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-[10px] tracking-widest uppercase text-[#c9a84c] mb-1">{photo.category}</div>
                <div className="text-[#f5f0e8] text-sm font-medium">{photo.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-[#f5f0e8]/50 hover:text-[#f5f0e8] transition-colors" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <button className="absolute left-6 top-1/2 -translate-y-1/2 text-[#f5f0e8]/50 hover:text-[#f5f0e8] transition-colors" onClick={(e) => { e.stopPropagation(); prev() }}>
            <ChevronLeft className="w-10 h-10" />
          </button>
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="rounded-sm overflow-hidden" style={{ background: lightbox.bg, height: '500px', position: 'relative' }}>
              <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 800 500" preserveAspectRatio="xMidYMax slice">
                <polygon points="0,500 0,300 120,120 280,240 440,60 600,220 720,100 800,180 800,500" fill="rgba(255,255,255,0.05)" />
                <polygon points="440,60 412,110 468,110" fill="rgba(255,255,255,0.22)" />
              </svg>
            </div>
            <div className="mt-4 text-center">
              <p className="text-[10px] tracking-widest uppercase text-[#c9a84c] mb-1">{lightbox.category}</p>
              <p className="text-[#f5f0e8] text-lg" style={{ fontFamily: 'Georgia, serif', fontWeight: '300' }}>{lightbox.title}</p>
            </div>
          </div>
          <button className="absolute right-6 top-1/2 -translate-y-1/2 text-[#f5f0e8]/50 hover:text-[#f5f0e8] transition-colors" onClick={(e) => { e.stopPropagation(); next() }}>
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}

    </div>
  )
}
