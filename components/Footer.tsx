import Link from 'next/link'
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#0a2d5e] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/sam-logo.webp" alt="SAM Investments" style={{ height: '52px', width: 'auto', objectFit: 'contain', background: 'white', borderRadius: '8px', padding: '4px 8px' }} />
            <p className="text-sm text-blue-200 leading-relaxed mt-2">
              Empowering individuals & businesses with intelligent investment solutions, financial planning, and robust taxation expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-white text-base mb-1">Quick Links</h3>
            <Link href="/" className="text-sm text-blue-200 hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="text-sm text-blue-200 hover:text-white transition-colors">About Us</Link>
            <Link href="/services" className="text-sm text-blue-200 hover:text-white transition-colors">Products & Services</Link>
            <Link href="/contact" className="text-sm text-blue-200 hover:text-white transition-colors">Contact Us</Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white text-base mb-1">Contact Information</h3>
            <div className="flex flex-col gap-3 text-sm text-blue-200">
              <a href="tel:+919810141662" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#4da6ff] shrink-0" /> +91-9810141662
              </a>
              <a href="mailto:premansu2004@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#4da6ff] shrink-0" /> premansu2004@gmail.com
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#4da6ff] shrink-0 mt-0.5" />
                <span>410, A Block, Block A, Defence Colony,<br />New Delhi, Delhi 110024</span>
              </p>
            </div>
          </div>

          {/* Hours & CTA */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white text-base mb-1">Office Hours</h3>
            <p className="text-sm text-blue-200">Monday – Saturday<br />10:00 AM – 6:00 PM</p>
            <p className="text-sm text-blue-200">Sunday: Closed</p>
            <Button asChild className="mt-4 bg-[#2d9d43] text-white hover:bg-[#258537] rounded-full px-6 py-2 font-semibold shadow-md w-fit">
              <a href="https://beta.my-planner.in/login" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Portfolio Login <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-blue-800/50 gap-4">
          <p className="text-xs text-blue-300 text-center sm:text-left">
            © {new Date().getFullYear()} SAM Investments. All rights reserved. AMFI Registered Mutual Fund Distributor.
          </p>
          <div className="flex gap-4 text-xs text-blue-300">
            <span>SEBI Registered Investment Advisor</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
