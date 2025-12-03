"use client";

import Image from "next/image";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function LeaseSigningPage() {
  const topSection = useScrollAnimation();
  const timelineSection = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Top pill + heading */}
      <section
        ref={topSection.elementRef as React.RefObject<HTMLElement>}
        className={`mx-auto max-w-7xl px-6 pt-16 pb-10 lg:px-8 ${topSection.isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="flex justify-start">
          <span className="inline-flex rounded-full bg-indigo-400/10 px-5 py-1.5 text-xs font-semibold text-indigo-400">
            Lease Signing
          </span>
        </div>
        <h1 className="mt-10 text-center text-3xl font-semibold text-slate-900 sm:text-4xl">
          Add <span className="font-bold">A Tenant</span> With Simple Steps
        </h1>
      </section>

      {/* Main vertical timeline section */}
      <section
        ref={timelineSection.elementRef as React.RefObject<HTMLElement>}
        className={`mx-auto max-w-7xl px-6 pb-20 lg:px-8 ${timelineSection.isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        style={{ animationDelay: "0.2s" }}
      >
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 rounded-full bg-indigo-400" />

          {/* Numbered dots centered on vertical line */}
          {[
            { top: "8%", number: 1 },
            { top: "26%", number: 2 },
            { top: "44%", number: 3 },
            { top: "62%", number: 4 },
            { top: "80%", number: 5 },
          ].map((step) => (
            <div
              key={step.number}
              className="pointer-events-none absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ top: step.top }}
            >
              <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-indigo-400 text-xs font-semibold text-white shadow">
                {step.number}
              </div>
            </div>
          ))}

          {/* Labels positioned on left or right side */}
          {[
            {
              label: "Receive Application",
              top: "8%",
              side: "left",
            },
            {
              label: "Screening Prospective Tenants",
              top: "26%",
              side: "right",
            },
            {
              label: "Signing Leasing Form",
              top: "44%",
              side: "left",
            },
            {
              label: "Payment For Property Lease",
              top: "62%",
              side: "right",
            },
            {
              label: "Active Tenants",
              top: "80%",
              side: "left",
            },
          ].map((step) => (
            <div
              key={step.label}
              className="pointer-events-none absolute flex items-center text-[11px] text-slate-500"
              style={{ 
                top: step.top, 
                ...(step.side === "left" 
                  ? { right: "calc(50% + 3rem)" }
                  : { left: "calc(50% + 3rem)" }
                ),
                transform: "translateY(-50%)"
              }}
            >
              {step.side === "left" && (
                <p className="whitespace-nowrap text-right leading-snug">
                  {step.label}
                </p>
              )}
              {step.side === "right" && (
                <p className="whitespace-nowrap text-left leading-snug">
                  {step.label}
                </p>
              )}
            </div>
          ))}

          {/* Two-column layout around the line */}
          <div className="grid gap-y-32 gap-x-10 lg:grid-cols-2">
            {/* LEFT COLUMN */}
            <div className="space-y-32">
              {/* Step 1: Receive Application */}
              <div className="max-w-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  Receive Application
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  All prospective tenants&apos; applications come in through a
                  single, organized channel, making it easy for property owners
                  to review, track, and respond without missing any important
                  details.
                </p>

                <div className="mt-6 w-60 rounded-3xl bg-white p-4 text-xs shadow-[0_18px_45px_rgba(15,23,42,0.14)] ring-1 ring-slate-100">
                  <p className="text-[11px] font-semibold text-slate-500">
                    New Application
                  </p>
                  <div className="mt-3 space-y-3">
                    {["/lady1.png", "/guy1.png"].map((src) => (
                      <div
                        key={src}
                        className="flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-2">
                          <span className="h-8 w-8 overflow-hidden rounded-full bg-slate-200">
                            <Image
                              src={src}
                              alt="Applicant"
                              width={32}
                              height={32}
                              className="h-full w-full object-cover"
                            />
                          </span>
                          <div className="h-2 w-16 rounded-full bg-slate-200" />
                        </div>
                        <button className="rounded-full bg-emerald-500 px-4 py-1 text-[11px] font-semibold text-white">
                          Screen
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 3: Lease Signing */}
              <div className="max-w-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  Lease Signing
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Complete lease agreements with speed and transparency. This
                  feature lets you finalize terms, send documents, and secure
                  tenant signatures all in one smooth, reliable flow.
                </p>

                <div className="mt-6 w-64 rounded-3xl bg-white p-4 text-xs shadow-[0_18px_45px_rgba(15,23,42,0.14)] ring-1 ring-slate-100">
                  <p className="text-[11px] font-semibold text-slate-500">
                    Tenant Lease
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="h-2 w-32 rounded-full bg-slate-100" />
                    <div className="h-2 w-24 rounded-full bg-slate-100" />
                  </div>
                  <div className="mt-6 flex items-center justify-center">
                    <div className="text-6xl font-bold text-slate-300" style={{ fontFamily: 'cursive' }}>
                      g
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5: Active Lease */}
              <div className="max-w-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  Active Lease
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Stay on top of every active lease at a glance. Monitor
                  occupancy, track key dates, and manage ongoing agreements with
                  a clear and organized overview.
                </p>

                <div className="mt-6 w-64 rounded-3xl bg-white p-4 text-xs shadow-[0_18px_45px_rgba(15,23,42,0.14)] ring-1 ring-slate-100">
                  <p className="text-[11px] font-semibold text-slate-500">
                    Active Lease
                  </p>
                  <div className="mt-3 space-y-2">
                    {/* First row with Jane Tetteh */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="h-7 w-7 overflow-hidden rounded-full bg-slate-200">
                          <Image
                            src="/lady1.png"
                            alt="Jane Tetteh"
                            width={28}
                            height={28}
                            className="h-full w-full object-cover"
                          />
                        </span>
                        <div className="h-2 w-20 rounded-full bg-slate-200" />
                      </div>
                      <span className="h-3 w-3 rounded-full bg-emerald-500" />
                    </div>
                    {/* Other rows */}
                    {[1, 2, 3, 4].map((idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between gap-2"
                      >
                        <div className="flex items-center gap-2">
                          <span className="h-7 w-7 overflow-hidden rounded-full bg-slate-200" />
                          <div className="h-2 w-20 rounded-full bg-slate-200" />
                        </div>
                        <span className="h-3 w-3 rounded-full bg-emerald-500" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-32">
              {/* Step 2: Screen Application */}
              <div className="max-w-sm lg:ml-auto">
                <h3 className="text-sm font-semibold text-slate-900">
                  Screen Application
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Screen every tenant application with clarity and confidence. This tool helps you verify details, assess suitability, and make smart leasing decisions, fast and hassle-free.
                </p>

                <div className="mt-6 flex items-start gap-4">
                  <div className="flex-1 rounded-3xl bg-white p-4 text-xs shadow-[0_18px_45px_rgba(15,23,42,0.14)] ring-1 ring-slate-100">
                    <p className="text-[11px] font-semibold text-slate-500">
                      Profile Status
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <span className="h-8 w-8 overflow-hidden rounded-full bg-slate-200">
                        <Image
                          src="/lady1.png"
                          alt="Tenant"
                          width={32}
                          height={32}
                          className="h-full w-full object-cover"
                        />
                      </span>
                      <span className="text-xs font-medium text-slate-800">
                        Jane Tetteh
                      </span>
                    </div>
                    <div className="mt-3 space-y-2 text-[11px] text-slate-600">
                      {["ID Nu...", "Employed", "Criminal Record"].map(
                        (field) => (
                          <div
                            key={field}
                            className="flex items-center justify-between"
                          >
                            <span>{field}</span>
                            <span className="h-3 w-3 rounded-full bg-emerald-500" />
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                  
                  {/* Approval Badge - standalone card */}
                  <div className="flex flex-col items-center justify-center rounded-3xl bg-blue-50 px-4 py-6 text-center shadow-lg">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-2xl font-bold text-white">
                      ✓
                    </div>
                    <p className="text-sm font-semibold text-slate-900">
                      You approved Jane
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4: Rent Payment */}
              <div className="max-w-sm lg:ml-auto">
                <h3 className="text-sm font-semibold text-slate-900">
                  Rent Payment
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Manage rent payments effortlessly once the lease is signed.
                  Track transactions, send reminders, and stay updated with
                  clear, organized payment records all in one place.
                </p>

                <div className="mt-6 flex items-start gap-4">
                  <div className="flex-1 rounded-3xl bg-white pb-4 text-xs shadow-[0_18px_45px_rgba(15,23,42,0.14)] ring-1 ring-slate-100">
                    <div className="h-32 w-full overflow-hidden rounded-t-3xl bg-slate-200">
                      <Image
                        src="/house-3.jpg"
                        alt="Property"
                        width={320}
                        height={160}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="px-4 pt-4">
                      <p className="text-[11px] text-slate-500">
                        2 Bedroom Apartment
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-900">
                        GHS 500.00
                      </p>
                      <p className="mt-1 text-[11px] text-slate-500">
                        Dzowulu, Accra.
                      </p>
                    </div>
                  </div>
                  
                  {/* Payment Received Badge - standalone card */}
                  <div className="flex flex-col items-center justify-center rounded-3xl bg-blue-50 px-4 py-6 text-center shadow-lg">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-2xl font-bold text-white">
                      ✓
                    </div>
                    <p className="text-lg font-bold text-slate-900">
                      GHS 500
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-700">
                      Payment Received
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom testimonials – reuse global component */}
      <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <TestimonialsSection />
      </div>
    </div>
  );
}

