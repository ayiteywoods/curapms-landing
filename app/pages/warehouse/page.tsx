"use client";

import Image from "next/image";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function WarehousePage() {
  const heroLeft = useScrollAnimation();
  const heroRight = useScrollAnimation();
  const middleSection = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero Section - "Smart Warehousing Made Easy" */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Text Content */}
          <div
            ref={heroLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 ${heroLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            {/* Tag */}
            <div className="inline-block rounded-lg bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-600">
              Warehouse
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Smart Warehousing Made Easy
            </h1>

            {/* Descriptive Text */}
            <p className="text-lg leading-relaxed text-slate-600">
              Manage storage spaces with clarity and control. Whether you&apos;re renting out a warehouse or securing space for your goods, our platform keeps everything organized, from bookings to access management.
            </p>
          </div>

          {/* Right Side - Isometric Warehouse Illustration */}
          <div
            ref={heroRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative flex items-center justify-center ${heroRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative h-[600px] w-full">
              <Image
                src="/storage.png"
                alt="Isometric warehouse illustration with trucks, forklifts, and workers"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Middle Section - "Organized, Efficient, and Customer-Friendly" */}
      <section
        ref={middleSection.elementRef as React.RefObject<HTMLElement>}
        className={`mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 ${middleSection.isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="space-y-12">
          {/* Centered Text Content */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Organized, Efficient, and Customer-Friendly
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
              Monitor inventory movement, assign storage areas, and stay updated on who&apos;s using the space. No clutter, no confusion, just a smooth system that keeps your warehouse operations running tight. Because proper storage should be simple, reliable, and built for growth.
            </p>
          </div>

          {/* Warehouse Interior Photo */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[600px] w-full max-w-5xl">
              <Image
                src="/store2.png"
                alt="Warehouse interior with worker and holographic interface"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
}

