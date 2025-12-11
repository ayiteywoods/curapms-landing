"use client";

import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/outline";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function LegalServicesPage() {
  const heroLeft = useScrollAnimation();
  const heroRight = useScrollAnimation();
  const featuresLeft = useScrollAnimation();
  const featuresRight = useScrollAnimation();

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
              Third-Party Services
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Connect with Legal Professionals
            </h1>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed text-slate-600">
              Access expert legal services for all your property management needs. From lease agreements and eviction proceedings to property disputes and compliance matters, connect with qualified attorneys specializing in real estate law.
            </p>

            {/* Features List */}
            <ul className="space-y-3">
              {[
                "Real estate law specialists",
                "Lease agreement review and drafting",
                "Eviction and tenant dispute handling",
                "Compliance and regulatory guidance",
                "Document preparation and filing",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-base text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Image */}
          <div
            ref={heroRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative flex items-center justify-center ${heroRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="relative h-[500px] w-full">
              <Image
                src="/legal.jpg"
                alt="Legal services illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Text Content */}
          <div
            ref={featuresLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 ${featuresLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <h2 className="text-3xl font-bold text-slate-900">
              Comprehensive Legal Support
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Navigate complex legal matters with confidence. Our platform connects you with experienced attorneys who understand property management challenges. Get expert advice, document review, and representation when you need it most.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <div>
                  <h3 className="font-semibold text-slate-900">Expert Consultation</h3>
                  <p className="text-slate-600">Get advice from experienced property law attorneys</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <div>
                  <h3 className="font-semibold text-slate-900">Document Review</h3>
                  <p className="text-slate-600">Have legal documents reviewed by professionals</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <div>
                  <h3 className="font-semibold text-slate-900">Case Management</h3>
                  <p className="text-slate-600">Track legal matters and case progress</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div
            ref={featuresRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative flex items-center justify-center ${featuresRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="relative h-[400px] w-full">
              <Image
                src="/legal1.png"
                alt="Legal support illustration"
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

