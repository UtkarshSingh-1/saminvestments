import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, CheckCircle2, ArrowRight, Calculator, Receipt, ShieldCheck, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Tax Planning & ITR Filing – SAM Investments',
  description: 'Expert tax planning and ITR filing services in Delhi. Save maximum tax legally. Individual, business, and NRI tax advisory.',
}

const services = [
  {
    icon: <FileText className="w-7 h-7" />,
    title: 'ITR Filing',
    desc: 'Accurate and timely Income Tax Return filing for individuals, salaried, freelancers, and businesses.',
    color: 'bg-blue-600',
  },
  {
    icon: <Calculator className="w-7 h-7" />,
    title: 'Tax Planning',
    desc: 'Strategic tax-saving investment advice under Section 80C, 80D, HRA, and other exemptions.',
    color: 'bg-orange-500',
  },
  {
    icon: <Receipt className="w-7 h-7" />,
    title: 'Capital Gains Tax',
    desc: 'Expert advisory on capital gains from mutual funds, stocks, property, and other assets.',
    color: 'bg-green-600',
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: 'TDS & Compliance',
    desc: 'TDS computation, filing, and compliance support for individuals and businesses.',
    color: 'bg-purple-600',
  },
  {
    icon: <AlertCircle className="w-7 h-7" />,
    title: 'Notice Handling',
    desc: 'Expert assistance in responding to Income Tax notices and assessments.',
    color: 'bg-red-500',
  },
  {
    icon: <FileText className="w-7 h-7" />,
    title: 'GST Returns',
    desc: 'Monthly & quarterly GST return filing for businesses and self-employed professionals.',
    color: 'bg-teal-600',
  },
]

const taxSavings = [
  { section: 'Sec 80C', desc: 'ELSS, PPF, LIC, EPF, NSC', limit: '₹1.5 Lakh' },
  { section: 'Sec 80D', desc: 'Health Insurance Premium', limit: '₹25,000 – ₹75,000' },
  { section: 'Sec 24(b)', desc: 'Home Loan Interest', limit: '₹2 Lakh' },
  { section: 'Sec 80CCD(1B)', desc: 'NPS Investment', limit: '₹50,000' },
  { section: 'Sec 80TTA', desc: 'Savings Account Interest', limit: '₹10,000' },
  { section: 'HRA Exemption', desc: 'House Rent Allowance', limit: 'As applicable' },
]

export default function TaxPlanningPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#7c3a00] to-[#c45c1a] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" /> Expert Tax Advisory
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tax Planning & ITR Filing</h1>
          <p className="text-orange-100 text-lg max-w-2xl mx-auto mb-8">
            Save more, stress less. Our tax experts help you plan taxes strategically and file returns accurately.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="bg-white text-[#7c3a00] hover:bg-gray-100 rounded-full px-7 py-3 font-bold">
              <Link href="/contact">File My ITR Now</Link>
            </Button>
            <Button asChild className="border-2 border-white text-white hover:bg-white/10 rounded-full px-7 py-3 font-bold bg-transparent">
              <Link href="/contact">Talk to Expert</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Tax Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive tax solutions for individuals, salaried professionals, freelancers, and businesses.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 ${s.color} text-white rounded-xl flex items-center justify-center mb-5`}>
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Saving Opportunities */}
      <section className="py-20 px-6 bg-orange-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Tax Saving Opportunities</h2>
            <p className="text-gray-600">Don't leave money on the table — leverage these deductions under the old tax regime.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-md overflow-hidden">
              <thead>
                <tr className="bg-[#0b4c8c] text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Section</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Description</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Max Deduction</th>
                </tr>
              </thead>
              <tbody>
                {taxSavings.map((row, i) => (
                  <tr key={row.section} className={i % 2 === 0 ? 'bg-white' : 'bg-orange-50'}>
                    <td className="px-6 py-4 text-sm font-bold text-[#0b4c8c]">{row.section}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{row.desc}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-green-700">{row.limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Us for Tax Filing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Experienced CAs and tax professionals',
              'Accurate filing with zero errors',
              'Maximum legitimate tax savings',
              'Quick turnaround — same day filing available',
              'Assistance with tax notices and scrutiny',
              'Year-round tax planning advisory',
              'Affordable pricing, no hidden charges',
              'Secure data handling and confidentiality',
            ].map((pt) => (
              <div key={pt} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#7c3a00] to-[#c45c1a] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Don't Miss the Filing Deadline!</h2>
          <p className="text-orange-100 mb-8">Get your taxes filed accurately and on time. Contact us now for a free consultation.</p>
          <Button asChild className="bg-white text-[#7c3a00] hover:bg-gray-100 rounded-full px-8 py-3 font-bold">
            <Link href="/contact">Get Started <ArrowRight className="w-4 h-4 ml-1 inline" /></Link>
          </Button>
        </div>
      </section>

    </div>
  )
}
