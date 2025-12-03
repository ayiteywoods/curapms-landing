"use client";

import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  KeyIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function IntegrationsApisPage() {
  const heroLeft = useScrollAnimation();
  const heroRight = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero: Integrations overview */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.2fr]">
          {/* Left copy */}
          <div
            ref={heroLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 ${heroLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <span className="inline-flex rounded-full bg-indigo-400/10 px-4 py-1.5 text-xs font-semibold text-indigo-400">
              Integrations &amp; APIs
            </span>
            <div>
              <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
                Connect CuraPMS to the tools
              </h1>
              <p className="mt-1 text-2xl font-semibold text-slate-900">
                you already use every day.
              </p>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              Sync data to your accounting software, trigger workflows in your
              CRM, or build custom experiences on top of our API. CuraPMS keeps
              your systems talking to each other so you don&apos;t have to copy
              data by hand.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Native integrations for your favorite accounting tools</li>
              <li>• Webhooks that keep downstream systems up‑to‑date</li>
              <li>• A secure REST API for custom dashboards and automations</li>
            </ul>
          </div>

          {/* Right: integration cards */}
          <div
            ref={heroRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`grid gap-6 rounded-3xl bg-[#f9fafb] p-6 ring-1 ring-slate-100 lg:grid-cols-2 ${heroRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="space-y-3 rounded-2xl bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-400">
                  <CloudArrowUpIcon className="h-5 w-5" />
                </span>
                <p className="text-sm font-semibold text-slate-900">
                  Accounting Sync
                </p>
              </div>
              <p className="text-xs text-slate-600">
                Automatically push rent payments, fees, and refunds to your
                accounting ledger.
              </p>
            </div>

            <div className="space-y-3 rounded-2xl bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <ArrowPathIcon className="h-5 w-5" />
                </span>
                <p className="text-sm font-semibold text-slate-900">
                  CRM &amp; Messaging
                </p>
              </div>
              <p className="text-xs text-slate-600">
                Keep prospects and tenants in sync with your CRM and marketing
                automation tools.
              </p>
            </div>

            <div className="space-y-3 rounded-2xl bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                  <KeyIcon className="h-5 w-5" />
                </span>
                <p className="text-sm font-semibold text-slate-900">API Keys</p>
              </div>
              <p className="text-xs text-slate-600">
                Generate environment‑specific keys and rotate them without
                interrupting apps.
              </p>
            </div>

            <div className="space-y-3 rounded-2xl bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <LinkIcon className="h-5 w-5" />
                </span>
                <p className="text-sm font-semibold text-slate-900">
                  Webhooks
                </p>
              </div>
              <p className="text-xs text-slate-600">
                Subscribe to events like new payments, leases, or maintenance
                tickets and react in real time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API details section */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-12 rounded-3xl bg-white px-6 py-8 shadow-[0_24px_60px_rgba(15,23,42,0.12)] ring-1 ring-slate-100 lg:grid-cols-[1.05fr_1.1fr]">
          {/* Left - API key panel */}
          <div className="space-y-4 text-sm text-slate-600">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Simple, secure API access.
            </h2>
            <p>
              Use our REST API to read and write data from your own apps. Each
              request is secured with API keys that you can manage from inside
              your dashboard.
            </p>
            <div className="mt-4 space-y-3 rounded-2xl bg-[#0f172a] px-4 py-4 font-mono text-xs text-slate-50">
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                Example Request
              </p>
              <pre className="whitespace-pre-wrap">
                {`GET /api/v1/properties
Authorization: Bearer sk_live_****************`}
              </pre>
            </div>
          </div>

          {/* Right - webhooks list */}
          <div className="space-y-4 text-sm text-slate-600">
            <h3 className="text-lg font-semibold text-slate-900">
              Webhooks you can rely on
            </h3>
            <p>
              Deliver critical updates to other systems without polling. Configure
              webhook endpoints for the events that matter most.
            </p>
            <div className="mt-3 space-y-2 rounded-2xl bg-slate-50 p-4 text-xs">
              {[
                {
                  event: "payment.succeeded",
                  target: "https://app.example.com/hooks/curapms/payment",
                },
                {
                  event: "lease.signed",
                  target: "https://app.example.com/hooks/curapms/lease",
                },
                {
                  event: "ticket.created",
                  target: "https://app.example.com/hooks/curapms/ticket",
                },
              ].map((hook) => (
                <div
                  key={hook.event}
                  className="flex items-center justify-between rounded-xl bg-white px-3 py-2"
                >
                  <span className="font-semibold text-slate-800">
                    {hook.event}
                  </span>
                  <span className="truncate text-slate-500">
                    {hook.target}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <TestimonialsSection />
      </section>
    </div>
  );
}


