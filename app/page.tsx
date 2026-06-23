'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  Laptop,
  Handshake,
  ExternalLink,
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)] bg-gradient-to-b from-[#d2e4f9] via-[#e8f1fc] to-white text-gray-800 font-sans">

      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-24 md:py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Text Column */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
            <span className="text-[#b85c37] block sm:inline">Goal Based</span> Investments
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            We encourage our clients to determine their life goals and start investing accordingly.
          </p>
        </div>

        {/* Right Illustration Column */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-lg aspect-square lg:aspect-auto flex items-center justify-center">
            <img
              src="/hero.png"
              alt="Goal Based Investments"
              className="w-full h-auto max-w-lg mx-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Info & Features Card */}
      <section className="relative z-10 px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto bg-white rounded-[24px] shadow-xl border border-gray-100 p-8 md:p-10 lg:p-12 -mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-12 md:divide-x divide-gray-100">

            {/* Feature 1: Portfolio Login */}
            <div className="flex flex-col items-center text-center px-4 md:first:pl-0">
              <div className="w-14 h-14 bg-blue-50 text-[#0b4c8c] rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Portfolio Login</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Check your investment, scheme wise, folio wise, and get real-time tracking performance.
              </p>
              <a
                href="https://beta.my-planner.in/login"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-sm font-semibold text-[#0b4c8c] hover:text-[#0f5ca8] flex items-center gap-1 group"
              >
                Access Portfolio <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Feature 2: Invest Online */}
            <div className="flex flex-col items-center text-center px-4 md:px-6">
              <div className="w-14 h-14 bg-blue-50 text-[#0b4c8c] rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                <Laptop className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Invest Online</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Now invest 24×7 in the top-performing mutual fund schemes with secure transaction portals.
              </p>
              <a
                href="https://beta.my-planner.in/login"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-sm font-semibold text-[#0b4c8c] hover:text-[#0f5ca8] flex items-center gap-1 group"
              >
                Invest Now <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Feature 3: Schedule a Meeting */}
            <div className="flex flex-col items-center text-center px-4 md:last:pr-0">
              <div className="w-14 h-14 bg-blue-50 text-[#0b4c8c] rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                <Handshake className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Schedule a Meeting</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Easily schedule an online meeting with our investment and taxation experts for customized plans.
              </p>
              <Link
                href="/contact"
                className="mt-auto text-sm font-semibold text-[#0b4c8c] hover:text-[#0f5ca8] flex items-center gap-1 group"
              >
                Book Meeting <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
