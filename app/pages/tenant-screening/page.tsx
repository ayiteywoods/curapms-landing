"use client";

import Image from "next/image";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function TenantScreeningPage() {
  const { elementRef: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { elementRef: rightRef, isVisible: rightVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Text Content */}
          <div
            ref={leftRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 ${leftVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            {/* Tag */}
            <div className="inline-block rounded-lg bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-600">
              Tenant Screening
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Background and Credit Checks in Seconds
            </h1>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed text-slate-600">
              Screen tenants quickly and efficiently with comprehensive background checks and credit reports. Get instant results and make informed decisions about your rental applicants. Our automated screening process saves you time while ensuring you find the right tenants for your properties.
            </p>
          </div>

          {/* Right Side - Image with Tooltips */}
          <div
            ref={rightRef as React.RefObject<HTMLDivElement>}
            className={`relative flex items-center justify-center ${rightVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            {/* Tooltip 1 - Top Left */}
            <div className="absolute -left-4 top-12 z-20 rounded-lg bg-indigo-400 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Credit Check
              </div>
              <div className="absolute -bottom-1 left-8 h-2.5 w-2.5 rotate-45 bg-indigo-400"></div>
            </div>

            {/* Tooltip 2 - Top Right */}
            <div className="absolute -right-4 top-20 z-20 rounded-lg bg-green-700 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Background Verification
              </div>
              <div className="absolute -bottom-1 right-8 h-2.5 w-2.5 rotate-45 bg-green-700"></div>
            </div>

            {/* Tooltip 3 - Bottom Left */}
            <div className="absolute left-8 -bottom-4 z-20 rounded-lg bg-slate-800 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Instant Results
              </div>
              <div className="absolute -top-1 left-8 h-2.5 w-2.5 rotate-45 bg-slate-800"></div>
            </div>

            <div className="relative h-[500px] w-full">
              <Image
                src="/tenants.png"
                alt="Tenant screening illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
}

