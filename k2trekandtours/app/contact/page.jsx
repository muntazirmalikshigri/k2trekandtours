'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', package: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="bg-[#f5f0e8] min-h-screen">

      {/* Hero */}
      <div className="bg-[#0f0e0c] pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-[10px] tracking-[0.22em] uppercase">Get In Touch</span>
          </div>
          <h1
            className="text-[#f5f0e8]"
            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: '300', lineHeight: '1.05' }}
          >
            Plan Your <em style={{ fontStyle: 'italic', color: '#c4b49a' }}>Journey</em>
          </h1>
          <p className="text-[#f5f0e8]/45 mt-4 max-w-xl text-sm leading-relaxed">
            Tell us your dates, group size and dream destinations. We will craft a personalised itinerary within 24 hours.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-6">

          <div>
            <h2
              className="text-[#0f0e0c] mb-6"
              style={{ fontFamily: 'Georgia, serif', fontSize: '28px', fontWeight: '300' }}
            >
              Contact Info
            </h2>
          </div>

          {[
            { icon: Phone, label: 'Phone', value: '+92 300 123 4567', href: 'tel:+923001234567' },
            { icon: Mail, label: 'Email', value: 'info@k2treks.pk', href: 'mailto:info@k2treks.pk' },
            { icon: MapPin, label: 'Office', value: 'Main Bazaar, Skardu, Gilgit Baltistan, Pakistan', href: '#' },
            { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null },
          ].map((item) => {
            const Icon = item.icon
            const content = (
              <div className="flex gap-4 p-5 bg-white border border-[#e8e2d8] rounded-sm hover:border-[#c9a84c] transition-colors group">
                <div className="w-10 h-10 bg-[#0f0e0c] rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a84c] transition-colors">
                  <Icon className="w-4 h-4 text-[#c9a84c] group-hover:text-[#0f0e0c]" />
                </div>
                <div>
                  <div className="text-[10px] tracking-widest uppercase text-[#0f0e0c]/35 mb-1">{item.label}</div>
                  <div className="text-sm text-[#0f0e0c]/70">{item.value}</div>
                </div>
              </div>
            )
            return item.href && item.href !== '#'
              ? <a key={item.label} href={item.href}>{content}</a>
              : <div key={item.label}>{content}</div>
          })}

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 text-sm tracking-widest uppercase hover:bg-[#1fb855] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>

        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-[#e8e2d8] rounded-sm p-8">
            <h2
              className="text-[#0f0e0c] mb-8"
              style={{ fontFamily: 'Georgia, serif', fontSize: '28px', fontWeight: '300' }}
            >
              Send Enquiry
            </h2>

            {sent ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-[#3d4a35] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-7 h-7 text-[#a8c490]" />
                </div>
                <h3
                  className="text-[#0f0e0c] mb-3"
                  style={{ fontFamily: 'Georgia, serif', fontSize: '24px', fontWeight: '300' }}
                >
                  Message Sent!
                </h3>
                <p className="text-[#0f0e0c]/50 text-sm">
                  Thank you! We will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase text-[#0f0e0c]/40 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full border border-[#e8e2d8] bg-[#f5f0e8] px-4 py-3 text-sm text-[#0f0e0c] placeholder-[#0f0e0c]/25 focus:outline-none focus:border-[#c9a84c] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase text-[#0f0e0c]/40 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full border border-[#e8e2d8] bg-[#f5f0e8] px-4 py-3 text-sm text-[#0f0e0c] placeholder-[#0f0e0c]/25 focus:outline-none focus:border-[#c9a84c] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase text-[#0f0e0c]/40 mb-2">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                      className="w-full border border-[#e8e2d8] bg-[#f5f0e8] px-4 py-3 text-sm text-[#0f0e0c] placeholder-[#0f0e0c]/25 focus:outline-none focus:border-[#c9a84c] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-widest uppercase text-[#0f0e0c]/40 mb-2">Interested Package</label>
                    <select
                      name="package"
                      value={form.package}
                      onChange={handleChange}
                      className="w-full border border-[#e8e2d8] bg-[#f5f0e8] px-4 py-3 text-sm text-[#0f0e0c] focus:outline-none focus:border-[#c9a84c] transition-colors"
                    >
                      <option value="">Select a package</option>
                      <option>Hunza Valley Discovery (7 days)</option>
                      <option>GB Grand Expedition (14 days)</option>
                      <option>K2 Base Camp Trek (22 days)</option>
                      <option>Fairy Meadows Trek (5 days)</option>
                      <option>Custom Package</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-[#0f0e0c]/40 mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us your travel dates, group size, and any special requirements..."
                    className="w-full border border-[#e8e2d8] bg-[#f5f0e8] px-4 py-3 text-sm text-[#0f0e0c] placeholder-[#0f0e0c]/25 focus:outline-none focus:border-[#c9a84c] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-2 bg-[#0f0e0c] text-[#f5f0e8] px-8 py-4 text-xs tracking-[0.12em] uppercase hover:bg-[#c9a84c] hover:text-[#0f0e0c] transition-all duration-200 group"
                >
                  Send Enquiry
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

