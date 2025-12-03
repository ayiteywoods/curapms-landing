"use client";

import { useEffect, useRef, useState } from "react";
import { BanknotesIcon, ClockIcon } from "@heroicons/react/24/outline";

const benefits = [
  {
    title: "Save Time",
    description:
      "At CuraPMS, we know your time is valuable. That's why we created a software that streamlines your business. Our features help you get things done faster and easier. And who wouldn't want that?",
    icon: ClockIcon,
  },
  {
    title: "Save Money",
    description:
      "At CuraPMS, we know your time is valuable. That's why we created a software that streamlines your business. Our features help you get things done faster and easier. And who wouldn't want that?",
    icon: BanknotesIcon,
  },
];

export function SaveMoreSection() {
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
      className={`relative overflow-hidden rounded-[36px] bg-white px-4 sm:px-8 py-12 sm:py-16 ring-1 ring-slate-100 lg:px-20 ${
        isVisible ? "opacity-0 animate-slide-in-left" : "opacity-0"
      }`}
    >
      {/* subtle angled background on the right */}
      <div className="pointer-events-none absolute inset-y-0 right-[-15%] hidden w-2/3 bg-[radial-gradient(circle_at_top,_#f4f7ff,_transparent_60%)] lg:block" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
            A whole new way to
          </p>
          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight text-[#1d1d1f] lg:text-[56px]">
            Save Money &amp; Time
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-500">
            Managing properties is really all about managing people, and the foundation of
            great tenant-landlord relationships is open communication. CuraPMS keeps
            both your business and your tenants in sync inside one interface.
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-2 md:gap-x-28 md:gap-y-16">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className={`space-y-4 ${
                isVisible ? "opacity-0 animate-slide-in-left" : "opacity-0"
              }`}
              style={{ animationDelay: isVisible ? `${0.2 + index * 0.2}s` : "0s" }}
            >
              <div className="flex items-center gap-2 text-[#2563eb]">
                <benefit.icon className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.25em]">
                  {benefit.title}
                </span>
              </div>
              <p className="text-base leading-relaxed text-slate-500">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

