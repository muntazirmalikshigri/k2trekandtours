import Link from 'next/link'
import { ArrowLeft, Clock, User, Calendar, ArrowRight } from 'lucide-react'

const postsData = {
  'k2-base-camp-trek-complete-guide': {
    title: 'K2 Base Camp Trek: The Complete 2025 Guide',
    category: 'Trek Guides',
    author: 'Ali Hassan',
    date: 'March 15, 2025',
    readTime: '12 min',
    bg: 'linear-gradient(160deg, #1a2535 0%, #2a3a55 100%)',
    intro: 'The trek to K2 Base Camp is widely considered one of the greatest wilderness journeys on Earth. Here is everything you need to plan your expedition to Concordia.',
    sections: [
      { heading: 'Overview of the Route', content: 'The classic K2 Base Camp trek begins in Askole — the last village accessible by jeep from Skardu. From there, the route follows the Braldu River before climbing onto the mighty Baltoro Glacier, one of the longest glaciers outside the polar regions. The trek ends at Concordia (4,600m) and K2 Base Camp (5,150m), where four of the world\'s fourteen 8,000m peaks are visible simultaneously.' },
      { heading: 'Best Season to Trek', content: 'The trek is only possible between mid-June and early August. The glaciers are unstable in spring and become heavily snow-covered by September. July is considered the best month — days are long, weather is relatively stable, and you may witness mountaineering expeditions in action at base camp.' },
      { heading: 'Physical Preparation', content: 'This is a demanding high-altitude trek covering 120km+ over 18–22 days. You should be able to comfortably hike 8+ hours per day for multiple consecutive days. Train for at least 4–6 months before your trip — long mountain hikes, running, and strength training are all recommended. Prior high-altitude experience (above 3,500m) is strongly advised.' },
      { heading: 'Permits Required', content: 'You will need multiple permits for this trek — a Trekking Permit from PTDC, a Karakoram National Park entry permit, and a porter permit. Our team handles all of these for you, but they must be arranged well in advance of your departure date. The total permit cost is included in our package price.' },
      { heading: 'What to Pack', content: 'High-altitude trekking boots (broken in), 4-season sleeping bag, trekking poles, layering system (base layer to down jacket), waterproof shell, gaiters, sunglasses with UV protection, sunscreen SPF 50+, altitude medication (consult your doctor), headlamp, and a water purification system. A detailed packing list is provided with your booking confirmation.' },
      { heading: 'Altitude Sickness', content: 'Altitude sickness is a serious concern above 3,500m. Our guides are trained in wilderness first aid and carry supplemental oxygen. The acclimatization rest days built into the itinerary are essential and non-negotiable. Any signs of HACE or HAPE require immediate descent. We require all clients to have helicopter evacuation insurance.' },
    ],
  },
  'best-time-visit-hunza-valley': {
    title: 'Best Time to Visit Hunza Valley in 2025',
    category: 'Travel Tips',
    author: 'Fatima Bibi',
    date: 'February 20, 2025',
    readTime: '7 min',
    bg: 'linear-gradient(160deg, #1a3a2a 0%, #2a4a3a 100%)',
    intro: 'Hunza Valley is beautiful year-round, but each season offers a completely different experience. Here is your complete guide to choosing the right time for your visit.',
    sections: [
      { heading: 'Spring: Cherry Blossoms (March–April)', content: 'March and April are arguably the most magical time to visit Hunza. The valley transforms into a sea of white and pink as cherry, apricot, and almond trees burst into bloom. The contrast of snow-capped peaks behind the flowering orchards creates scenes of extraordinary beauty. This is the best time for photography and is increasingly popular, so book early.' },
      { heading: 'Summer: Peak Season (May–August)', content: 'Summer brings warm days, clear skies, and full accessibility to all areas. The Khunjerab Pass opens in May. Attabad Lake boat rides are in full operation. July brings apricot harvest season — you can eat fresh apricots directly from the trees. This is the busiest time, with accommodation filling up weeks in advance.' },
      { heading: 'Autumn: Golden Colors (September–October)', content: 'September and October are the hidden gems of Hunza tourism. The poplar trees turn brilliant gold, apple orchards hang heavy with fruit, and the summer crowds have gone. Days are still warm and clear, nights become cool. Many locals and experienced travelers consider this the best time to visit.' },
      { heading: 'Winter (November–February)', content: 'Winter in Hunza is cold but accessible. Snow covers the higher peaks and the valley has a stark, dramatic beauty. Some guesthouses close, but the main hotels remain open. The Khunjerab Pass closes in November. For those who want solitude and dramatic winter landscapes, this can be a rewarding time.' },
    ],
  },
  'fairy-meadows-nanga-parbat-guide': {
    title: 'Fairy Meadows: A Trekker Complete Guide',
    category: 'Trek Guides',
    author: 'Imran Karim',
    date: 'January 10, 2025',
    readTime: '9 min',
    bg: 'linear-gradient(160deg, #2a3a1a 0%, #3a4a2a 100%)',
    intro: 'Fairy Meadows offers one of the most dramatic mountain views on Earth — Nanga Parbat\'s north face rising 7,000m above the meadow. Here is everything you need to plan your visit.',
    sections: [
      { heading: 'Getting There', content: 'The journey to Fairy Meadows begins at Raikot Bridge on the Karakoram Highway, approximately 140km east of Gilgit. From there, a thrilling jeep ride up a narrow, unpaved mountain track (not for the faint-hearted — literally one vehicle width in places) takes you to Tato village at 2,400m. From Tato, it is a 3–4 hour walk through beautiful pine forests to reach the meadow at 3,300m.' },
      { heading: 'Accommodation Options', content: 'Fairy Meadows has several camping areas and basic wooden huts available for rent. The huts provide bedding and basic meals. Camping equipment can also be rented locally. Our packages include either camping or hut accommodation depending on your preference.' },
      { heading: 'Best Viewpoints', content: 'The main Fairy Meadows area gives you the classic view of Nanga Parbat\'s Raikot face. For a closer and more dramatic perspective, the trek to Beyal Camp (4,200m) takes approximately 3–4 hours from Fairy Meadows and is highly recommended for clear days. Sunrise on Nanga Parbat from either location is simply unforgettable.' },
      { heading: 'Permits & Regulations', content: 'Fairy Meadows falls within a National Park and requires an entry permit. All rubbish must be carried out. No hunting or wildlife disturbance is permitted. Campfires are restricted to designated areas. Our guides ensure all regulations are followed.' },
    ],
  },
}

