'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X, BarChart2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
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
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/sam-logo.webp"
            alt="SAM Investments"
            style={{ height: '44px', width: 'auto', objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop Nav — centred */}
        <nav className="hidden lg:flex items-center gap-7 text-[14.5px] font-medium text-gray-600 flex-1 justify-center">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-1 hover:text-[#0b4c8c] transition-colors whitespace-nowrap ${
                isActive(link.href)
                  ? 'text-[#0b4c8c] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0b4c8c] after:rounded-full'
                  : ''
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Investor Zone Dropdown */}
          <div className="relative group py-1 cursor-pointer">
            <span
              className={`flex items-center gap-1 hover:text-[#0b4c8c] transition-colors whitespace-nowrap ${
                investorLinks.some(l => isActive(l.href)) ? 'text-[#0b4c8c] font-semibold' : ''
              }`}
            >
              Investor Zone
              <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
            </span>
            <div className="absolute left-0 top-full mt-2 w-56 rounded-xl bg-white shadow-xl border border-gray-100 hidden group-hover:block p-1.5">
              {investorLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-2.5 text-sm rounded-lg hover:bg-blue-50 hover:text-[#0b4c8c] transition-colors ${
                    isActive(link.href) ? 'bg-blue-50 text-[#0b4c8c] font-semibold' : 'text-gray-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className={`relative py-1 hover:text-[#0b4c8c] transition-colors whitespace-nowrap ${
              isActive('/contact')
                ? 'text-[#0b4c8c] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0b4c8c] after:rounded-full'
                : ''
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Right — Action Buttons */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">

          {/* Invest Now — icon only button linking to WealthSys */}
          <a
            href="https://saminvestment.wealthsys.app/login"
            target="_blank"
            rel="noopener noreferrer"
            title="Invest via WealthSys"
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0b4c8c] hover:bg-[#0a3d74] text-white transition-all"
          >
            <BarChart2 className="w-4 h-4" />
          </a>

          {/* Portfolio Login */}
          <Button
            asChild
            className="bg-[#2d9d43] text-white hover:bg-[#258537] rounded-lg px-5 h-9 text-sm font-semibold shadow-sm"
          >
            <a href="https://beta.my-planner.in/login" target="_blank" rel="noopener noreferrer">
              Portfolio Login
            </a>
          </Button>
        </div>

        {/* Mobile Hamburger */}
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
        <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-5 flex flex-col gap-1 shadow-lg">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-2.5 text-sm font-medium rounded-lg px-3 ${
                isActive(link.href)
                  ? 'bg-blue-50 text-[#0b4c8c] font-semibold'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-[#0b4c8c]'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <button
            className="py-2.5 px-3 text-sm font-medium text-gray-700 text-left flex items-center gap-1 hover:bg-gray-50 rounded-lg"
            onClick={() => setInvestorOpen(!investorOpen)}
          >
            Investor Zone
            <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${investorOpen ? 'rotate-180' : ''}`} />
          </button>
          {investorOpen && (
            <div className="pl-4 flex flex-col gap-1">
              {investorLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-2 px-3 text-sm text-gray-600 hover:text-[#0b4c8c] hover:bg-gray-50 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <Link
            href="/contact"
            className={`py-2.5 px-3 text-sm font-medium rounded-lg ${
              isActive('/contact')
                ? 'bg-blue-50 text-[#0b4c8c] font-semibold'
                : 'text-gray-700 hover:bg-gray-50 hover:text-[#0b4c8c]'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>

          <div className="pt-3 mt-2 border-t border-gray-100 flex flex-col gap-2">
            <a
              href="https://saminvestment.wealthsys.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2.5 px-3 text-sm font-medium text-[#0b4c8c] border border-[#0b4c8c]/20 bg-[#0b4c8c]/5 rounded-lg hover:bg-[#0b4c8c]/10 transition-colors"
            >
              <BarChart2 className="w-4 h-4" />
              Invest via WealthSys
            </a>
            <Button asChild className="bg-[#2d9d43] text-white hover:bg-[#258537] rounded-lg w-full h-10 text-sm font-semibold">
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
