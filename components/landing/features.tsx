const features = [
  {
    title: "Smart Habit Tracking",
    description: "Log habits in seconds. Our intuitive interface gets out of your way so you can focus on building.",
    icon: "📊",
  },
  {
    title: "Visual Streak Counter",
    description:
      "Never miss a day. See your progress with bold, satisfying streak counters that motivate you to keep going.",
    icon: "🔥",
  },
  {
    title: "Data Insights",
    description:
      "Understand your patterns. Beautiful charts and analytics show you what's working and what needs adjustment.",
    icon: "📈",
  },
  {
    title: "Accountability Partners",
    description: "Share your journey. Connect with friends and keep each other accountable to your goals.",
    icon: "👥",
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-background border-b-2 border-foreground">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-mono font-bold tracking-tight">Built for Real Change</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Haru combines brutal simplicity with powerful features to help you build habits that stick.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="border-2 border-foreground p-8 bg-card hover:bg-secondary/5 transition-colors">
              <div className="flex gap-4 mb-4">
                <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                <div className="flex-1">
                  <h3 className="font-mono font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
