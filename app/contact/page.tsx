'use client'

import * as React from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false)
  const [form, setForm] = React.useState({ name: '', phone: '', email: '', service: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, send to API
    setSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0a2d5e] to-[#1a6bbf] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            We're here to help. Reach out to us for a free consultation or any queries about investments, tax planning, or insurance.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 leading-relaxed">
                Our financial experts are available to help you with goal-based investments, mutual funds, tax planning, and insurance needs. Contact us for a free consultation.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {/* Phone */}
              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="w-11 h-11 bg-blue-100 text-[#0b4c8c] rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm mb-0.5">Phone</div>
                  <a href="tel:+919810141662" className="text-[#0b4c8c] hover:underline font-medium">+91-9810141662</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="w-11 h-11 bg-blue-100 text-[#0b4c8c] rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm mb-0.5">Email</div>
                  <a href="mailto:premansu2004@gmail.com" className="text-[#0b4c8c] hover:underline font-medium">premansu2004@gmail.com</a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="w-11 h-11 bg-blue-100 text-[#0b4c8c] rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm mb-0.5">Office Address</div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    410, A Block, Block A<br />
                    Defence Colony<br />
                    New Delhi, Delhi – 110024
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="w-11 h-11 bg-blue-100 text-[#0b4c8c] rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm mb-0.5">Office Hours</div>
                  <p className="text-gray-600 text-sm">Monday – Saturday: 10:00 AM – 6:00 PM</p>
                  <p className="text-gray-400 text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <iframe
                title="SAM Investments Office Location"
                src="https://maps.google.com/maps?q=SAM+Investments+%26+Taxation+Defence+Colony+New+Delhi+110024&output=embed&z=17"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* Open in Google Maps button */}
            <a
              href="https://www.google.com/maps/search/SAM+Investments+%26+Taxation+Defence+Colony+New+Delhi+110024"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#0b4c8c] hover:bg-[#0f5ca8] text-white text-sm font-semibold rounded-xl py-3 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Open SAM Investments in Google Maps
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 md:p-10 h-fit">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-10 gap-4">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
                <h3 className="text-2xl font-bold text-gray-900">Thank You!</h3>
                <p className="text-gray-600">We've received your message and will get back to you within 24 hours.</p>
                <Button onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', message: '' }) }} className="mt-4 bg-[#0b4c8c] text-white rounded-full px-7 py-2">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-500 text-sm mb-8">Fill in the form and we'll get back to you shortly.</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b4c8c]/30 focus:border-[#0b4c8c] transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98XXX XXXXX"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b4c8c]/30 focus:border-[#0b4c8c] transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1.5">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b4c8c]/30 focus:border-[#0b4c8c] transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1.5">Service Interested In</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b4c8c]/30 focus:border-[#0b4c8c] transition-all bg-white text-gray-700"
                    >
                      <option value="">Select a service...</option>
                      <option value="mutual-funds">Mutual Funds / SIP</option>
                      <option value="tax-planning">Tax Planning & ITR Filing</option>
                      <option value="insurance">Life & Health Insurance</option>
                      <option value="portfolio-review">Portfolio Review</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1.5">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your financial goals or any queries..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b4c8c]/30 focus:border-[#0b4c8c] transition-all resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#0b4c8c] text-white hover:bg-[#0f5ca8] rounded-xl py-3 font-semibold flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" /> Send Message
                  </Button>
                </form>
              </>
            )}
          </div>

        </div>
      </section>

    </div>
  )
}
