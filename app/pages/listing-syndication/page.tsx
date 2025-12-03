"use client";

import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/outline";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function ListingSyndicationPage() {
  const heroLeft = useScrollAnimation();
  const heroRight = useScrollAnimation();
  const middleLeft = useScrollAnimation();
  const middleRight = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Top hero row: copy + property listings card */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.1fr]">
          {/* Left copy */}
          <div
            ref={heroLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 ${heroLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <span className="inline-flex rounded-full bg-indigo-400/10 px-4 py-1.5 text-xs font-semibold text-indigo-400">
              Listing &amp; Syndication
            </span>
            <div>
              <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
                Get Units <span className="font-bold">Occupied Faster</span>
              </h1>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              Expand your reach, attract quality leads, and fill vacancies with
              ease.
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              {[
                "Launch your listing in seconds",
                "Turn listings live or pause in seconds",
                "Keep tenants happy with fast, expert replies",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right property listings panel */}
          <div
            ref={heroRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`flex items-center justify-center ${heroRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-full max-w-md rounded-[26px] bg-white p-4 text-xs shadow-[0_24px_60px_rgba(15,23,42,0.16)] ring-1 ring-slate-100">
              <div className="flex items-center justify-between text-[11px] text-slate-600">
                <p className="font-semibold text-slate-800">Property Listings</p>
                <button className="rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-semibold text-white">
                  New Listings
                </button>
              </div>

              {/* Tabs row */}
              <div className="mt-3 flex gap-1 text-[10px] text-slate-500">
                {["Publish", "Scheduled", "Save", "Draft"].map((tab, idx) => (
                  <button
                    key={tab}
                    className={`rounded-sm px-3 py-1 ${
                      idx === 2
                        ? "bg-emerald-500 text-white"
                        : "bg-slate-50 text-slate-500"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Thumbnails */}
              <div className="mt-5 flex gap-3">
                {[1, 2, 3].map((idx) => (
                  <div
                    key={idx}
                    className="w-24 overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200"
                  >
                    <div className="h-20 w-full bg-slate-200">
                      <Image
                        src="/house-3.jpg"
                        alt="Listing"
                        width={96}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <button className="block w-full bg-indigo-400/10 py-1 text-[10px] font-semibold text-indigo-400">
                      Property
                    </button>
                  </div>
                ))}
              </div>

              {/* Publish / Unpublish toggle */}
              <div className="mt-6 flex items-center gap-3 text-[11px] text-slate-600">
                <button className="rounded-full bg-indigo-400 px-4 py-1 text-[10px] font-semibold text-white">
                  Publish
                </button>
                <button className="rounded-full bg-slate-100 px-4 py-1 text-[10px] font-semibold text-slate-500">
                  Unpublish
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle row: form on left, copy on right */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.1fr]">
          {/* Property detail form */}
          <div
            ref={middleLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`flex items-start justify-center ${middleLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <div className="w-full max-w-md rounded-[26px] bg-white p-6 text-[11px] text-slate-600 shadow-[0_24px_60px_rgba(15,23,42,0.16)] ring-1 ring-slate-100">
              <p className="mb-4 text-xs font-semibold text-slate-800">
                Property Detail
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-[10px] text-slate-500">
                    Property Name
                  </label>
                  <div className="h-8 rounded border border-slate-200 bg-slate-50" />
                </div>
                <div>
                  <label className="mb-1 block text-[10px] text-slate-500">
                    Location
                  </label>
                  <div className="flex h-8 items-center justify-between rounded border border-slate-200 bg-slate-50 px-2">
                    <span className="h-2 w-20 rounded-full bg-slate-200" />
                    <span className="h-3 w-3 rounded-full border border-slate-300" />
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <label className="mb-1 block text-[10px] text-slate-500">
                  Property Description
                </label>
                <div className="h-16 rounded border border-slate-200 bg-slate-50" />
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-[10px] text-slate-500">
                    Listing Purpose
                  </label>
                  <div className="flex h-8 items-center justify-between rounded border border-slate-200 bg-slate-50 px-2">
                    <span className="text-[10px] text-slate-500">Rent</span>
                    <span className="h-3 w-3 rounded-full border border-slate-300" />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-[10px] text-slate-500">
                    Building Category
                  </label>
                  <div className="flex h-8 items-center justify-between rounded border border-slate-200 bg-slate-50 px-2">
                    <span className="text-[10px] text-slate-500">Apartment</span>
                    <span className="h-3 w-3 rounded-full border border-slate-300" />
                  </div>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-[10px] text-slate-500">
                    Property Type
                  </label>
                  <div className="flex h-8 items-center justify-between rounded border border-slate-200 bg-slate-50 px-2">
                    <span className="text-[10px] text-slate-500">
                      Residential
                    </span>
                    <span className="h-3 w-3 rounded-full border border-slate-300" />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-[10px] text-slate-500">
                    Building Category
                  </label>
                  <div className="flex h-8 items-center justify-between rounded border border-slate-200 bg-slate-50 px-2">
                    <span className="text-[10px] text-slate-500">
                      Apartment
                    </span>
                    <span className="h-3 w-3 rounded-full border border-slate-300" />
                  </div>
                </div>
              </div>

              {/* Utilities checkboxes */}
              <div className="mt-4 grid grid-cols-2 gap-6 text-[10px]">
                <div className="space-y-1">
                  {["Bathrooms", "Swimming Pool", "Electricity", "Kitchen", "Waterline", "Air Conditioning", "Parking"].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded border border-slate-300" />
                        <span>{item}</span>
                      </div>
                    ),
                  )}
                </div>
                <div className="space-y-1">
                  {["WiFi", "CCTV", "Air conditioning", "Water available", "Backup generator", "Internet ready", "Security"].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded border border-slate-300" />
                        <span>{item}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right copy repeated */}
          <div
            ref={middleRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`flex items-center ${middleRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900">
                Get Units <span className="font-bold">Occupied Faster</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Expand your reach, attract quality leads, and fill vacancies
                with ease.
              </p>
              <ul className="space-y-3 text-sm text-slate-600">
                {[
                  "Launch your listing in seconds",
                  "Turn listings live or pause in seconds",
                  "Keep tenants happy with fast, expert replies",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials reuse (keeps page consistent with others) */}
      <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <TestimonialsSection />
      </div>
    </div>
  );
}


