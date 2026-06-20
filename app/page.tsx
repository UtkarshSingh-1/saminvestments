'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  ChevronDown,
  ShieldCheck,
  Laptop,
  Handshake,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const HeroIllustration = () => (
  <img
    src="/hero.png"
    alt="Goal Based Investments"
    className="w-full h-auto max-w-lg mx-auto object-contain"
  />
)

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#d2e4f9] via-[#e8f1fc] to-white text-gray-800 font-sans">
      
      {/* Sticky Premium Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          
          {/* Logo and Brand Name */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="SAM Investments"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Navigation Links for Desktop */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-700">
            <Link href="/" className="text-[#0b4c8c] font-semibold hover:text-[#0f5ca8] transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-[#0b4c8c] transition-colors">
              About Us
            </Link>
            
            {/* Products & Services Dropdown */}
            <div className="relative group cursor-pointer py-2">
              <span className="flex items-center gap-1 hover:text-[#0b4c8c] transition-colors">
                Products & Services <ChevronDown className="w-4 h-4" />
              </span>
              <div className="absolute left-0 mt-2 w-56 rounded-xl bg-white shadow-xl border border-gray-100 hidden group-hover:block transition-all duration-300 p-2">
                <Link href="#mutual-funds" className="block px-4 py-2 text-sm rounded-lg hover:bg-slate-50 hover:text-[#0b4c8c]">
                  Mutual Funds
                </Link>
                <Link href="#tax-planning" className="block px-4 py-2 text-sm rounded-lg hover:bg-slate-50 hover:text-[#0b4c8c]">
                  Tax Planning &amp; ITR
                </Link>
                <Link href="#insurance" className="block px-4 py-2 text-sm rounded-lg hover:bg-slate-50 hover:text-[#0b4c8c]">
                  Life &amp; Health Insurance
                </Link>
              </div>
            </div>

            {/* Investor Zone Dropdown */}
            <div className="relative group cursor-pointer py-2">
              <span className="flex items-center gap-1 hover:text-[#0b4c8c] transition-colors">
                Investor Zone <ChevronDown className="w-4 h-4" />
              </span>
              <div className="absolute left-0 mt-2 w-56 rounded-xl bg-white shadow-xl border border-gray-100 hidden group-hover:block transition-all duration-300 p-2">
                <Link href="#calculators" className="block px-4 py-2 text-sm rounded-lg hover:bg-slate-50 hover:text-[#0b4c8c]">
                  Financial Calculators
                </Link>
                <Link href="#market-updates" className="block px-4 py-2 text-sm rounded-lg hover:bg-slate-50 hover:text-[#0b4c8c]">
                  Market Updates
                </Link>
              </div>
            </div>

            <Link href="#contact" className="hover:text-[#0b4c8c] transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* Action Buttons for Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              asChild
              className="bg-[#2d9d43] text-white hover:bg-[#258537] rounded-[6px] px-5 py-2 text-sm font-semibold transition-all shadow-sm"
            >
              <a href="https://beta.my-planner.in/login" target="_blank" rel="noopener noreferrer">
                Portfolio Login
              </a>
            </Button>
          </div>

          {/* Mobile Menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4 shadow-lg animate-in fade-in slide-in-from-top-5 duration-200">
            <Link href="/" className="py-2 text-[#0b4c8c] font-semibold" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="#about" className="py-2 text-gray-700 hover:text-[#0b4c8c]" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>
            <div className="py-2 text-gray-700 font-medium">Products &amp; Services</div>
            <div className="pl-4 flex flex-col gap-2">
              <Link href="#mutual-funds" className="text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>Mutual Funds</Link>
              <Link href="#tax-planning" className="text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>Tax Planning &amp; ITR</Link>
              <Link href="#insurance" className="text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>Life &amp; Health Insurance</Link>
            </div>
            <Link href="#contact" className="py-2 text-gray-700 hover:text-[#0b4c8c]" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </Link>
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
              <Button
                asChild
                className="bg-[#2d9d43] text-white hover:bg-[#258537] rounded-[6px] w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <a href="https://beta.my-planner.in/login" target="_blank" rel="noopener noreferrer">
                  Portfolio Login
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Main Container */}
      <main className="flex-1 flex flex-col">
        
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
              <HeroIllustration />
            </div>
          </div>
        </section>

        {/* Overlapping Info & Features Card Overlay */}
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
                <Link
                  href="https://beta.my-planner.in/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-sm font-semibold text-[#0b4c8c] hover:text-[#0f5ca8] flex items-center gap-1 group"
                >
                  Access Portfolio <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* Feature 2: Invest Online */}
              <div className="flex flex-col items-center text-center px-4 md:px-6">
                <div className="w-14 h-14 bg-blue-50 text-[#0b4c8c] rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  <Laptop className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Invest Online</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Now invest 24*7 in the top-performing mutual fund schemes with secure transaction portals.
                </p>
                <Link
                  href="https://beta.my-planner.in/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-sm font-semibold text-[#0b4c8c] hover:text-[#0f5ca8] flex items-center gap-1 group"
                >
                  Invest Now <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
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
                  href="mailto:sam.investments01@gmail.com"
                  className="mt-auto text-sm font-semibold text-[#0b4c8c] hover:text-[#0f5ca8] flex items-center gap-1 group"
                >
                  Book Meeting <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* Styled Footer */}
      <footer id="contact" className="border-t border-gray-100 bg-slate-50 text-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            
            {/* Column 1: Brand Info */}
            <div className="flex flex-col gap-4">
              <img
                src="/logo.svg"
                alt="SAM Investments"
                className="h-12 w-auto self-start object-contain"
              />
              <p className="text-sm text-gray-500 leading-relaxed mt-2">
                Empowering individuals and businesses with intelligent investment solutions, financial planning, and robust taxation expertise.
              </p>
            </div>

            {/* Column 2: Contact Info */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-[#0b4c8c] text-lg">Contact Information</h3>
              <div className="flex flex-col gap-3 text-sm text-gray-600">
                <a href="tel:+919811166666" className="flex items-center gap-2 hover:text-[#0b4c8c]">
                  <Phone className="w-4 h-4 text-[#0b4c8c]" /> +91-9810141662
                </a>
                <a href="mailto:sam.investments01@gmail.com" className="flex items-center gap-2 hover:text-[#0b4c8c]">
                  <Mail className="w-4 h-4 text-[#0b4c8c]" /> sam.investments01@gmail.com
                </a>
              </div>
            </div>

            {/* Column 3: Office Address */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-[#0b4c8c] text-lg">Office Address</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#0b4c8c] shrink-0 mt-0.5" />
                <span>
                  A 410, Ground Floor, Right Side Entry<br />
                  Defence Colony<br />
                  New Delhi - 110024
                </span>
              </p>
            </div>

          </div>

          {/* Footer Bottom Login and Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-200 gap-6">
            
            {/* Centered Portfolio Login Button */}
            <Button
              asChild
              className="bg-[#0b4c8c] text-white hover:bg-[#0f5ca8] rounded-full px-8 py-2 font-semibold shadow-md"
            >
              <a href="https://beta.my-planner.in/login" target="_blank" rel="noopener noreferrer">
                Portfolio Login
              </a>
            </Button>

            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} SamInvestments. All rights reserved. Registered Investment Distributor.
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}
