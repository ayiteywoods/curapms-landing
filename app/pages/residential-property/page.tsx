"use client";

import Image from "next/image";
import { CheckIcon, BellIcon } from "@heroicons/react/24/solid";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function ResidentialPropertyPage() {
  const heroLeft = useScrollAnimation();
  const heroRight = useScrollAnimation();
  const paymentLeft = useScrollAnimation();
  const paymentRight = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Your Safety Comes First */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Text Content */}
          <div
            ref={heroLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 ${heroLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            {/* Residential Properties Tag */}
            <div className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-600">
              Residential Properties
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Your Safety Comes First
            </h1>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed text-slate-600">
              We prioritize your security and peace of mind. Every property on our platform is thoroughly verified, ensuring you only see legitimate listings. No scams, no hidden issues—just safe, secure homes you can trust. Your family's safety is our commitment.
            </p>
          </div>

          {/* Right Side - Hand with House Image */}
          <div
            ref={heroRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative flex items-center justify-center ${heroRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative h-[500px] w-full">
              <Image
                src="/hand.png"
                alt="Hand holding house model"
                fill
                className="object-contain"
                priority
              />
              
              {/* Overlaying Elements */}
              {/* Bell Icon */}
              <div className="absolute top-20 left-10 flex items-center gap-2">
                <div className="relative">
                  <BellIcon className="h-8 w-8 text-slate-400" />
                  {/* Radiating lines */}
                  <div className="absolute inset-0 animate-ping">
                    <div className="absolute top-0 left-1/2 h-2 w-0.5 -translate-x-1/2 bg-slate-400"></div>
                    <div className="absolute right-0 top-1/2 h-0.5 w-2 -translate-y-1/2 bg-slate-400"></div>
                    <div className="absolute bottom-0 left-1/2 h-2 w-0.5 -translate-x-1/2 bg-slate-400"></div>
                    <div className="absolute left-0 top-1/2 h-0.5 w-2 -translate-y-1/2 bg-slate-400"></div>
                  </div>
                </div>
              </div>

              {/* Property Approved Badge */}
              <div className="absolute bottom-32 left-8 flex items-center gap-3">
                {/* Large Blue Circle with Checkmark */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-400 shadow-lg">
                  <CheckIcon className="h-8 w-8 text-white" />
                </div>
                {/* Property Number Text */}
                <div className="rounded-lg bg-white px-4 py-2 shadow-md">
                  <p className="text-sm font-semibold text-slate-900">Property #237947 Approved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options Section - Pay the Way You Prefer */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Payment Illustration */}
          <div
            ref={paymentLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative order-2 flex items-center justify-center lg:order-1 ${paymentLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <div className="relative h-[500px] w-full">
              <Image
                src="/cash.png"
                alt="Payment options illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div
            ref={paymentRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 order-1 lg:order-2 ${paymentRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            {/* Headline */}
            <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Pay the Way You Prefer
            </h2>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed text-slate-600">
              We support multiple secure payment methods to make transactions convenient for you. Choose from mobile money, bank transfers, or card payments—all processed securely and instantly. Your payment preferences, your choice, your convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
}

