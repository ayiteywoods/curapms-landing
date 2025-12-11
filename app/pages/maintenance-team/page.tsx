"use client";

import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/outline";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function MaintenanceTeamPage() {
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
              Manage and Coordinate Your Maintenance Workforce
            </h1>

            {/* Paragraph */}
            <p className="text-lg leading-relaxed text-slate-600">
              Build and manage your maintenance team efficiently. Assign tasks, track progress, and ensure your properties are always well-maintained. Coordinate multiple team members and streamline your maintenance operations.
            </p>

            {/* Features List */}
            <ul className="space-y-3">
              {[
                "Team member management and scheduling",
                "Task assignment and tracking",
                "Real-time progress updates",
                "Performance analytics and reporting",
                "Centralized communication hub",
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
                src="/maint1.jpg"
                alt="Maintenance team illustration"
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
              Efficient Team Coordination
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Keep your maintenance team organized and productive. Assign jobs based on skills and availability, track completion times, and maintain detailed records of all maintenance activities across your property portfolio.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <div>
                  <h3 className="font-semibold text-slate-900">Smart Scheduling</h3>
                  <p className="text-slate-600">Optimize team schedules and workload distribution</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <div>
                  <h3 className="font-semibold text-slate-900">Task Management</h3>
                  <p className="text-slate-600">Create, assign, and track maintenance tasks</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <div>
                  <h3 className="font-semibold text-slate-900">Performance Tracking</h3>
                  <p className="text-slate-600">Monitor team productivity and quality metrics</p>
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
                src="/maint2.png"
                alt="Team coordination illustration"
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

