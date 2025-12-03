"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";

export default function SignupPage() {
  const { elementRef: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { elementRef: rightRef, isVisible: rightVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side - Text Content */}
          <div
            ref={leftRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 ${leftVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <span className="inline-flex rounded-full bg-indigo-400/10 px-4 py-1.5 text-xs font-semibold text-indigo-400">
              Get Started
            </span>
            <div>
              <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
                Sign up in a few
              </h1>
              <p className="mt-1 text-2xl font-semibold text-slate-900">
                simple steps.
              </p>
            </div>
            <p className="text-lg leading-relaxed text-slate-600">
              Share your details and our team will reach out to help you get
              CuraPMS set up for your portfolio. We&apos;ll walk you
              through onboarding, data import, and anything else you need.
            </p>
            <ul className="space-y-3 text-base text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-green-700">•</span>
                <span>Quick follow‑up from our support team</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700">•</span>
                <span>No credit card required to start</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700">•</span>
                <span>We&apos;ll help you configure the right workflows</span>
              </li>
            </ul>
            
            {/* Signup Image - Beneath description */}
            <div className="relative h-[400px] w-full pt-6">
              <Image
                src="/signup.png"
                alt="Sign up illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div
            ref={rightRef as React.RefObject<HTMLDivElement>}
            className={`flex items-start justify-center ${rightVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <form
              className="w-full max-w-md space-y-5 rounded-3xl bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.12)] ring-1 ring-slate-100"
              action="mailto:info@nerasolgh.com"
              method="POST"
              encType="text/plain"
            >
              <div className="space-y-1">
                <label
                  htmlFor="fullName"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="Full Name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                  placeholder="e.g. Ama Mensah"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="phone"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="Phone"
                  type="tel"
                  required
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                  placeholder="+233 ..."
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="Email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                  placeholder="you@example.com"
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full rounded-tr-lg rounded-bl-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-green-800"
              >
                Submit Details
              </button>

              <p className="pt-2 text-[11px] text-slate-400">
                Your message will open in your default email client addressed to{" "}
                <span className="font-semibold text-slate-500">
                  info@nerasolgh.com
                </span>
                . You can review and send it from there.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
}


