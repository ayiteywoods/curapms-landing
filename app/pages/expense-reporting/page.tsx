"use client";

import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/outline";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function ExpenseReportingPage() {
  const topLeft = useScrollAnimation();
  const topRight = useScrollAnimation();
  const middleLeft = useScrollAnimation();
  const middleRight = useScrollAnimation();
  const bottomLeft = useScrollAnimation();
  const bottomRight = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Top Section: Organize Financial with Pie Chart */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          {/* Left Column - Text */}
          <div
            ref={topLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 ${topLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <span className="inline-flex rounded-full bg-indigo-400/10 px-4 py-1.5 text-xs font-medium text-indigo-400">
              Expense & Reporting
            </span>
            <div>
              <h1 className="text-5xl font-bold text-slate-900">
                Easy Access and <span className="text-indigo-400">Organize Financial</span>
              </h1>
            </div>
            <p className="text-base leading-relaxed text-slate-600">
              It&apos;s easier than ever to track the health of your business.
              Cura360 helps automate your process of tracking both expenses and
              income and allows you to generate the reports you need on the fly.
              Record payments and manage invoices.
            </p>
            <ul className="space-y-3">
              {[
                "Say goodbye to printed work orders",
                "Complete more requests, more quickly",
                "Give tenants professional, fast response times",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-700" />
                  <span className="text-base text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Pie Chart */}
          <div
            ref={topRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`flex items-center justify-center ${topRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              {/* Pie Chart SVG */}
              <svg
                viewBox="0 0 200 200"
                className="h-80 w-80"
              >
                {/* Income - Large indigo segment */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="transparent"
                  stroke="#818cf8"
                  strokeWidth="40"
                  strokeDasharray={`${(200 * Math.PI * 0.5).toFixed(2)} ${(200 * Math.PI).toFixed(2)}`}
                  transform="rotate(-90 100 100)"
                />
                {/* Profit - Medium green segment */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="transparent"
                  stroke="#15803d"
                  strokeWidth="40"
                  strokeDasharray={`${(200 * Math.PI * 0.3).toFixed(2)} ${(200 * Math.PI).toFixed(2)}`}
                  strokeDashoffset={`-${(200 * Math.PI * 0.5).toFixed(2)}`}
                  transform="rotate(-90 100 100)"
                />
                {/* Expense - Smaller beige segment */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="transparent"
                  stroke="#d4a574"
                  strokeWidth="40"
                  strokeDasharray={`${(200 * Math.PI * 0.2).toFixed(2)} ${(200 * Math.PI).toFixed(2)}`}
                  strokeDashoffset={`-${(200 * Math.PI * 0.8).toFixed(2)}`}
                  transform="rotate(-90 100 100)"
                />
              </svg>

              {/* Legend */}
              <div className="absolute -left-32 top-1/2 -translate-y-1/2 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-indigo-400" />
                  <span className="text-sm font-medium text-slate-700">Income</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-green-700" />
                  <span className="text-sm font-medium text-slate-700">Profit</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-[#d4a574]" />
                  <span className="text-sm font-medium text-slate-700">Expense</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Middle Section: Budgeting UI and Track Smarter */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          {/* Left - Budgeting UI */}
          <div className="space-y-6 rounded-3xl bg-slate-50 p-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                  <Image
                    src="/guy1.png"
                    alt="User"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-sm font-semibold text-slate-700">
                  Budget for November
                </span>
              </div>
              <button className="rounded-tr-lg rounded-bl-lg bg-green-700 px-4 py-2 text-xs font-semibold text-white hover:bg-green-800">
                Create New Budget
              </button>
            </div>

            {/* Budget Amount */}
            <div className="flex items-center justify-between">
              <button className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50">
                Edit Budget
              </button>
              <p className="text-4xl font-bold text-slate-900">GHS 3400.00</p>
            </div>

            {/* Available Budget Card */}
            <div className="rounded-2xl bg-red-50 border border-red-200 p-4">
              <p className="mb-2 text-xs font-medium text-red-700">
                Available Budget
              </p>
              <p className="text-3xl font-bold text-red-900">GHS 1300.00</p>
            </div>

            {/* Monthly Expenses Card */}
            <div className="relative rounded-2xl bg-indigo-400 p-6">
              <div className="absolute left-4 top-4">
                <button className="rounded-lg border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium text-white hover:bg-white/30">
                  Edit Expenses
                </button>
              </div>
              <div className="absolute right-4 top-4">
                <button className="rounded-tr-lg rounded-bl-lg bg-green-700 px-3 py-1 text-xs font-semibold text-white hover:bg-green-800">
                  Add Expenses
                </button>
              </div>
              <p className="mb-4 mt-12 text-sm font-semibold text-white">
                Monthly Expenses
              </p>
              
              {/* Bar Chart */}
              <div className="flex items-end justify-between gap-2">
                {Array.from({ length: 12 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="flex-1 rounded-t bg-white/30"
                    style={{
                      height: `${30 + (idx % 5) * 15}px`,
                    }}
                  />
                ))}
              </div>
              
              <div className="mt-4 flex justify-end">
                <span className="rounded-lg bg-white/20 px-3 py-1 text-xs font-medium text-white">
                  December Expenses Ghs 500.00
                </span>
              </div>
            </div>
          </div>

          {/* Right - Track Smarter Text */}
          <div className="flex items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-slate-900">
                Track Smarter. <span className="text-indigo-400">Spend Better.</span>
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                Stay on top of every expense and budget with ease. This tool
                helps you record costs, plan ahead, and understand where your
                money is going—so you can manage your property or personal
                finances with confidence. Everything is organized, clear, and
                always available when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bottom Section: Property Financial Reports and Table */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Left - Property Financial Reports Text */}
          <div className="flex items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-slate-900">
                <span className="text-indigo-400">Property Financial Reports</span>
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                Stay on top of every expense and budget with ease. This tool
                helps you record costs, plan ahead, and understand where your
                money is going—so you can manage your property or personal
                finances with confidence. Everything is organized, clear, and
                always available when you need it.
              </p>
            </div>
          </div>

          {/* Right - Financial Reports Table */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600">
                      Property
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600">
                      Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600">
                      Budget
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600">
                      Expense
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600">
                      Profit
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    {
                      property: "Oakwood Apartme",
                      date: "GHS 1....",
                      budget: "GHS 1.",
                      expense: "5%",
                    },
                    {
                      property: "2-Bedroom Apart",
                      date: "GHS 2....",
                      budget: "GHS 2...",
                      expense: "6%",
                    },
                    {
                      property: "Studio Apartment,",
                      date: "GHS 6....",
                      budget: "GHS 6....",
                      expense: "10%",
                    },
                    {
                      property: "Sunset Villa",
                      date: "GHS 1....",
                      budget: "GHS 1.",
                      expense: "20%",
                    },
                    {
                      property: "Oak-wood Apartm",
                      date: "GHS 850",
                      budget: "GHS 850",
                      expense: "14%",
                    },
                    {
                      property: "Riverside Complex",
                      date: "GHS 3,...",
                      budget: "GHS 3,...",
                      expense: "30%",
                    },
                    {
                      property: "Downtown loft",
                      date: "GHS 1,...",
                      budget: "GHS 1,...",
                      expense: "15%",
                    },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="px-4 py-3 text-sm text-slate-700">
                        {row.property}
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-600">
                        {row.date}
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-600">
                        {row.budget}
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-600">
                        {row.expense}
                      </td>
                      <td className="px-4 py-3 text-sm font-semibold text-green-600">
                        {row.expense}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary Bars */}
            <div className="space-y-3">
            <div className="rounded-2xl bg-indigo-400 px-6 py-4">
                <p className="text-sm font-medium text-white">
                  Total Expenses <span className="font-bold">GHS 120, 400</span>
                </p>
              </div>
              <div className="rounded-2xl bg-green-700 px-6 py-4">
                <p className="text-sm font-medium text-white">
                  Total Profit <span className="font-bold">GHS 10, 400</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Testimonials Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <TestimonialsSection />
      </div>
    </div>
  );
}

