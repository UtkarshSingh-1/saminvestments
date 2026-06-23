import type { Metadata } from 'next'
import Link from 'next/link'
import {
  TrendingUp, FileText, Heart, CheckCircle2, ArrowRight,
  BarChart2, PiggyBank, Wallet, Calculator, Receipt,
  ShieldCheck, AlertCircle, User, Users, Building2, Shield, Phone
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Products & Services – SAM Investments',
  description: 'SAM Investments offers Mutual Funds, Tax Planning & ITR Filing, Life & Health Insurance. Expert financial guidance in Defence Colony, New Delhi.',
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#0a2d5e] to-[#1a6bbf] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Products & Services</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Comprehensive financial solutions — Mutual Funds, Tax Planning & Insurance — all under one roof.
          </p>
        </div>
      </section>

      {/* Quick Jump Tabs */}
      <section className="sticky top-[73px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 flex gap-0 overflow-x-auto">
          {[
            { label: '📈 Mutual Funds', id: 'mutual-funds' },
            { label: '📋 Tax Planning & ITR', id: 'tax-planning' },
            { label: '🛡️ Insurance', id: 'insurance' },
          ].map(tab => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className="shrink-0 px-6 py-4 text-sm font-semibold text-gray-600 hover:text-[#0b4c8c] hover:bg-blue-50 border-b-2 border-transparent hover:border-[#0b4c8c] transition-all"
            >
              {tab.label}
            </a>
          ))}
        </div>
      </section>

      {/* ─── SECTION 1: MUTUAL FUNDS ─── */}
      <section id="mutual-funds" className="py-20 px-6 bg-white scroll-mt-32">
        <div className="max-w-6xl mx-auto">

          {/* Section Title */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Mutual Funds</h2>
              <p className="text-gray-500 mt-1">AMFI Registered Distributor — Goal-based, diversified investing</p>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
            Grow your wealth systematically with expert-curated mutual fund portfolios tailored to your life goals. We help you choose the right fund across equity, debt, and hybrid categories based on your risk profile and time horizon.
          </p>

          {/* Fund Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { icon: <TrendingUp className="w-6 h-6" />, title: 'Equity Funds', desc: 'High growth potential through stocks. Ideal for 5+ year horizon.', color: 'bg-blue-600', tags: ['Large Cap', 'Mid Cap', 'Multi Cap', 'ELSS'] },
              { icon: <BarChart2 className="w-6 h-6" />, title: 'Debt Funds', desc: 'Stable returns via bonds. Lower risk for short-medium term.', color: 'bg-green-600', tags: ['Liquid', 'Short Duration', 'Gilt', 'Corporate Bond'] },
              { icon: <Wallet className="w-6 h-6" />, title: 'Hybrid Funds', desc: 'Mix of equity & debt for balanced returns.', color: 'bg-purple-600', tags: ['Balanced Advantage', 'Aggressive Hybrid'] },
              { icon: <PiggyBank className="w-6 h-6" />, title: 'ELSS / Tax Saver', desc: 'Save ₹1.5L tax under Sec 80C with equity returns.', color: 'bg-orange-500', tags: ['3yr lock-in', '80C benefit'] },
            ].map(f => (
              <div key={f.title} className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-10 h-10 ${f.color} text-white rounded-xl flex items-center justify-center mb-4`}>{f.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{f.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {f.tags.map(t => <span key={t} className="text-xs bg-gray-100 text-gray-600 rounded-full px-2.5 py-1">{t}</span>)}
                </div>
              </div>
            ))}
          </div>

          {/* Why MF */}
          <div className="bg-blue-50 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-4">Why invest through SAM Investments?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Goal-based portfolio construction', 'Regular portfolio review & rebalancing', 'SIP starting from ₹500/month', 'Direct & Regular plan guidance', 'Zero commission on direct plans', 'Online 24×7 investment access'].map(pt => (
                  <div key={pt} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    <span className="text-sm text-gray-700">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="shrink-0">
              <Button asChild className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-7 py-3 font-semibold">
                <a href="https://beta.my-planner.in/login" target="_blank" rel="noopener noreferrer">Start Investing →</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-2 bg-gray-100" />

      {/* ─── SECTION 2: TAX PLANNING ─── */}
      <section id="tax-planning" className="py-20 px-6 bg-white scroll-mt-32">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-orange-500 text-white rounded-2xl flex items-center justify-center shrink-0">
              <FileText className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Tax Planning & ITR Filing</h2>
              <p className="text-gray-500 mt-1">Save more, stress less — expert tax guidance</p>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
            Our tax experts help you plan taxes intelligently and file returns accurately. We cover individuals, salaried employees, freelancers, and businesses with end-to-end tax solutions.
          </p>

          {/* Tax Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: <FileText className="w-6 h-6" />, title: 'ITR Filing', desc: 'Accurate, on-time filing for individuals, salaried, and freelancers.', color: 'bg-blue-600' },
              { icon: <Calculator className="w-6 h-6" />, title: 'Tax Planning', desc: 'Save max tax via 80C, 80D, HRA, NPS and other deductions.', color: 'bg-orange-500' },
              { icon: <Receipt className="w-6 h-6" />, title: 'Capital Gains', desc: 'Guidance on gains from mutual funds, stocks, and property.', color: 'bg-green-600' },
              { icon: <ShieldCheck className="w-6 h-6" />, title: 'TDS & Compliance', desc: 'TDS computation, filing, and year-round compliance.', color: 'bg-purple-600' },
              { icon: <AlertCircle className="w-6 h-6" />, title: 'Notice Handling', desc: 'Expert help in responding to Income Tax notices.', color: 'bg-red-500' },
              { icon: <FileText className="w-6 h-6" />, title: 'GST Returns', desc: 'Monthly & quarterly GST filing for businesses.', color: 'bg-teal-600' },
            ].map(s => (
              <div key={s.title} className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-10 h-10 ${s.color} text-white rounded-xl flex items-center justify-center mb-4`}>{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Tax Saving Table */}
          <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-100 mb-10">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-[#0b4c8c] text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Section</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Description</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Max Deduction</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { s: 'Sec 80C', d: 'ELSS, PPF, LIC, EPF, NSC', l: '₹1.5 Lakh' },
                  { s: 'Sec 80D', d: 'Health Insurance Premium', l: '₹25,000 – ₹75,000' },
                  { s: 'Sec 24(b)', d: 'Home Loan Interest', l: '₹2 Lakh' },
                  { s: 'Sec 80CCD(1B)', d: 'NPS Investment', l: '₹50,000' },
                  { s: 'Sec 80TTA', d: 'Savings Account Interest', l: '₹10,000' },
                  { s: 'HRA Exemption', d: 'House Rent Allowance', l: 'As applicable' },
                ].map((row, i) => (
                  <tr key={row.s} className={i % 2 === 0 ? 'bg-white' : 'bg-orange-50'}>
                    <td className="px-6 py-4 text-sm font-bold text-[#0b4c8c]">{row.s}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{row.d}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-green-700">{row.l}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-orange-50 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-4">Why choose us for tax filing?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Experienced tax professionals', 'Quick turnaround — same day filing', 'Maximum legitimate savings', 'Help with IT notices & scrutiny', 'Affordable, no hidden charges', 'Secure data handling'].map(pt => (
                  <div key={pt} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    <span className="text-sm text-gray-700">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="shrink-0">
              <Button asChild className="bg-orange-500 text-white hover:bg-orange-600 rounded-full px-7 py-3 font-semibold">
                <Link href="/contact">File My ITR →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-2 bg-gray-100" />

      {/* ─── SECTION 3: INSURANCE ─── */}
      <section id="insurance" className="py-20 px-6 bg-white scroll-mt-32">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-green-600 text-white rounded-2xl flex items-center justify-center shrink-0">
              <Heart className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Life & Health Insurance</h2>
              <p className="text-gray-500 mt-1">Protect your family and your health with the right plans</p>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
            We partner with India's top insurers to bring you the best life and health insurance plans at competitive premiums. Our experts help you compare options and choose the cover that best fits your needs and budget.
          </p>

          {/* Insurance Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { icon: <User className="w-6 h-6" />, title: 'Term Life Insurance', desc: 'High cover at low premium. Secure your family\'s financial future.', color: 'bg-red-600', features: ['High Sum Assured', 'Affordable Premium', '80C Tax Benefit', 'Critical Illness Rider'] },
              { icon: <Users className="w-6 h-6" />, title: 'Family Health Plan', desc: 'Full family covered under one policy with cashless hospitalisation.', color: 'bg-green-600', features: ['Cashless Hospitalisation', 'Pre & Post Hospitalisation', 'Day Care', 'No Room Rent Cap'] },
              { icon: <Heart className="w-6 h-6" />, title: 'Individual Health Plan', desc: 'Tailored individual health cover with customisable add-ons.', color: 'bg-pink-600', features: ['Wellness Benefits', 'OPD Cover', 'Mental Health Cover', 'Annual Check-up'] },
              { icon: <Building2 className="w-6 h-6" />, title: 'Group / Corporate', desc: 'Group health & life insurance for businesses of all sizes.', color: 'bg-blue-600', features: ['Employee Benefits', 'Maternity Cover', 'Flexible Coverage', 'Dental & Vision'] },
              { icon: <Shield className="w-6 h-6" />, title: 'ULIP Plans', desc: 'Insurance + investment in one — with market-linked returns.', color: 'bg-purple-600', features: ['Life Cover + Investment', '80C Benefit', 'Wealth Creation', 'Flexible Premium'] },
              { icon: <Shield className="w-6 h-6" />, title: 'Critical Illness', desc: 'Lump-sum payout on diagnosis of 30+ critical illnesses.', color: 'bg-orange-500', features: ['30+ Illnesses', 'Lump Sum Payout', 'Income Replacement', 'No Hospitalisation Needed'] },
            ].map(plan => (
              <div key={plan.title} className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-10 h-10 ${plan.color} text-white rounded-xl flex items-center justify-center mb-4`}>{plan.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{plan.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{plan.desc}</p>
                <div className="flex flex-col gap-1.5">
                  {plan.features.map(f => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                      <span className="text-xs text-gray-600">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Insurance Partners */}
          <div className="mb-10">
            <h3 className="font-bold text-gray-900 mb-4">Our Insurance Partners</h3>
            <div className="flex flex-wrap gap-3">
              {['LIC', 'HDFC Life', 'ICICI Prudential', 'SBI Life', 'Tata AIA', 'Max Life', 'Star Health', 'Niva Bupa', 'Care Health', 'Bajaj Allianz'].map(p => (
                <span key={p} className="bg-gray-100 border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium text-gray-700">{p}</span>
              ))}
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-2">Get the right insurance plan today</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Our experts will help you compare plans and choose the one that perfectly fits your life stage, needs, and budget — at no extra cost.</p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Button asChild className="bg-green-600 text-white hover:bg-green-700 rounded-full px-7 py-3 font-semibold">
                <Link href="/contact">Get Free Quote →</Link>
              </Button>
              <Button asChild variant="outline" className="border-green-600 text-green-700 hover:bg-green-50 rounded-full px-7 py-3 font-semibold">
                <a href="tel:+919810141662" className="flex items-center gap-2"><Phone className="w-4 h-4" /> Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#0b4c8c] to-[#1a6bbf] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-blue-100 mb-8">Contact us for a free consultation and we'll help you choose the right financial plan for your goals.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="bg-white text-[#0b4c8c] hover:bg-gray-100 rounded-full px-8 py-3 font-bold">
              <Link href="/contact">Book Free Consultation <ArrowRight className="w-4 h-4 ml-1 inline" /></Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
