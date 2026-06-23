import type { Metadata } from 'next'
import Link from 'next/link'
import { TrendingUp, CheckCircle2, ArrowRight, BarChart2, PiggyBank, Wallet } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Mutual Funds – SAM Investments',
  description: 'Invest in top-performing Mutual Funds with SAM Investments. SIP, lump sum, ELSS & more. AMFI registered distributor in Delhi.',
}

const fundTypes = [
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: 'Equity Funds',
    desc: 'High growth potential by investing in stocks. Ideal for long-term wealth creation (5+ years).',
    color: 'bg-blue-600',
    examples: ['Large Cap', 'Mid Cap', 'Small Cap', 'Multi Cap', 'Flexi Cap'],
  },
  {
    icon: <BarChart2 className="w-7 h-7" />,
    title: 'Debt Funds',
    desc: 'Stable returns through government bonds & corporate debt. Lower risk, suitable for short to medium term.',
    color: 'bg-green-600',
    examples: ['Liquid Funds', 'Short Duration', 'Corporate Bond', 'Gilt Funds'],
  },
  {
    icon: <Wallet className="w-7 h-7" />,
    title: 'Hybrid Funds',
    desc: 'A balanced mix of equity & debt for moderate risk & steady returns.',
    color: 'bg-purple-600',
    examples: ['Aggressive Hybrid', 'Balanced Advantage', 'Conservative Hybrid'],
  },
  {
    icon: <PiggyBank className="w-7 h-7" />,
    title: 'ELSS (Tax Saving)',
    desc: 'Save up to ₹1.5 lakh tax under Section 80C while earning equity-linked returns.',
    color: 'bg-orange-500',
    examples: ['3-year lock-in', '80C deduction', 'Equity exposure'],
  },
]

const steps = [
  { step: '01', title: 'Define Your Goals', desc: 'We start by understanding your financial goals, time horizon, and risk appetite.' },
  { step: '02', title: 'Get Recommendations', desc: 'Our experts curate a personalised fund basket aligned to your objectives.' },
  { step: '03', title: 'Start Investing', desc: 'Begin your SIP or lump-sum investment seamlessly online or offline.' },
  { step: '04', title: 'Track & Review', desc: 'We monitor your portfolio and rebalance as needed to keep you on track.' },
]

export default function MutualFundsPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0a2d5e] to-[#1a6bbf] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" /> AMFI Registered Distributor
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mutual Fund Investments</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
            Grow your wealth systematically with expert-curated mutual fund portfolios tailored to your life goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="bg-white text-[#0b4c8c] hover:bg-gray-100 rounded-full px-7 py-3 font-bold">
              <a href="https://beta.my-planner.in/login" target="_blank" rel="noopener noreferrer">Start Investing Now</a>
            </Button>
            <Button asChild className="border-2 border-white text-white hover:bg-white/10 rounded-full px-7 py-3 font-bold bg-transparent">
              <Link href="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Mutual Funds */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Why Invest in Mutual Funds?</h2>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {['Professional Management', 'Diversification', 'Liquidity', 'Affordable SIPs', 'Tax Benefits', 'Transparent'].map((pt) => (
            <div key={pt} className="bg-white rounded-xl p-4 text-center shadow-sm border border-blue-100">
              <CheckCircle2 className="w-5 h-5 text-[#2d9d43] mx-auto mb-2" />
              <p className="text-xs font-semibold text-gray-700">{pt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fund Types */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Mutual Funds We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose from a wide range of fund categories based on your risk profile and goals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fundTypes.map((f) => (
              <div key={f.title} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 ${f.color} text-white rounded-xl flex items-center justify-center mb-5`}>
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{f.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {f.examples.map((ex) => (
                    <span key={ex} className="bg-gray-100 text-gray-600 text-xs rounded-full px-3 py-1">{ex}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600">Start your mutual fund journey in 4 simple steps.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-[#0b4c8c] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">{s.step}</div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#0b4c8c] to-[#1a6bbf] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Grow Your Wealth?</h2>
          <p className="text-blue-100 mb-8">Get a free portfolio consultation and start your mutual fund investment today.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="bg-white text-[#0b4c8c] hover:bg-gray-100 rounded-full px-8 py-3 font-bold">
              <a href="https://beta.my-planner.in/login" target="_blank" rel="noopener noreferrer">Invest Online</a>
            </Button>
            <Button asChild className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-3 font-bold bg-transparent">
              <Link href="/contact">Contact Us <ArrowRight className="w-4 h-4 ml-1 inline" /></Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
