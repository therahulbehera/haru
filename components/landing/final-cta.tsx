import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="bg-primary border-b-2 border-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 text-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-mono font-bold tracking-tight text-balance">
            Ready to Spring Into Better Habits?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Join thousands of people building habits that matter. Start your free trial today, no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button className="font-mono font-bold border-2 border-primary-foreground bg-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-base">
              Get Started Free
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button
              variant="outline"
              className="font-mono font-bold border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 text-base bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
