import Link from 'next/link'
import { ArrowRight, Check, Globe, Users, FileText, Headphones, Star, Building } from 'lucide-react'

const benefits = [
  { icon: Globe, title: 'Global Reach, Local Expertise', desc: '12 years operating in Gilgit Baltistan. We know every trail, permit, and guesthouse.' },
  { icon: Users, title: 'Dedicated Agency Liaison', desc: 'Your own point of contact via WhatsApp. Fast responses, reliable updates.' },
  { icon: FileText, title: 'Ready-Made Brochures', desc: 'High-res photos, PDF dossiers and itineraries ready to send to your clients.' },
  { icon: Headphones, title: '24/7 On-Ground Support', desc: 'Our local team is always reachable during your clients trips.' },
  { icon: Star, title: 'PTDC Licensed & Insured', desc: 'Fully licensed operator. All permits handled. Complete peace of mind.' },
  { icon: Building, title: 'Competitive Wholesale Rates', desc: 'Special pricing for 5+ person groups and repeat agency partners.' },
]

const process = [
  { num: '01', title: 'Send Enquiry', desc: 'Share your client requirements — dates, group size, budget, interests.' },
  { num: '02', title: 'Custom Proposal', desc: 'We send a detailed itinerary + wholesale pricing within 48 hours.' },
  { num: '03', title: 'Confirm & Deposit', desc: 'Client confirms, deposit paid. We handle all permits and logistics.' },
  { num: '04', title: 'Flawless Execution', desc: 'Your clients enjoy a world-class experience. You get real-time updates.' },
]

export const metadata = {
  title: 'For Travel Agencies — K2 Trek and Tours',
  description: 'Wholesale partnerships for travel agencies and tour operators. Expert ground handling in Gilgit Baltistan.',
}

