import Link from 'next/link'
import { ArrowRight, Mountain, Award, Heart, Shield } from 'lucide-react'

const team = [
  { name: 'Ali Hassan', role: 'Founder & Lead Guide', exp: '15 years', cert: 'PTDC Certified', initials: 'AH', color: 'bg-[#1a3a2a]' },
  { name: 'Fatima Bibi', role: 'Operations Manager', exp: '10 years', cert: 'Tourism Management', initials: 'FB', color: 'bg-[#1a2a3a]' },
  { name: 'Imran Karim', role: 'Senior Trek Guide', exp: '12 years', cert: 'Wilderness First Aid', initials: 'IK', color: 'bg-[#2a1a1a]' },
  { name: 'Sadia Mir', role: 'Client Relations', exp: '7 years', cert: 'Hospitality Expert', initials: 'SM', color: 'bg-[#2a2a1a]' },
]

const values = [
  { icon: Mountain, title: 'Local First', desc: 'Born and raised in Gilgit Baltistan. Every route, village, and peak is our home.' },
  { icon: Shield, title: 'Safety Always', desc: 'PTDC licensed. Full insurance. Wilderness first aid on every trek.' },
  { icon: Heart, title: 'Responsible Tourism', desc: 'We support local communities, minimize environmental impact, and give back.' },
  { icon: Award, title: 'Excellence in Service', desc: '4.9 star average from 5,000+ travellers across 12 years of operation.' },
]

export const metadata = {
  title: 'About Us — K2 Trek and Tours',
  description: 'Meet the local experts behind K2 Trek and Tours. 12 years of experience in Gilgit Baltistan.',
}

export default function AboutPage() {
  return (
    <div className="bg-[#f5f0e8] min-h-screen">

      {/* Hero */}
      <div className="bg-[#0a0e0a] pt-32 pb-24 px-6 relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1440 500" preserveAspectRatio="xMidYMax slice">
          <polygon points="0,500 0,280 150,120 320,240 500,60 680,200 860,80 1040,220 1200,100 1380,230 1440,170 1440,500" fill="rgba(255,255,255,0.03)" />
          <polygon points="500,60 472,110 528,110" fill="rgba(255,255,255,0.18)" />
          <polygon points="860,80 834,128 886,128" fill="rgba(255,255,255,0.15)" />
        </svg>
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-[10px] tracking-[0.22em] uppercase">Our Story</span>
            </div>
            <h1 className="text-[#f5f0e8] mb-6" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: '300', lineHeight: '1.05' }}>
              Born in the<br />
              <em style={{ fontStyle: 'italic', color: '#c4b49a' }}>Karakoram</em>
            </h1>
            <p className="text-[#f5f0e8]/50 text-sm leading-relaxed">
              Founded in 2012 by local mountaineer Ali Hassan, K2 Trek and Tours was built on a simple belief — that the best guides are those who call these mountains home.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: '2012', label: 'Founded' },
              { num: '5,000+', label: 'Happy Clients' },
              { num: '14', label: 'Destinations' },
              { num: '4.9★', label: 'Rating' },
            ].map((s) => (
              <div key={s.label} className="bg-[#f5f0e8]/05 border border-[#f5f0e8]/08 p-6 rounded-sm">
                <div className="text-[#c9a84c] mb-1" style={{ fontFamily: 'Georgia, serif', fontSize: '32px', fontWeight: '300' }}>{s.num}</div>
                <div className="text-[10px] tracking-widest uppercase text-[#f5f0e8]/35">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-[#b85c38]" />
            <span className="text-[#b85c38] text-[10px] tracking-[0.22em] uppercase">Our Journey</span>
          </div>
          <h2 className="mb-8" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '300', color: '#0f0e0c' }}>
            From Local Guide to<br /><em style={{ fontStyle: 'italic', color: '#3d4a35' }}>Northern Pakistan's Premier Operator</em>
          </h2>
          <div className="space-y-6 text-[#0f0e0c]/60 text-sm leading-relaxed">
            <p>It started with a single trek to K2 Base Camp in 2012. Ali Hassan, a Skardu native who had spent his youth exploring every valley and glacier in Gilgit Baltistan, led a group of British trekkers to Concordia. Their feedback was unanimous — no one knew these mountains like Ali.</p>
            <p>Word spread. More trekkers came. Ali built a small team of fellow locals — guides, cooks, and porters who shared his passion for showing the world the magic of the Karakoram. K2 Trek and Tours was officially registered in 2013.</p>
            <p>Today, we are a team of 25 local professionals serving hundreds of travellers every year from over 40 countries. But our philosophy has never changed — the best guide is a local, and the best experience is an authentic one.</p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-[#0f0e0c] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '300', color: '#f5f0e8' }}>
              What We <em style={{ fontStyle: 'italic', color: '#c4b49a' }}>Stand For</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="p-7 border border-[#f5f0e8]/08 rounded-sm hover:border-[#c9a84c]/30 transition-colors">
                  <Icon className="w-8 h-8 text-[#c9a84c] mb-5" />
                  <h3 className="text-[#f5f0e8] font-medium text-sm mb-2">{v.title}</h3>
                  <p className="text-[#f5f0e8]/40 text-sm leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#b85c38]" />
              <span className="text-[#b85c38] text-[10px] tracking-[0.22em] uppercase">The Team</span>
              <div className="w-6 h-px bg-[#b85c38]" />
            </div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '300', color: '#0f0e0c' }}>
              Meet Your <em style={{ fontStyle: 'italic', color: '#3d4a35' }}>Guides</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white border border-[#e8e2d8] rounded-sm overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                <div className={`${member.color} h-48 flex items-center justify-center`}>
                  <span className="text-[#f5f0e8]/30" style={{ fontFamily: 'Georgia, serif', fontSize: '64px', fontWeight: '300' }}>{member.initials}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-[#0f0e0c] font-medium text-sm mb-1">{member.name}</h3>
                  <p className="text-[#c9a84c] text-xs tracking-wider mb-2">{member.role}</p>
                  <div className="flex gap-3 text-[10px] text-[#0f0e0c]/35 uppercase tracking-wider">
                    <span>{member.exp}</span>
                    <span>·</span>
                    <span>{member.cert}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#0f0e0c] py-20 px-6 text-center">
        <h2 className="text-[#f5f0e8] mb-4" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '300' }}>
          Ready to Trek With Us?
        </h2>
        <p className="text-[#f5f0e8]/40 text-sm mb-8 max-w-md mx-auto">Join 5,000+ travellers who trusted us with their Gilgit Baltistan adventure.</p>
        <Link href="/packages" className="inline-flex items-center gap-2 bg-[#c9a84c] text-[#0f0e0c] px-8 py-3.5 text-xs tracking-[0.12em] uppercase font-medium hover:bg-[#ddb85a] transition-colors">
          View Packages <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  )
}

