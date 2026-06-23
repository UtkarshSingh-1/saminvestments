import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Shield, CheckCircle2, ArrowRight, User, Users, Building2, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Life & Health Insurance – SAM Investments',
  description: 'Get the best life and health insurance plans in Delhi. Term plans, ULIPs, health covers for individuals and families from SAM Investments.',
}

const insuranceTypes = [
  {
    icon: <User className="w-7 h-7" />,
    title: 'Term Life Insurance',
    desc: 'Pure protection plan with high coverage at low premium. Secure your family\'s future.',
    color: 'bg-red-600',
    features: ['High Sum Assured', 'Affordable Premium', 'Tax Benefit u/s 80C', 'Critical Illness Rider'],
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: 'Family Health Insurance',
    desc: 'Comprehensive health cover for you and your entire family under a single policy.',
    color: 'bg-green-600',
    features: ['Cashless Hospitalisation', 'Pre & Post Hospitalisation', 'Day Care Procedures', 'No Room Rent Cap'],
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: 'Individual Health Plan',
    desc: 'Tailored health insurance for individuals with customisable coverage and top-up options.',
    color: 'bg-pink-600',
    features: ['Wellness Benefits', 'OPD Cover', 'Mental Health Cover', 'Annual Health Check'],
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    title: 'Group / Corporate Insurance',
    desc: 'Affordable group health & life insurance solutions for small and large businesses.',
    color: 'bg-blue-600',
    features: ['Employee Benefits', 'Flexible Coverage', 'Maternity Cover', 'Dental & Vision'],
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: 'ULIP Plans',
    desc: 'Combines investment and insurance in one product with market-linked returns.',
    color: 'bg-purple-600',
    features: ['Life Cover + Investment', 'Tax Benefits u/s 80C', 'Flexible Premium', 'Wealth Creation'],
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: 'Critical Illness Cover',
    desc: 'Lump-sum payout on diagnosis of 30+ critical illnesses including cancer & heart disease.',
    color: 'bg-orange-500',
    features: ['30+ Illnesses Covered', 'Lump Sum Payout', 'No Hospitalisation Required', 'Income Replacement'],
  },
]

const partners = [
  'LIC', 'HDFC Life', 'ICICI Prudential', 'SBI Life', 'Tata AIA',
  'Max Life', 'Star Health', 'Niva Bupa', 'Care Health', 'Bajaj Allianz',
]

export default function InsurancePage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#145a32] to-[#1e8449] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Heart className="w-4 h-4" /> Protect What Matters Most
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Life & Health Insurance</h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto mb-8">
            Comprehensive insurance solutions to protect your life, health, and loved ones from life's uncertainties.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="bg-white text-[#145a32] hover:bg-gray-100 rounded-full px-7 py-3 font-bold">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild className="border-2 border-white text-white hover:bg-white/10 rounded-full px-7 py-3 font-bold bg-transparent">
              <a href="tel:+919810141662" className="flex items-center gap-2"><Phone className="w-4 h-4" /> Call Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Insurance */}
      <section className="py-12 px-6 bg-green-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Insurance is Essential?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Financial Security', icon: '🛡️' },
              { label: 'Tax Savings', icon: '💰' },
              { label: 'Medical Emergency', icon: '🏥' },
              { label: 'Family Protection', icon: '👨‍👩‍👧‍👦' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-5 shadow-sm text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-sm font-semibold text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Insurance Plans We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We partner with India's top insurers to bring you the best plans at competitive premiums.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insuranceTypes.map((plan) => (
              <div key={plan.title} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 ${plan.color} text-white rounded-xl flex items-center justify-center mb-5`}>
                  {plan.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{plan.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{plan.desc}</p>
                <div className="flex flex-col gap-1.5">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                      <span className="text-xs text-gray-600">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Insurance Partners</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((p) => (
              <div key={p} className="bg-white border border-gray-200 rounded-xl px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:shadow-md transition-shadow">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#145a32] to-[#1e8449] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Get the Right Insurance Plan Today</h2>
          <p className="text-green-100 mb-8">Our experts will help you compare plans and choose the one that best fits your needs and budget.</p>
          <Button asChild className="bg-white text-[#145a32] hover:bg-gray-100 rounded-full px-8 py-3 font-bold">
            <Link href="/contact">Contact Us <ArrowRight className="w-4 h-4 ml-1 inline" /></Link>
          </Button>
        </div>
      </section>

    </div>
  )
}