export default function AgenciesPage() {
  return (
    <div className="bg-[#f5f0e8] min-h-screen">

      {/* Hero */}
      <div className="bg-[#0a0e0a] pt-32 pb-24 px-6 relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 1440 500" preserveAspectRatio="xMidYMax slice">
          <polygon points="0,500 0,300 120,150 280,260 420,80 580,220 720,60 880,200 1020,100 1180,250 1320,140 1440,200 1440,500" fill="rgba(255,255,255,0.02)" />
          <polygon points="420,80 390,135 450,135" fill="rgba(255,255,255,0.15)" />
          <polygon points="720,60 692,112 748,112" fill="rgba(255,255,255,0.2)" />
        </svg>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-[10px] tracking-[0.22em] uppercase">B2B Partnership</span>
          </div>
          <h1 className="text-[#f5f0e8] mb-6" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: '300', lineHeight: '1.05' }}>
            Your Trusted Ground<br />
            <em style={{ fontStyle: 'italic', color: '#c4b49a' }}>Partner in Pakistan</em>
          </h1>
          <p className="text-[#f5f0e8]/45 max-w-xl text-sm leading-relaxed mb-10">
            We are the boots on the ground your clients need. Reliable, licensed, and deeply local — the perfect partner for international travel agencies.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="flex items-center gap-2 bg-[#c9a84c] text-[#0f0e0c] px-7 py-3.5 text-xs tracking-[0.12em] uppercase font-medium hover:bg-[#ddb85a] transition-colors">
              Request Wholesale Rates <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[#f5f0e8]/25 text-[#f5f0e8]/70 px-7 py-3.5 text-xs tracking-[0.12em] uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#0f0e0c] border-b border-[#c9a84c]/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
          {[
            { num: '50+', label: 'Agency Partners' },
            { num: '5,000+', label: 'Clients Served' },
            { num: '48hr', label: 'Proposal Turnaround' },
            { num: '100%', label: 'Permit Success Rate' },
          ].map((s) => (
            <div key={s.label} className="py-6 px-4 md:px-8 border-r border-[#f5f0e8]/5 last:border-r-0">
              <div className="text-[#c9a84c] mb-1" style={{ fontFamily: 'Georgia, serif', fontSize: '32px', fontWeight: '300', lineHeight: '1' }}>{s.num}</div>
              <div className="text-[10px] tracking-widest uppercase text-[#f5f0e8]/35">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#b85c38]" />
              <span className="text-[#b85c38] text-[10px] tracking-[0.22em] uppercase">Why Partner With Us</span>
              <div className="w-6 h-px bg-[#b85c38]" />
            </div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '300', color: '#0f0e0c' }}>
              Everything Your Clients <em style={{ fontStyle: 'italic', color: '#3d4a35' }}>Deserve</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon
              return (
                <div key={b.title} className="bg-white border border-[#e8e2d8] p-7 rounded-sm hover:border-[#c9a84c] transition-colors group">
                  <div className="w-11 h-11 bg-[#0f0e0c] rounded-sm flex items-center justify-center mb-5 group-hover:bg-[#c9a84c] transition-colors">
                    <Icon className="w-5 h-5 text-[#c9a84c] group-hover:text-[#0f0e0c]" />
                  </div>
                  <h3 className="text-[#0f0e0c] mb-2 font-medium text-sm">{b.title}</h3>
                  <p className="text-[#0f0e0c]/50 text-sm leading-relaxed">{b.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="bg-[#0f0e0c] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '300', color: '#f5f0e8' }}>
              How It <em style={{ fontStyle: 'italic', color: '#c4b49a' }}>Works</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <div key={p.num} className="relative">
                <div className="text-[#c9a84c]/20" style={{ fontFamily: 'Georgia, serif', fontSize: '64px', fontWeight: '300', lineHeight: '1' }}>{p.num}</div>
                <h3 className="text-[#f5f0e8] font-medium text-sm mt-2 mb-2">{p.title}</h3>
                <p className="text-[#f5f0e8]/40 text-sm leading-relaxed">{p.desc}</p>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 w-8 h-px bg-[#c9a84c]/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Packages for Agencies */}
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-12" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '300', color: '#0f0e0c' }}>
            Wholesale <em style={{ fontStyle: 'italic', color: '#3d4a35' }}>Packages</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Starter Partnership', min: '5 pax/year', features: ['10% commission', 'Dedicated WhatsApp support', 'Standard brochure kit', 'Monthly newsletter'], cta: 'Apply Now' },
              { title: 'Premium Partner', min: '20 pax/year', features: ['15% commission', 'Priority support 24/7', 'Custom branded materials', 'Co-marketing opportunities', 'Famil trip invitation'], cta: 'Apply Now', featured: true },
              { title: 'Elite Partner', min: '50+ pax/year', features: ['20% commission', 'Dedicated account manager', 'White-label options', 'Exclusive rates', 'Annual partner summit'], cta: 'Contact Us' },
            ].map((tier) => (
              <div key={tier.title} className={`p-8 rounded-sm border ${tier.featured ? 'bg-[#3d4a35] border-[#3d4a35]' : 'bg-white border-[#e8e2d8]'}`}>
                {tier.featured && <div className="bg-[#c9a84c] text-[#0f0e0c] text-[9px] tracking-widest uppercase px-3 py-1 inline-block mb-5">Most Popular</div>}
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: '300', color: tier.featured ? '#f5f0e8' : '#0f0e0c' }} className="mb-1">{tier.title}</h3>
                <p className={`text-xs mb-6 ${tier.featured ? 'text-[#f5f0e8]/50' : 'text-[#0f0e0c]/40'}`}>Min. {tier.min}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2.5 text-sm ${tier.featured ? 'text-[#f5f0e8]/70' : 'text-[#0f0e0c]/60'}`}>
                      <Check className="w-3.5 h-3.5 text-[#c9a84c] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`block text-center py-3 text-xs tracking-widest uppercase transition-colors ${tier.featured ? 'bg-[#c9a84c] text-[#0f0e0c] hover:bg-[#ddb85a]' : 'border border-[#0f0e0c]/20 text-[#0f0e0c] hover:border-[#c9a84c] hover:text-[#c9a84c]'}`}>
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
