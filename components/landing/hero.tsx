import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative bg-background border-b-2 border-foreground overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-mono font-bold tracking-tight text-balance">
                Spring into better habits
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Transform your life with Haru. Track habits, visualize progress, and build lasting change with our
                beautifully brutal habit tracker.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="font-mono font-bold border-2 border-primary bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary px-6 py-3 text-base">
                Start Free Trial
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button
                variant="outline"
                className="font-mono font-bold border-2 border-foreground hover:bg-muted px-6 py-3 text-base bg-transparent"
              >
                View Demo
              </Button>
            </div>

            <p className="text-xs md:text-sm font-mono text-muted-foreground pt-4">
              ✓ No credit card required • Free forever plan • 14-day premium trial
            </p>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 border-2 border-foreground bg-secondary/10 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary border-2 border-foreground"></div>
                <p className="font-mono text-sm font-bold">App Preview Coming Soon</p>
                <div className="w-full h-32 bg-muted border-2 border-foreground border-dashed"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
