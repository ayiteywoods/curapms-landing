"use client";

import Image from "next/image";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function AirbnbPage() {
  const heroLeft = useScrollAnimation();
  const heroRight = useScrollAnimation();
  const middleLeft = useScrollAnimation();
  const middleRight = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Top Hero Section - "A Smarter Way to Find a Place to Stay" */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Text Content */}
          <div
            ref={heroLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 ${heroLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            {/* Header */}
            <div className="inline-block rounded-lg bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-600">
              Airbnb
            </div>

            {/* Main Title */}
            <h1 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              A Smarter Way to Find a Place to Stay
            </h1>

            {/* Descriptive Text */}
            <p className="text-lg leading-relaxed text-slate-600">
              Just like Airbnb changed the way people book trips, we connect tenants to real spaces owned by real people. No middleman, no complicated processes, just verified homes and commercial spaces you can book or secure with confidence.
            </p>
          </div>

          {/* Right Side - Illustration with dark blue organic background */}
          <div
            ref={heroRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative flex items-center justify-center ${heroRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative h-[600px] w-full">
              {/* Dark blue organic-shaped background */}
              <div className="absolute inset-0 flex items-end justify-end">
                <div className="relative h-[90%] w-[85%]">
                  {/* Organic blob shape background */}
                  <svg
                    className="absolute inset-0 h-full w-full z-0"
                    viewBox="0 0 500 500"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 100 400 Q 50 350 80 280 Q 110 210 180 200 Q 250 190 320 220 Q 390 250 420 320 Q 450 390 400 450 Q 350 510 280 480 Q 210 450 150 420 Q 90 390 100 400 Z"
                      fill="#1e3a8a"
                      transform="rotate(-10 250 250)"
                    />
                  </svg>
                  
                  {/* Image inside the shape */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden rounded-[60%_40%_60%_40%/55%_65%_45%_45%]">
                    <Image
                      src="/deep.png"
                      alt="People checking in at Airbnb"
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

      {/* Section 2: Middle Section - "Real Owners. Real Spaces. Real Convenience" */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Illustration with man and woman */}
          <div
            ref={middleLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative flex items-center justify-center ${middleLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <div className="relative h-[500px] w-full">
              {/* Light green organic background shape */}
              <div className="absolute inset-0 flex items-end justify-start">
                <div className="relative h-[80%] w-[90%]">
                  <svg
                    className="absolute inset-0 h-full w-full z-0"
                    viewBox="0 0 500 500"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 50 400 Q 100 350 150 380 Q 200 410 250 400 Q 300 390 350 420 Q 400 450 450 400 Q 500 350 480 300 Q 460 250 420 200 Q 380 150 320 150 Q 260 150 200 180 Q 140 210 100 250 Q 60 290 50 350 Q 40 410 50 400 Z"
                      fill="#86efac"
                      transform="translate(0, 50)"
                    />
                  </svg>
                  
                  {/* Image with key and houses */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden rounded-[55%_45%_60%_40%/60%_50%_55%_45%]">
                    <Image
                      src="/key.png"
                      alt="Real owners with key and houses"
                      fill
                      className="object-contain object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div
            ref={middleRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 ${middleRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            {/* Title */}
            <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Real Owners. Real Spaces. Real Convenience
            </h2>

            {/* Descriptive Text */}
            <p className="text-lg leading-relaxed text-slate-600">
              Browse available properties, review details, and make your move digitally. It&apos;s fast, transparent, and built on trust, giving you the freedom to choose a space that truly fits your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
}

