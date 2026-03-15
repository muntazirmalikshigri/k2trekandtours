const stats = [
  { num: '5,000+', label: 'Happy Travellers' },
  { num: '14', label: 'Unique Destinations' },
  { num: '12 Yrs', label: 'Local Expertise' },
  { num: '4.9', label: 'Average Rating' },
]

export default function StatsBar() {
  return (
    <div className="bg-[#0f0e0c] border-b border-[#c9a84c]/20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="py-6 px-4 md:px-8 border-r border-[#f5f0e8]/5 last:border-r-0">
            <div className="text-[#c9a84c] mb-1" style={{ fontFamily: 'Georgia, serif', fontSize: '32px', fontWeight: '300', lineHeight: '1' }}>
              {stat.num}
            </div>
            <div className="text-[10px] tracking-widest uppercase text-[#f5f0e8]/35">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
