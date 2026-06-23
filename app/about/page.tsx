import { Users, Award, TrendingUp, ShieldCheck, Heart, CheckCircle2 } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About Us - SAM Investments',
  description: 'Learn about SAM Investments - 15+ years of trusted financial guidance in Delhi. AMFI registered, client-focused investment & taxation experts.'
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#0a2d5e] to-[#1a6bbf] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About SAM Investments</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Your trusted partner for intelligent investments & taxation solutions since over a decade.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-[#0b4c8c] rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Award className="w-4 h-4" /> Trusted Since 2008
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              <strong>SAM Investments</strong> is a Delhi-based financial services firm specializing in Goal-Based Investments, Mutual Funds, Tax Planning, ITR Filing, and Life & Health Insurance.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              We believe that every individual deserves personalized financial guidance. Our approach starts with understanding your life goals — whether it's buying a home, planning for children's education, retirement, or wealth creation — and then crafting an investment strategy aligned to those goals.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              As an <strong>AMFI Registered Mutual Fund Distributor</strong>, we ensure that every recommendation is unbiased, transparent, and in your best interest. We are committed to building long-term relationships built on trust, performance, and integrity.
            </p>
            <div className="flex flex-col gap-3">
              {[
                'AMFI Registered Mutual Fund Distributor',
                'Expert Tax Planning & ITR filing team',
                'Partnerships with all leading insurance companies',
                'Transparent guidance with no hidden charges',
                'Dedicated relationship manager for every client',
              ].map((pt) => (
                <div key={pt} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2d9d43] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower every Indian family with the right financial tools, knowledge, and expert guidance to achieve their financial goals and secure their future.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and preferred financial services firm in Delhi-NCR, known for our integrity, expertise, and client-centric approach.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• <strong>Transparency</strong> – Full disclosure at every step</li>
                <li>• <strong>Integrity</strong> – Always act in client's best interest</li>
                <li>• <strong>Excellence</strong> – Best-in-class service delivery</li>
                <li>• <strong>Commitment</strong> – Long-term relationship over one-time advice</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0b4c8c] text-white px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '15+', label: 'Years of Experience' },
            { value: '500+', label: 'Happy Clients' },
            { value: '₹50Cr+', label: 'AUM Managed' },
            { value: '3', label: 'Core Services' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold">{stat.value}</div>
              <div className="text-blue-200 text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expertise</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Our team brings together expertise across investments, taxation, and insurance to deliver comprehensive financial solutions.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <TrendingUp className="w-8 h-8 text-blue-600" />, title: 'Investment Planning', desc: 'Expert guidance in Mutual Funds, SIP, Portfolio Management & Goal-Based Investing.' },
              { icon: <ShieldCheck className="w-8 h-8 text-orange-500" />, title: 'Tax & Compliance', desc: 'Comprehensive tax planning, ITR filing, and compliance services for individuals & businesses.' },
              { icon: <Heart className="w-8 h-8 text-green-600" />, title: 'Insurance Planning', desc: 'Customized life & health insurance solutions to protect you and your loved ones.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-5 mx-auto">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Financial Journey?</h2>
          <p className="text-gray-600 mb-8">Let's discuss your goals and create a personalized investment plan for you.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="bg-[#0b4c8c] text-white hover:bg-[#0f5ca8] rounded-full px-8 py-3 font-semibold">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button asChild variant="outline" className="border-[#0b4c8c] text-[#0b4c8c] hover:bg-blue-50 rounded-full px-8 py-3 font-semibold">
              <Link href="/services/mutual-funds">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
