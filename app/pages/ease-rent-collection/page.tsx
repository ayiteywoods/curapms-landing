"use client";

import Image from "next/image";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function EaseRentCollectionPage() {
  const section1Left = useScrollAnimation();
  const section1Right = useScrollAnimation();
  const section2 = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Top Tag */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-12 lg:px-8">
        <div className="inline-block rounded-lg bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-600">
          Residential Properties
        </div>
      </section>

      {/* Section 1: Collect Rent Without the Hassle */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Text Content */}
          <div
            ref={section1Left.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 ${section1Left.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            {/* Headline */}
            <h1 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Collect Rent Without the Hassle
            </h1>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed text-slate-600">
              Make rent day smooth for both you and your tenants. Our platform gives them an easy way to pay through secure digital options, while you get real-time updates, automatic reminders, and clear tracking. No chasing, no confusion, no delays. Everything you need to manage payments effortlessly all in one place.
            </p>
          </div>

          {/* Right Side - Payment Success Illustration */}
          <div
            ref={section1Right.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative flex items-center justify-center ${section1Right.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative h-[500px] w-full">
              <Image
                src="/paymentsuccess.png"
                alt="Payment success illustration with phone and credit card"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Communicate Directly With Tenants */}
      <section
        ref={section2.elementRef as React.RefObject<HTMLElement>}
        className={`mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 ${section2.isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="space-y-8">
          {/* Headline - Centered */}
          <div className="text-center">
            <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Communicate <span className="font-bold">Directly</span> With Tenants
            </h2>
          </div>

          {/* Body Text - Centered */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-slate-600">
              CuraPMS stores all communication records between you and your tenant so you can easily get to the bottom of a dispute. Signed documents, files, insurance policies and anything else you need are all accessible for you on a single platform.
            </p>
          </div>

          {/* Photo with Speech Bubbles */}
          <div className="relative mt-12">
            {/* Background Blue Shape */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 rounded-t-[100px] bg-indigo-100"></div>
            
            {/* People Photo */}
            <div className="relative mx-auto max-w-4xl">
              <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
                <Image
                  src="/people.png"
                  alt="People discussing with tablet"
                  fill
                  className="object-cover"
                />
                
                {/* Speech Bubble 1 - Above tablet */}
                <div className="absolute left-[35%] top-[30%] z-10">
                  <div className="relative rounded-2xl rounded-bl-none bg-slate-200 px-4 py-3 shadow-lg">
                    <p className="text-sm font-medium text-slate-900">We can go with this</p>
                    {/* Tail */}
                    <div className="absolute bottom-0 left-4 h-3 w-3 translate-y-1/2 rotate-45 bg-slate-200"></div>
                  </div>
                </div>

                {/* Speech Bubble 2 - Below tablet */}
                <div className="absolute left-[40%] top-[60%] z-10">
                  <div className="relative rounded-2xl rounded-tl-none bg-indigo-600 px-4 py-3 shadow-lg">
                    <p className="text-sm font-medium text-white">Okay, We are okay with it!</p>
                    {/* Tail */}
                    <div className="absolute top-0 left-6 h-3 w-3 -translate-y-1/2 rotate-45 bg-indigo-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Testimonials */}
      <TestimonialsSection />
    </div>
  );
}

