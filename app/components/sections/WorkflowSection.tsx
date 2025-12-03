"use client";

import Image from "next/image";

const tenantPeople = ["/guy1.png", "/guy2.png", "/lady1.png", "/small.png", "/house-3.jpg"];

export function WorkflowSection() {
  return (
    <section className="relative overflow-hidden rounded-[36px] bg-white px-4 sm:px-6 py-12 sm:py-16 ring-1 ring-slate-100 lg:px-14">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-start">
        {/* Left tall card */}
        <div className="flex-shrink-0 w-full sm:w-auto">
          <div className="h-[280px] w-full sm:h-[360px] sm:w-[220px] rounded-[26px] bg-indigo-400 shadow-[0_32px_80px_rgba(15,23,42,0.35)] opacity-0 lg:h-[400px] lg:w-[240px] animate-fade-in-up" style={{ animationDelay: "0s" }}>
            <div className="flex h-full flex-col items-center justify-center gap-6 px-6 text-center text-white">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 ring-2 ring-white/40">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <span className="text-[#0c4a8a] text-2xl">✓</span>
                </div>
              </div>
              <div className="space-y-1 text-xs font-medium tracking-wide text-white/80">
                <p>Properties Added</p>
                <p>Successfully</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right cards laid out to resemble reference image */}
        <div className="flex-1">
          <div className="relative mx-auto min-h-[600px] sm:h-[430px] w-full max-w-[780px]">
            {/* Tenants Screening */}
            <div className="absolute left-0 top-0 lg:-left-8 lg:-top-8 w-full sm:w-80 rounded-[26px] bg-white p-4 sm:p-5 text-left shadow-[0_24px_60px_rgba(15,23,42,0.16)] ring-1 ring-slate-100 opacity-0 animate-fade-in-up" style={{ animationDelay: "1.6s" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Tenants Screening
              </p>
              <div className="mt-5 space-y-3">
                {tenantPeople.map((src, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="h-9 w-9 overflow-hidden rounded-full bg-slate-200">
                      <Image
                        src={src}
                        alt="Tenant"
                        width={36}
                        height={36}
                        className="h-full w-full object-cover"
                      />
                    </span>
                    <div className="flex-1 space-y-1">
                      <div className="h-2 w-32 rounded-full bg-slate-100" />
                      <div className="h-2 w-24 rounded-full bg-slate-100" />
                    </div>
                    <div className="h-2 w-10 rounded-full bg-emerald-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Lease Signing */}
            <div className="absolute left-0 top-[320px] sm:top-[280px] lg:-left-12 w-full sm:w-80 rounded-[26px] bg-white p-4 sm:p-5 text-left shadow-[0_24px_60px_rgba(15,23,42,0.16)] ring-1 ring-slate-100 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Lease Signing
              </p>
              <div className="mt-5 space-y-3">
                {/* First entry with property image */}
                <div className="flex gap-3">
                  <div className="h-12 w-16 overflow-hidden rounded-lg bg-slate-200">
                    <Image
                      src="/house-3.jpg"
                      alt="Property"
                      width={64}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="h-2 w-28 rounded-full bg-slate-200" />
                    <div className="h-2 w-24 rounded-full bg-slate-100" />
                    <div className="h-2 w-32 rounded-full bg-slate-100" />
                  </div>
                  <div className="h-2 w-10 rounded-full bg-emerald-400" />
                </div>
                {/* Additional entries with circular dots */}
                {[1, 2, 3, 4].map((idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-200" />
                    <div className="flex-1 space-y-1">
                      <div className="h-2 w-36 rounded-full bg-slate-100" />
                      <div className="h-2 w-32 rounded-full bg-slate-50" />
                    </div>
                    <div className="h-2 w-10 rounded-full bg-emerald-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Invoice */}
            <div className="absolute left-0 top-[160px] sm:left-[360px] sm:top-0 w-full sm:w-[260px] rounded-[26px] bg-white p-0 text-left shadow-[0_24px_60px_rgba(15,23,42,0.18)] ring-1 ring-slate-100 opacity-0 animate-fade-in-up hidden sm:block" style={{ animationDelay: "2.4s" }}>
              <div className="rounded-t-[26px] bg-indigo-400 px-6 py-5 text-base font-semibold text-white">
                Invoice
              </div>
              <div className="space-y-4 px-6 py-5 text-sm text-slate-600">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Rent Payment
                  </p>
                  <p className="text-[11px] text-slate-400">Invoice ID #00356</p>
                </div>
                <p className="text-2xl font-semibold text-slate-900">
                  GHS 500.00
                </p>
                <div className="space-y-2">
                  <div className="h-2 w-40 rounded-full bg-slate-100" />
                  <div className="h-2 w-32 rounded-full bg-slate-50" />
                </div>
              </div>
            </div>

            {/* Tenant Lease */}
            <div className="absolute left-0 top-[480px] sm:left-[332px] sm:top-[255px] w-full sm:w-[320px] rounded-[26px] bg-white p-4 sm:p-5 text-left shadow-[0_24px_60px_rgba(15,23,42,0.18)] ring-1 ring-slate-100 opacity-0 animate-fade-in-up hidden sm:block" style={{ animationDelay: "3.2s" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Tenant Lease
              </p>
              {/* Row with circular icon, placeholder bars, and green status */}
              <div className="mt-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-200" />
                <div className="flex-1 space-y-1">
                  <div className="h-2 w-36 rounded-full bg-slate-100" />
                  <div className="h-2 w-32 rounded-full bg-slate-50" />
                </div>
                <div className="h-2 w-10 rounded-full bg-emerald-400" />
              </div>
              {/* Signature area with dashed border */}
              <div className="mt-4 h-24 rounded-2xl border border-dashed border-blue-300 bg-white">
                <svg
                  viewBox="0 0 120 40"
                  className="h-full w-full text-slate-400"
                  aria-hidden="true"
                >
                  <path
                    d="M5 30c15-12 22-18 30-18 8 0 6 10 12 10s8-14 16-14c8 0 7 12 14 12 7 0 14-6 23-18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Payment Received & Rent Payment - Combined Card */}
            <div className="absolute right-0 sm:right-4 top-[640px] sm:top-36 w-full sm:w-[210px] rounded-[26px] overflow-hidden bg-white text-left shadow-[0_28px_70px_rgba(15,23,42,0.32)] ring-1 ring-slate-100 opacity-0 animate-fade-in-up hidden sm:block" style={{ animationDelay: "4s" }}>
              {/* Top Section - Payment Received */}
              <div className="bg-indigo-400 px-6 py-6 text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-2 ring-white/40">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                      <span className="text-[#0c4a8a] text-2xl">✓</span>
                    </div>
                  </div>
                  <div className="text-xs font-medium text-white/80">
                    <p>Payment Received</p>
                  </div>
                </div>
              </div>

              {/* Bottom Section - Rent Payment */}
              <div className="bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Rent Payment
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="h-9 w-9 overflow-hidden rounded-full bg-slate-200">
                    <Image
                      src="/small.png"
                      alt="Tenant"
                      width={36}
                      height={36}
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <div className="flex-1 space-y-1">
                    <div className="h-2 w-24 rounded-full bg-slate-100" />
                    <div className="h-2 w-20 rounded-full bg-slate-50" />
                  </div>
                </div>
                <p className="mt-5 text-xl font-semibold text-slate-900">
                  GHS 500.00
                </p>
                <div className="mt-3 space-y-2">
                  <div className="h-2 w-36 rounded-full bg-slate-100" />
                  <div className="h-2 w-28 rounded-full bg-slate-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

