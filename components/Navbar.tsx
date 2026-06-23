'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products & Services', href: '/services' },
]

const investorLinks = [
  { label: 'Financial Calculators', href: '/investor-zone/calculators' },
  { label: 'Market Updates', href: '/investor-zone/market-updates' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [investorOpen, setInvestorOpen] = React.useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/sam-logo.webp"
            alt="SAM Investments"
            width={160}
            height={48}
            style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-700">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-[#0b4c8c] transition-colors ${isActive(link.href) ? 'text-[#0b4c8c] font-semibold border-b-2 border-[#0b4c8c] pb-0.5' : ''}`}
            >
              {link.label}
            </Link>
          ))}

          {/* Investor Zone Dropdown */}
          <div className="relative group cursor-pointer py-2">
            <span className={`flex items-center gap-1 hover:text-[#0b4c8c] transition-colors ${investorLinks.some(l => isActive(l.href)) ? 'text-[#0b4c8c] font-semibold' : ''}`}>
              Investor Zone <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
            </span>
            <div className="absolute left-0 top-full mt-1 w-60 rounded-xl bg-white shadow-xl border border-gray-100 hidden group-hover:block p-2">
              {investorLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-2.5 text-sm rounded-lg hover:bg-blue-50 hover:text-[#0b4c8c] transition-colors ${isActive(link.href) ? 'bg-blue-50 text-[#0b4c8c] font-semibold' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className={`hover:text-[#0b4c8c] transition-colors ${isActive('/contact') ? 'text-[#0b4c8c] font-semibold border-b-2 border-[#0b4c8c] pb-0.5' : ''}`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Action Buttons Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <Button asChild className="bg-[#2d9d43] text-white hover:bg-[#258537] rounded-[6px] px-5 py-2 text-sm font-semibold transition-all shadow-sm">
            <a href="https://beta.my-planner.in/login" target="_blank" rel="noopener noreferrer">
              Portfolio Login
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-3 shadow-lg">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-2 ${isActive(link.href) ? 'text-[#0b4c8c] font-semibold' : 'text-gray-700 hover:text-[#0b4c8c]'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <button
            className="py-2 text-gray-700 font-medium text-left flex items-center gap-1"
            onClick={() => setInvestorOpen(!investorOpen)}
          >
            Investor Zone <ChevronDown className={`w-4 h-4 transition-transform ${investorOpen ? 'rotate-180' : ''}`} />
          </button>
          {investorOpen && (
            <div className="pl-4 flex flex-col gap-2">
              {investorLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-[#0b4c8c]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <Link
            href="/contact"
            className={`py-2 ${isActive('/contact') ? 'text-[#0b4c8c] font-semibold' : 'text-gray-700 hover:text-[#0b4c8c]'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>

          <div className="pt-4 border-t border-gray-100">
            <Button asChild className="bg-[#2d9d43] text-white hover:bg-[#258537] rounded-[6px] w-full text-center">
              <a href="https://beta.my-planner.in/login" target="_blank" rel="noopener noreferrer">
                Portfolio Login
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
