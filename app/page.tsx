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
  <svg
    viewBox="0 0 500 400"
    className="w-full h-auto max-w-lg mx-auto"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Decorative Background Elements */}
    <circle cx="100" cy="100" r="80" fill="url(#blue-grad-soft)" />
    <circle cx="400" cy="300" r="90" fill="url(#green-grad-soft)" />
    
    {/* Grid Background pattern */}
    <defs>
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
      </pattern>
      <linearGradient id="blue-grad-soft" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#93c5fd" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="green-grad-soft" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#10b981" stopOpacity="0.06" />
        <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect width="500" height="400" fill="url(#grid)" opacity="0.3" rx="16" />

    {/* Financial Graph / Wave Lines in background */}
    <path
      d="M 50 300 Q 150 180 250 250 T 450 120"
      stroke="#3b82f6"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.5"
    />
    <path
      d="M 50 320 Q 150 220 250 280 T 450 160"
      stroke="#10b981"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.3"
      strokeDasharray="4 4"
    />
    
    {/* Chart Dots */}
    <circle cx="250" cy="250" r="6" fill="#3b82f6" stroke="white" strokeWidth="2" />
    <circle cx="450" cy="120" r="6" fill="#10b981" stroke="white" strokeWidth="2" />
    <circle cx="150" cy="215" r="4" fill="#3b82f6" opacity="0.7" />

    {/* Floating Dashboard Card 1 (Top Left) */}
    <g transform="translate(40, 60)">
      <rect
        width="130"
        height="65"
        rx="10"
        fill="white"
        filter="drop-shadow(0 4px 12px rgba(0, 0, 0, 0.05))"
        stroke="#e2e8f0"
        strokeWidth="1"
      />
      <circle cx="28" cy="32" r="14" fill="#dbeafe" />
      <path
        d="M 23 32 L 27 36 L 33 30"
        stroke="#2563eb"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="50" y="30" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#1e293b">
        Life Goals
      </text>
      <text x="50" y="44" fontFamily="sans-serif" fontSize="9" fill="#64748b">
        100% Planned
      </text>
    </g>

    {/* Floating Dashboard Card 2 (Bottom Right) */}
    <g transform="translate(320, 250)">
      <rect
        width="140"
        height="85"
        rx="10"
        fill="white"
        filter="drop-shadow(0 4px 12px rgba(0, 0, 0, 0.05))"
        stroke="#e2e8f0"
        strokeWidth="1"
      />
      <text x="16" y="24" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#1e293b">
        Growth Target
      </text>
      <rect x="16" y="34" width="108" height="6" rx="3" fill="#e2e8f0" />
      <rect x="16" y="34" width="85" height="6" rx="3" fill="#10b981" />
      <text x="16" y="64" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill="#10b981">
        +24.8%
      </text>
      <text x="85" y="64" fontFamily="sans-serif" fontSize="9" fill="#64748b">
        Annualized
      </text>
    </g>

    {/* Main Character Illustration */}
    <g transform="translate(160, 80)">
      {/* Advisor Body */}
      <path
        d="M 80 180 C 80 140 100 120 120 120 C 140 120 160 140 160 180"
        fill="#eff6ff"
        stroke="#1e3a8a"
        strokeWidth="2.5"
      />
      
      {/* Shirt Collar */}
      <path d="M 110 120 L 120 135 L 130 120" fill="white" stroke="#1e3a8a" strokeWidth="2" />
      
      {/* Tie */}
      <path d="M 120 135 L 117 175 L 120 180 L 123 175 Z" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="1.5" />

      {/* Head */}
      <circle cx="120" cy="85" r="22" fill="#fff" stroke="#1e3a8a" strokeWidth="2.5" />
      
      {/* Hair (Blue Stylized) */}
      <path
        d="M 98 85 C 98 70 110 60 125 60 C 138 60 144 72 142 85 C 135 78 128 78 120 83 C 112 78 105 78 98 85 Z"
        fill="#3b82f6"
        stroke="#1e3a8a"
        strokeWidth="2"
      />
      
      {/* Face details */}
      <circle cx="113" cy="83" r="1.5" fill="#1e3a8a" />
      <circle cx="127" cy="83" r="1.5" fill="#1e3a8a" />
      {/* Smile */}
      <path d="M 116 93 Q 120 97 124 93" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Arms & Hands gesturing */}
      {/* Left arm holding folder */}
      <path d="M 95 140 Q 75 160 90 190" stroke="#1e3a8a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Folder */}
      <rect
        x="55"
        y="160"
        width="30"
        height="25"
        rx="3"
        fill="#3b82f6"
        stroke="#1e3a8a"
        strokeWidth="2"
        transform="rotate(-10 70 172)"
      />
      
      {/* Right arm pointing up */}
      <path d="M 148 135 Q 165 105 160 85" stroke="#1e3a8a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Hand pointing */}
      <circle cx="160" cy="80" r="5" fill="#fff" stroke="#1e3a8a" strokeWidth="2" />
      <path d="M 160 76 L 160 70" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" />
    </g>

    {/* Floating Clouds */}
    <g fill="#fff" stroke="#cbd5e1" strokeWidth="1.5" opacity="0.8">
      <path d="M 380 60 A 15 15 0 0 1 405 50 A 20 20 0 0 1 435 60 A 15 15 0 0 1 425 80 L 390 80 A 15 15 0 0 1 380 60 Z" />
      <path d="M 60 220 A 10 10 0 0 1 77 213 A 15 15 0 0 1 97 220 L 67 220 Z" opacity="0.6" />
    </g>
  </svg>
)

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 font-sans">
      
      {/* Sticky Premium Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
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
            <Link href="#signup" className="hover:text-[#0b4c8c] transition-colors">
              Sign Up
            </Link>
          </nav>

          {/* Action Buttons for Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              asChild
              variant="outline"
              className="border-gray-800 text-gray-800 hover:bg-gray-50 rounded-[6px] px-5 py-2 text-sm font-semibold transition-all"
            >
              <a href="https://beta.my-planner.in/login" target="_blank" rel="noopener noreferrer">
                Portfolio Login
              </a>
            </Button>
            <Button
              asChild
              className="bg-[#2d9d43] text-white hover:bg-[#258537] rounded-[6px] px-5 py-2 text-sm font-semibold transition-all shadow-sm"
            >
              <a href="https://beta.my-planner.in/login" target="_blank" rel="noopener noreferrer">
                IFA Login
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
                variant="outline"
                className="border-gray-800 text-gray-800 hover:bg-gray-50 rounded-[6px] w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <a href="https://beta.my-planner.in/login" target="_blank" rel="noopener noreferrer">
                  Portfolio Login
                </a>
              </Button>
              <Button
                asChild
                className="bg-[#2d9d43] text-white hover:bg-[#258537] rounded-[6px] w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <a href="https://beta.my-planner.in/login" target="_blank" rel="noopener noreferrer">
                  IFA Login
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Main Container */}
      <main className="flex-1 flex flex-col bg-gradient-to-b from-[#e3effd]/30 via-[#f5f9ff]/20 to-white">
        
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
