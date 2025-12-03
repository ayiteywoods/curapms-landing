"use client";

import Image from "next/image";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function RetailMixedUsePage() {
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
              Retail & Mixed Use
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Track Vendors and NNN Reimbursements
            </h1>

            {/* Descriptive Text */}
            <p className="text-lg leading-relaxed text-slate-600">
              Manage retail spaces and mixed-use properties with precision. Keep track of vendor relationships, handle NNN (triple net) reimbursements, and streamline operations across diverse property portfolios. Our platform helps you stay organized and maximize returns from every square foot.
            </p>
          </div>

          {/* Right Side - Retail Image */}
          <div
            ref={heroRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative flex items-center justify-center ${heroRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative h-[500px] w-full">
              <Image
                src="/retail1.png"
                alt="Retail and mixed use property illustration"
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
          {/* Left Side - Mixed Use Image */}
          <div
            ref={middleLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative order-2 flex items-center justify-center lg:order-1 ${middleLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <div className="relative h-[500px] w-full">
              <Image
                src="/mixed.jpg"
                alt="Mixed use property management"
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
              Comprehensive Property Management
            </h2>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed text-slate-600">
              From retail storefronts to mixed-use developments, manage every aspect of your property portfolio. Handle lease agreements, track vendor performance, process NNN reimbursements, and maintain clear communication with all stakeholders. Everything you need to run a successful retail and mixed-use property operation.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
}

