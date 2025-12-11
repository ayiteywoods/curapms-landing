"use client";

import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/outline";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function SecurityServicesPage() {
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
              Coordinate Security Personnel and Surveillance
            </h1>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed text-slate-600">
              Ensure the safety and security of your properties with professional security services. Manage security personnel, coordinate surveillance systems, and maintain a secure environment for tenants and properties. From on-site guards to monitoring systems, protect what matters most.
            </p>

            {/* Features List */}
            <ul className="space-y-3">
              {[
                "Licensed security personnel",
                "24/7 surveillance and monitoring",
                "Access control management",
                "Incident reporting and tracking",
                "Emergency response coordination",
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
                src="/security2.png"
                alt="Security services illustration"
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
              Comprehensive Security Management
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Manage all aspects of property security in one place. Coordinate security staff schedules, monitor surveillance systems, track incidents, and ensure rapid response to security concerns. Keep your properties and tenants safe with professional security services.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <div>
                  <h3 className="font-semibold text-slate-900">Personnel Management</h3>
                  <p className="text-slate-600">Schedule and manage security staff</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <div>
                  <h3 className="font-semibold text-slate-900">Surveillance Systems</h3>
                  <p className="text-slate-600">Monitor and manage security cameras</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <div>
                  <h3 className="font-semibold text-slate-900">Incident Tracking</h3>
                  <p className="text-slate-600">Record and track security incidents</p>
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
                src="/security1.png"
                alt="Security management illustration"
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

