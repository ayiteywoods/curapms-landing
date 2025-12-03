"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function DashboardSection() {
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
      className={`relative overflow-hidden space-y-8 rounded-[36px] bg-white px-4 py-16 text-center ring-1 ring-slate-100 sm:px-8 lg:px-14 ${
        isVisible ? "opacity-0 animate-scale-in" : "opacity-0"
      }`}
    >
      {/* Faded background image on the left */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 opacity-25">
        <Image
          src="/2.png"
          alt=""
          fill
          className="object-contain object-left"
        />
      </div>
      <p
        className={`text-2xl text-slate-500 sm:text-3xl ${
          isVisible ? "opacity-0 animate-scale-in" : "opacity-0"
        }`}
        style={{ animationDelay: isVisible ? "0.2s" : "0s" }}
      >
        Available <span className="font-semibold text-slate-900">Anytime. Anywhere</span>
      </p>

      <div className="relative mx-auto flex max-w-5xl items-center justify-center">
        {/* Desktop dashboard */}
        <div
          className={`w-full rounded-[40px] border-[8px] sm:border-[14px] border-[#e2e5ea] bg-white px-4 sm:px-6 lg:px-10 pb-6 sm:pb-10 pt-6 sm:pt-8 text-left shadow-[0_30px_90px_rgba(15,23,42,0.18)] ${
            isVisible ? "opacity-0 animate-scale-in" : "opacity-0"
          }`}
          style={{ animationDelay: isVisible ? "0.4s" : "0s" }}
        >
          <header className="mb-4 sm:mb-8 flex items-center gap-2 sm:gap-4 text-base sm:text-lg font-semibold">
            <span className="text-2xl sm:text-3xl font-bold text-[#22b573]">LGO</span>
            <span className="text-xl sm:text-2xl text-slate-900">Dashboard</span>
          </header>

          <div className="flex gap-3 sm:gap-6">
            {/* Sidebar icons */}
            <aside className="mt-2 hidden sm:flex h-full w-10 sm:w-12 flex-col items-center justify-start gap-3 sm:gap-5 rounded-3xl bg-slate-50 py-4 sm:py-6">
              <span className="h-4 w-4 rounded-[4px] bg-slate-300" />
              <span className="h-4 w-4 rounded-full bg-slate-300" />
              <span className="h-4 w-4 rounded-[3px] bg-slate-300" />
              <span className="h-4 w-4 rounded-[3px] bg-slate-300" />
              <span className="h-4 w-4 rounded-full bg-slate-300" />
              <span className="h-4 w-4 rounded-[3px] bg-slate-300" />
            </aside>

            {/* Main dashboard content */}
            <div className="flex-1 space-y-4 sm:space-y-6">
              <div>
                <p className="text-xs sm:text-sm text-slate-400">Yearly Rent Collection</p>
                <div className="mt-2 sm:mt-3 h-24 sm:h-32 rounded-3xl bg-slate-50 px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
                  <div className="flex h-full items-end justify-between">
                    {[20, 55, 38, 70, 45, 62, 35, 58, 42, 68, 50, 60].map(
                      (h, i) => (
                        <span
                          key={i}
                          className="w-4 rounded-full bg-[#eef2ff]"
                          style={{ height: `${h}%` }}
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-start gap-4 sm:gap-10">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="relative h-32 w-32 sm:h-44 sm:w-44 rounded-full bg-[#e2f7e9]">
                    <div className="absolute inset-3 sm:inset-5 rounded-full border-[12px] sm:border-[20px] border-transparent border-t-indigo-400 border-l-indigo-400 border-r-green-700" />
                    <div className="absolute inset-6 sm:inset-10 rounded-full bg-white" />
                  </div>
                  <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-6 rounded-full bg-indigo-400" />
                      <span>Collected Rent</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-6 rounded-full bg-[#7ce4a8]" />
                      <span>Upcoming Payments</span>
                    </div>
                  </div>
                </div>

                <div className="hidden flex-1 space-y-3 rounded-3xl bg-slate-50 p-4 text-sm text-slate-500 sm:block">
                  {[1, 2, 3].map((row) => (
                    <div key={row} className="flex items-center gap-3">
                      <span className="h-8 w-8 rounded-full bg-slate-200" />
                      <div className="flex-1 space-y-1">
                        <div className="h-2 w-3/5 rounded-full bg-slate-200" />
                        <div className="h-2 w-2/5 rounded-full bg-slate-100" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile dashboard overlay */}
        <div
          className={`absolute -right-2 sm:-right-4 -bottom-10 hidden h-[380px] sm:h-[420px] w-52 sm:w-60 rounded-[36px] border-[8px] sm:border-[10px] border-[#e2e5ea] bg-white px-4 sm:px-5 pb-4 sm:pb-6 pt-4 sm:pt-6 text-left shadow-[0_35px_80px_rgba(15,23,42,0.35)] sm:block lg:right-0 ${
            isVisible ? "opacity-0 animate-scale-in" : "opacity-0"
          }`}
          style={{ animationDelay: isVisible ? "0.6s" : "0s" }}
        >
          <header className="mb-5 flex items-center gap-2 text-sm font-semibold">
            <span className="text-xl font-bold text-[#22b573]">LGO</span>
            <span className="text-lg text-slate-900">Dashboard</span>
          </header>

          <div className="space-y-4">
            <div>
              <p className="text-[11px] text-slate-400">Yearly Rent Collection</p>
              <div className="mt-2 h-14 rounded-2xl bg-slate-50 px-3 py-2">
                <div className="flex h-full items-end justify-between">
                  {[35, 65, 45, 75, 55, 70, 50, 68].map((h, i) => (
                    <span
                      key={i}
                      className="w-1.5 rounded-full bg-[#e3ebff]"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className="text-[11px] text-slate-400">Revenue vs Expense</p>
              <div className="mt-2 flex items-center gap-3">
                <div className="relative h-16 w-16 rounded-full bg-[#e2f7e9]">
                  <div className="absolute inset-3 rounded-full border-[10px] border-transparent border-t-indigo-400 border-l-indigo-400 border-r-green-700" />
                  <div className="absolute inset-5 rounded-full bg-white" />
                </div>
                <div className="space-y-1 text-[11px] text-slate-500">
                  <div className="flex items-center gap-1">
                    <span className="h-1.5 w-4 rounded-full bg-indigo-400" />
                    <span>Revenue</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="h-1.5 w-4 rounded-full bg-[#7ce4a8]" />
                    <span>Expense</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-[11px] text-slate-500">
              {[1, 2, 3].map((row) => (
                <div key={row} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-200" />
                  <div className="flex-1 space-y-1">
                    <div className="h-1.5 w-3/4 rounded-full bg-slate-200" />
                    <div className="h-1.5 w-1/2 rounded-full bg-slate-100" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

