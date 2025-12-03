"use client";

import Image from "next/image";

export function PricingDashboardPreview() {
  return (
    <section className="space-y-10 rounded-[36px] bg-white px-6 py-16 ring-1 ring-slate-100 lg:px-14">
      <div className="text-center">
        <p className="text-3xl font-light text-slate-800">
          Simple. Powerful.{" "}
          <span className="font-semibold text-indigo-400">Free.</span>
        </p>
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="rounded-[36px] border-[18px] border-[#d9dde3] bg-white px-10 pb-12 pt-10 shadow-[0_35px_90px_rgba(15,23,42,0.15)]">
          <header className="mb-5 flex items-center gap-3 text-2xl font-semibold text-slate-900">
            <span className=" pr-3">
              <Image
                src="/acura1.png"
                alt="CuraPMS logo"
                width={50}
                height={20}
                className="h-auto w-auto object-contain" // Added this
                style={{
                  transform: "scale(1.2)",
                  transformOrigin: "left center",
                }} // Scale it up
                priority
              />
            </span>
            <span>Dashboard</span>
          </header>
          <div className="flex gap-6">
            <div className="flex w-12 flex-col items-center gap-5 text-slate-300">
              {["#", "⌂", "🗎", "🔍", "⚙"].map((icon) => (
                <span key={icon} className="text-2xl">
                  {icon}
                </span>
              ))}
            </div>

            <div className="flex-1 rounded-[26px] bg-[#f7f9fc] p-6">
              <p className="text-sm font-semibold text-slate-500">
                Yearly Rent Collection
              </p>

              <div className="mt-4 h-36 rounded-[20px] bg-white px-6 py-5">
                <div className="flex h-full items-end justify-between gap-3">
                  {Array.from({ length: 12 }).map((_, idx) => (
                    <span
                      key={idx}
                      className="w-4 rounded-full bg-[#dfe7fb]"
                      style={{ height: `${35 + (idx % 5) * 10}px` }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-[0.7fr_1fr]">
                <div className="flex items-center gap-4 rounded-[24px] bg-white p-4">
                  <div className="relative h-24 w-24">
                    <svg viewBox="0 0 100 100" className="h-full w-full">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#1f429e"
                        strokeWidth="12"
                        strokeDasharray={`${2 * Math.PI * 40 * 0.45} ${
                          2 * Math.PI * 40
                        }`}
                        strokeDashoffset={0}
                        transform="rotate(-90 50 50)"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#45d7a3"
                        strokeWidth="12"
                        strokeDasharray={`${2 * Math.PI * 40 * 0.55} ${
                          2 * Math.PI * 40
                        }`}
                        strokeDashoffset={-2 * Math.PI * 40 * 0.45}
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                  </div>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-6 rounded-full bg-[#1f429e]" />
                      Collected
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-6 rounded-full bg-[#45d7a3]" />
                      Pending
                    </div>
                  </div>
                </div>
                <div className="space-y-3 rounded-[24px] bg-white p-4">
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-[16px] bg-[#f4f6fb] px-4 py-2 text-sm text-slate-600"
                    >
                      <span className="font-semibold">Rent Reminder</span>
                      <span className="font-semibold text-slate-900">
                        $ {1200 - idx * 120}.00
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-10 flex h-[520px] w-64 flex-col rounded-[34px] border-[12px] border-[#d9dde3] bg-white px-5 pb-6 pt-8 shadow-[0_35px_70px_rgba(15,23,42,0.2)]">
          <header className="mb-5 flex items-center gap-2 text-sm font-semibold">
            <span className="pr-2">
              <Image
                src="/acura1.png"
                alt="CuraPMS logo"
                width={50}
                height={20}
                className="h-auto w-auto object-contain" // Added this
                style={{
                  transform: "scale(1.2)",
                  transformOrigin: "left center",
                }} // Scale it up
                priority
              />
            </span>
            <span className="text-lg text-slate-900">Dashboard</span>
          </header>
          <button className="mb-4 w-full rounded-tr-lg rounded-bl-lg bg-[#63d885] py-2 text-sm font-semibold text-white">
            Set up Auto Pay
          </button>
          <div className="rounded-[14px] bg-[#f1f4fa] px-4 py-3 text-xs text-slate-500">
            <p className="font-semibold text-slate-700">Processing</p>
            <p>Your payment of GHS 500 is processing</p>
          </div>
          <div className="mt-4 rounded-[16px] border border-slate-100 px-4 py-3 text-sm">
            <p className="text-slate-400">Payable Now</p>
            <p className="text-2xl font-semibold text-slate-900">GHS 500.00</p>
            <p className="mt-2 text-xs text-slate-400">House No 40</p>
          </div>

          <div className="mt-auto flex items-center gap-3 rounded-[18px] bg-white px-4 py-3 text-sm text-slate-700 shadow-[0_20px_50px_rgba(15,23,42,0.2)]">
            <div>
              <p className="text-xs font-semibold text-slate-400">
                Rent Reminder
              </p>
              <p className=" font-semibold">GHS 1,200.00</p>
            </div>
            <span className="h-10 w-10 overflow-hidden rounded-full">
              <img
                src="/testimonial.png"
                alt="Tenant"
                className="h-full w-full object-cover"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
