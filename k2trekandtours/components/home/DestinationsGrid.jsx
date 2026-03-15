import Link from 'next/link'

const destinations = [
  {
    slug: 'hunza-valley',
    name: 'Hunza Valley',
    tag: 'Valley · 2438m',
    desc: 'Ancient Silk Road gateway, apricot orchards and the iconic Rakaposhi view.',
    best: 'Apr–Oct',
    days: '3–7 days',
    bg: 'linear-gradient(160deg, #1a3a2a 0%, #2a4a3a 40%, #1a2a1a 100%)',
    large: true,
  },
  {
    slug: 'skardu',
    name: 'Skardu',
    tag: 'Gateway · 2438m',
    desc: 'Base for K2 expeditions.',
    best: 'May–Sep',
    days: '2–10 days',
    bg: 'linear-gradient(160deg, #1a2a3a 0%, #2a3a5a 60%, #1a2030 100%)',
    large: false,
  },
  {
    slug: 'fairy-meadows',
    name: 'Fairy Meadows',
    tag: 'Meadow · 3300m',
    desc: 'Dramatic view of Nanga Parbat.',
    best: 'Jun–Sep',
    days: '2–4 days',
    bg: 'linear-gradient(160deg, #2a3a1a 0%, #3a4a2a 50%, #2a3020 100%)',
    large: false,
  },
  {
    slug: 'k2-base-camp',
    name: 'K2 Base Camp',
    tag: 'Trek · 5150m',
    desc: 'Ultimate mountaineer journey.',
    best: 'Jun–Aug',
    days: '18–22 days',
    bg: 'linear-gradient(160deg, #1a2535 0%, #2a3a55 40%, #1a2030 100%)',
    large: false,
  },
  {
    slug: 'nanga-parbat',
    name: 'Nanga Parbat',
    tag: 'Trek · 4200m',
    desc: 'The Killer Mountain base camp.',
    best: 'Jun–Sep',
    days: '10–14 days',
    bg: 'linear-gradient(160deg, #2a1a1a 0%, #3a2a1a 50%, #4a3a2a 100%)',
    large: false,
  },
]

export default function DestinationsGrid() {
  return (
    <section className="py-24 px-6 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-end justify-between mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-[#b85c38]" />
              <span className="text-[#b85c38] text-[10px] tracking-[0.22em] uppercase">Discover</span>
            </div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: '300', lineHeight: '1.1', color: '#0f0e0c' }}>
              Iconic <em style={{ fontStyle: 'italic', color: '#3d4a35' }}>Destinations</em>
            </h2>
          </div>
          <Link href="/destinations" className="hidden md:block text-[11px] tracking-[0.14em] uppercase text-[#0f0e0c] border-b border-[#0f0e0c]/40 pb-0.5 hover:text-[#b85c38] hover:border-[#b85c38] transition-colors mb-2">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {destinations.map((dest) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              className={`relative overflow-hidden cursor-pointer group rounded-sm ${dest.large ? 'md:row-span-2' : ''}`}
              style={{ background: dest.bg, minHeight: dest.large ? '500px' : '230px' }}
            >
              <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 400 300" preserveAspectRatio="xMidYMax slice">
                <polygon points="0,300 0,180 80,70 180,160 280,40 360,130 400,100 400,300" fill="rgba(255,255,255,0.05)" />
                <polygon points="280,40 256,90 304,90" fill="rgba(255,255,255,0.22)" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c]/85 via-transparent to-transparent" />
              <div className="absolute top-4 right-4 w-8 h-8 border border-[#f5f0e8]/25 rounded-full flex items-center justify-center text-[#f5f0e8] text-xs opacity-0 group-hover:opacity-100 group-hover:border-[#c9a84c] group-hover:text-[#c9a84c] transition-all duration-300">
                ↗
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-[#c9a84c] text-[10px] tracking-[0.14em] uppercase mb-1">{dest.tag}</div>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: dest.large ? '36px' : '24px', fontWeight: '300', color: '#f5f0e8', lineHeight: '1.1' }}>
                  {dest.name}
                </h3>
                {dest.large && <p className="text-[#f5f0e8]/50 text-sm leading-relaxed mt-2 max-w-xs">{dest.desc}</p>}
                <div className="flex gap-4 text-[#f5f0e8]/40 text-xs mt-2">
                  <span>Best: {dest.best}</span>
                  <span>{dest.days}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
