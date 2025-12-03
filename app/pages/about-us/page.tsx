"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function AboutUsPage() {
  const heroSection = useScrollAnimation();
  const missionSection = useScrollAnimation();
  const valuesSection = useScrollAnimation();
  const teamSection = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={heroSection.elementRef as React.RefObject<HTMLElement>}
        className={`mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 ${heroSection.isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="text-center space-y-6">
          <div className="inline-block rounded-lg bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-600">
            About Us
          </div>
          <h1 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            Building a Unified Property Ecosystem
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
            Our goal is to build a unified property ecosystem so dependable that it revolutionizes how properties are managed and used. We&apos;re committed to making property management simpler, smarter, and more efficient for everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section
        ref={missionSection.elementRef as React.RefObject<HTMLElement>}
        className={`mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 ${missionSection.isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        style={{ animationDelay: "0.2s" }}
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              We believe that property management should be seamless, transparent, and accessible. Our platform empowers property owners, managers, and tenants with the tools they need to succeed in today&apos;s fast-paced real estate market.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              From residential properties to commercial spaces, we provide comprehensive solutions that streamline operations, improve communication, and maximize returns on investment.
            </p>
          </div>
          <div className="relative h-[400px] w-full rounded-3xl bg-indigo-50 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="text-5xl font-bold text-indigo-600">10K+</div>
              <div className="text-xl text-slate-700">Properties Managed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        ref={valuesSection.elementRef as React.RefObject<HTMLElement>}
        className={`mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 ${valuesSection.isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        style={{ animationDelay: "0.4s" }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            Our Values
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Innovation",
              description: "We continuously innovate to provide cutting-edge solutions that meet the evolving needs of the property management industry.",
            },
            {
              title: "Reliability",
              description: "Our platform is built on a foundation of trust and dependability, ensuring your operations run smoothly 24/7.",
            },
            {
              title: "Customer Focus",
              description: "Your success is our priority. We listen, adapt, and deliver solutions that truly make a difference.",
            },
          ].map((value, idx) => (
            <div
              key={value.title}
              className="rounded-3xl bg-slate-50 p-8 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-400 text-white">
                  <CheckIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{value.title}</h3>
              </div>
              <p className="text-base leading-relaxed text-slate-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section
        ref={teamSection.elementRef as React.RefObject<HTMLElement>}
        className={`mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 ${teamSection.isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        style={{ animationDelay: "0.6s" }}
      >
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            Why Choose CuraPMS?
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {[
              "Comprehensive Property Management",
              "24/7 Customer Support",
              "Secure Cloud-Based Platform",
              "Mobile App for Tenants",
              "Automated Rent Collection",
              "Maintenance Request Tracking",
              "Financial Reporting & Analytics",
              "Easy Lease Management",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-200"
              >
                <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-700 mt-0.5" />
                <span className="text-sm text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

