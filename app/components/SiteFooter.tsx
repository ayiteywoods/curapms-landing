"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const footerColumns = {
  features: [
    { label: "Online Rental Payment", href: "/pages/online-rent-payments" },
    { label: "Online Lease Signing", href: "/pages/lease-signing" },
    { label: "Tenant Screening", href: "/pages/tenant-screening" },
    { label: "Maintenance Requests", href: "/pages/maintenance-request" },
    { label: "Security And Cloud", href: "/pages/security-cloud" },
    { label: "Tenant Credit Reporting", href: "/pages/tenant-screening" },
    { label: "Tenant Communications", href: "/pages/ease-rent-collection" },
    { label: "Expense & Reporting", href: "/pages/expense-reporting" },
    { label: "Tenants App", href: "/pages/mobile-app" },
    { label: "Integrations", href: "/pages/integrations-apis" },
    { label: "Forms & Documents", href: "/pages/forms-documents" },
  ],
  propertyTypes: [
    { label: "Residential Property", href: "/pages/residential-property" },
    { label: "Commercial Property", href: "/pages/commercial-property" },
    { label: "Student Hostel", href: "/pages/student-housing" },
    { label: "Warehousing", href: "/pages/warehouse" },
    { label: "Parking", href: "/pages/parking" },
    { label: "Affordable Housing", href: "/pages/residential-property" },
    { label: "Airbnb", href: "/pages/airbnb" },
    { label: "Military Housing", href: "/pages/residential-property" },
    { label: "Salons", href: "/pages/salon" },
  ],
  company: [
    { label: "About Us", href: "https://nerasolgh.com/" },
    { label: "Contact Us", href: "/pages/contact-us" },
  ],
};

export function SiteFooter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      const subject = encodeURIComponent("Newsletter Subscription");
      const body = encodeURIComponent(`Please subscribe this email to your newsletter:\n\n${email}`);
      window.location.href = `mailto:info@nerasolgh.com?subject=${subject}&body=${body}`;
      setEmail("");
    }
  };

  return (
    <footer className="mt-12 bg-indigo-600 text-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 lg:px-0">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.1fr_0.9fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold text-[#a9d2ff]">Features</p>
            <ul className="mt-5 space-y-2 text-sm leading-relaxed text-[#d9ecff]">
              {footerColumns.features.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#a9d2ff]">
              Property Types
            </p>
            <ul className="mt-5 space-y-2 text-sm leading-relaxed text-[#d9ecff]">
              {footerColumns.propertyTypes.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#a9d2ff]">
              CuraPMS
            </p>
            <ul className="mt-5 space-y-2 text-sm leading-relaxed text-[#d9ecff]">
              {footerColumns.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <p className="text-sm font-semibold text-[#a9d2ff]">
              Hello, we are CuraPMS.
            </p>
            <p className="text-sm leading-relaxed text-[#d9ecff]">
              Our goal is to build a unified property ecosystem so dependable
              that it revolutionizes how properties are managed and used.
            </p>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-[#a9d2ff]">Subscribe</p>
              <form
                onSubmit={handleSubscribe}
                className="flex overflow-hidden rounded-tr-lg rounded-bl-lg bg-white text-slate-800"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="w-full px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center bg-indigo-400 px-4 text-white hover:bg-indigo-500 transition-colors"
                >
                  →
                </button>
              </form>
            </div>

            <div className="relative -mt-12 h-32 w-full overflow-visible">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/acurawhite1.png"
                  alt="CuraPMS white logo"
                  width={800}
                  height={320}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-4 text-xs text-[#d9ecff]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-4">
              <span>2025 CuraPMS | All rights reserved</span>
              
            </div>
            <div className="flex items-center gap-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40">
                in
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40">
                f
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40">
                X
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
