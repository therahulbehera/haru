"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#pricing", label: "Pricing" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background border-b-2 border-foreground">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary border-2 border-foreground flex items-center justify-center">
            <span className="font-mono font-bold text-sm text-primary-foreground">春</span>
          </div>
          <span className="font-mono font-bold text-xl tracking-wider">HARU</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm font-bold border-b-2 border-transparent hover:border-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button
            className="hidden md:inline-flex font-mono font-bold border-2 border-primary bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            size="sm"
          >
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden border-2 border-foreground p-2">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t-2 border-foreground bg-muted">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-sm font-bold py-2 border-b border-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button
              className="w-full font-mono font-bold border-2 border-primary bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              size="sm"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
