import Link from 'next/link'

export default function CtaSection() {
  return (
    <section className="py-28 px-6 bg-[#f5f0e8] text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(61,74,53,0.1) 0%, transparent 70%)' }} />
      <div className="relative max-w-2xl mx-auto">
        <div className="text-[11px] tracking-[0.22em] uppercase text-[#3d4a35] mb-5">Start Your Journey</div>
        <h2 className="text-[#0f0e0c] mb-5" style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(38px, 5vw, 68px)', fontWeight: '300', lineHeight: '1.1' }}>
          Ready to Explore<br />
          <em style={{ fontStyle: 'italic', color: '#3d4a35' }}>Gilgit Baltistan?</em>
        </h2>
        <p className="text-[#0f0e0c]/45 text-sm leading-relaxed max-w-md mx-auto mb-12">
          Tell us your dates, group size and interests. We will craft a personalised itinerary within 24 hours.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3.5 text-xs tracking-[0.10em] uppercase hover:bg-[#1fb855] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
          <Link href="/contact" className="bg-[#c9a84c] text-[#0f0e0c] px-6 py-3.5 text-xs tracking-[0.10em] uppercase hover:bg-[#ddb85a] transition-colors">
            Send Enquiry
          </Link>
          <a href="tel:+92XXXXXXXXX" className="border border-[#0f0e0c]/25 text-[#0f0e0c]/70 px-6 py-3.5 text-xs tracking-[0.10em] uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
            Call Us
          </a>
        </div>
      </div>
    </section>
  )
}
