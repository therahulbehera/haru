"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    prices: {
      monthly: "Free",
      annual: "Free",
    },
    description: "Perfect for getting started",
    features: [
      "Up to 5 habits",
      "Basic streak tracking",
      "Mobile app access",
      "Community support",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    prices: {
      monthly: "₹179",
      annual: "₹1799",
    },
    description: "For serious habit builders",
    features: [
      "Unlimited habits",
      "Advanced analytics",
      "Accountability partners",
      "Priority support",
      "Custom goals & reminders",
      "Export your data",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Family",
    prices: {
      monthly: "₹719",
      annual: "₹5,999",
    },
    description: "Build habits together",
    features: [
      "Everything in Pro",
      "Team workspace",
      "Group challenges",
      "Admin dashboard",
      "Team analytics",
      "24/7 premium support",
    ],
    cta: "Contact Sales",
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section
      id="pricing"
      className="bg-background border-b-2 border-foreground"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-mono font-bold tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Choose the plan that fits your habit-building journey. Upgrade
            anytime.
          </p>
        </div>

        <div className="flex gap-2 mb-12 justify-center">
          <Button
            variant={billing === "monthly" ? "default" : "outline"}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </Button>
          <Button
            variant={billing === "annual" ? "default" : "outline"}
            onClick={() => setBilling("annual")}
          >
            Annual (Save ~2 months)
          </Button>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border-2 border-foreground p-8 flex flex-col transition-transform hover:scale-105 ${
                plan.highlighted
                  ? "bg-primary md:scale-105 md:-translate-y-4"
                  : "bg-card"
              }`}
            >
              {plan.highlighted && (
                <div className="font-mono font-bold text-xs mb-2 inline-block w-fit bg-secondary text-foreground px-3 py-1 border border-foreground">
                  MOST POPULAR
                </div>
              )}

              <h3
                className={`font-mono font-bold text-2xl mb-2 ${
                  plan.highlighted ? "text-primary-foreground" : ""
                }`}
              >
                {plan.name}
              </h3>

              <div
                className={`mb-4 ${
                  plan.highlighted ? "text-primary-foreground" : ""
                }`}
              >
                <span className="font-mono font-bold text-3xl">
                  {plan.prices[billing]}
                </span>
                {plan.prices[billing] !== "Free" && (
                  <span className="text-sm">
                    {billing === "monthly" ? "/month" : "/year"}
                  </span>
                )}
              </div>

              <p
                className={`text-sm mb-6 ${
                  plan.highlighted
                    ? "text-primary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {plan.description}
              </p>

              <Button
                className={`w-full font-mono font-bold border-2 mb-8 ${
                  plan.highlighted
                    ? "border-primary-foreground bg-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground"
                    : "border-primary bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                }`}
              >
                {plan.cta}
              </Button>

              <div
                className={`space-y-3 flex-1 ${
                  plan.highlighted ? "text-primary-foreground" : ""
                }`}
              >
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex gap-3 items-start text-sm"
                  >
                    <Check size={18} className="flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
