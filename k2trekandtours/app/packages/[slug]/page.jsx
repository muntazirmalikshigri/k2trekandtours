import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check, Clock, Users, Mountain, Calendar, Phone, MessageCircle } from 'lucide-react'

const packagesData = {
  'hunza-discovery': {
    title: 'Hunza Valley Discovery',
    days: 7, nights: 6,
    price: 680,
    category: 'Cultural Tour',
    difficulty: 'Easy',
    groupSize: '2–12',
    desc: 'The perfect introduction to Gilgit Baltistan. This 7-day journey through Hunza Valley combines ancient history, dramatic landscapes, and warm local hospitality.',
    includes: ['Airport pickup & drop (Islamabad)', 'All accommodation (boutique guesthouses)', 'All meals throughout the trip', 'Licensed English-speaking guide', 'Private jeep transportation', 'Baltit & Altit Fort entrance fees', 'Attabad Lake boat ride', 'All government taxes'],
    excludes: ['International flights', 'Travel insurance', 'Personal expenses', 'Tips for guides & drivers', 'Alcoholic beverages'],
    itinerary: [
      { day: 1, title: 'Islamabad to Hunza', desc: 'Early morning departure from Islamabad via the Karakoram Highway. Lunch at Besham. Arrive Hunza by evening. Welcome dinner at guesthouse.' },
      { day: 2, title: 'Karimabad & Baltit Fort', desc: 'Morning visit to the 700-year-old Baltit Fort. Afternoon walk through Karimabad bazaar. Sunset at Eagle Nest viewpoint with Rakaposhi panorama.' },
      { day: 3, title: 'Altit Fort & Duikar', desc: 'Morning at Altit Fort — one of Pakistan oldest surviving forts. Afternoon hike to Duikar for the best viewpoint in Hunza Valley.' },
      { day: 4, title: 'Attabad Lake & Passu', desc: 'Drive to the stunning turquoise Attabad Lake. Boat ride through the gorge. Continue to Passu for views of the iconic Cathedral peaks.' },
      { day: 5, title: 'Gulmit & Khunjerab', desc: 'Drive up the Karakoram Highway to Khunjerab Pass (4,693m) — the highest paved border crossing in the world. Return to Gulmit for overnight.' },
      { day: 6, title: 'Return to Hunza', desc: 'Leisure morning in Passu. Afternoon return to Karimabad. Evening farewell dinner with local music.' },
      { day: 7, title: 'Hunza to Islamabad', desc: 'Early morning departure. Drive back to Islamabad via KKH. Transfer to hotel or airport.' },
    ],
    bg: 'linear-gradient(160deg, #1a3a2a 0%, #2a4a3a 40%, #1a2a1a 100%)',
  },
  'gb-grand-expedition': {
    title: 'GB Grand Expedition',
    days: 14, nights: 13,
    price: 1450,
    category: 'Adventure Tour',
    difficulty: 'Moderate',
    groupSize: '4–10',
    desc: 'The definitive Gilgit Baltistan experience. Hunza, Skardu, Fairy Meadows and everything in between — this is the journey that will change your life.',
    includes: ['All domestic flights (Islamabad–Skardu)', 'All accommodation', 'All meals + camping nights', '2 expert guides throughout', 'Porter & cook team', 'All PTDC permits', 'Full camping equipment', 'Emergency first aid kit', 'All transportation'],
    excludes: ['International flights', 'Travel & medical insurance', 'Personal trekking gear', 'Tips', 'Beverages'],
    itinerary: [
      { day: 1, title: 'Islamabad Arrival', desc: 'Meet at Islamabad hotel. Trip briefing, gear check, and welcome dinner.' },
      { day: 2, title: 'Fly to Skardu', desc: 'Morning flight to Skardu. Afternoon visit to Kharpocho Fort and Skardu Bazaar.' },
      { day: 3, title: 'Deosai National Park', desc: 'Full day in Deosai — the world second highest plateau. Wildflowers, Himalayan brown bears.' },
      { day: 4, title: 'Shigar Valley', desc: 'Drive to Shigar. Visit the restored Shigar Fort (now a heritage hotel). Village walk.' },
      { day: 5, title: 'Satpara Lake & Katpana', desc: 'Morning at Satpara Lake. Afternoon at Katpana Cold Desert — sand dunes at 2,200m.' },
      { day: 6, title: 'Drive to Fairy Meadows', desc: 'Drive to Raikot Bridge. Thrilling jeep ride up the mountain track. Trek to Fairy Meadows campsite.' },
      { day: 7, title: 'Fairy Meadows', desc: 'Free day at Fairy Meadows. Optional hike to Beyal Camp (4,200m) for closer Nanga Parbat views.' },
      { day: 8, title: 'Fairy Meadows to Chilas', desc: 'Trek back to Raikot Bridge. Drive to Chilas for overnight.' },
      { day: 9, title: 'Drive to Hunza', desc: 'Scenic drive north through Kohistan gorges to Hunza Valley. Check in at guesthouse.' },
      { day: 10, title: 'Karimabad & Baltit Fort', desc: 'Full day exploring Karimabad — Baltit Fort, Altit Fort, Eagle Nest viewpoint.' },
      { day: 11, title: 'Attabad Lake & Passu', desc: 'Turquoise Attabad Lake boat ride. Drive to Passu Cathedral peaks viewpoint.' },
      { day: 12, title: 'Khunjerab Pass', desc: 'Drive to Khunjerab Pass (4,693m) — the roof of the Karakoram Highway.' },
      { day: 13, title: 'Leisure in Hunza', desc: 'Free morning for personal exploration. Evening farewell dinner with traditional music.' },
      { day: 14, title: 'Fly to Islamabad', desc: 'Transfer to Skardu airport. Fly to Islamabad. Trip ends.' },
    ],
    bg: 'linear-gradient(160deg, #2a3a1a 0%, #3a4a2a 50%, #2a3020 100%)',
  },
  'k2-base-camp-trek': {
    title: 'K2 Base Camp Trek',
    days: 22, nights: 21,
    price: 2800,
    category: 'Expedition Trek',
    difficulty: 'Hard',
    groupSize: '2–8',
    desc: 'One of the greatest treks on Earth. The journey to the foot of K2 through the Baltoro Glacier is a once-in-a-lifetime experience for serious trekkers.',
    includes: ['All meals on trek (cook team)', 'Full camping equipment', 'Licensed high-altitude guide', 'Experienced porter team', 'All trekking permits (PTDC, NP entry)', 'Islamabad–Skardu flights', 'Ground transportation', 'Emergency evacuation plan'],
    excludes: ['International flights', 'Helicopter evacuation insurance (mandatory)', 'Personal trekking gear', 'Tips', 'Beverages', 'Medication'],
    itinerary: [
      { day: 1, title: 'Islamabad Arrival & Briefing', desc: 'Arrive Islamabad. Full trek briefing, medical check, and gear review. Team dinner.' },
      { day: 2, title: 'Fly Islamabad to Skardu', desc: 'Morning flight to Skardu. Afternoon rest and acclimatization. Permit collection.' },
      { day: 3, title: 'Skardu to Askole', desc: 'Jeep drive from Skardu to Askole (3,050m) — the last village and trek starting point.' },
      { day: 4, title: 'Askole to Jhola', desc: 'Trek begins along the Braldu River. First camp at Jhola (3,170m).' },
      { day: 5, title: 'Jhola to Paiyu', desc: 'Trek through dramatic gorges to Paiyu (3,450m) — last campsite before the glacier.' },
      { day: 6, title: 'Rest Day at Paiyu', desc: 'Acclimatization rest day. Day hike to Paiyu Peak base for views.' },
      { day: 7, title: 'Paiyu to Liligo', desc: 'Enter the Baltoro Glacier. Trek on lateral moraine to Liligo (3,520m).' },
      { day: 8, title: 'Liligo to Urdukas', desc: 'Trek along the glacier to Urdukas (4,050m). First views of Trango Towers.' },
      { day: 9, title: 'Urdukas to Gore II', desc: 'Dramatic trek with Cathedral peaks towering overhead. Camp at Gore II (4,270m).' },
      { day: 10, title: 'Gore II to Concordia', desc: 'Trek to Concordia (4,600m) — the throne room of the mountain gods. K2 appears.' },
      { day: 11, title: 'Concordia to K2 Base Camp', desc: 'Trek to K2 Base Camp (5,150m). The moment everything has been building toward.' },
      { day: 12, title: 'K2 Base Camp Rest Day', desc: 'Rest, explore, photograph. Optional walk toward K2 glacier.' },
      { day: 13, title: 'Concordia — Gasherbrum Base Camp', desc: 'Optional side trip to Gasherbrum I & II base camps for those who want more.' },
      { day: '14–18', title: 'Return Trek', desc: 'Retrace route back through Concordia, Urdukas, Paiyu to Askole.' },
      { day: 19, title: 'Askole to Skardu', desc: 'Jeep drive back to Skardu. Hot shower and celebration dinner.' },
      { day: 20, title: 'Rest Day in Skardu', desc: 'Recovery day. Optional Shangrila resort visit.' },
      { day: 21, title: 'Skardu to Islamabad', desc: 'Morning flight to Islamabad. Final team dinner.' },
      { day: 22, title: 'Departure', desc: 'Transfer to airport. Trip ends with memories to last a lifetime.' },
    ],
    bg: 'linear-gradient(160deg, #1a2535 0%, #2a3a55 40%, #1a2030 100%)',
  },
}