const relatedPosts = [
  { slug: 'best-time-visit-hunza-valley', title: 'Best Time to Visit Hunza Valley', category: 'Travel Tips', readTime: '7 min' },
  { slug: 'fairy-meadows-nanga-parbat-guide', title: 'Fairy Meadows: Complete Guide', category: 'Trek Guides', readTime: '9 min' },
  { slug: 'pakistan-travel-visa-guide', title: 'Pakistan Tourist Visa Guide', category: 'Travel Tips', readTime: '6 min' },
]

const categoryColor = {
  'Trek Guides': 'bg-[#1a3a2a] text-[#a8c490]',
  'Travel Tips': 'bg-[#3a2a1a] text-[#c9a84c]',
  'Destinations': 'bg-[#1a2a3a] text-[#7fafc4]',
}

export async function generateStaticParams() {
  return Object.keys(postsData).map((slug) => ({ slug }))
}

export default function BlogDetailPage({ params }) {
  const post = postsData[params.slug]

  if (!post) {
    return (
      <div className="min-h-screen bg-[#f5f0e8] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-[#0f0e0c] mb-4" style={{ fontFamily: 'Georgia, serif' }}>Post not found</h1>
          <Link href="/blog" className="text-[#c9a84c] underline">Back to Blog</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#f5f0e8] min-h-screen">

      {/* Hero */}
      <div className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden" style={{ background: post.bg }}>
        <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 1440 500" preserveAspectRatio="xMidYMax slice">
          <polygon points="0,500 0,300 150,120 320,240 500,60 680,200 860,80 1040,220 1200,100 1380,230 1440,170 1440,500" fill="rgba(255,255,255,0.04)" />
          <polygon points="500,60 474,108 526,108" fill="rgba(255,255,255,0.2)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c]/90 via-transparent to-[#0f0e0c]/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-14 w-full">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#f5f0e8]/50 text-xs tracking-widest uppercase mb-6 hover:text-[#c9a84c] transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> All Articles
          </Link>
          <span className={`text-[10px] tracking-wider uppercase px-2 py-1 rounded-sm inline-block mb-4 ${categoryColor[post.category]}`}>{post.category}</span>
          <h1 className="text-[#f5f0e8]" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 5vw, 58px)', fontWeight: '300', lineHeight: '1.1' }}>
            {post.title}
          </h1>
        </div>
      </div>

      {/* Article */}
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Meta */}
        <div className="flex flex-wrap gap-5 text-xs text-[#0f0e0c]/40 mb-10 pb-10 border-b border-[#e8e2d8]">
          <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" />{post.author}</span>
          <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readTime} read</span>
        </div>

        {/* Intro */}
        <p className="text-[#0f0e0c]/70 text-lg leading-relaxed mb-10" style={{ fontFamily: 'Georgia, serif', fontWeight: '300', fontStyle: 'italic' }}>
          {post.intro}
        </p>

        {/* Sections */}
        <div className="space-y-10">
          {post.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-[#0f0e0c] mb-4" style={{ fontFamily: 'Georgia, serif', fontSize: '24px', fontWeight: '300' }}>
                {section.heading}
              </h2>
              <p className="text-[#0f0e0c]/60 text-sm leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#0f0e0c] rounded-sm p-8 mt-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-[#f5f0e8] mb-2" style={{ fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: '300' }}>
              Ready to Experience This?
            </h3>
            <p className="text-[#f5f0e8]/40 text-sm">Let our local experts plan your perfect Gilgit Baltistan journey.</p>
          </div>
          <Link href="/packages" className="flex items-center gap-2 bg-[#c9a84c] text-[#0f0e0c] px-6 py-3.5 text-xs tracking-widest uppercase font-medium hover:bg-[#ddb85a] transition-colors flex-shrink-0">
            View Packages <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Related */}
        <div className="mt-16">
          <h3 className="text-[#0f0e0c] mb-8" style={{ fontFamily: 'Georgia, serif', fontSize: '24px', fontWeight: '300' }}>Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedPosts.filter(p => p.slug !== params.slug).slice(0, 3).map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group bg-white border border-[#e8e2d8] rounded-sm p-5 hover:border-[#c9a84c] transition-colors">
                <span className={`text-[10px] tracking-wider uppercase px-2 py-1 rounded-sm inline-block mb-3 ${categoryColor[p.category]}`}>{p.category}</span>
                <h4 className="text-[#0f0e0c] text-sm leading-snug mb-2 group-hover:text-[#3d4a35] transition-colors" style={{ fontFamily: 'Georgia, serif', fontWeight: '300' }}>{p.title}</h4>
                <span className="text-[10px] text-[#0f0e0c]/30">{p.readTime} read</span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
