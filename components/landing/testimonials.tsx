const testimonials = [
  {
    quote: "Haru transformed how I approach my daily routine. The simplicity is exactly what I needed.",
    author: "Sarah Chen",
    role: "Entrepreneur",
  },
  {
    quote: "I've tried 5+ habit trackers. Haru is the first one that actually stuck with me for more than a month.",
    author: "Marcus Johnson",
    role: "Designer",
  },
  {
    quote: "The streaks feature is addictive in the best way. I haven't missed a day in 143 days!",
    author: "Alex Rivera",
    role: "Software Engineer",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-muted border-b-2 border-foreground">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-mono font-bold tracking-tight">Loved by Habit Builders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Don't just take our word for it. Here's what real users say about Haru.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border-2 border-foreground bg-background p-8 flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="font-mono text-sm italic mb-6 flex-1">"{testimonial.quote}"</p>
              <div className="border-t-2 border-foreground pt-4">
                <p className="font-mono font-bold text-sm">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
