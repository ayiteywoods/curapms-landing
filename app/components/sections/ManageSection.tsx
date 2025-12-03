"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const callouts = [
  {
    title: "Tenant",
    message: "I really appreciate how quick you always respond.",
    align: "left",
  },
  {
    title: "Landlord",
    message: "Glad! Just name your service.",
    align: "right",
  },
];

export function ManageSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (sectionRef.current) {
      // Check if already in viewport
      const rect = sectionRef.current.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (isInViewport) {
        // Small delay to ensure animation plays
        setTimeout(() => setIsVisible(true), 100);
      } else {
        observer.observe(sectionRef.current);
      }
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`grid gap-8 rounded-[36px] bg-white px-6 py-16 ring-1 ring-slate-100 lg:grid-cols-[1.05fr_1.25fr] lg:px-14 ${
        isVisible ? "opacity-0 animate-slide-in-right" : "opacity-0"
      }`}
    >
      {/* Left: photo + cards below */}
      <div className="flex flex-col gap-6 sm:gap-10 pr-0 sm:pr-4 lg:pr-10">
        <div
          className={`h-[300px] sm:h-[400px] lg:h-[460px] w-full max-w-[780px] overflow-hidden bg-slate-100 rounded-2xl ${
            isVisible ? "opacity-0 animate-slide-in-right" : "opacity-0"
          }`}
          style={{ animationDelay: isVisible ? "0.2s" : "0s" }}
        >
          <Image
            src="/lady22.png"
            alt="Resident using CuraPMS app"
            width={900}
            height={640}
            priority
            className="h-full w-full object-cover"
          />
        </div>

        {/* Cards under the image, with leasing card overlapping the main photo */}
        <div className="-mt-16 sm:-mt-24 lg:-mt-32 flex w-full flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
          {/* Maintenance card (front, lower, overlapping leasing card) */}
          <div
            className={`relative z-20 sm:ml-48 sm:mt-40 w-full sm:w-80 rounded-[34px] bg-white p-6 sm:p-8 text-left shadow-[0_35px_80px_rgba(15,23,42,0.18)] ring-1 ring-slate-100 ${
              isVisible ? "opacity-0 animate-slide-in-right" : "opacity-0"
            }`}
            style={{ animationDelay: isVisible ? "0.4s" : "0s" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c7a750]">
              Maintenance Request
            </p>
            <div className="mt-5 h-2 w-40 rounded-full bg-slate-100" />
            <div className="mt-8 flex items-center gap-4">
              <span className="h-10 w-10 overflow-hidden rounded-full bg-slate-300">
                <Image
                  src="/small.png"
                  alt="Tenant avatar"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </span>
              <div className="flex-1 space-y-2">
                <div className="h-2 w-32 rounded-full bg-slate-200" />
                <div className="h-2 w-28 rounded-full bg-slate-100" />
                <div className="h-2 w-36 rounded-full bg-slate-100" />
              </div>
            </div>
          </div>

          {/* Leasing card (back, slightly behind) */}
          <div
            className={`relative z-10 sm:-ml-8 w-full sm:w-96 rounded-[34px] bg-white p-6 sm:p-8 text-left shadow-[0_45px_100px_rgba(15,23,42,0.18)] ring-1 ring-slate-100 ${
              isVisible ? "opacity-0 animate-slide-in-right" : "opacity-0"
            }`}
            style={{ animationDelay: isVisible ? "0.6s" : "0s" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8fa4ff]">
              Leasing Signing
            </p>
            <div className="mt-5 flex gap-4">
              <div className="h-12 w-16 overflow-hidden rounded-lg bg-slate-200">
                <Image
                  src="/house-3.jpg"
                  alt="Property"
                  width={64}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-2">
                <div className="h-2 w-24 rounded-full bg-slate-200" />
                <div className="h-2 w-16 rounded-full bg-slate-100" />
                <div className="h-2 w-20 rounded-full bg-slate-100" />
              </div>
            </div>
            {/* Dummy signature */}
            <div className="mt-8 flex justify-end">
              <svg
                viewBox="0 0 64 24"
                className="h-6 w-16 text-slate-400"
                aria-hidden="true"
              >
                <path
                  d="M2 18c8-6 10-12 14-12 4 0 3 8 6 8 3 0 5-10 9-10s4 8 7 8 7-4 10-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Right: copy + chat bubbles + feature chips */}
      <div className="flex flex-col gap-6 sm:gap-8 ml-0 lg:-ml-14">
        <div
          className={isVisible ? "opacity-0 animate-slide-in-right" : "opacity-0"}
          style={{ animationDelay: isVisible ? "0.8s" : "0s" }}
        >
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
            A New
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1d1d1f]">
            Way to Manage
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-500">
            Managing properties is really all about managing people, and the foundation of
            great tenant-landlord relationships is open communication. CuraPMS keeps
            both your business and your tenants in sync inside one interface.
          </p>
        </div>

        {/* Chat bubbles area */}
        <div className="mt-6 sm:mt-10 space-y-4">
          {/* Tenants bubble */}
          <div
            className={`ml-auto w-full max-w-sm rounded-l-4xl rounded-br-4xl border border-[#e3e9f7] bg-white px-5 sm:px-7 py-4 sm:py-5 text-left text-slate-700 shadow-[0_20px_60px_rgba(15,23,42,0.05)] ${
              isVisible ? "opacity-0 animate-slide-in-right" : "opacity-0"
            }`}
            style={{ animationDelay: isVisible ? "1s" : "0s" }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#9ba7c8]">
              Tenants
            </p>
            <p className="mt-3 text-sm font-medium leading-relaxed">
              I really appreciate how quick you always respond!
            </p>
          </div>

          {/* Landlord bubble */}
          <div
            className={`mr-auto w-full max-w-sm rounded-tr-4xl rounded-b-4xl bg-indigo-400 px-6 sm:px-9 py-5 sm:py-6 text-left text-sm text-white shadow-[0_35px_80px_rgba(6,34,85,0.55)] ${
              isVisible ? "opacity-0 animate-slide-in-right" : "opacity-0"
            }`}
            style={{ animationDelay: isVisible ? "1.2s" : "0s" }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#b3cffc]">
              Landlord
            </p>
            <p className="mt-3 text-base font-semibold leading-relaxed">
              Glad! Just name your service.
            </p>
          </div>
        </div>

        <div
          className={`flex flex-wrap gap-4 rounded-2xl bg-slate-50 p-5 text-sm text-slate-600 ${
            isVisible ? "opacity-0 animate-slide-in-right" : "opacity-0"
          }`}
          style={{ animationDelay: isVisible ? "1.4s" : "0s" }}
        >
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="h-5 w-5 text-[#2e5aac]" />
            <span>Tenant Screening</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="h-5 w-5 text-[#2e5aac]" />
            <span>Maintenance Request</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="h-5 w-5 text-[#2e5aac]" />
            <span>Expense Reports</span>
          </div>
        </div>
      </div>
    </section>
  );
}


