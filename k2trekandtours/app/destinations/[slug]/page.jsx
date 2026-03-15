import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock, Mountain, Sun, AlertTriangle } from 'lucide-react'

const destinationsData = {
  'hunza-valley': {
    name: 'Hunza Valley',
    tag: 'Valley · 2438m elevation',
    desc: 'Hunza Valley is one of the most beautiful places on Earth. Nestled in the heart of the Karakoram, it is a land of ancient forts, terraced fields, and some of the most dramatic mountain scenery anywhere in the world.',
    longDesc: 'The valley stretches along the Hunza River and is flanked by towering peaks including Rakaposhi (7,788m), Ultar Sar (7,388m), and Lady Finger Peak. The people of Hunza, the Burusho, are known for their hospitality, their longevity, and their rich cultural heritage that dates back thousands of years along the ancient Silk Road.',
    best: 'April – October',
    days: '3–7 days',
    difficulty: 'Easy',
    elevation: '2,438m',
    highlights: ['Baltit Fort (900 years old)', 'Altit Fort & Eagle Nest viewpoint', 'Attabad Lake boat ride', 'Rakaposhi base camp day hike', 'Passu Cones viewpoint', 'Local apricot orchards'],
    tips: ['Visit in April for cherry blossoms', 'Book guesthouses in advance for summer', 'Try local apricot products and mulberry wine', 'Respect local customs — conservative dress recommended'],
    bg: 'linear-gradient(160deg, #1a3a2a 0%, #2a4a3a 40%, #1a2a1a 100%)',
  },
  'skardu': {
    name: 'Skardu',
    tag: 'Gateway City · 2438m elevation',
    desc: 'Skardu is the gateway to the Karakoram — a dramatic cold desert town surrounded by towering peaks, ancient Buddhist rock carvings, and some of the most pristine lakes in Asia.',
    longDesc: 'Situated at the confluence of the Indus and Shigar rivers, Skardu serves as the base for expeditions to K2, Broad Peak, and the Gasherbrums. The surrounding landscape is unlike anything else in Pakistan — a high-altitude desert that transforms into lush green valleys wherever water reaches.',
    best: 'May – September',
    days: '2–10 days',
    difficulty: 'Easy',
    elevation: '2,438m',
    highlights: ['Shangrila Resort (Heaven on Earth)', 'Satpara Lake', 'Deosai National Park', 'Kharpocho Fort', 'Shigar Fort', 'Katpana Cold Desert'],
    tips: ['Fly from Islamabad when possible — road is long', 'Deosai is best visited July–August', 'Weather changes rapidly — pack layers', 'Book accommodation before peak season (Jul–Aug)'],
    bg: 'linear-gradient(160deg, #1a2a3a 0%, #2a3a5a 60%, #1a2030 100%)',
  },
  'fairy-meadows': {
    name: 'Fairy Meadows',
    tag: 'Alpine Meadow · 3,300m elevation',
    desc: 'Fairy Meadows is one of the most spectacular viewpoints in the world — a lush green plateau at the foot of Nanga Parbat, the ninth highest mountain on Earth.',
    longDesc: 'The meadow sits at 3,300m and offers an unobstructed view of the Rupal and Raikot faces of Nanga Parbat. The trek to reach it involves a thrilling jeep ride up a narrow mountain track followed by a 3-hour walk through pine forests. Camping here under a sky full of stars with the giant peak illuminated by moonlight is an experience that stays with you forever.',
    best: 'June – September',
    days: '2–4 days',
    difficulty: 'Moderate',
    elevation: '3,300m',
    highlights: ['Nanga Parbat north face view', 'Beyal Camp trek (further)', 'Camping under the stars', 'Pine forest walks', 'Local shepherd communities', 'Sunrise on Nanga Parbat'],
    tips: ['The jeep track is not for the faint-hearted', 'Camping gear available for rent at base', 'Altitude sickness possible — acclimatize in Chilas first', 'No mobile signal — inform family before going'],
    bg: 'linear-gradient(160deg, #2a3a1a 0%, #3a4a2a 50%, #2a3020 100%)',
  },
  'k2-base-camp': {
    name: 'K2 Base Camp',
    tag: 'Trek · 5,150m elevation',
    desc: 'The trek to K2 Base Camp is considered one of the greatest treks in the world. The journey through the Baltoro Glacier to Concordia offers views of four 8000m peaks simultaneously.',
    longDesc: 'The route follows the Braldu River from Askole — the last village — through the Baltoro Glacier to Concordia, where K2, Broad Peak, and the two Gasherbrums tower above you. From Concordia, a further day reaches K2 Base Camp at 5,150m. The scale of the Karakoram here is simply incomprehensible — the Baltoro is one of the longest glaciers outside the polar regions.',
    best: 'June – August',
    days: '18–22 days',
    difficulty: 'Hard',
    elevation: '5,150m',
    highlights: ['Concordia — 4 eight-thousanders view', 'K2 Base Camp at 5,150m', 'Baltoro Glacier crossing', 'Trango Towers', 'Gasherbrum massif', 'Broad Peak base camp option'],
    tips: ['Physical fitness training 6 months before', 'Altitude sickness is a real risk', 'All permits arranged by us in advance', 'Porter and cook team fully provided', 'Trip insurance with helicopter evacuation mandatory'],
    bg: 'linear-gradient(160deg, #1a2535 0%, #2a3a55 40%, #1a2030 100%)',
  },
  'nanga-parbat': {
    name: 'Nanga Parbat',
    tag: 'Trek · 4,200m elevation',
    desc: 'Nanga Parbat — the Killer Mountain — is the ninth highest peak in the world. The treks around its base offer some of the most dramatic scenery in the entire Himalayan range.',
    longDesc: 'Two main trekking routes exist around Nanga Parbat. The Fairy Meadows route approaches the spectacular north Raikot face, while the longer Rupal Valley route leads to the enormous south face — the highest mountain face on Earth at 4,600m vertical. Both routes pass through remote villages where traditional Shina culture remains largely unchanged.',
    best: 'June – September',
    days: '10–14 days',
    difficulty: 'Hard',
    elevation: '4,200m',
    highlights: ['Rupal face — highest mountain wall on Earth', 'Mazeno Ridge viewpoint', 'Rupal Valley villages', 'Shaigiri base camp', 'Nanga Parbat circuit trek option', 'Ancient Shina culture villages'],
    tips: ['Combine with Fairy Meadows for full experience', 'Rupal valley requires more preparation', 'River crossings can be difficult in July', 'Local guide essential for Rupal route'],
    bg: 'linear-gradient(160deg, #2a1a1a 0%, #3a2a1a 50%, #4a3a2a 100%)',
  },
  'attabad-lake': {
    name: 'Attabad Lake',
    tag: 'Lake · 2,638m elevation',
    desc: 'Attabad Lake is one of Pakistan most stunning natural wonders — a vivid turquoise lake formed by a massive landslide in 2010 that blocked the Hunza River and flooded the KKH.',
    longDesc: 'The lake stretches for 21km through the gorge and its intense turquoise color comes from the glacial minerals suspended in the water. Boat rides through the tunnels carved through the landslide debris are a highlight — you travel through the mountain itself. The lake has become one of Hunza most popular attractions and offers stunning reflections of the surrounding peaks.',
    best: 'April – October',
    days: '1–2 days',
    difficulty: 'Easy',
    elevation: '2,638m',
    highlights: ['Turquoise lake boat rides', 'KKH tunnel journey', 'Gulmit village nearby', 'Passu Cones backdrop', 'Sunset reflections', 'Photography opportunities'],
    tips: ['Combine with Passu Cones visit', 'Boat rides available throughout the day', 'Best light for photos in morning', 'Accommodation available in Gulmit'],
    bg: 'linear-gradient(160deg, #1a2a3a 0%, #1a3a4a 50%, #0a2030 100%)',
  },
}

