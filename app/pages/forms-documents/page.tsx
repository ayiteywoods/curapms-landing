"use client";

import Image from "next/image";
import { DocumentTextIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function FormsDocumentsPage() {
  const heroLeft = useScrollAnimation();
  const heroRight = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section: Forms & Documents */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.1fr]">
          {/* Left text */}
          <div
            ref={heroLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 ${heroLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <span className="inline-flex rounded-full bg-indigo-400/10 px-4 py-1.5 text-xs font-semibold text-indigo-400">
              Forms &amp; Documents
            </span>
            <div>
              <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
                Keep every lease and form
              </h1>
              <p className="mt-1 text-2xl font-semibold text-slate-900">
                organized in one place.
              </p>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              Build, store, and share your most important tenant documents in a
              single, secure workspace. From applications and lease packets to
              notices and renewals, everything stays easy to find and ready to
              send.
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Save time with reusable, pre‑built templates</li>
              <li>• Attach files directly to tenants and properties</li>
              <li>• Export or download documents whenever you need them</li>
            </ul>
          </div>

          {/* Right cards / preview */}
          <div
            ref={heroRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative flex flex-col gap-6 ${heroRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            {/* Template library */}
            <div className="rounded-3xl bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.12)] ring-1 ring-slate-100">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-slate-900">
                  Template Library
                </h2>
                <button className="inline-flex items-center gap-1 rounded-tr-lg rounded-bl-lg bg-[#63d885] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#45c96c]">
                  <ArrowDownTrayIcon className="h-4 w-4" />
                  Download
                </button>
              </div>
              <div className="space-y-3 text-sm text-slate-700">
                {[
                  "Residential Lease Agreement – Standard",
                  "Move‑in / Move‑out Checklist",
                  "Pet Addendum",
                  "Tenant Information Form",
                ].map((name) => (
                  <div
                    key={name}
                    className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-400">
                        <DocumentTextIcon className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-medium text-slate-800">
                        {name}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400">PDF</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlighted lease packet */}
            <div className="flex items-center gap-6 rounded-3xl bg-[#f9fafb] p-5 ring-1 ring-slate-100">
              <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-slate-200">
                <Image
                  src="/house-3.jpg"
                  alt="Property documents"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1 text-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Lease Packet
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  2 Bedroom Apartment – Renewal 2025
                </p>
                <p className="text-xs text-slate-500">
                  Last updated 2 days ago · 5 documents inside
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary section: simple upload / organize preview */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1.1fr]">
          {/* Upload illustration */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.12)] ring-1 ring-slate-100">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Upload &amp; Organize
              </p>
              <div className="mt-4 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-500">
                Drag and drop forms here or
                <span className="ml-1 font-semibold text-slate-800">
                  Browse files
                </span>
              </div>
              <div className="mt-4 space-y-2 text-xs text-slate-600">
                {["Signed_Lease_Unit4B.pdf", "Inspection_Report_June.pdf"].map(
                  (file) => (
                    <div
                      key={file}
                      className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2"
                    >
                      <span>{file}</span>
                      <span className="text-[10px] text-slate-400">Stored</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-4 text-sm leading-relaxed text-slate-600">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Everything your tenants sign,
              <br />
              always within reach.
            </h2>
            <p>
              Upload scanned documents or export them directly from your lease
              workflow. Once a document is stored, you can instantly attach it
              to messages, share a download link, or export it for your
              accountant.
            </p>
            <p>
              Each file is kept in a secure, version‑controlled history so you
              always know which copy is the latest—no more hunting through email
              threads or desktop folders.
            </p>
          </div>
        </div>
      </section>

      {/* Reuse testimonials to keep style consistent */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <TestimonialsSection />
      </section>
    </div>
  );
}


