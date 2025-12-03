"use client";

import Image from "next/image";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function TenantCreditReportingPage() {
  const heroLeft = useScrollAnimation();
  const heroRight = useScrollAnimation();
  const middleLeft = useScrollAnimation();
  const middleRight = useScrollAnimation();

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
              Tenant Credit Reporting
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Track and Report Tenant Credit History
            </h1>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed text-slate-600">
              Monitor and report tenant payment behavior to credit bureaus. Help tenants build their credit while maintaining accurate records of their rental payment history. Automated reporting ensures timely and accurate credit updates.
            </p>
          </div>

          {/* Right Side - Image with Tooltips */}
          <div
            ref={heroRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative flex items-center justify-center ${heroRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            {/* Tooltip 1 - Top Left */}
            <div className="absolute -left-4 top-12 z-20 rounded-lg bg-indigo-400 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Credit Monitoring
              </div>
              <div className="absolute -bottom-1 left-8 h-2.5 w-2.5 rotate-45 bg-indigo-400"></div>
            </div>

            {/* Tooltip 2 - Top Right */}
            <div className="absolute -right-4 top-20 z-20 rounded-lg bg-green-700 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Payment History
              </div>
              <div className="absolute -bottom-1 right-8 h-2.5 w-2.5 rotate-45 bg-green-700"></div>
            </div>

            {/* Tooltip 3 - Bottom Right */}
            <div className="absolute right-8 -bottom-4 z-20 rounded-lg bg-slate-800 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Automated Reports
              </div>
              <div className="absolute -top-1 right-8 h-2.5 w-2.5 rotate-45 bg-slate-800"></div>
            </div>

            <div className="relative h-[500px] w-full">
              <Image
                src="/credit.webp"
                alt="Tenant credit reporting illustration"
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
                Credit Scores
              </div>
              <div className="absolute -bottom-1 left-8 h-2.5 w-2.5 rotate-45 bg-indigo-400"></div>
            </div>

            {/* Tooltip 2 - Top Right */}
            <div className="absolute -right-4 top-20 z-20 rounded-lg bg-green-700 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Bureau Integration
              </div>
              <div className="absolute -bottom-1 right-8 h-2.5 w-2.5 rotate-45 bg-green-700"></div>
            </div>

            {/* Tooltip 3 - Bottom Left */}
            <div className="absolute left-8 -bottom-4 z-20 rounded-lg bg-slate-800 px-4 py-2.5 shadow-xl">
              <div className="text-sm font-semibold text-white whitespace-nowrap">
                Detailed Analytics
              </div>
              <div className="absolute -top-1 left-8 h-2.5 w-2.5 rotate-45 bg-slate-800"></div>
            </div>

            <div className="relative h-[500px] w-full">
              <Image
                src="/report2.webp"
                alt="Tenant credit reporting features"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div
            ref={middleRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`order-1 space-y-6 lg:order-2 ${middleRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Build Credit Through Rental Payments
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Help your tenants build credit history by reporting their on-time rental payments to major credit bureaus. Our platform automates the reporting process, ensuring accurate and timely credit updates that benefit both tenants and property managers.
            </p>
            <ul className="space-y-4">
              {[
                "Automatic payment reporting to credit bureaus",
                "Real-time credit score tracking",
                "Detailed payment history records",
                "Compliance with credit reporting standards",
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-indigo-400"></div>
                  <span className="text-base text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <TestimonialsSection />
      </div>
    </div>
  );
}

