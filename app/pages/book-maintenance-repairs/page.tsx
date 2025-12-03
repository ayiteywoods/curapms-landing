"use client";

import Image from "next/image";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function BookMaintenanceRepairsPage() {
  const heroLeft = useScrollAnimation();
  const heroRight = useScrollAnimation();
  const middleLeft = useScrollAnimation();
  const middleRight = useScrollAnimation();
  const bookingLeft = useScrollAnimation();
  const bookingRight = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Text Content */}
          <div
            ref={heroLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 ${heroLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            {/* Tag */}
            <div className="inline-block rounded-lg bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-600">
              Book Maintenance Repairs
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Source Vetted Pros with Transparent Pricing
            </h1>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed text-slate-600">
              Find trusted maintenance professionals quickly and easily. Our platform connects you with vetted service providers who offer transparent pricing, so you know exactly what you're paying for. Book repairs, schedule maintenance, and manage all your property service needs in one place.
            </p>
          </div>

          {/* Right Side - Image with Tooltips */}
          <div className="relative flex items-center justify-center">
            {/* Tooltip 1 - Top Left */}
            <div className="absolute -left-4 top-12 z-20 rounded-lg bg-indigo-400 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Vetted Professionals
              </div>
              <div className="absolute -bottom-1 left-8 h-2.5 w-2.5 rotate-45 bg-indigo-400"></div>
            </div>

            {/* Tooltip 2 - Top Right */}
            <div className="absolute -right-4 top-20 z-20 rounded-lg bg-green-700 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Quick Booking
              </div>
              <div className="absolute -bottom-1 right-8 h-2.5 w-2.5 rotate-45 bg-green-700"></div>
            </div>

            {/* Tooltip 3 - Bottom Left */}
            <div className="absolute left-8 -bottom-4 z-20 rounded-lg bg-slate-800 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Transparent Pricing
              </div>
              <div className="absolute -top-1 left-8 h-2.5 w-2.5 rotate-45 bg-slate-800"></div>
            </div>

            <div className="relative h-[500px] w-full">
              <Image
                src="/maintain.png"
                alt="Maintenance repair illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Middle Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Image with Tooltips */}
          <div
            ref={middleLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative order-2 flex items-center justify-center lg:order-1 ${middleLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            {/* Tooltip 1 - Top Left */}
            <div className="absolute -left-4 top-12 z-20 rounded-lg bg-indigo-400 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Easy Scheduling
              </div>
              <div className="absolute -bottom-1 left-8 h-2.5 w-2.5 rotate-45 bg-indigo-400"></div>
            </div>

            {/* Tooltip 2 - Top Right */}
            <div className="absolute -right-4 top-20 z-20 rounded-lg bg-green-700 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Track Requests
              </div>
              <div className="absolute -bottom-1 right-8 h-2.5 w-2.5 rotate-45 bg-green-700"></div>
            </div>

            {/* Tooltip 3 - Bottom Right */}
            <div className="absolute right-8 -bottom-4 z-20 rounded-lg bg-slate-800 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Compare Quotes
              </div>
              <div className="absolute -top-1 right-8 h-2.5 w-2.5 rotate-45 bg-slate-800"></div>
            </div>

            <div className="relative h-[500px] w-full">
              <Image
                src="/maintain2.png"
                alt="Maintenance service illustration"
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
              Easy Booking Process
            </h2>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed text-slate-600">
              Book maintenance repairs in just a few clicks. Browse available professionals, compare prices, read reviews, and schedule services that fit your timeline. All maintenance requests are tracked and managed through our platform.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Text Content */}
          <div
            ref={bookingLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 ${bookingLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            {/* Headline */}
            <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Transparent Pricing
            </h2>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed text-slate-600">
              No hidden fees or surprise charges. Every service provider on our platform offers upfront pricing, so you can make informed decisions. Compare quotes from multiple professionals and choose the best option for your needs and budget.
            </p>
          </div>

          {/* Right Side - Image with Tooltips */}
          <div
            ref={bookingRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative flex items-center justify-center ${bookingRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            {/* Tooltip 1 - Top Left */}
            <div className="absolute -left-4 top-12 z-20 rounded-lg bg-indigo-400 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Upfront Pricing
              </div>
              <div className="absolute -bottom-1 left-8 h-2.5 w-2.5 rotate-45 bg-indigo-400"></div>
            </div>

            {/* Tooltip 2 - Top Right */}
            <div className="absolute -right-4 top-20 z-20 rounded-lg bg-green-700 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                No Hidden Fees
              </div>
              <div className="absolute -bottom-1 right-8 h-2.5 w-2.5 rotate-45 bg-green-700"></div>
            </div>

            {/* Tooltip 3 - Bottom Left */}
            <div className="absolute left-8 -bottom-4 z-20 rounded-lg bg-slate-800 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Multiple Quotes
              </div>
              <div className="absolute -top-1 left-8 h-2.5 w-2.5 rotate-45 bg-slate-800"></div>
            </div>

            <div className="relative h-[500px] w-full">
              <Image
                src="/bookings.png"
                alt="Booking illustration"
                fill
                className="object-contain"
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

