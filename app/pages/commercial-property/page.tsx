"use client";

import Image from "next/image";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function CommercialPropertyPage() {
  const heroLeft = useScrollAnimation();
  const heroRight = useScrollAnimation();
  const middleLeft = useScrollAnimation();
  const middleRight = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Top Hero Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Text Content */}
          <div
            ref={heroLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 ${heroLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            {/* Commercial Properties Tag */}
            <div className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-600">
              Commercial Properties
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Secure the Right Space for Your Business Dreams
            </h1>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed text-slate-600">
              Whether you're starting fresh or expanding, find verified commercial spaces that fit your goals. No hidden issues, no back-and-forth just a clear path to the shop, office, or workspace you want. Your business deserves a solid foundation, let's help you claim the space.
            </p>

            {/* Chat Bubbles */}
            <div className="space-y-3 pt-4">
              {/* Blue Chat Bubble */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-full bg-slate-400"></div>
                </div>
                <div className="rounded-2xl rounded-tl-none bg-indigo-400 px-4 py-3 text-white">
                  <p className="text-sm">I have made the rent transfer</p>
                </div>
              </div>

              {/* White Chat Bubble */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-full bg-slate-400"></div>
                </div>
                <div className="rounded-2xl rounded-tl-none bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
                  <p className="text-sm text-slate-700">Yes Sarah, Kindly pass by for the keys.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - 3D Illustration */}
          <div
            ref={heroRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative flex items-center justify-center ${heroRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative h-[500px] w-full">
              <Image
                src="/ill1.png"
                alt="Commercial property illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Middle Feature Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side - 3D Illustration */}
          <div
            ref={middleLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative order-2 flex items-center justify-center lg:order-1 ${middleLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <div className="relative h-[500px] w-full">
              <Image
                src="/ill2.png"
                alt="Commercial property feature illustration"
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
              Secure the Right Space for Your Business Dreams
            </h2>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed text-slate-600">
              Whether you're starting fresh or expanding, find verified commercial spaces that fit your goals. No hidden issues, no back-and-forth just a clear path to the shop, office, or workspace you want. Your business deserves a solid foundation, let's help you claim the space.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
}

