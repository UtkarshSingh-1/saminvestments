import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo and Company Name */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7OMo8tSV8wGnPtIbMa2gwZXrR0pBBZ.png"
              alt="SamInvestments Logo"
              className="w-10 h-10"
            />
            <span className="text-xl font-semibold text-primary">SamInvestments</span>
          </Link>

          {/* Portal Login Button */}
          <Button
            asChild
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-white rounded-full px-6 py-2"
          >
            <a href="https://beta.my-planner.in/login" target="_blank" rel="noopener noreferrer">
              Portal Login
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7OMo8tSV8wGnPtIbMa2gwZXrR0pBBZ.png"
              alt="SamInvestments"
              className="w-24 h-24 mx-auto mb-6"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Coming Soon
          </h1>

          <p className="text-lg md:text-xl text-neutral mb-8 leading-relaxed">
            We&apos;re preparing something exceptional. SamInvestments is building the future of investment growth and wealth management. Stay tuned for the official launch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-accent"
              asChild
            >
              <a href="https://beta.my-planner.in/login" target="_blank" rel="noopener noreferrer">
                Access Portal
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Learn More
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">SamInvestments</h3>
              <p className="text-neutral text-sm">
                Empowering individuals and businesses with intelligent investment solutions for sustainable wealth growth.
              </p>
            </div>

            {/* Address */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Office Address</h3>
              <p className="text-neutral text-sm leading-relaxed">
                A 410, Ground Floor, Right Side Entry<br />
                Defence Colony<br />
                New Delhi - 110024
              </p>
            </div>
          </div>

          {/* Partner Login Button */}
          <div className="flex justify-center pt-8 border-t border-border">
            <Button
              asChild
              className="bg-primary text-white hover:bg-accent rounded-full px-8 py-2 font-semibold"
            >
              <a href="https://beta.my-planner.in/login" target="_blank" rel="noopener noreferrer">
                Login Portal
              </a>
            </Button>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-6 border-t border-border">
            <p className="text-neutral text-xs">
              &copy; 2026 SamInvestments. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
