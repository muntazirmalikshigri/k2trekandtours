import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const destinations = [
  {
    slug: 'hunza-valley',
    name: 'Hunza Valley',
    tag: 'Valley · 2438m',
    desc: 'Ancient Silk Road gateway with apricot orchards, Baltit Fort, and the iconic Rakaposhi view. A paradise of culture and natural beauty.',
    best: 'Apr–Oct',
    days: '3–7 days',
    difficulty: 'Easy',
    bg: 'linear-gradient(160deg, #1a3a2a 0%, #2a4a3a 40%, #1a2a1a 100%)',
  },
  {
    slug: 'skardu',
    name: 'Skardu',
    tag: 'Gateway · 2438m',
    desc: 'Gateway to the world highest peaks. Cold desert landscape, Shangrila resort, and the stunning Satpara Lake await.',
    best: 'May–Sep',
    days: '2–10 days',
    difficulty: 'Easy',
    bg: 'linear-gradient(160deg, #1a2a3a 0%, #2a3a5a 60%, #1a2030 100%)',
  },
  {
    slug: 'fairy-meadows',
    name: 'Fairy Meadows',
    tag: 'Meadow · 3300m',
    desc: 'The most dramatic view of Nanga Parbat in the world. Lush green meadows at the foot of the Killer Mountain.',
    best: 'Jun–Sep',
    days: '2–4 days',
    difficulty: 'Moderate',
    bg: 'linear-gradient(160deg, #2a3a1a 0%, #3a4a2a 50%, #2a3020 100%)',
  },
  {
    slug: 'k2-base-camp',
    name: 'K2 Base Camp',
    tag: 'Trek · 5150m',
    desc: 'The ultimate mountaineer journey through the Karakoram to the foot of the world second highest peak.',
    best: 'Jun–Aug',
    days: '18–22 days',
    difficulty: 'Hard',
    bg: 'linear-gradient(160deg, #1a2535 0%, #2a3a55 40%, #1a2030 100%)',
  },
  {
    slug: 'nanga-parbat',
    name: 'Nanga Parbat',
    tag: 'Trek · 4200m',
    desc: 'The Killer Mountain. Trek through remote valleys to reach the base of the ninth highest mountain on Earth.',
    best: 'Jun–Sep',
    days: '10–14 days',
    difficulty: 'Hard',
    bg: 'linear-gradient(160deg, #2a1a1a 0%, #3a2a1a 50%, #4a3a2a 100%)',
  },
  {
    slug: 'attabad-lake',
    name: 'Attabad Lake',
    tag: 'Lake · 2638m',
    desc: 'A stunning turquoise lake formed by a 2010 landslide. Boat rides through the flooded Karakoram Highway tunnels.',
    best: 'Apr–Oct',
    days: '1–2 days',
    difficulty: 'Easy',
    bg: 'linear-gradient(160deg, #1a2a3a 0%, #1a3a4a 50%, #0a2030 100%)',
  },
]

const difficultyColor = {
  Easy: 'bg-[#3d4a35] text-[#a8c490]',
  Moderate: 'bg-[#4a3a1a] text-[#c9a84c]',
  Hard: 'bg-[#3a1a1a] text-[#c47060]',
}

export const metadata = {
  title: 'Destinations — K2 Trek and Tours',
  description: 'Explore Gilgit Baltistan top destinations — Hunza Valley, Skardu, Fairy Meadows, K2 Base Camp and more.',
}

export default function DestinationsPage() {
  return (
    <div className="bg-[#f5f0e8] min-h-screen">

      {/* Hero */}
      <div className="bg-[#0f0e0c] pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-[10px] tracking-[0.22em] uppercase">Explore</span>
          </div>
          <h1
            className="text-[#f5f0e8]"
            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: '300', lineHeight: '1.05' }}
          >
            Our <em style={{ fontStyle: 'italic', color: '#c4b49a' }}>Destinations</em>
          </h1>
          <p className="text-[#f5f0e8]/45 mt-4 max-w-xl text-sm leading-relaxed">
            From the ancient valleys of Hunza to the base of K2 — every destination in Gilgit Baltistan tells a story.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              className="group block rounded-sm overflow-hidden hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Image area */}
              <div className="relative h-56 overflow-hidden" style={{ background: dest.bg }}>
                <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 400 220" preserveAspectRatio="xMidYMax slice">
                  <polygon points="0,220 0,130 80,50 180,120 280,20 360,100 400,70 400,220" fill="rgba(255,255,255,0.05)" />
                  <polygon points="280,20 256,68 304,68" fill="rgba(255,255,255,0.22)" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c]/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-[#c9a84c] text-[10px] tracking-[0.14em] uppercase">{dest.tag}</span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-[#c9a84c]" />
                </div>
              </div>

              {/* Content */}
              <div className="bg-white p-6 border border-[#e8e2d8] border-t-0">
                <div className="flex items-start justify-between mb-3">
                  <h2
                    className="text-[#0f0e0c]"
                    style={{ fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: '300' }}
                  >
                    {dest.name}
                  </h2>
                  <span className={`text-[10px] tracking-wider uppercase px-2 py-1 rounded-sm ${difficultyColor[dest.difficulty]}`}>
                    {dest.difficulty}
                  </span>
                </div>
                <p className="text-[#0f0e0c]/50 text-sm leading-relaxed mb-4">{dest.desc}</p>
                <div className="flex gap-4 text-[11px] text-[#0f0e0c]/35 uppercase tracking-wider border-t border-[#e8e2d8] pt-4">
                  <span>Best: {dest.best}</span>
                  <span>·</span>
                  <span>{dest.days}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#0f0e0c] py-20 px-6 text-center">
        <h2
          className="text-[#f5f0e8] mb-4"
          style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '300' }}
        >
          Cannot find what you are looking for?
        </h2>
        <p className="text-[#f5f0e8]/40 text-sm mb-8">We offer custom itineraries tailored to your interests and fitness level.</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#c9a84c] text-[#0f0e0c] px-8 py-3.5 text-xs tracking-[0.12em] uppercase font-medium hover:bg-[#ddb85a] transition-colors"
        >
          Plan Custom Trip
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  )
}
