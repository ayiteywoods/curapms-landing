"use client";

import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/outline";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function MobileAppPage() {
  const heroLeft = useScrollAnimation();
  const heroRight = useScrollAnimation();
  const section2Left = useScrollAnimation();
  const section2Right = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero: Manage Properties */}
      <section className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-16 lg:flex-row lg:items-center lg:px-8">
        {/* Left copy */}
        <div
          ref={heroLeft.elementRef as React.RefObject<HTMLDivElement>}
          className={`flex-1 space-y-6 ${heroLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
        >
          <span className="inline-flex rounded-full bg-indigo-400/10 px-4 py-1.5 text-xs font-semibold text-indigo-400">
            Mobile App
          </span>
          <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
            Manage <span className="font-bold">Properties</span>
          </h1>
          <p className="text-sm leading-relaxed text-slate-600">
            Receive and respond to maintenance tickets as soon as they come
            through to provide peace of mind to you and your tenants.
          </p>
          <ul className="space-y-3 text-sm text-slate-600">
            {[
              "Say goodbye to printed work orders",
              "Complete more requests, more quickly",
              "Give tenants professional, fast response times",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right images shaped similar to design */}
        <div
          ref={heroRight.elementRef as React.RefObject<HTMLDivElement>}
          className={`relative flex flex-1 items-center justify-center ${heroRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          {/* Back shape */}
          <div className="relative h-64 w-64 overflow-hidden rounded-[55%_45%_60%_40%/60%_50%_55%_45%] bg-slate-200 shadow-[0_28px_70px_rgba(15,23,42,0.22)] lg:h-72 lg:w-80">
            <Image
              src="/oldman.png"
              alt="Landlord managing properties"
              fill
              className="object-cover"
            />
          </div>

          {/* Front curved image */}
          <div className="absolute -bottom-10 -left-6 h-44 w-44 overflow-hidden rounded-[65%_35%_60%_40%/55%_60%_40%_45%] bg-slate-200 shadow-[0_20px_55px_rgba(15,23,42,0.24)]">
            <Image
              src="/guy2.png"
              alt="Tenant using mobile app"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Tenant experience / dashboard section */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          {/* Phone dashboard on the left */}
          <div
            ref={section2Left.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative flex flex-1 justify-center ${section2Left.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <div className="h-[520px] w-72 rounded-[34px] border-[12px] border-[#d9dde3] bg-white px-6 pb-6 pt-8 shadow-[0_35px_70px_rgba(15,23,42,0.2)]">
              <header className="mb-4 flex items-baseline gap-1 text-xl font-semibold text-slate-900">
                <span className="text-[#27c88c]">LGO</span>
                <span>Dashboard</span>
              </header>
              <button className="mb-4 w-full rounded-tr-lg rounded-bl-lg bg-[#63d885] py-2 text-sm font-semibold text-white">
                Set up Auto Pay
              </button>

              <div className="rounded-[16px] bg-[#f4f7fb] px-4 py-3 text-xs text-slate-500">
                <p className="font-semibold text-slate-700">Processing</p>
                <p>Your payment of GHS 500 is processing</p>
              </div>

              <div className="mt-5 rounded-[16px] border border-slate-100 px-4 py-3 text-sm">
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Payable Now
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">
                  GHS 500.00
                </p>
                <p className="mt-3 text-xs text-slate-400">House No 40</p>
              </div>
            </div>

            {/* Horizontal tenant card overlapping phone */}
            <div className="absolute -bottom-10 left-1/2 z-20 flex w-[290px] -translate-x-1/2 items-center gap-4 rounded-[18px] bg-white px-4 py-3 text-xs text-slate-700 shadow-[0_20px_55px_rgba(15,23,42,0.25)]">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                <Image
                  src="/lady1.png"
                  alt="Tenant avatar"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  House Rent
                </p>
                <p className="text-[11px] text-slate-500">
                  Total amount payable <span className="font-semibold">GHS 500</span>
                </p>
              </div>
              <span className="text-[11px] font-semibold text-emerald-500">
                Processing…
              </span>
            </div>
          </div>

          {/* Text copy on the right */}
          <div
            ref={section2Right.elementRef as React.RefObject<HTMLDivElement>}
            className={`mt-10 flex flex-1 flex-col gap-3 text-sm leading-relaxed text-slate-600 lg:mt-0 ${section2Right.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
              Your Tenant&apos;s
            </p>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Experience <span className="font-bold">Matters</span>
            </h2>
            <p>
              Many landlords forget it&apos;s their tenants that are paying the
              bills. Providing your tenants with an easy way to get you your
              money should be one of your top priorities.
            </p>
            <p>
              With their own dedicated login, the CuraPMS tenant mobile app is
              designed to provide your tenants an exceptional digital
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <TestimonialsSection />
      </section>
    </div>
  );
}

