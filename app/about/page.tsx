import type { Metadata } from 'next'
import Link from 'next/link'
import {
  TrendingUp,
  ShieldCheck,
  Heart,
  CheckCircle2,
  Users,
  Award,
  Target,
  Handshake,
  Star,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About Us – SAM Investments',
  description:
    'SAM Investments is a Delhi-based AMFI registered financial services firm offering Mutual Funds, Tax Planning, ITR Filing and Insurance solutions.',
}

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '500+', label: 'Satisfied Clients' },
  { value: '₹50 Cr+', label: 'Assets Under Management' },
  { value: '3', label: 'Core Service Verticals' },
]

const values = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Integrity',
    desc: 'We always act in the best interest of our clients — with complete honesty and ethical practice.',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Transparency',
    desc: 'Full disclosure at every step. No hidden charges, no surprises — just clear and open communication.',
    color: 'bg-orange-100 text-orange-700',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Client First',
    desc: 'Every solution we recommend is centred around your goals, your timeline, and your financial well-being.',
    color: 'bg-green-100 text-green-700',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Excellence',
    desc: 'We deliver best-in-class service with consistent attention to detail, accuracy, and quality outcomes.',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: 'Long-Term Relationships',
    desc: 'We build lasting partnerships with our clients — growing alongside them through every stage of life.',
    color: 'bg-teal-100 text-teal-700',
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Commitment',
    desc: 'We are committed to helping you reach your financial goals — no matter how big or small they are.',
    color: 'bg-yellow-100 text-yellow-700',
  },
]

const services = [
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: 'Mutual Fund Investments',
    desc: 'Goal-based mutual fund portfolios across equity, debt, and hybrid categories — tailored to your risk appetite and time horizon.',
    href: '/services#mutual-funds',
    color: 'border-l-blue-600',
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: 'Tax Planning & ITR Filing',
    desc: 'Strategic tax-saving solutions and accurate, timely ITR filing for individuals, salaried professionals, and businesses.',
    href: '/services#tax-planning',
    color: 'border-l-orange-500',
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: 'Life & Health Insurance',
    desc: 'Comprehensive insurance coverage from India\'s leading insurers — protecting your life, health, and loved ones.',
    href: '/services#insurance',
    color: 'border-l-green-600',
  },
]

const highlights = [
  'AMFI Registered Mutual Fund Distributor',
  'Comprehensive Tax Planning & ITR filing',
  'Life and Health Insurance from top insurers',
  'Personalised goal-based financial planning',
  'Dedicated relationship support for every client',
  'No hidden charges — complete fee transparency',
  'Online investment platform available 24×7',
  'Regular portfolio reviews and rebalancing',
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-[#0a2d5e] via-[#0d3d7a] to-[#1a6bbf] text-white py-24 px-6 relative overflow-hidden">
        {/* Background decorative circles */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -left-16 w-72 h-72 bg-white/5 rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Award className="w-4 h-4" /> AMFI Registered • Est. 2008
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
            About SAM Investments
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A trusted name in financial services — helping individuals, families, and businesses build wealth, save taxes, and stay protected.
          </p>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0b4c8c] font-semibold text-sm uppercase tracking-widest mb-3">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Your Trusted Partner for Financial Growth & Security
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5 text-[15px]">
              <strong>SAM Investments</strong> is a Delhi-based financial services firm established with a single purpose — to help every client achieve their financial goals through sound planning, disciplined investing, and reliable protection.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5 text-[15px]">
              We specialize in <strong>Mutual Fund Investments</strong>, <strong>Tax Planning & ITR Filing</strong>, and <strong>Life & Health Insurance</strong>. Our approach is rooted in understanding each client's unique life stage, risk appetite, and future aspirations — and then creating a personalised plan that works for them.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
              As an <strong>AMFI Registered Mutual Fund Distributor</strong>, we are bound by the highest standards of professionalism and client-centricity. Over the years, we have served <strong>500+ clients</strong> across Delhi-NCR and managed over <strong>₹50 crore</strong> in assets — building lasting relationships based on trust, transparency, and measurable results.
            </p>
            <Button asChild className="bg-[#0b4c8c] text-white hover:bg-[#0f5ca8] rounded-full px-8 py-3 font-semibold">
              <Link href="/contact">Get in Touch <ArrowRight className="w-4 h-4 ml-1 inline" /></Link>
            </Button>
          </div>

          {/* Right side — highlights */}
          <div className="bg-gradient-to-br from-[#f0f6ff] to-[#e8f1fc] rounded-3xl p-8 md:p-10">
            <h3 className="text-lg font-bold text-gray-900 mb-6">What sets us apart</h3>
            <div className="flex flex-col gap-4">
              {highlights.map((pt) => (
                <div key={pt} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2d9d43] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#0b4c8c] text-white py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl font-bold mb-2">{s.value}</div>
              <div className="text-blue-200 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#0b4c8c] font-semibold text-sm uppercase tracking-widest mb-3">Our Purpose</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 text-[#0b4c8c] rounded-xl flex items-center justify-center mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                To empower every individual and family with the right financial tools, knowledge, and expert guidance — enabling them to build wealth, reduce tax liability, and protect what matters most, at every stage of life.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-5">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                To be the most trusted and preferred financial services firm in Delhi-NCR — known for our integrity, depth of expertise, and unwavering commitment to client outcomes over the long term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#0b4c8c] font-semibold text-sm uppercase tracking-widest mb-3">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-gray-50 rounded-2xl p-7 hover:shadow-md transition-shadow border border-gray-100">
                <div className={`w-11 h-11 ${v.color} rounded-xl flex items-center justify-center mb-5`}>
                  {v.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#0b4c8c] font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-[15px]">Three core service verticals — built to cover every major financial need of our clients.</p>
          </div>
          <div className="flex flex-col gap-5">
            {services.map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className={`group bg-white rounded-2xl p-7 border-l-4 ${svc.color} shadow-sm hover:shadow-lg transition-all flex items-start gap-5`}
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shrink-0 text-gray-600 group-hover:bg-[#0b4c8c] group-hover:text-white transition-colors">
                  {svc.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{svc.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#0b4c8c] shrink-0 mt-1 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT STRIP ── */}
      <section className="py-14 px-6 bg-[#0a2d5e] text-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold">Visit Us or Get in Touch</h3>
            <div className="flex flex-col gap-2 text-blue-200 text-sm">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-400" /> 410, A Block, Defence Colony, New Delhi – 110024</span>
              <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-blue-400" /> +91-9810141662</span>
              <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-400" /> premansu2004@gmail.com</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Button asChild className="bg-white text-[#0b4c8c] hover:bg-gray-100 rounded-full px-7 py-3 font-bold">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild className="border-2 border-white text-white hover:bg-white/10 rounded-full px-7 py-3 font-bold bg-transparent">
              <Link href="/services">Our Services <ArrowRight className="w-4 h-4 ml-1 inline" /></Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
