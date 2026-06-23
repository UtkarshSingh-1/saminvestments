import Link from 'next/link'
import { Phone, Mail, MapPin, ExternalLink, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#071e3d] text-white">

      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            {/* Logo on dark — show as text branding with colored accent */}
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold tracking-tight text-white">
                SAM <span className="text-[#4da6ff]">Investments</span>
              </span>
              <span className="text-xs font-medium text-blue-300 tracking-widest uppercase">
                Investments &amp; Taxation
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Helping individuals, families, and businesses build wealth, reduce tax liability, and stay protected — since 2008.
            </p>
            {/* Badges */}
            <div className="flex flex-col gap-2 mt-1">
              <span className="inline-flex items-center gap-1.5 text-xs text-blue-300 bg-blue-900/40 border border-blue-800/50 rounded-full px-3 py-1 w-fit">
                ✓ AMFI Registered Distributor
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-green-300 bg-green-900/30 border border-green-800/40 rounded-full px-3 py-1 w-fit">
                ✓ Est. 2008 · 15+ Years
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest">Quick Links</h3>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Products & Services', href: '/services' },
                { label: 'Financial Calculators', href: '/investor-zone/calculators' },
                { label: 'Market Updates', href: '/investor-zone/market-updates' },
                { label: 'Contact Us', href: '/contact' },
              ].map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:bg-white transition-colors shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest">Contact</h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+919810141662"
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 bg-blue-900/50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-700 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                </span>
                +91-9810141662
              </a>
              <a
                href="mailto:premansu2004@gmail.com"
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 bg-blue-900/50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-700 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                </span>
                premansu2004@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <span className="w-8 h-8 bg-blue-900/50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                </span>
                <span className="leading-relaxed">
                  410, A Block, Defence Colony,<br />New Delhi – 110024
                </span>
              </div>
            </div>
          </div>

          {/* Hours & CTA */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest">Office Hours</h3>
            <div className="flex items-start gap-3 text-sm text-slate-400">
              <span className="w-8 h-8 bg-blue-900/50 rounded-lg flex items-center justify-center shrink-0">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
              </span>
              <div>
                <p className="text-white font-medium mb-0.5">Mon – Sat</p>
                <p>10:00 AM – 6:00 PM</p>
                <p className="text-slate-500 mt-1">Sunday: Closed</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-2 mt-2">
              <a
                href="https://beta.my-planner.in/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#2d9d43] hover:bg-[#258537] text-white text-sm font-semibold rounded-lg px-4 py-2.5 transition-colors w-full"
              >
                Portfolio Login <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://saminvestment.wealthsys.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#0b4c8c] hover:bg-[#0f5ca8] text-white text-sm font-semibold rounded-lg px-4 py-2.5 transition-colors w-full"
              >
                Invest Online <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mx-6" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-slate-500 text-center sm:text-left">
          © {new Date().getFullYear()} SAM Investments. All rights reserved.
        </p>
        <p className="text-xs text-slate-500 text-center sm:text-right">
          AMFI Registered Mutual Fund Distributor · ARN Registered
        </p>
      </div>

    </footer>
  )
}
