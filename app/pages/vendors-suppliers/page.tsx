"use client";

import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/outline";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function VendorsSuppliersPage() {
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
              Manage Suppliers and Vendors Efficiently
            </h1>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed text-slate-600">
              Streamline your supply chain with our comprehensive vendor management system. Track orders, manage relationships, and ensure you always have the materials and services you need for property maintenance and operations.
            </p>

            {/* Features List */}
            <ul className="space-y-3">
              {[
                "Vendor directory and contact management",
                "Order tracking and inventory management",
                "Price comparison and cost analysis",
                "Purchase order automation",
                "Supplier performance ratings",
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
                src="/vendor.png"
                alt="Vendors and suppliers illustration"
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
                src="/vendor1.jpg"
                alt="Vendor management illustration"
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
              Streamlined Vendor Relationships
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Build strong relationships with your suppliers and vendors. Compare prices, track delivery times, and maintain detailed records of all transactions. Make informed purchasing decisions with comprehensive vendor analytics.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <div>
                  <h3 className="font-semibold text-slate-900">Vendor Database</h3>
                  <p className="text-slate-600">Maintain a comprehensive directory of suppliers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <div>
                  <h3 className="font-semibold text-slate-900">Order Management</h3>
                  <p className="text-slate-600">Track orders from placement to delivery</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <div>
                  <h3 className="font-semibold text-slate-900">Cost Analysis</h3>
                  <p className="text-slate-600">Compare prices and analyze spending patterns</p>
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

