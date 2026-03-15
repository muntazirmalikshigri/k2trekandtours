export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#e8e2d8]">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-[#c9a84c] text-base tracking-widest mb-6">★★★★★</div>
        <blockquote
          className="text-[#0f0e0c] mb-8 leading-relaxed"
          style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: '300', fontStyle: 'italic' }}
        >
          Standing at K2 Base Camp with this team was the single most profound experience of my life. Their local knowledge was unmatched by any international operator.
        </blockquote>
        <div className="flex items-center justify-center gap-4 text-[#0f0e0c]/45 text-[11px] tracking-[0.14em] uppercase">
          <div className="w-10 h-px bg-[#0f0e0c]/25" />
          James Whitfield, London UK
          <div className="w-10 h-px bg-[#0f0e0c]/25" />
        </div>
      </div>
    </section>
  )
}
