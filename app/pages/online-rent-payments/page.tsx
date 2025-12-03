"use client";

import {
  BellAlertIcon,
  BanknotesIcon,
  CreditCardIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function OnlineRentPaymentsPage() {
  const heroLeft = useScrollAnimation();
  const heroRight = useScrollAnimation();
  const feature1 = useScrollAnimation();
  const feature2 = useScrollAnimation();
  const feature3 = useScrollAnimation();
  const apiSection = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.1fr]">
          {/* Left copy */}
          <div
            ref={heroLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 ${heroLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <span className="inline-flex rounded-full bg-indigo-400/10 px-4 py-1.5 text-xs font-semibold text-indigo-400">
              Online Rent Payments
            </span>
            <div>
              <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
                Make rent day
              </h1>
              <p className="mt-1 text-2xl font-semibold text-slate-900">
                simple for everyone.
              </p>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              Give tenants a fast, secure way to pay from anywhere—while you get
              clear reporting and predictable cash flow. No more chasing checks
              or waiting in bank lines.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Accept card, bank transfer, and mobile money payments</li>
              <li>• Automate reminders before and after due dates</li>
              <li>• See every payment status in one, simple dashboard</li>
            </ul>
          </div>

          {/* Right: payment activity card */}
          <div
            ref={heroRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`flex items-center justify-center ${heroRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.16)] ring-1 ring-slate-100">
              <header className="mb-4 flex items-baseline justify-between">
                <p className="text-sm font-semibold text-slate-900">
                  Today&apos;s Payments
                </p>
                <span className="text-xs text-emerald-500">₵ 4,800.00 collected</span>
              </header>
              <div className="space-y-3 text-sm text-slate-700">
                {[
                  {
                    name: "Kwame Boateng",
                    unit: "House No 40",
                    amount: "GHS 500.00",
                    status: "Processing",
                  },
                  {
                    name: "Abeni Lawson",
                    unit: "2‑Bedroom Apartment",
                    amount: "GHS 1,200.00",
                    status: "Paid",
                  },
                  {
                    name: "Daniel Mensah",
                    unit: "Studio",
                    amount: "GHS 800.00",
                    status: "Due in 3 days",
                  },
                ].map((payment) => (
                  <div
                    key={payment.name}
                    className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"
                  >
                    <div>
                      <p className="text-xs font-semibold text-slate-900">
                        {payment.name}
                      </p>
                      <p className="text-[11px] text-slate-500">{payment.unit}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-slate-900">
                        {payment.amount}
                      </p>
                      <p className="text-[11px] text-emerald-600">
                        {payment.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-8 rounded-3xl bg-white px-6 py-10 shadow-[0_24px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-100 lg:grid-cols-3">
          {[
            {
              icon: CreditCardIcon,
              title: "Multiple ways to pay",
              text: "Tenants can pay with card, bank transfer, or mobile wallet—whatever works best for them.",
              ref: feature1,
            },
            {
              icon: BellAlertIcon,
              title: "Automated reminders",
              text: "Send gentle nudges before and after due dates so payments don't slip through the cracks.",
              ref: feature2,
            },
            {
              icon: BanknotesIcon,
              title: "Instant clarity",
              text: "See who has paid, who is processing, and who is overdue in a single, real‑time view.",
              ref: feature3,
            },
          ].map((feature, idx) => (
            <div
              key={feature.title}
              ref={feature.ref.elementRef as React.RefObject<HTMLDivElement>}
              className={`space-y-3 ${feature.ref.isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-400">
                <feature.icon className="h-5 w-5" />
              </span>
              <p className="text-sm font-semibold text-slate-900">
                {feature.title}
              </p>
              <p className="text-sm text-slate-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* API tie-in section */}
      <section
        ref={apiSection.elementRef as React.RefObject<HTMLElement>}
        className={`mx-auto max-w-7xl px-6 pb-20 lg:px-8 ${apiSection.isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="grid gap-10 rounded-3xl bg-[#0f172a] px-6 py-8 text-sm text-slate-100 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Built to work with your existing systems.
            </h2>
            <p className="text-slate-200">
              Sync successful payments back to accounting and reporting tools
              using our integrations and webhooks. Rent data stays consistent
              everywhere without duplicate entry.
            </p>
          </div>
          <div className="space-y-3 rounded-2xl bg-slate-900/60 p-4 text-xs">
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              <ArrowPathIcon className="h-4 w-4" />
              Example webhook payload
            </p>
            <pre className="whitespace-pre-wrap font-mono text-[11px] text-slate-100">
              {`{
  "event": "payment.succeeded",
  "amount": 50,000.00,
  "currency": "GHS",
  "tenant": "Kwame Boateng",
  "unit": "House No 40"
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Testimonials reuse */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <TestimonialsSection />
      </section>
    </div>
  );
}


