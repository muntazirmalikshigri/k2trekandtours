import Link from 'next/link'
import { ArrowRight, Clock, Users, Mountain, Check } from 'lucide-react'

const packages = [
  {
    slug: 'hunza-discovery',
    days: 7,
    title: 'Hunza Valley Discovery',
    category: 'Cultural',
    desc: 'From Karimabad forts to Attabad Lake — the classic Hunza experience for first-time visitors to Gilgit Baltistan.',
    includes: ['Airport transfers included', 'Boutique guesthouse stays', 'Licensed local guide', 'All meals (local cuisine)', 'Jeep transportation'],
    price: 680,
    groupSize: '2–12',
    difficulty: 'Easy',
    featured: false,
  },
  {
    slug: 'gb-grand-expedition',
    days: 14,
    title: 'GB Grand Expedition',
    category: 'Adventure',
    desc: 'Hunza + Skardu + Fairy Meadows. The complete Gilgit Baltistan experience in one unforgettable journey across the Karakoram.',
    includes: ['Domestic flights included', 'Camping + guesthouse mix', '2 expert guides + cook', 'All permits (PTDC)', 'All meals included', 'Jeep + porter support'],
    price: 1450,
    groupSize: '4–10',
    difficulty: 'Moderate',
    featured: true,
  },
  {
    slug: 'k2-base-camp-trek',
    days: 22,
    title: 'K2 Base Camp Trek',
    category: 'Trekking',
    desc: 'The ultimate mountaineer journey to the foot of the world second highest peak through the legendary Baltoro Glacier.',
    includes: ['Full camping equipment', 'High-altitude cook + porters', 'Emergency protocols + kit', 'All trekking permits', 'Islamabad flights'],
    price: 2800,
    groupSize: '2–8',
    difficulty: 'Hard',
    featured: false,
  },
  {
    slug: 'fairy-meadows-nanga-parbat',
    days: 5,
    title: 'Fairy Meadows Trek',
    category: 'Trekking',
    desc: 'A short but spectacular trek to Fairy Meadows with jaw-dropping views of Nanga Parbat, the ninth highest mountain.',
    includes: ['Raikot Bridge jeep transfer', 'Fairy Meadows campsite', 'Experienced guide', 'All meals', 'Camping equipment'],
    price: 420,
    groupSize: '2–15',
    difficulty: 'Moderate',
    featured: false,
  },
  {
    slug: 'hunza-skardu-combo',
    days: 10,
    title: 'Hunza & Skardu Combo',
    category: 'Cultural',
    desc: 'The best of both worlds — ancient Hunza culture meets the cold desert drama of Skardu in one perfectly paced itinerary.',
    includes: ['All transfers included', 'Mix of hotels + guesthouses', 'Local expert guide', 'Shangrila resort visit', 'All meals'],
    price: 980,
    groupSize: '2–12',
    difficulty: 'Easy',
    featured: false,
  },
  {
    slug: 'photography-tour',
    days: 12,
    title: 'Karakoram Photography Tour',
    category: 'Photography',
    desc: 'Designed for photographers — golden hour at Attabad Lake, cherry blossoms in Hunza, and the mighty Karakoram peaks.',
    includes: ['Photography-focused itinerary', 'Golden hour locations', 'Expert local guide', 'All meals + accommodation', 'Flexible schedule'],
    price: 1200,
    groupSize: '2–6',
    difficulty: 'Easy',
    featured: false,
  },
]

const difficultyColor = {
  Easy: 'text-[#a8c490] bg-[#3d4a35]',
  Moderate: 'text-[#c9a84c] bg-[#4a3a1a]',
  Hard: 'text-[#c47060] bg-[#3a1a1a]',
}

const categoryColor = {
  Cultural: 'text-[#7fafc4] bg-[#1a2a3a]',
  Adventure: 'text-[#c9a84c] bg-[#3a2a0a]',
  Trekking: 'text-[#a8c490] bg-[#2a3a1a]',
  Photography: 'text-[#c4a0c4] bg-[#2a1a3a]',
}

export const metadata = {
  title: 'Tour Packages — K2 Trek and Tours',
  description: 'Curated tour packages for Gilgit Baltistan — from easy cultural tours to K2 Base Camp expeditions.',
}

