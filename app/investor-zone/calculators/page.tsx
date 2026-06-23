'use client'

import * as React from 'react'
import type { Metadata } from 'next'
import { Calculator, TrendingUp, PiggyBank, Home } from 'lucide-react'

// SIP Calculator
function SIPCalculator() {
  const [monthly, setMonthly] = React.useState(5000)
  const [rate, setRate] = React.useState(12)
  const [years, setYears] = React.useState(10)

  const months = years * 12
  const r = rate / 12 / 100
  const futureValue = monthly * ((Math.pow(1 + r, months) - 1) / r) * (1 + r)
  const invested = monthly * months
  const gains = futureValue - invested

  const fmt = (n: number) => '₹' + Math.round(n).toLocaleString('en-IN')

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center"><TrendingUp className="w-5 h-5" /></div>
        <h3 className="text-xl font-bold text-gray-900">SIP Calculator</h3>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Monthly Investment: <span className="text-[#0b4c8c] font-bold">{fmt(monthly)}</span></label>
          <input type="range" min="500" max="100000" step="500" value={monthly} onChange={e => setMonthly(+e.target.value)} className="w-full accent-[#0b4c8c]" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Expected Return: <span className="text-[#0b4c8c] font-bold">{rate}% p.a.</span></label>
          <input type="range" min="6" max="30" step="0.5" value={rate} onChange={e => setRate(+e.target.value)} className="w-full accent-[#0b4c8c]" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Time Period: <span className="text-[#0b4c8c] font-bold">{years} Years</span></label>
          <input type="range" min="1" max="40" step="1" value={years} onChange={e => setYears(+e.target.value)} className="w-full accent-[#0b4c8c]" />
        </div>
        <div className="bg-blue-50 rounded-xl p-5 grid grid-cols-3 gap-4 text-center mt-2">
          <div><div className="text-xs text-gray-500 mb-1">Invested Amount</div><div className="font-bold text-gray-900 text-sm">{fmt(invested)}</div></div>
          <div><div className="text-xs text-gray-500 mb-1">Est. Returns</div><div className="font-bold text-green-600 text-sm">{fmt(gains)}</div></div>
          <div><div className="text-xs text-gray-500 mb-1">Total Value</div><div className="font-bold text-[#0b4c8c] text-sm">{fmt(futureValue)}</div></div>
        </div>
      </div>
    </div>
  )
}

// Lump Sum Calculator
function LumpsumCalculator() {
  const [amount, setAmount] = React.useState(100000)
  const [rate, setRate] = React.useState(12)
  const [years, setYears] = React.useState(10)

  const futureValue = amount * Math.pow(1 + rate / 100, years)
  const gains = futureValue - amount
  const fmt = (n: number) => '₹' + Math.round(n).toLocaleString('en-IN')

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-orange-500 text-white rounded-xl flex items-center justify-center"><PiggyBank className="w-5 h-5" /></div>
        <h3 className="text-xl font-bold text-gray-900">Lump Sum Calculator</h3>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Investment Amount: <span className="text-orange-600 font-bold">{fmt(amount)}</span></label>
          <input type="range" min="10000" max="10000000" step="10000" value={amount} onChange={e => setAmount(+e.target.value)} className="w-full accent-orange-500" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Expected Return: <span className="text-orange-600 font-bold">{rate}% p.a.</span></label>
          <input type="range" min="6" max="30" step="0.5" value={rate} onChange={e => setRate(+e.target.value)} className="w-full accent-orange-500" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Time Period: <span className="text-orange-600 font-bold">{years} Years</span></label>
          <input type="range" min="1" max="40" step="1" value={years} onChange={e => setYears(+e.target.value)} className="w-full accent-orange-500" />
        </div>
        <div className="bg-orange-50 rounded-xl p-5 grid grid-cols-3 gap-4 text-center mt-2">
          <div><div className="text-xs text-gray-500 mb-1">Invested Amount</div><div className="font-bold text-gray-900 text-sm">{fmt(amount)}</div></div>
          <div><div className="text-xs text-gray-500 mb-1">Est. Returns</div><div className="font-bold text-green-600 text-sm">{fmt(gains)}</div></div>
          <div><div className="text-xs text-gray-500 mb-1">Total Value</div><div className="font-bold text-orange-600 text-sm">{fmt(futureValue)}</div></div>
        </div>
      </div>
    </div>
  )
}

// EMI Calculator
function EMICalculator() {
  const [loan, setLoan] = React.useState(2000000)
  const [rate, setRate] = React.useState(8.5)
  const [years, setYears] = React.useState(20)

  const months = years * 12
  const r = rate / 12 / 100
  const emi = (loan * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1)
  const totalPay = emi * months
  const interest = totalPay - loan
  const fmt = (n: number) => '₹' + Math.round(n).toLocaleString('en-IN')

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-green-600 text-white rounded-xl flex items-center justify-center"><Home className="w-5 h-5" /></div>
        <h3 className="text-xl font-bold text-gray-900">EMI / Loan Calculator</h3>
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Loan Amount: <span className="text-green-700 font-bold">{fmt(loan)}</span></label>
          <input type="range" min="100000" max="50000000" step="100000" value={loan} onChange={e => setLoan(+e.target.value)} className="w-full accent-green-600" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Interest Rate: <span className="text-green-700 font-bold">{rate}% p.a.</span></label>
          <input type="range" min="5" max="20" step="0.1" value={rate} onChange={e => setRate(+e.target.value)} className="w-full accent-green-600" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Loan Tenure: <span className="text-green-700 font-bold">{years} Years</span></label>
          <input type="range" min="1" max="30" step="1" value={years} onChange={e => setYears(+e.target.value)} className="w-full accent-green-600" />
        </div>
        <div className="bg-green-50 rounded-xl p-5 grid grid-cols-3 gap-4 text-center mt-2">
          <div><div className="text-xs text-gray-500 mb-1">Monthly EMI</div><div className="font-bold text-green-700 text-sm">{fmt(emi)}</div></div>
          <div><div className="text-xs text-gray-500 mb-1">Total Interest</div><div className="font-bold text-red-500 text-sm">{fmt(interest)}</div></div>
          <div><div className="text-xs text-gray-500 mb-1">Total Amount</div><div className="font-bold text-gray-900 text-sm">{fmt(totalPay)}</div></div>
        </div>
      </div>
    </div>
  )
}

export default function CalculatorsPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0a2d5e] to-[#1a6bbf] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" /> Investor Tools
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Financial Calculators</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Plan your investments, estimate returns, and make smarter financial decisions with our free calculators.
          </p>
        </div>
      </section>

      {/* Calculators */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SIPCalculator />
            <LumpsumCalculator />
          </div>
          <div className="mt-8 max-w-3xl mx-auto">
            <EMICalculator />
          </div>
          <p className="text-center text-xs text-gray-400 mt-8">
            * These calculators provide estimates for illustration purposes only. Actual returns may vary based on market conditions.
          </p>
        </div>
      </section>

    </div>
  )
}
