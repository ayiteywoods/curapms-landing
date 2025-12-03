"use client";

import Image from "next/image";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function SalonPage() {
  const heroLeft = useScrollAnimation();
  const heroRight = useScrollAnimation();
  const middleSection = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero Section - "Effortless Salon Management Made Simple" */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Text Content */}
          <div
            ref={heroLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 ${heroLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            {/* Tag */}
            <div className="inline-block rounded-lg bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-600">
              Salon
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
                Effortless Salon Management
              </h1>
              <p className="mt-2 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
                Made Simple
              </p>
            </div>

            {/* Descriptive Text */}
            <p className="text-lg leading-relaxed text-slate-600">
              Keep your salon running smoothly with tools that help you manage bookings, staff schedules, and customer visits all in one place. No more double-booking, confusion, or missed appointments.
            </p>

            {/* Call-to-Action Box */}
            <div className="rounded-lg bg-indigo-100 px-6 py-4">
              <p className="text-base font-medium text-slate-900">
                Smart Booking made easy
              </p>
            </div>
          </div>

          {/* Right Side - Salon Image with Curved White Frame */}
          <div
            ref={heroRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative flex items-center justify-center ${heroRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative h-[600px] w-full">
              {/* Curved white shape frame */}
              <div className="absolute inset-0 flex items-center justify-end">
                <div className="relative h-[90%] w-[85%]">
                  {/* Curved white background shape */}
                  <svg
                    className="absolute inset-0 h-full w-full z-0"
                    viewBox="0 0 500 500"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 50 50 Q 100 30 150 50 Q 200 70 250 60 Q 300 50 350 70 Q 400 90 450 80 Q 500 70 480 150 Q 460 230 450 300 Q 440 370 400 420 Q 360 470 300 450 Q 240 430 200 400 Q 160 370 120 350 Q 80 330 60 280 Q 40 230 50 150 Q 60 70 50 50 Z"
                      fill="#ffffff"
                      stroke="#e5e7eb"
                      strokeWidth="2"
                    />
                  </svg>
                  
                  {/* Image inside the curved frame */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden rounded-[40%_60%_50%_50%/60%_40%_60%_40%]">
                    <Image
                      src="/smile.png"
                      alt="Salon manager on phone with laptop"
                      fill
                      className="object-contain object-center"
                      priority
                    />
                  </div>
                </div>
              </div>
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
              Track services, manage payments, assign stylists, and keep everything flowing, so your clients get a great experience and your team stays productive. Because a well-managed salon creates happier customers and a stronger business.
            </p>
          </div>

          {/* Calendar Illustration with Salon Chairs */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[600px] w-full max-w-5xl">
              <Image
                src="/appoint.png"
                alt="Salon booking calendar with appointments"
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

