"use client";

import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/outline";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function ContractorsPage() {
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
              Coordinate Construction and Renovation Contractors
            </h1>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed text-slate-600">
              Manage large-scale construction and renovation projects with ease. Connect with licensed contractors, track project progress, and ensure quality workmanship. From minor renovations to major construction projects, handle it all in one place.
            </p>

            {/* Features List */}
            <ul className="space-y-3">
              {[
                "Licensed and insured contractors",
                "Project timeline and milestone tracking",
                "Budget management and cost control",
                "Document and permit management",
                "Quality assurance and inspections",
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
                src="/contract.jpg"
                alt="Contractors illustration"
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
              Professional Project Management
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Oversee construction and renovation projects from start to finish. Manage contractor relationships, track progress, handle payments, and ensure compliance with building codes and regulations.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <div>
                  <h3 className="font-semibold text-slate-900">Project Tracking</h3>
                  <p className="text-slate-600">Monitor progress and milestones in real-time</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <div>
                  <h3 className="font-semibold text-slate-900">Budget Control</h3>
                  <p className="text-slate-600">Track expenses and stay within budget</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <div>
                  <h3 className="font-semibold text-slate-900">Document Management</h3>
                  <p className="text-slate-600">Store contracts, permits, and project documents</p>
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
                src="/contract1.png"
                alt="Project management illustration"
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

