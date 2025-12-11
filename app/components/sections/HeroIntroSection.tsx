"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  BellAlertIcon,
  BellIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const featurePills = [
  { label: "Rent Collection", icon: BanknotesIcon },
  { label: "Tenant Care", icon: ShieldCheckIcon },
  { label: "Expense Tracking", icon: ChartBarIcon },
];

export function HeroIntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden rounded-[36px] bg-gradient-to-b from-white via-white to-[#f4f7ff] px-4 sm:px-6 py-16 sm:py-24 ring-1 ring-slate-50 lg:px-16 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        {/* Faded background image on the left */}
        <div className="absolute top-40 bottom-0 left-0 w-1/2 opacity-20">
          <Image
            src="/2.png"
            alt=""
            fill
            className="object-contain object-left"
          />
        </div>
        <svg
          className="absolute left-0 top-8 h-56 w-56 text-[#c8dcff]"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="6 8"
        >
          <path d="M5 150C80 110 110 40 195 15" />
        </svg>
        <svg
          className="absolute right-6 bottom-4 h-48 w-48 text-[#c8dcff]"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="6 8"
        >
          <path d="M10 10c50 80 120 100 180 160" />
        </svg>
        <svg
          className="absolute right-1/2 top-6 h-64 w-64 translate-x-1/2 text-[#d7e6ff]"
          viewBox="0 0 300 300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="10 10"
          strokeLinecap="round"
        >
          <path d="M10 290C100 40 200 60 290 15" />
        </svg>
        <svg
          className="absolute left-8 bottom-10 h-44 w-44 text-[#d2e3ff]"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="8 8"
        >
          <path d="M190 20C120 80 100 140 20 190" />
        </svg>
        <svg
          className="absolute right-1/3 top-1/3 h-52 w-52 text-[#cfe1ff]"
          viewBox="0 0 220 220"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="7 9"
        >
          <path d="M5 30C120 60 140 160 210 210" />
        </svg>
        <svg
          className="absolute left-1/2 bottom-12 h-48 w-48 -translate-x-1/2 text-[#d7e6ff]"
          viewBox="0 0 240 240"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="5 9"
        >
          <path d="M5 120c80-80 150-40 230-110" />
        </svg>
        <svg
          className="absolute right-24 top-1/4 h-40 w-40 text-[#c2d8ff]"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 8"
        >
          <path d="M10 180C40 120 120 70 190 20" />
        </svg>
      </div>

      <div className="relative z-20 flex flex-col items-center text-center">
        <p
          className={`text-sm font-semibold uppercase tracking-[0.4em] text-slate-400 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          Property Management
        </p>
        <h1
          className={`mt-4 text-3xl sm:text-4xl font-semibold text-slate-900 transition-all duration-700 lg:text-5xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <span className="text-green-700">Simple</span>, Secure, &amp;{" "}
          <span className="text-indigo-400">Trusted</span>
          <br />
          Property Management System
        </h1>
        <p
          className={`mt-4 max-w-2xl text-lg text-slate-500 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          From rent collection to tenant care, everything you need is always
          within reach.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email) {
              const subject = encodeURIComponent("Get Started Request");
              const body = encodeURIComponent(`A user wants to get started with CuraPMS.\n\nEmail: ${email}`);
              window.location.href = `mailto:info@nerasolgh.com?subject=${subject}&body=${body}`;
              setEmail("");
            }
          }}
          className={`relative z-30 mt-8 flex w-full max-w-xl flex-col gap-4 transition-all duration-700 sm:flex-row ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: isVisible ? "0.1s" : "0s" }}
        >
          <label className="flex flex-1 items-center gap-3 rounded-lg border border-slate-200 px-5 py-3 text-left text-sm text-slate-500">
            <EnvelopeIcon className="h-5 w-5 text-slate-400" />
            <input
              type="email"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value || "")}
              placeholder="Enter your Email"
              required
              className="flex-1 border-none bg-transparent text-sm text-slate-700 outline-none"
            />
          </label>
          <button
            type="submit"
            className="rounded-tr-lg rounded-bl-lg bg-green-700 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-600"
          >
            Get Started for Free
          </button>
        </form>

        <div
          className={`mt-6 flex flex-wrap justify-center gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: isVisible ? "0.2s" : "0s" }}
        >
          {featurePills.map((pill) => (
            <span
              key={pill.label}
              className="flex items-center gap-2 rounded-tr-lg rounded-bl-lg border border-slate-200/70 bg-white/70 px-5 py-3 text-[11px] text-slate-500 shadow-[0_8px_25px_rgba(15,23,42,0.08)] backdrop-blur"
            >
              <pill.icon className="h-3.5 w-3.5 text-green-700" />
              {pill.label}
            </span>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute left-4 top-16 hidden sm:block w-44 sm:w-48 rounded-[28px] border border-slate-100 bg-white p-3 sm:p-4 shadow-[0_25px_60px_rgba(15,23,42,0.08)] transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: isVisible ? "0.1s" : "0s" }}
        >
          <p className="text-xs font-semibold text-slate-400">Income vs Expenses</p>
          <div className="mt-3 flex items-end gap-1.5">
            {Array.from({ length: 9 }).map((_, idx) => (
              <span
                key={idx}
                className="w-2 rounded-full bg-slate-200"
                style={{ height: `${28 + (idx % 5) * 8}px` }}
              />
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-500">
            Add Income
          </div>
          <div className="mt-2 rounded-xl bg-slate-100 px-3 py-2 text-xs text-slate-600">
            Add Expenses
          </div>
        </div>

        <div
          className={`absolute left-4 bottom-[120px] hidden sm:block w-40 sm:w-44 rounded-[26px] border border-slate-100 bg-white p-3 sm:p-4 shadow-[0_25px_60px_rgba(15,23,42,0.08)] transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: isVisible ? "0.2s" : "0s" }}
        >
          <p className="text-xs font-semibold text-slate-400">
            Monthly Property Performance
          </p>
          <div className="mt-3 flex items-end gap-1">
            {Array.from({ length: 10 }).map((_, idx) => (
              <span
                key={idx}
                className="w-2 rounded-full bg-slate-200"
                style={{ height: `${24 + (idx % 4) * 7}px` }}
              />
            ))}
          </div>
        </div>

        <div
          className={`absolute right-4 top-8 hidden lg:flex items-center gap-3 rounded-[28px] border border-slate-100 bg-white p-4 shadow-[0_25px_60px_rgba(15,23,42,0.12)] transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: isVisible ? "0.3s" : "0s" }}
        >
          <div className="h-14 w-20 overflow-hidden rounded-[18px]">
            <Image
              src="/house-3.jpg"
              alt="Property"
              width={56}
              height={56}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Property</p>
            <p className="text-xs text-slate-500">Beachfront Villa</p>
          </div>
          <span className="relative -mr-2 rounded-full border border-white bg-white p-0.5 shadow-lg">
            <Image
              src="/lady1.png"
              alt="Tenant avatar"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full object-cover"
            />
          </span>
        </div>

        <div
          className={`absolute right-2 top-[200px] z-10 w-56 sm:w-60 hidden lg:block rounded-[32px] border border-slate-100 bg-white p-4 sm:p-5 text-left shadow-[0_25px_60px_rgba(15,23,42,0.12)] transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: isVisible ? "0.4s" : "0s" }}
        >
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>Rent is Due</span>
            <span className="flex items-center gap-1 rounded-full bg-[#f1f4ff] px-3 py-1 text-[10px] text-slate-600">
              <BellAlertIcon className="h-3 w-3" />
              Alert
            </span>
          </div>
          <div className="mt-3 grid grid-cols-7 gap-1 text-center text-xs text-slate-400">
            {"SMTWTFS".split("").map((day, idx) => (
              <span key={`${day}-${idx}`}>{day}</span>
            ))}
            {Array.from({ length: 28 }).map((_, idx) => (
              <span
                key={idx}
                className={`rounded-full py-1 ${
                  idx === 16
                    ? "bg-green-700 font-semibold text-white"
                    : "text-slate-500"
                }`}
              >
                {idx + 1}
              </span>
            ))}
          </div>
          <div className="absolute -left-14 top-1/2 -translate-y-1/2 rounded-full border border-white bg-white p-1 shadow-lg">
            <Image
              src="/guy1.png"
              alt="Reminder avatar"
              width={34}
              height={34}
              className="h-8 w-8 rounded-full object-cover"
            />
          </div>
          
        </div>

        <div
          className={`absolute right-4 sm:right-28 bottom-32 z-10 hidden sm:block w-56 sm:w-64 rounded-[28px] border border-slate-100 bg-white p-4 sm:p-5 text-left shadow-[0_25px_60px_rgba(15,23,42,0.12)] transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: isVisible ? "0.5s" : "0s" }}
        >
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>Rent Payment</span>
            <span className="flex items-center gap-1 rounded-full border border-slate-200 px-3 py-0.5 text-[10px] text-slate-500">
              <BellIcon className="h-3 w-3" />
              Due
            </span>
          </div>
          <p className="mt-3 text-[13px] font-semibold text-indigo-400">
            Notification
          </p>
          <p className="text-sm font-semibold text-slate-900">
            GHS 500 payment made
          </p>
          <div className="mt-3 flex items-center gap-3 text-xs text-slate-600">
            <span className="h-10 w-10 overflow-hidden rounded-full">
              <Image
                src="/guy2.png"
                alt="Landlord"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </span>
            <div>
              <p className="font-semibold">Kwame Boateng</p>
              <p className="text-slate-400">Payment made Stella</p>
            </div>
          </div>
        </div>

        <div
          className={`absolute right-4 sm:right-56 bottom-6 z-10 hidden sm:flex items-center gap-3 rounded-[26px] border border-slate-100 bg-white px-4 py-3 text-sm text-slate-600 shadow-[0_20px_40px_rgba(15,23,42,0.12)] transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: isVisible ? "0.6s" : "0s" }}
        >
          <span className="h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="/lady1.png"
              alt="Stella"
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </span>
          <div>
            <p className="text-xs font-semibold text-slate-400">Rent Payment</p>
            <p className="font-semibold text-slate-900">Notification sent</p>
          </div>
        </div>
      </div>
    </section>
  );
}

