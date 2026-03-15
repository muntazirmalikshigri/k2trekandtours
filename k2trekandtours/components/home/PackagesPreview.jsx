import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const packages = [
  {
    slug: 'hunza-discovery',
    days: '7',
    title: 'Hunza Valley Discovery',
    desc: 'From Karimabad forts to Attabad Lake — the classic Hunza experience.',
    includes: ['Airport transfers', 'Boutique guesthouse', 'Licensed local guide', 'All meals'],
    price: '$680',
    featured: false,
  },
  {
    slug: 'gb-grand-expedition',
    days: '14',
    title: 'GB Grand Expedition',
    desc: 'Hunza + Skardu + Fairy Meadows. The complete Gilgit Baltistan in one journey.',
    includes: ['Domestic flights', 'Camping + guesthouse', '2 expert guides + cook', 'All permits (PTDC)', 'All meals'],
    price: '$1,450',
    featured: true,
  },
  {
    slug: 'k2-base-camp-trek',
    days: '22',
    title: 'K2 Base Camp Trek',
    desc: 'The ultimate mountaineer journey to the world second highest peak.',
    includes: ['Full camping gear', 'High-altitude cook + porters', 'Emergency protocols', 'All trekking permits'],
    price: '$2,800',
    featured: false,
  },
]

export default function PackagesPreview() {
  return (
    <section className="py-24 px-6 bg-[#0f0e0c]">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-end justify-between mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-[10px] tracking-[0.22em] uppercase">Curated Journeys</span>
            </div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: '300', lineHeight: '1.1', color: '#f5f0e8' }}>
              Tour <em style={{ fontStyle: 'italic', color: '#c4b49a' }}>Packages</em>
            </h2>
          </div>
          <Link href="/packages" className="hidden md:block text-[11px] tracking-[0.14em] uppercase text-[#f5f0e8]/40 border-b border-[#f5f0e8]/20 pb-0.5 hover:text-[#c9a84c] hover:border-[#c9a84c] transition-colors mb-2">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#f5f0e8]/8 border border-[#f5f0e8]/8">
          {packages.map((pkg) => (
            <div key={pkg.slug} className={`relative p-10 flex flex-col ${pkg.featured ? 'bg-[#3d4a35]' : 'bg-[#0f0e0c] hover:bg-[#f5f0e8]/2'} transition-colors duration-300`}>
              {pkg.featured && (
                <div className="inline-block bg-[#c9a84c] text-[#0f0e0c] text-[9px] tracking-[0.18em] uppercase px-3 py-1 mb-7 self-start">
                  Most Popular
                </div>
              )}
              <div className="absolute top-8 right-8 text-[#f5f0e8]/6" style={{ fontFamily: 'Georgia, serif', fontSize: '72px', fontWeight: '300', lineHeight: '1' }}>
                {pkg.days}
              </div>
              <h3 className="text-[#f5f0e8] mb-3 relative z-10" style={{ fontFamily: 'Georgia, serif', fontSize: '26px', fontWeight: '300', lineHeight: '1.2' }}>
                {pkg.title}
              </h3>
              <p className="text-[#f5f0e8]/45 text-sm leading-relaxed mb-7">{pkg.desc}</p>
              <ul className="space-y-2 mb-8 flex-1">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[#f5f0e8]/55 text-xs">
                    <span className="text-[#c9a84c] text-[8px]">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-baseline gap-2 mb-5">
                <span className="text-[#f5f0e8]/35 text-xs uppercase tracking-wider">From</span>
                <span className="text-[#c9a84c]" style={{ fontFamily: 'Georgia, serif', fontSize: '30px', fontWeight: '300' }}>{pkg.price}</span>
                <span className="text-[#f5f0e8]/25 text-xs">/ person</span>
              </div>
              <Link href={`/packages/${pkg.slug}`} className="flex items-center gap-2 text-[#f5f0e8]/45 text-[11px] tracking-[0.14em] uppercase hover:text-[#c9a84c] transition-colors group">
                Enquire Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
