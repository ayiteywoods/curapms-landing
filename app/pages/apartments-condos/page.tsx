"use client";

import Image from "next/image";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function ApartmentsCondosPage() {
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
              Apartments & Condos
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              High-Rise and Mid-Rise Portfolios
            </h1>

            {/* Descriptive Text */}
            <p className="text-lg leading-relaxed text-slate-600">
              Manage your apartment and condominium buildings with ease. From high-rise towers to mid-rise complexes, our platform helps you handle unit assignments, track maintenance, manage amenities, and keep residents happy. Everything you need to run a successful multi-unit property.
            </p>
          </div>

          {/* Right Side - Apartment Image with Tooltips */}
          <div
            ref={heroRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative flex items-center justify-center ${heroRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            {/* Tooltip 1 - Top Left */}
            <div className="absolute -left-4 top-12 z-20 rounded-lg bg-indigo-400 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Unit Management
              </div>
              <div className="absolute -bottom-1 left-8 h-2.5 w-2.5 rotate-45 bg-indigo-400"></div>
            </div>

            {/* Tooltip 2 - Top Right */}
            <div className="absolute -right-4 top-20 z-20 rounded-lg bg-green-700 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Resident Portal
              </div>
              <div className="absolute -bottom-1 right-8 h-2.5 w-2.5 rotate-45 bg-green-700"></div>
            </div>

            {/* Tooltip 3 - Bottom Left */}
            <div className="absolute left-8 -bottom-4 z-20 rounded-lg bg-slate-800 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Amenities Access
              </div>
              <div className="absolute -top-1 left-8 h-2.5 w-2.5 rotate-45 bg-slate-800"></div>
            </div>

            <div className="relative h-[500px] w-full">
              <Image
                src="/apartment.png"
                alt="Apartment building management illustration"
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
          {/* Left Side - Condo Image with Tooltips */}
          <div
            ref={middleLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative order-2 flex items-center justify-center lg:order-1 ${middleLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            {/* Tooltip 1 - Top Left */}
            <div className="absolute -left-4 top-12 z-20 rounded-lg bg-indigo-400 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Lease Tracking
              </div>
              <div className="absolute -bottom-1 left-8 h-2.5 w-2.5 rotate-45 bg-indigo-400"></div>
            </div>

            {/* Tooltip 2 - Top Right */}
            <div className="absolute -right-4 top-20 z-20 rounded-lg bg-green-700 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Maintenance Requests
              </div>
              <div className="absolute -bottom-1 right-8 h-2.5 w-2.5 rotate-45 bg-green-700"></div>
            </div>

            {/* Tooltip 3 - Bottom Right */}
            <div className="absolute right-8 -bottom-4 z-20 rounded-lg bg-slate-800 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Payment Processing
              </div>
              <div className="absolute -top-1 right-8 h-2.5 w-2.5 rotate-45 bg-slate-800"></div>
            </div>

            <div className="relative h-[500px] w-full">
              <Image
                src="/condo.png"
                alt="Condominium management illustration"
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
              Streamlined Multi-Unit Management
            </h2>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed text-slate-600">
              Whether you manage a few units or hundreds, our platform scales with your portfolio. Track occupancy, handle lease renewals, process rent payments, coordinate maintenance, and manage shared amenities all from one centralized system. Keep your apartments and condos running smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
}

