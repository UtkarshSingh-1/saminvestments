import type { Metadata } from 'next'
import { TrendingUp, TrendingDown, Minus, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Market Updates – SAM Investments',
  description: 'Stay updated with the latest market news, index performance, and investment insights from SAM Investments.',
}

const indices = [
  { name: 'NIFTY 50', value: '24,853.15', change: '+142.30', pct: '+0.58%', up: true },
  { name: 'SENSEX', value: '81,732.40', change: '+456.72', pct: '+0.56%', up: true },
  { name: 'NIFTY BANK', value: '53,210.85', change: '-125.40', pct: '-0.24%', up: false },
  { name: 'NIFTY MIDCAP 100', value: '57,432.60', change: '+210.50', pct: '+0.37%', up: true },
  { name: 'NIFTY SMALLCAP 100', value: '18,762.30', change: '+85.20', pct: '+0.46%', up: true },
  { name: 'INDIA VIX', value: '13.42', change: '-0.28', pct: '-2.04%', up: false },
]

const news = [
  {
    date: 'June 23, 2025',
    headline: 'RBI Holds Repo Rate at 6.5% — EMI Relief Likely in Q3 2025',
    summary: 'The Reserve Bank of India maintained the repo rate for the third consecutive meeting, signalling a potential rate cut in the second half of 2025 if inflation remains within target.',
    tag: 'Monetary Policy',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    date: 'June 21, 2025',
    headline: 'SIP Inflows Touch Record ₹21,000 Crore in May 2025',
    summary: 'Retail participation in mutual funds continues to rise with SIP inflows reaching an all-time high, reflecting growing investor confidence in equity markets.',
    tag: 'Mutual Funds',
    tagColor: 'bg-green-100 text-green-700',
  },
  {
    date: 'June 19, 2025',
    headline: 'SEBI Introduces New Regulations for Small & Midcap Funds',
    summary: 'The Securities and Exchange Board of India has proposed enhanced stress testing norms for small and midcap mutual funds to ensure better liquidity management.',
    tag: 'Regulation',
    tagColor: 'bg-orange-100 text-orange-700',
  },
  {
    date: 'June 17, 2025',
    headline: 'India GDP Growth Projected at 7.2% for FY 2025-26',
    summary: 'IMF raises India\'s growth forecast to 7.2%, making it the fastest-growing major economy globally. Strong domestic consumption and capex drive the upgrade.',
    tag: 'Economy',
    tagColor: 'bg-purple-100 text-purple-700',
  },
  {
    date: 'June 15, 2025',
    headline: 'Budget 2025: Key Tax Changes Impacting Investors',
    summary: 'The Union Budget introduced revised capital gains tax slabs and increased the LTCG exemption limit for equity mutual funds. Here\'s what it means for your portfolio.',
    tag: 'Budget',
    tagColor: 'bg-red-100 text-red-700',
  },
  {
    date: 'June 12, 2025',
    headline: 'NPS vs ELSS — Which is Better for Tax Saving in 2025?',
    summary: 'A detailed comparison of National Pension System (NPS) and Equity Linked Savings Scheme (ELSS) to help investors make the best tax-saving decision this financial year.',
    tag: 'Tax Planning',
    tagColor: 'bg-teal-100 text-teal-700',
  },
]

const insights = [
  { title: 'Start SIP Early', desc: 'A ₹5,000/month SIP started at age 25 grows to ₹3.2 Cr by age 60 at 12% returns vs ₹1.1 Cr if started at 35.', icon: '📈' },
  { title: 'Diversify Your Portfolio', desc: 'Spread investments across equity, debt & gold to reduce risk while maintaining return potential.', icon: '🎯' },
  { title: 'Review Annually', desc: 'Review and rebalance your portfolio at least once a year to stay aligned with your financial goals.', icon: '🔄' },
]

export default function MarketUpdatesPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0a2d5e] to-[#1a6bbf] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" /> Live Market Pulse
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Market Updates</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Stay informed with the latest market indices, financial news, and investment insights.
          </p>
        </div>
      </section>

      {/* Market Indices */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Market Snapshot</h2>
          <p className="text-xs text-gray-400 mb-4">* Indicative values. For live data, visit BSE/NSE website.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {indices.map((idx) => (
              <div key={idx.name} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="text-sm text-gray-500 mb-1">{idx.name}</div>
                <div className="text-xl font-bold text-gray-900 mb-1">{idx.value}</div>
                <div className={`flex items-center gap-1 text-sm font-semibold ${idx.up ? 'text-green-600' : 'text-red-500'}`}>
                  {idx.up ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  {idx.change} ({idx.pct})
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-3 flex-wrap">
            <a href="https://www.nseindia.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#0b4c8c] hover:underline flex items-center gap-1">
              NSE Live Data <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://www.bseindia.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#0b4c8c] hover:underline flex items-center gap-1">
              BSE Live Data <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Financial News */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Financial News</h2>
          <div className="flex flex-col gap-6">
            {news.map((article) => (
              <div key={article.headline} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${article.tagColor}`}>{article.tag}</span>
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{article.headline}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{article.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Insights */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Investment Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
