"use client";

import Image from "next/image";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function ParkingPage() {
  const topLeft = useScrollAnimation();
  const topRight = useScrollAnimation();
  const middleLeft = useScrollAnimation();
  const middleRight = useScrollAnimation();
  const bottomLeft = useScrollAnimation();
  const bottomRight = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Top Section - Clear, Controlled, and Convenient */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Text Content */}
          <div
            ref={topLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 ${topLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            {/* Parking Tag */}
            <div className="inline-block rounded-lg bg-indigo-400 px-4 py-1.5 text-sm font-medium text-white">
              Parking
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Clear, Controlled, and Convenient
            </h1>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed text-slate-600">
              Know exactly where to park, avoid conflicts, and enjoy a well-structured system that keeps your property running efficiently. Because a great home or workspace starts with easy parking.
            </p>
          </div>

          {/* Right Side - Overlapping Images */}
          <div
            ref={topRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative flex items-center justify-center ${topRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative h-[500px] w-full">
              {/* Aerial Parking Lot Image - Primary/Background */}
              <div className="absolute inset-0 z-0 flex items-center justify-end">
                <div className="relative h-full w-[75%]">
                  <Image
                    src="/packing.png"
                    alt="Aerial view of parking lot"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              {/* Street Scene Image - Overlapping bottom right corner, slightly angled */}
              <div className="absolute bottom-4 right-4 z-10 h-[50%] w-[60%]">
                <div className="transform rotate-2">
                  <Image
                    src="/frame.png"
                    alt="Street scene with colorful buildings"
                    fill
                    className="object-contain rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Section - Parking as a Reliable Utility */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Large Parking Lot Image with Overlay */}
          <div className="relative order-2 flex items-center justify-center lg:order-1">
            <div className="relative h-[600px] w-full">
              {/* Large Aerial Parking Lot Image */}
              <Image
                src="/frame.png"
                alt="Extensive parking lot aerial view"
                fill
                className="object-cover rounded-lg"
              />
              
              {/* Overlapping Profile Picture - Bottom Left */}
              <div className="absolute bottom-6 left-6 z-10">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-xl">
                  <Image
                    src="/testimonial.png"
                    alt="Profile picture"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Book Button - To the right of profile picture, partially overlapping */}
              <div className="absolute bottom-8 left-24 z-20">
                <button className="rounded-lg bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-green-600">
                  Book
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Headline */}
            <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Parking as a Reliable Utility
            </h2>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed text-slate-600">
              Parking isn't just an extra feature, it's a core part of your living and working experience. We treat it as a structured utility, ensuring every resident or business has clear access to organized, well-managed parking spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Lower-Middle Section - Flexible software In The Palm Of Your Hand */}
      <section className="relative overflow-hidden bg-indigo-600 text-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-0 lg:px-8">
          <div className="grid gap-12 py-8 lg:grid-cols-2 lg:items-center">
            {/* Left Side - Text Content on Dark Blue Background */}
            <div className="space-y-6">
              {/* Main Heading */}
              <h2 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
                Flexible software
              </h2>

              {/* Sub-heading */}
              <h3 className="text-3xl font-semibold leading-tight text-white lg:text-4xl">
                In The Palm Of Your Hand
              </h3>

              {/* Paragraph */}
              <p className="text-lg leading-relaxed text-indigo-100">
                CuraPMS mobile app allows you to manage your business on the go. Drivers have their own dedicated login too where they can pay parking rent, report issues, and chat directly with you from the palm of their hand.
              </p>
            </div>

            {/* Right Side - Man in Car with Phone - Extended to right edge */}
            <div className="relative flex h-[500px] items-center justify-end lg:h-[600px]">
              <div className="relative h-full w-[120%] lg:w-[140%]">
                <Image
                  src="/guy.png"
                  alt="Man in car looking at smartphone"
                  fill
                  className="object-contain object-right"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
}