export async function generateStaticParams() {
  return Object.keys(packagesData).map((slug) => ({ slug }))
}

export default function PackageDetailPage({ params }) {
  const pkg = packagesData[params.slug]

  if (!pkg) {
    return (
      <div className="min-h-screen bg-[#f5f0e8] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-[#0f0e0c] mb-4" style={{ fontFamily: 'Georgia, serif' }}>Package not found</h1>
          <Link href="/packages" className="text-[#c9a84c] underline">Back to Packages</Link>
        </div>
      </div>
    )
  }

  const diffColor = { Easy: 'bg-[#3d4a35] text-[#a8c490]', Moderate: 'bg-[#4a3a1a] text-[#c9a84c]', Hard: 'bg-[#3a1a1a] text-[#c47060]' }

  return (
    <div className="bg-[#f5f0e8] min-h-screen">

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden" style={{ background: pkg.bg }}>
        <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 1440 500" preserveAspectRatio="xMidYMax slice">
          <polygon points="0,500 0,300 150,120 320,240 500,60 680,200 860,80 1040,220 1200,100 1380,230 1440,170 1440,500" fill="rgba(255,255,255,0.04)" />
          <polygon points="500,60 474,108 526,108" fill="rgba(255,255,255,0.2)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c]/90 via-transparent to-[#0f0e0c]/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <Link href="/packages" className="inline-flex items-center gap-2 text-[#f5f0e8]/50 text-xs tracking-widest uppercase mb-6 hover:text-[#c9a84c] transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> All Packages
          </Link>
          <div className="text-[#c9a84c] text-[10px] tracking-[0.2em] uppercase mb-3">{pkg.category}</div>
          <h1 className="text-[#f5f0e8] mb-5" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(36px, 6vw, 76px)', fontWeight: '300', lineHeight: '1.0' }}>
            {pkg.title}
          </h1>
          <div className="flex flex-wrap gap-3">
            <span className={`text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-sm ${diffColor[pkg.difficulty]}`}>{pkg.difficulty}</span>
            <span className="flex items-center gap-1.5 text-[10px] tracking-wider uppercase px-3 py-1.5 bg-[#f5f0e8]/10 text-[#f5f0e8]/60"><Clock className="w-3 h-3" />{pkg.days} days / {pkg.nights} nights</span>
            <span className="flex items-center gap-1.5 text-[10px] tracking-wider uppercase px-3 py-1.5 bg-[#f5f0e8]/10 text-[#f5f0e8]/60"><Users className="w-3 h-3" />{pkg.groupSize} people</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* Main */}
        <div className="lg:col-span-2 space-y-12">

          <p className="text-[#0f0e0c]/65 text-base leading-relaxed">{pkg.desc}</p>

          {/* Includes / Excludes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-[#0f0e0c] mb-5" style={{ fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: '300' }}>What is Included</h2>
              <ul className="space-y-2">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#0f0e0c]/60">
                    <Check className="w-4 h-4 text-[#c9a84c] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-[#0f0e0c] mb-5" style={{ fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: '300' }}>Not Included</h2>
              <ul className="space-y-2">
                {pkg.excludes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#0f0e0c]/45">
                    <span className="text-[#c47060] mt-1.5 flex-shrink-0 text-xs">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Itinerary */}
          <div>
            <h2 className="text-[#0f0e0c] mb-8" style={{ fontFamily: 'Georgia, serif', fontSize: '28px', fontWeight: '300' }}>Day-by-Day Itinerary</h2>
            <div className="space-y-4">
              {pkg.itinerary.map((day, i) => (
                <div key={i} className="flex gap-5 bg-white border border-[#e8e2d8] rounded-sm p-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0f0e0c] rounded-sm flex items-center justify-center">
                    <span className="text-[#c9a84c] text-xs font-medium">{typeof day.day === 'number' ? `D${day.day}` : day.day}</span>
                  </div>
                  <div>
                    <h3 className="text-[#0f0e0c] font-medium text-sm mb-1">{day.title}</h3>
                    <p className="text-[#0f0e0c]/50 text-sm leading-relaxed">{day.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">

          {/* Price Card */}
          <div className="bg-[#0f0e0c] rounded-sm p-7 sticky top-24">
            <div className="mb-1 text-[10px] tracking-widest uppercase text-[#f5f0e8]/35">Price per person</div>
            <div className="text-[#c9a84c] mb-1" style={{ fontFamily: 'Georgia, serif', fontSize: '48px', fontWeight: '300', lineHeight: '1' }}>
              ${pkg.price.toLocaleString()}
            </div>
            <div className="text-[#f5f0e8]/25 text-xs mb-6">All inclusive (see above)</div>

            <div className="space-y-3 mb-7 pb-7 border-b border-[#f5f0e8]/08">
              {[
                { icon: Clock, text: `${pkg.days} days / ${pkg.nights} nights` },
                { icon: Users, text: `Group size: ${pkg.groupSize}` },
                { icon: Mountain, text: `Difficulty: ${pkg.difficulty}` },
                { icon: Calendar, text: `Flexible departure dates` },
              ].map((info) => {
                const Icon = info.icon
                return (
                  <div key={info.text} className="flex items-center gap-3 text-xs text-[#f5f0e8]/45">
                    <Icon className="w-3.5 h-3.5 text-[#c9a84c]" />
                    {info.text}
                  </div>
                )
              })}
            </div>

            <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#c9a84c] text-[#0f0e0c] py-3.5 text-xs tracking-widest uppercase font-medium hover:bg-[#ddb85a] transition-colors mb-3 w-full">
              Book This Package <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 text-xs tracking-widest uppercase hover:bg-[#1fb855] transition-colors w-full mb-3">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
            <a href="tel:+923001234567" className="flex items-center justify-center gap-2 border border-[#f5f0e8]/15 text-[#f5f0e8]/45 py-3.5 text-xs tracking-widest uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors w-full">
              <Phone className="w-3.5 h-3.5" /> Call Us
            </a>
          </div>

        </div>
      </div>

    </div>
  )
}