export async function generateStaticParams() {
  return Object.keys(destinationsData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const dest = destinationsData[params.slug]
  return {
    title: dest ? `${dest.name} — K2 Trek and Tours` : 'Destination',
    description: dest?.desc,
  }
}

export default function DestinationDetailPage({ params }) {
  const dest = destinationsData[params.slug]

  if (!dest) {
    return (
      <div className="min-h-screen bg-[#f5f0e8] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-[#0f0e0c] mb-4" style={{ fontFamily: 'Georgia, serif' }}>Destination not found</h1>
          <Link href="/destinations" className="text-[#c9a84c] underline">Back to Destinations</Link>
        </div>
      </div>
    )
  }

  const diffColor = { Easy: 'bg-[#3d4a35] text-[#a8c490]', Moderate: 'bg-[#4a3a1a] text-[#c9a84c]', Hard: 'bg-[#3a1a1a] text-[#c47060]' }

  return (
    <div className="bg-[#f5f0e8] min-h-screen">

      {/* Hero */}
      <div className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden" style={{ background: dest.bg }}>
        <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMax slice">
          <polygon points="0,600 0,350 120,150 280,280 440,80 620,240 780,60 960,220 1120,100 1300,270 1440,160 1440,600" fill="rgba(255,255,255,0.04)" />
          <polygon points="440,80 412,134 468,134" fill="rgba(255,255,255,0.22)" />
          <polygon points="780,60 754,112 806,112" fill="rgba(255,255,255,0.18)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c]/90 via-transparent to-[#0f0e0c]/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <Link href="/destinations" className="inline-flex items-center gap-2 text-[#f5f0e8]/50 text-xs tracking-widest uppercase mb-6 hover:text-[#c9a84c] transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> All Destinations
          </Link>
          <div className="text-[#c9a84c] text-[10px] tracking-[0.2em] uppercase mb-3">{dest.tag}</div>
          <h1 className="text-[#f5f0e8] mb-4" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(44px, 7vw, 88px)', fontWeight: '300', lineHeight: '1.0' }}>
            {dest.name}
          </h1>
          <div className="flex flex-wrap gap-3">
            <span className={`text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-sm ${diffColor[dest.difficulty]}`}>{dest.difficulty}</span>
            <span className="text-[10px] tracking-wider uppercase px-3 py-1.5 bg-[#f5f0e8]/10 text-[#f5f0e8]/60">Best: {dest.best}</span>
            <span className="text-[10px] tracking-wider uppercase px-3 py-1.5 bg-[#f5f0e8]/10 text-[#f5f0e8]/60">{dest.days}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-10">
          <div>
            <p className="text-[#0f0e0c]/70 text-base leading-relaxed mb-4">{dest.desc}</p>
            <p className="text-[#0f0e0c]/55 text-sm leading-relaxed">{dest.longDesc}</p>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="text-[#0f0e0c] mb-6" style={{ fontFamily: 'Georgia, serif', fontSize: '28px', fontWeight: '300' }}>
              Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {dest.highlights.map((h) => (
                <div key={h} className="flex items-start gap-3 bg-white border border-[#e8e2d8] p-4 rounded-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] mt-1.5 flex-shrink-0" />
                  <span className="text-sm text-[#0f0e0c]/65">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div>
            <h2 className="text-[#0f0e0c] mb-6" style={{ fontFamily: 'Georgia, serif', fontSize: '28px', fontWeight: '300' }}>
              Travel Tips
            </h2>
            <div className="space-y-3">
              {dest.tips.map((tip) => (
                <div key={tip} className="flex items-start gap-3 p-4 bg-[#0f0e0c]/03 border-l-2 border-[#c9a84c]">
                  <AlertTriangle className="w-4 h-4 text-[#c9a84c] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#0f0e0c]/65">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">

          {/* Quick Info */}
          <div className="bg-white border border-[#e8e2d8] rounded-sm overflow-hidden">
            <div className="bg-[#0f0e0c] px-6 py-4">
              <h3 className="text-[#f5f0e8] text-sm font-medium">Quick Info</h3>
            </div>
            <div className="p-6 space-y-4">
              {[
                { icon: Mountain, label: 'Elevation', value: dest.elevation },
                { icon: Clock, label: 'Recommended Stay', value: dest.days },
                { icon: Sun, label: 'Best Season', value: dest.best },
              ].map((info) => {
                const Icon = info.icon
                return (
                  <div key={info.label} className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#f5f0e8] rounded-sm flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#c9a84c]" />
                    </div>
                    <div>
                      <div className="text-[10px] tracking-widest uppercase text-[#0f0e0c]/35">{info.label}</div>
                      <div className="text-sm text-[#0f0e0c]/70">{info.value}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#0f0e0c] rounded-sm p-6">
            <h3 className="text-[#f5f0e8] mb-2" style={{ fontFamily: 'Georgia, serif', fontSize: '20px', fontWeight: '300' }}>
              Ready to Visit {dest.name}?
            </h3>
            <p className="text-[#f5f0e8]/40 text-xs leading-relaxed mb-5">We have curated packages including {dest.name} — fully guided and permit-handled.</p>
            <Link href="/packages" className="flex items-center justify-center gap-2 bg-[#c9a84c] text-[#0f0e0c] py-3 text-xs tracking-widest uppercase font-medium hover:bg-[#ddb85a] transition-colors mb-3">
              View Packages <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/contact" className="flex items-center justify-center gap-2 border border-[#f5f0e8]/15 text-[#f5f0e8]/50 py-3 text-xs tracking-widest uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
              Custom Itinerary
            </Link>
          </div>

        </div>
      </div>

    </div>
  )
}
