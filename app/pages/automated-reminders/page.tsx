"use client";

import Image from "next/image";
import { CalendarDaysIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function AutomatedRemindersPage() {
  const section1Left = useScrollAnimation();
  const section1Right = useScrollAnimation();
  const section2Left = useScrollAnimation();
  const section2Right = useScrollAnimation();
  const section3Left = useScrollAnimation();
  const section3Right = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Top Tag */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-12 lg:px-8">
        <div className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-600">
          Residential Properties
        </div>
      </section>

      {/* Section 1: Automated Reminders */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Text Content */}
          <div
            ref={section1Left.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 ${section1Left.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            {/* Headline */}
            <h1 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Automated Reminders
            </h1>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed text-slate-600">
              Student renters can be hard to hold accountable. Our system sends multiple reminders for due invoices, overdue payments, and late fees. You can even include parents in the reminder list. Future rental invoices cannot be paid until all prior invoices and late fees are settled.
            </p>
          </div>

          {/* Right Side - Alarm Clock with Callout Boxes */}
          <div
            ref={section1Right.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative flex items-center justify-center ${section1Right.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative h-[500px] w-full">
              {/* Alarm Clock Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-[300px] w-[300px]">
                  {/* Concentric arcs */}
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 300">
                    <circle
                      cx="150"
                      cy="150"
                      r="140"
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <circle
                      cx="150"
                      cy="150"
                      r="120"
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                  </svg>
                  
                  {/* Watch Image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/watch.png"
                      alt="Alarm clock"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Top Right Callout - Due Date */}
              <div className="absolute right-0 top-8 z-10 w-64 rounded-lg bg-indigo-100 p-4 shadow-lg">
                <div className="flex items-start gap-3">
                  <CalendarDaysIcon className="h-5 w-5 shrink-0 text-indigo-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Due Date</p>
                    <p className="text-xs text-slate-600">
                      Your deadline for signing the lease doc is approaching fast.
                    </p>
                  </div>
                </div>
              </div>

              {/* Middle Left Callout - Invoice */}
              <div className="absolute left-0 top-1/2 z-10 w-64 -translate-y-1/2 rounded-lg bg-indigo-100 p-4 shadow-lg">
                <div className="flex items-start gap-3">
                  <DocumentTextIcon className="h-5 w-5 shrink-0 text-indigo-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Invoice</p>
                    <p className="text-xs text-slate-600">
                      Nicholas made a payment of GHS 237.00 for invoice #109358.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Left Callout - Due Date */}
              <div className="absolute bottom-8 left-0 z-10 w-64 rounded-lg bg-indigo-100 p-4 shadow-lg">
                <div className="flex items-start gap-3">
                  <CalendarDaysIcon className="h-5 w-5 shrink-0 text-indigo-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Due Date</p>
                    <p className="text-xs text-slate-600">GHS 2,000 payment is due.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Digital First Tenants */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Mobile Phone Illustration */}
          <div
            ref={section2Left.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative order-2 flex items-center justify-center lg:order-1 ${section2Left.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <div className="relative h-[500px] w-full">
              <Image
                src="/mobile.png"
                alt="Hand holding smartphone with payment confirmation"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div
            ref={section2Right.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 order-1 lg:order-2 ${section2Right.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            {/* Headline */}
            <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Digital First Tenants
            </h2>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed text-slate-600">
              Today's students are used to managing everything—food, transport, bills, groceries—via their phones. Handwritten checks for rent feel outdated and stressful. Switch to electronic payments and collect rent faster.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Easy Maintenance Management */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Text Content */}
          <div
            ref={section3Left.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 ${section3Left.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            {/* Headline */}
            <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Easy Maintenance Management
            </h2>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed text-slate-600">
              Tenants can instantly report maintenance problems using photos, videos, and clear descriptions directly from their phones. Property managers get all the details they need quickly, respond promptly, and can directly bill the tenant if they were responsible for the issue.
            </p>
          </div>

          {/* Right Side - Chat Interface */}
          <div
            ref={section3Right.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative flex items-center justify-center ${section3Right.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
              {/* Profile Header */}
              <div className="mb-4 flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/testimonial.png"
                    alt="Jane Smith profile"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">from Jane Smith</p>
                </div>
              </div>

              {/* Chat Bubble */}
              <div className="mb-4 rounded-2xl rounded-tl-none bg-indigo-100 px-4 py-3">
                <p className="text-sm text-slate-900">
                  Did you have them change the locks!
                </p>
              </div>

              {/* Yes Button */}
              <button className="mb-4 w-full rounded-lg border-2 border-indigo-400 bg-white px-4 py-2 text-sm font-medium text-indigo-600 transition hover:bg-indigo-50">
                Yes...
              </button>

              {/* Drag and Drop Area */}
              <div className="rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                <p className="text-sm text-slate-500">Drag and drop here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Testimonials */}
      <TestimonialsSection />
    </div>
  );
}

