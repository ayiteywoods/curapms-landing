"use client";

import Image from "next/image";
import { MegaphoneIcon } from "@heroicons/react/24/outline";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function DigitalRentPaymentPage() {
  const topLeft = useScrollAnimation();
  const topRight = useScrollAnimation();
  const bottomSection = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Top Section - Money Faster */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Side - Text Content */}
            <div
              ref={topLeft.elementRef as React.RefObject<HTMLDivElement>}
              className={`relative space-y-6 ${topLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
            >
              {/* Online Payment Button - Top Left */}
              <div className="inline-block rounded-lg bg-indigo-100 px-4 py-2">
                <p className="text-sm font-medium text-slate-700">Online Payment</p>
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <p className="text-2xl font-normal text-slate-400 lg:text-3xl">
                  Receive your
                </p>
                <h1 className="text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
                  Money Faster
                </h1>
              </div>

              {/* Paragraph */}
              <p className="text-lg leading-relaxed text-slate-700">
                No more knocking on doors, running to the bank, and waiting on your funds to arrive. Innago brings your rental collection into the 21st century.
              </p>
            </div>

            {/* Right Side - Hand with Payment Items in Organic Blob Shape */}
            <div
              ref={topRight.elementRef as React.RefObject<HTMLDivElement>}
              className={`relative flex items-center justify-center ${topRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative h-[600px] w-full">
                {/* Organic Blob Shape Container */}
                <div className="absolute inset-0 flex items-center justify-end">
                  <div className="relative h-[95%] w-[90%]">
                    {/* Organic blob shape background with clip-path definition */}
                    <svg
                      className="absolute inset-0 h-full w-full z-0"
                      viewBox="0 0 500 500"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <clipPath id="blobClip" clipPathUnits="objectBoundingBox">
                          <path
                            d="M 0.5 0.16 Q 0.64 0.14 0.76 0.28 Q 0.88 0.42 0.84 0.56 Q 0.8 0.7 0.66 0.78 Q 0.52 0.86 0.36 0.8 Q 0.2 0.74 0.12 0.6 Q 0.04 0.46 0.1 0.32 Q 0.16 0.18 0.3 0.1 Q 0.44 0.02 0.5 0.16 Z"
                          />
                        </clipPath>
                      </defs>
                      <path
                        d="M 250 80 Q 320 70 380 140 Q 440 210 420 280 Q 400 350 330 390 Q 260 430 180 400 Q 100 370 60 300 Q 20 230 50 160 Q 80 90 150 50 Q 220 10 250 80 Z"
                        fill="#e0e7ff"
                      />
                    </svg>
                    
                    {/* Image inside blob - clipped to blob shape */}
                    <div 
                      className="absolute inset-0 z-10 overflow-hidden"
                      style={{
                        clipPath: 'url(#blobClip)',
                        WebkitClipPath: 'url(#blobClip)',
                      }}
                    >
                      <div className="relative h-full w-full flex items-center justify-center">
                        <Image
                          src="/blue.png"
                          alt="Hand holding phone, banknote, and credit card"
                          fill
                          className="object-contain object-center"
                          priority
                        />
                      </div>
                    </div>
                    
                    {/* Rent Reminder Card - Positioned on the right side of the blob */}
                    <div className="absolute right-0 top-1/3 z-20 translate-x-4">
                      <div className="relative">
                        <div className="rounded-lg bg-indigo-100 px-8 py-5 shadow-lg">
                          <p className="text-base font-medium text-slate-400">Rent Reminder</p>
                          <p className="text-3xl font-bold text-slate-900">$ 1200.00</p>
                        </div>
                        {/* Profile Picture - Overlapping bottom right corner */}
                        <div className="absolute -bottom-2 -right-2 h-20 w-20 overflow-hidden rounded-full border-2 border-white shadow-md">
                          <Image
                            src="/testimonial.png"
                            alt="Profile picture"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section - Payment Reminders */}
      <section
        ref={bottomSection.elementRef as React.RefObject<HTMLElement>}
        className={`bg-slate-100 ${bottomSection.isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <div className="space-y-8">
            {/* Payment Reminders Tag - Centered */}
            <div className="text-center">
              <div className="inline-block rounded-lg bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-600">
                Payment Reminders
              </div>
            </div>

            {/* Headline - Centered */}
            <div className="text-center">
              <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
                Stay on Track Without Calling or Texting Tenants
              </h2>
            </div>

            {/* Paragraph - Centered */}
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-slate-600">
                Keep rent payments timely without the stress of constant follow-ups. Automated reminders handle the communication for you, notifying tenants before payments are due and prompting them if anything is late.
              </p>
            </div>

            {/* Woman Photo with Overlays */}
            <div className="relative mt-12">
              <div className="relative mx-auto max-w-4xl">
                <div className="relative h-[600px] w-full overflow-hidden rounded-lg">
                  {/* Background Image */}
                  <Image
                    src="/she.png"
                    alt="Woman with smartphone"
                    fill
                    className="object-cover"
                  />

                  {/* Abstract Background Shapes */}
                  <div className="absolute inset-0">
                    {/* Orange shape */}
                    <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-orange-400/30 blur-3xl"></div>
                    {/* Purple shape */}
                    <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-purple-400/30 blur-3xl"></div>
                    {/* Small circles */}
                    <div className="absolute right-1/4 top-1/4 h-16 w-16 rounded-full bg-slate-400/20"></div>
                    <div className="absolute bottom-1/4 left-1/3 h-12 w-12 rounded-full bg-orange-300/30"></div>
                    <div className="absolute top-1/2 right-1/3 h-8 w-8 rounded-full bg-purple-300/40"></div>
                  </div>

                  {/* Speech Bubble - Left side */}
                  <div className="absolute left-8 top-1/4 z-10">
                    <div className="relative max-w-xs rounded-2xl border-2 border-dashed border-slate-300 bg-white px-4 py-3 shadow-xl">
                      <div className="flex items-start gap-3">
                        <MegaphoneIcon className="h-5 w-5 shrink-0 text-indigo-600" />
                        <p className="text-sm text-slate-700">
                          Just a quick reminder that your rent for December is due by December 10th.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* "Rent is due soon" Tag - Right side */}
                  <div className="absolute right-8 top-1/3 z-10">
                    <div className="rounded-lg bg-green-400 px-3 py-1.5 shadow-lg">
                      <p className="text-xs font-semibold text-white">Rent is due soon</p>
                    </div>
                  </div>

                  {/* Profile Card - Bottom Right */}
                  <div className="absolute bottom-8 right-8 z-10">
                    <div className="rounded-lg bg-white px-4 py-3 shadow-xl">
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src="/testimonial.png"
                            alt="Kwame profile"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">Kwame</p>
                          <p className="text-xs text-slate-600">Property Owner</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
