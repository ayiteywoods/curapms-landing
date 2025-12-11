"use client";

import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/outline";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function PropertyInspectorsPage() {
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
              Schedule and Manage Property Inspections
            </h1>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed text-slate-600">
              Connect with certified property inspectors for comprehensive property assessments. Schedule inspections, review reports, and maintain detailed records of all property evaluations. Ensure compliance and identify issues before they become costly problems.
            </p>

            {/* Features List */}
            <ul className="space-y-3">
              {[
                "Certified and licensed inspectors",
                "Comprehensive inspection reports",
                "Scheduling and calendar management",
                "Digital report storage and access",
                "Follow-up inspection tracking",
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
                src="/inspect.jpg"
                alt="Property inspectors illustration"
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
          {/* Left Side - Image */}
          <div
            ref={featuresLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative flex items-center justify-center ${featuresLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <div className="relative h-[400px] w-full">
              <Image
                src="/inspect1.png"
                alt="Inspection management illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div
            ref={featuresRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 ${featuresRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h2 className="text-3xl font-bold text-slate-900">
              Streamlined Inspection Process
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Simplify your inspection workflow with our integrated system. Book inspections, receive detailed reports, and track all inspection history for each property. Stay compliant and maintain property value with regular professional assessments.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <div>
                  <h3 className="font-semibold text-slate-900">Easy Scheduling</h3>
                  <p className="text-slate-600">Book inspections with available inspectors</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <div>
                  <h3 className="font-semibold text-slate-900">Digital Reports</h3>
                  <p className="text-slate-600">Access inspection reports instantly</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <div>
                  <h3 className="font-semibold text-slate-900">History Tracking</h3>
                  <p className="text-slate-600">Maintain complete inspection records</p>
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

