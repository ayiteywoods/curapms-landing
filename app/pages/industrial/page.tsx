"use client";

import Image from "next/image";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function IndustrialPage() {
  const heroLeft = useScrollAnimation();
  const heroRight = useScrollAnimation();
  const middleLeft = useScrollAnimation();
  const middleRight = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Text Content */}
          <div
            ref={heroLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 ${heroLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            {/* Tag */}
            <div className="inline-block rounded-lg bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-600">
              Industrial
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Monitor Inspections and Logistics Tenants
            </h1>

            {/* Descriptive Text */}
            <p className="text-lg leading-relaxed text-slate-600">
              Manage industrial properties with precision and efficiency. Track inspections, monitor logistics operations, handle tenant relationships, and ensure compliance across your industrial portfolio. Our platform helps you maintain safety standards and optimize operations.
            </p>
          </div>

          {/* Right Side - Industrial Image with Tooltips */}
          <div
            ref={heroRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative flex items-center justify-center ${heroRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            {/* Tooltip 1 - Top Left */}
            <div className="absolute -left-4 top-12 z-20 rounded-lg bg-indigo-400 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Safety Inspections
              </div>
              <div className="absolute -bottom-1 left-8 h-2.5 w-2.5 rotate-45 bg-indigo-400"></div>
            </div>

            {/* Tooltip 2 - Top Right */}
            <div className="absolute -right-4 top-20 z-20 rounded-lg bg-green-700 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Logistics Tracking
              </div>
              <div className="absolute -bottom-1 right-8 h-2.5 w-2.5 rotate-45 bg-green-700"></div>
            </div>

            {/* Tooltip 3 - Bottom Left */}
            <div className="absolute left-8 -bottom-4 z-20 rounded-lg bg-slate-800 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Compliance Management
              </div>
              <div className="absolute -top-1 left-8 h-2.5 w-2.5 rotate-45 bg-slate-800"></div>
            </div>

            <div className="relative h-[500px] w-full">
              <Image
                src="/indu.png"
                alt="Industrial property management illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Middle Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Industrial Image with Tooltips */}
          <div
            ref={middleLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative order-2 flex items-center justify-center lg:order-1 ${middleLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            {/* Tooltip 1 - Top Left */}
            <div className="absolute -left-4 top-12 z-20 rounded-lg bg-indigo-400 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Equipment Monitoring
              </div>
              <div className="absolute -bottom-1 left-8 h-2.5 w-2.5 rotate-45 bg-indigo-400"></div>
            </div>

            {/* Tooltip 2 - Top Right */}
            <div className="absolute -right-4 top-20 z-20 rounded-lg bg-green-700 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Tenant Operations
              </div>
              <div className="absolute -bottom-1 right-8 h-2.5 w-2.5 rotate-45 bg-green-700"></div>
            </div>

            {/* Tooltip 3 - Bottom Right */}
            <div className="absolute right-8 -bottom-4 z-20 rounded-lg bg-slate-800 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Maintenance Scheduling
              </div>
              <div className="absolute -top-1 right-8 h-2.5 w-2.5 rotate-45 bg-slate-800"></div>
            </div>

            <div className="relative h-[500px] w-full">
              <Image
                src="/indu2.png"
                alt="Industrial facility management"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div
            ref={middleRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 order-1 lg:order-2 ${middleRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            {/* Headline */}
            <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Industrial Property Excellence
            </h2>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed text-slate-600">
              From warehouses to manufacturing facilities, manage every aspect of your industrial properties. Schedule regular inspections, track equipment maintenance, monitor logistics operations, and ensure all tenants comply with safety regulations. Keep your industrial portfolio running safely and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
}