export default function PackagesPage() {
  return (
    <div className="bg-[#f5f0e8] min-h-screen">

      {/* Hero */}
      <div className="bg-[#0f0e0c] pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-[10px] tracking-[0.22em] uppercase">Curated Journeys</span>
          </div>
          <h1
            className="text-[#f5f0e8]"
            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: '300', lineHeight: '1.05' }}
          >
            Tour <em style={{ fontStyle: 'italic', color: '#c4b49a' }}>Packages</em>
          </h1>
          <p className="text-[#f5f0e8]/45 mt-4 max-w-xl text-sm leading-relaxed">
            Every package is designed by our local experts — fully supported, permit-handled, and unforgettable.
          </p>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.slug}
              className={`relative flex flex-col bg-white border rounded-sm overflow-hidden hover:-translate-y-1 transition-transform duration-300 ${
                pkg.featured ? 'border-[#c9a84c] border-2' : 'border-[#e8e2d8]'
              }`}
            >
              {pkg.featured && (
                <div className="bg-[#c9a84c] text-[#0f0e0c] text-[9px] tracking-[0.18em] uppercase px-4 py-2 text-center font-medium">
                  Most Popular
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                {/* Top badges */}
                <div className="flex gap-2 mb-5">
                  <span className={`text-[10px] tracking-wider uppercase px-2 py-1 rounded-sm ${categoryColor[pkg.category]}`}>
                    {pkg.category}
                  </span>
                  <span className={`text-[10px] tracking-wider uppercase px-2 py-1 rounded-sm ${difficultyColor[pkg.difficulty]}`}>
                    {pkg.difficulty}
                  </span>
                </div>

                {/* Days watermark */}
                <div className="relative">
                  <div
                    className="absolute -top-2 right-0 text-[#0f0e0c]/05"
                    style={{ fontFamily: 'Georgia, serif', fontSize: '72px', fontWeight: '300', lineHeight: '1' }}
                  >
                    {pkg.days}
                  </div>
                  <h2
                    className="text-[#0f0e0c] relative z-10 mb-3"
                    style={{ fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: '300', lineHeight: '1.2' }}
                  >
                    {pkg.title}
                  </h2>
                </div>

                <p className="text-[#0f0e0c]/50 text-sm leading-relaxed mb-6">{pkg.desc}</p>

                {/* Stats */}
                <div className="flex gap-4 mb-6 text-xs text-[#0f0e0c]/40">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {pkg.days} days
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    {pkg.groupSize} people
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Mountain className="w-3.5 h-3.5" />
                    {pkg.difficulty}
                  </div>
                </div>

                {/* Includes */}
                <ul className="space-y-2 mb-7 flex-1">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-[#0f0e0c]/55">
                      <Check className="w-3.5 h-3.5 text-[#c9a84c] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="border-t border-[#e8e2d8] pt-5 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-[#0f0e0c]/35 uppercase tracking-wider mb-0.5">From</div>
                    <div
                      className="text-[#0f0e0c]"
                      style={{ fontFamily: 'Georgia, serif', fontSize: '28px', fontWeight: '300', lineHeight: '1' }}
                    >
                      ${pkg.price.toLocaleString()}
                    </div>
                    <div className="text-[10px] text-[#0f0e0c]/30">/ person</div>
                  </div>
                  <Link
                    href={`/packages/${pkg.slug}`}
                    className="flex items-center gap-2 bg-[#0f0e0c] text-[#f5f0e8] px-5 py-3 text-[11px] tracking-[0.10em] uppercase hover:bg-[#c9a84c] hover:text-[#0f0e0c] transition-all duration-200 group"
                  >
                    Details
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Agency CTA */}
      <div className="bg-[#0f0e0c] py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-[#f5f0e8] mb-3"
              style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: '300' }}
            >
              Need a custom package?
            </h2>
            <p className="text-[#f5f0e8]/40 text-sm">
              Group bookings, custom itineraries, or agency partnerships — we handle it all.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="bg-[#c9a84c] text-[#0f0e0c] px-6 py-3 text-xs tracking-[0.10em] uppercase hover:bg-[#ddb85a] transition-colors"
            >
              Get Custom Quote
            </Link>
            <Link
              href="/agencies"
              className="border border-[#f5f0e8]/20 text-[#f5f0e8]/60 px-6 py-3 text-xs tracking-[0.10em] uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors"
            >
              For Agencies
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
