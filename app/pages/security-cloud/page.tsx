"use client";

import Image from "next/image";
import { LockClosedIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function SecurityCloudPage() {
  const topLeft = useScrollAnimation();
  const topRight = useScrollAnimation();
  const middleLeft = useScrollAnimation();
  const middleRight = useScrollAnimation();
  const bottomSection = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Top support / experience block */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-14 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1.1fr]">
          {/* Text column */}
          <div
            ref={topLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-5 ${topLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <span className="inline-flex rounded-full bg-indigo-400/10 px-4 py-1.5 text-[11px] font-semibold text-indigo-400">
              Maintenance Requests
            </span>
            <div>
              <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                It&apos;s About the Experience,
              </h1>
              <p className="mt-1 text-2xl font-semibold text-slate-900">
                Not Just the Features
              </p>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              Swift support to help your experience. You get strong support and
              strong security, every time.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              {["Direct Phone Support", "Email & Chat Support", "Comprehensive Data Encryption"].map(
                (item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Top-right composite shapes + bubbles (match design) */}
          <div
            ref={topRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative flex items-center justify-center ${topRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            {/* Pale background shape behind circle */}
            <div className="absolute -top-8 right-0 h-64 w-56 rounded-[60%_40%_60%_40%/55%_65%_45%_45%] bg-[#f7f1e3]" />

            {/* Main blue-rimmed organic circle with support image */}
            <div className="relative z-10 h-72 w-72 overflow-hidden rounded-[65%_45%_70%_40%/55%_70%_45%_60%] border-[10px] border-indigo-600 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.32)]">
              <Image
                src="/oldman.png"
                alt="Support on the phone"
                fill
                className="object-cover"
              />
            </div>

            {/* Red arch with secondary image (more like an “a” shape) */}
            <div className="absolute left-6 bottom-[-52px] z-10 flex h-52 w-60 items-end justify-center">
              {/* outer arch */}
              <div className="h-44 w-full rounded-[180px_180px_40px_40px] bg-[#f25b5c] shadow-[0_26px_70px_rgba(15,23,42,0.35)]" />
              {/* inner opening / photo – slightly inset to create thicker arch walls */}
              <div className="absolute inset-x-6 bottom-5 h-32 overflow-hidden rounded-[140px_140px_0_0] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.25)]">
                <Image
                  src="/guy2.png"
                  alt="On-site maintenance"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Light blue maintenance bubbles on left of arch (in front) */}
            <div className="absolute left-[-40px] bottom-4 z-30 space-y-3 text-[11px]">
              <div className="inline-flex max-w-xs rounded-full bg-[#dce8fb] px-5 py-2 text-slate-700 shadow-[0_20px_45px_rgba(15,23,42,0.25)]">
                Hi! I can’t schedule maintenance.
              </div>
              <div className="inline-flex max-w-xs rounded-full bg-[#dce8fb] px-5 py-2 text-slate-700 shadow-[0_20px_45px_rgba(15,23,42,0.25)]">
                Hi! I can’t schedule maintenance.
              </div>
            </div>

            {/* Small blue chat tags on top-right of circle */}
            <div className="absolute -top-4 right-4 space-y-2 text-[11px]">
              <div className="rounded-full bg-indigo-600 px-6 py-2 text-white shadow-lg">
                Hi! This Prince from CuraPMS
              </div>
              <div className="ml-10 rounded-full bg-indigo-600 px-6 py-2 text-white shadow-lg">
                How may we help you?
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle support chat + description */}
      <section className="mx-auto mt-24 max-w-7xl px-6 pb-14 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_1.05fr]">
          {/* Support chat card matching layout – now on the left */}
          <div
            ref={middleLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`flex items-start justify-center ${middleLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <div className="w-full max-w-lg rounded-[26px] bg-white text-xs shadow-[0_24px_60px_rgba(15,23,42,0.18)] ring-1 ring-slate-100">
              {/* Header */}
              <div className="rounded-t-[26px] bg-indigo-600 px-6 py-3 text-center text-[12px] font-semibold text-white">
                Support Chat
              </div>

              {/* Participant row */}
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-3 text-[11px] text-slate-600">
                <div className="flex items-center gap-3">
                  <span className="h-7 w-7 overflow-hidden rounded-full bg-slate-200" />
                  <div>
                    <p className="font-semibold text-slate-800">Admin</p>
                    <p className="text-[10px] text-slate-500">
                      last seen 5 mins ago
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <span>🔍</span>
                  <span>⋮</span>
                </div>
              </div>

              {/* Messages */}
              <div className="space-y-3 bg-[#f7f9fc] px-6 py-6 text-[11px] text-slate-800">
                {/* First message from tenant */}
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl bg-[#e3efff] px-4 py-2">
                    <p>Hi,I have listed a property but it not showing</p>
                    <p className="mt-1 text-right text-[9px] text-slate-500">
                      18:12 ✓✓
                    </p>
                  </div>
                </div>

                {/* Reply from admin */}
                <div className="flex justify-end">
                  <div className="max-w-[70%] rounded-2xl bg-indigo-600 px-4 py-2 text-white">
                    <p>Okay</p>
                    <p className="mt-1 text-right text-[9px] text-slate-200">
                      18:16 ✓
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl bg-indigo-600 px-4 py-2 text-white">
                    <p>Kindly try again now</p>
                    <p className="mt-1 text-right text-[9px] text-slate-200">
                      18:16 ✓
                    </p>
                  </div>
                </div>

                {/* Confirmation from tenant */}
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl bg-[#e3efff] px-4 py-2">
                    <p>It is showing now!. Thanks!</p>
                    <p className="mt-1 text-right text-[9px] text-slate-500">
                      18:17 ✓✓
                    </p>
                  </div>
                </div>
              </div>

              {/* Input row */}
              <div className="flex items-center gap-3 rounded-b-[26px] border-t border-slate-100 bg-white px-6 py-3 text-[11px] text-slate-400">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100">
                  ☺
                </span>
                <span className="flex-1 text-left text-slate-500">
                  Message
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white">
                  ➤
                </span>
              </div>
            </div>
          </div>

          {/* Copy moved to the right side */}
          <div
            ref={middleRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-5 text-sm leading-relaxed text-slate-600 ${middleRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Send and track messages to
              <br />
              <span className="font-semibold">and from Admin</span>
            </h2>
            <p>
              We make sure you get the support you need right inside chat.
              Anytime you reach out, you&apos;re talking to a real person who
              understands your property and how you manage it. We guide you
              through issues, answer questions fast, and help you stay on top of
              your tasks.
            </p>
            <p>
              Your tenants can also message us if they run into any problems,
              we&apos;ll assist them directly so you don&apos;t have to.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom security & cloud block – match curved hero design */}
      <section
        ref={bottomSection.elementRef as React.RefObject<HTMLElement>}
        className={`mt-10 ${bottomSection.isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="mx-auto max-w-7xl px-0 lg:px-0">
          <div className="relative overflow-hidden rounded-[60px_0_0_60px] bg-gradient-to-r from-[#0c3455] via-[#1f3f5e] to-[#8aa8c1] text-white">
            {/* Background image on left */}
            <div className="relative h-[320px] w-full lg:h-[360px]">
              <Image
                src="/lady1.png"
                alt="Secure property management"
                fill
                className="object-cover"
              />
              {/* Dark overlay gradient to improve text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/80 via-[#020817]/45 to-transparent" />
            </div>

            {/* Content row overlaid */}
            <div className="absolute inset-0 flex items-center px-6 lg:px-16">
              {/* Left icons over image */}
              <div className="relative flex-1">
                {/* Cloud badge */}
                <div className="absolute left-[35%] top-[24%] flex h-32 w-32 flex-col items-center justify-center rounded-[28px] bg-white/40 text-[#0b4a8f] shadow-none backdrop-blur-md border border-white/40">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#cde4ff]/70 bg-[#f4f9ff]/70">
                    <ShieldCheckIcon className="h-8 w-8 text-[#0b4a8f]" />
                  </div>
                </div>
                {/* Lock badge */}
                <div className="absolute left-[8%] bottom-[12%] flex h-32 w-32 flex-col items-center justify-center rounded-[28px] bg-white/40 text-[#0b4a8f] shadow-none backdrop-blur-md border border-white/40">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#cde4ff]/70 bg-[#f4f9ff]/70">
                    <LockClosedIcon className="h-8 w-8 text-[#0b4a8f]" />
                  </div>
                </div>
              </div>

              {/* Right text block */}
              <div className="ml-auto flex-1 max-w-md space-y-4 text-sm leading-relaxed">
                <h2 className="text-2xl font-semibold">
                  Reliable, worry‑free <span className="font-bold">security</span>
                </h2>
                <p className="text-white/95">
                  We take your data protection seriously, and we constantly
                  update our security measures to keep everything locked down.
                  All information sent or stored in the system is protected with
                  strong encryption, and the entire platform runs in a secure
                  cloud environment with multiple layers of defense.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials strip */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <TestimonialsSection />
      </div>
    </div>
  );
}


