import Link from 'next/link'
import { ArrowRight, Clock, User } from 'lucide-react'

const posts = [
  { slug: 'k2-base-camp-trek-complete-guide', title: 'K2 Base Camp Trek: The Complete 2025 Guide', excerpt: 'Everything you need to know before trekking to Concordia — permits, fitness prep, best season, gear list and what to expect at each camp.', category: 'Trek Guides', readTime: '12 min', author: 'Ali Hassan', date: 'March 2025', featured: true, bg: 'linear-gradient(160deg, #1a2535 0%, #2a3a55 100%)' },
  { slug: 'best-time-visit-hunza-valley', title: 'Best Time to Visit Hunza Valley in 2025', excerpt: 'Cherry blossoms in spring, golden apricots in summer, or the dramatic autumn colors — when is the perfect time for your Hunza trip?', category: 'Travel Tips', readTime: '7 min', author: 'Fatima Bibi', date: 'Feb 2025', featured: false, bg: 'linear-gradient(160deg, #1a3a2a 0%, #2a4a3a 100%)' },
  { slug: 'fairy-meadows-nanga-parbat-guide', title: 'Fairy Meadows: A Trekker Complete Guide', excerpt: 'How to get to Fairy Meadows, where to camp, and why the view of Nanga Parbat from here is unlike anything else on Earth.', category: 'Trek Guides', readTime: '9 min', author: 'Imran Karim', date: 'Jan 2025', featured: false, bg: 'linear-gradient(160deg, #2a3a1a 0%, #3a4a2a 100%)' },
  { slug: 'pakistan-travel-visa-guide', title: 'Pakistan Tourist Visa: Step-by-Step Guide', excerpt: 'The complete guide to getting a Pakistan tourist visa for UK, US, and European citizens — e-visa, requirements, and pro tips.', category: 'Travel Tips', readTime: '6 min', author: 'Sadia Mir', date: 'Dec 2024', featured: false, bg: 'linear-gradient(160deg, #2a2a3a 0%, #3a3a5a 100%)' },
  { slug: 'skardu-hidden-gems', title: '7 Hidden Gems in Skardu Most Tourists Miss', excerpt: 'Beyond the famous Shangrila resort — the secret valleys, ancient forts, and local bazaars that make Skardu truly magical.', category: 'Destinations', readTime: '8 min', author: 'Ali Hassan', date: 'Nov 2024', featured: false, bg: 'linear-gradient(160deg, #3a2a1a 0%, #4a3a2a 100%)' },
  { slug: 'karakoram-highway-road-trip', title: 'Karakoram Highway Road Trip: The Ultimate Guide', excerpt: 'Driving the legendary KKH from Islamabad to Khunjerab Pass — stops, fuel, accommodation and the most scenic viewpoints.', category: 'Road Trips', readTime: '11 min', author: 'Imran Karim', date: 'Oct 2024', featured: false, bg: 'linear-gradient(160deg, #1a2a3a 0%, #2a3a4a 100%)' },
]

const categories = ['All', 'Trek Guides', 'Travel Tips', 'Destinations', 'Road Trips']

const categoryColor = {
  'Trek Guides': 'bg-[#1a3a2a] text-[#a8c490]',
  'Travel Tips': 'bg-[#3a2a1a] text-[#c9a84c]',
  'Destinations': 'bg-[#1a2a3a] text-[#7fafc4]',
  'Road Trips': 'bg-[#2a1a2a] text-[#c4a0c4]',
}

export const metadata = {
  title: 'Blog & Travel Guides — K2 Trek and Tours',
  description: 'Expert travel guides, trek tips, and destination insights for Gilgit Baltistan from local experts.',
}

export default function BlogPage() {
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <div className="bg-[#f5f0e8] min-h-screen">

      {/* Hero */}
      <div className="bg-[#0f0e0c] pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-[10px] tracking-[0.22em] uppercase">Local Knowledge</span>
          </div>
          <h1 className="text-[#f5f0e8]" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: '300', lineHeight: '1.05' }}>
            Travel <em style={{ fontStyle: 'italic', color: '#c4b49a' }}>Guides</em>
          </h1>
          <p className="text-[#f5f0e8]/45 mt-4 max-w-xl text-sm leading-relaxed">
            Insider knowledge from locals who have spent their lives in the Karakoram.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Featured Post */}
        <Link href={`/blog/${featured.slug}`} className="group block mb-12 rounded-sm overflow-hidden hover:-translate-y-1 transition-transform duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto" style={{ background: featured.bg, minHeight: '300px' }}>
              <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 600 400" preserveAspectRatio="xMidYMax slice">
                <polygon points="0,400 0,240 100,100 240,200 360,40 480,180 600,80 600,400" fill="rgba(255,255,255,0.05)" />
                <polygon points="360,40 334,88 386,88" fill="rgba(255,255,255,0.2)" />
              </svg>
              <div className="absolute top-5 left-5">
                <span className="bg-[#c9a84c] text-[#0f0e0c] text-[9px] tracking-widest uppercase px-3 py-1">Featured</span>
              </div>
            </div>
            <div className="bg-white border border-[#e8e2d8] border-l-0 p-10 flex flex-col justify-center">
              <span className={`text-[10px] tracking-wider uppercase px-2 py-1 rounded-sm self-start mb-4 ${categoryColor[featured.category]}`}>{featured.category}</span>
              <h2 className="text-[#0f0e0c] mb-4 group-hover:text-[#3d4a35] transition-colors" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: '300', lineHeight: '1.2' }}>{featured.title}</h2>
              <p className="text-[#0f0e0c]/50 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-[#0f0e0c]/35">
                <span className="flex items-center gap-1.5"><User className="w-3 h-3" />{featured.author}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{featured.readTime} read</span>
                <span>{featured.date}</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Rest of posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block rounded-sm overflow-hidden hover:-translate-y-1 transition-transform duration-300">
              <div className="relative h-48" style={{ background: post.bg }}>
                <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 400 200" preserveAspectRatio="xMidYMax slice">
                  <polygon points="0,200 0,120 80,40 180,100 280,20 360,80 400,50 400,200" fill="rgba(255,255,255,0.05)" />
                </svg>
              </div>
              <div className="bg-white border border-[#e8e2d8] border-t-0 p-6">
                <span className={`text-[10px] tracking-wider uppercase px-2 py-1 rounded-sm inline-block mb-3 ${categoryColor[post.category]}`}>{post.category}</span>
                <h3 className="text-[#0f0e0c] mb-3 group-hover:text-[#3d4a35] transition-colors" style={{ fontFamily: 'Georgia, serif', fontSize: '18px', fontWeight: '300', lineHeight: '1.3' }}>{post.title}</h3>
                <p className="text-[#0f0e0c]/45 text-xs leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-[10px] text-[#0f0e0c]/30 border-t border-[#e8e2d8] pt-4">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}
