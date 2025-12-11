"use client";

import Image from "next/image";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function MaintenanceRequestPage() {
  const topLeft = useScrollAnimation();
  const topRight = useScrollAnimation();
  const conversationLeft = useScrollAnimation();
  const conversationRight = useScrollAnimation();
  const middleLeft = useScrollAnimation();
  const middleRight = useScrollAnimation();
  const mapSection = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Top Hero/Request Block */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Left Column - Text */}
          <div
            ref={topLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 ${topLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <span className="inline-flex rounded-full bg-indigo-400/10 px-4 py-1.5 text-xs font-medium text-indigo-400">
              Maintenance Requests
            </span>
            <div>
              <h1 className="text-5xl font-bold text-slate-900">Stay tidy.</h1>
              <p className="mt-2 text-xl font-light text-slate-600">
                Achieve More
              </p>
            </div>
            <p className="text-base text-slate-600">
              Got in touch with maintenance service provider ready to serve you
              at your hand.
            </p>
            <ul className="space-y-3">
              {[
                "Say goodbye to printed work orders",
                "Complete more requests, more quickly",
                "Give tenants professional, fast response times",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-base text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Cards */}
          <div
            ref={topRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative ${topRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            {/* Upload Card - Foreground */}
            <div className="relative z-10 rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
              <h3 className="mb-4 text-lg font-semibold text-slate-900">
                Upload your Images/Video
              </h3>
              <div className="mb-4 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                <p className="text-sm text-slate-600">
                  Drag and drop here or Browse
                </p>
              </div>
              <div className="mb-4 space-y-2">
                <p className="text-sm font-medium text-slate-700">
                  Upload files
                </p>
                {["nera.pdf", "nera.pdf", "nera.pdf"].map((file, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">📄</span>
                      <span className="text-sm text-slate-600">{file}</span>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600">
                      <XMarkIcon className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <button className="flex-1 rounded-tr-lg rounded-bl-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  Cancel
                </button>
              <button className="flex-1 rounded-tr-lg rounded-bl-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800">
                  Submit
                </button>
              </div>
            </div>

            {/* Requesting Maintenance Card - Behind */}
            <div className="absolute right-0 top-12 z-0 w-[90%] rounded-3xl bg-slate-50 p-6 shadow-md ring-1 ring-slate-200">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">
                  Maintenance List
                </h3>
                <div className="flex gap-2">
                  <span className="rounded-full bg-green-700/10 px-3 py-1 text-xs font-medium text-green-700">
                    Request
                  </span>
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                    Pending
                  </span>
                  <span className="rounded-full bg-green-700 px-3 py-1 text-xs font-medium text-white">
                    Complete
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Describe your problems
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                    placeholder="Enter description"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Enter street address
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                    placeholder="Enter address"
                  />
                </div>
                <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-6 text-center">
                  <p className="text-sm text-slate-600">
                    Drag and drop here or Browse
                  </p>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Select Service Provider
                  </label>
                  <div className="space-y-2">
                    {[
                      { name: "John Smith", avatar: "/guy1.png" },
                      { name: "Sarah Johnson", avatar: "/lady1.png" },
                      { name: "Mike Davis", avatar: "/guy2.png" },
                    ].map((provider, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 overflow-hidden rounded-full bg-slate-200">
                            <Image
                              src={provider.avatar}
                              alt={provider.name}
                              width={32}
                              height={32}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <span className="text-sm text-slate-700">
                            {provider.name}
                          </span>
                        </div>
                        <button className="rounded-lg bg-blue-600 px-3 py-1 text-xs font-medium text-white hover:bg-blue-700">
                          Select
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <button className="flex-1 rounded-tr-lg rounded-bl-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                    Cancel
                  </button>
                  <button className="flex-1 rounded-tr-lg rounded-bl-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Conversation Block */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          {/* Left - Chat Bubbles */}
          <div
            ref={conversationLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-4 ${conversationLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            {[
              {
                text: "Vera, any idea if it's the roof or the hall side leaks please. The floor gets flooded.",
                sender: "tenant",
                avatar: "/lady1.png",
              },
              {
                text: "Okay Vera, I'll bring someone to check the ceiling sheets today, to see what it is.",
                sender: "landlord",
                avatar: "/guy1.png",
              },
              {
                text: "Ok, I'll bring someone to check the roofing sheets today, to see what it is.",
                sender: "tenant",
                avatar: "/lady1.png",
              },
              {
                text: "Thank you, I'll bring someone to check the roofing sheets today to see what it is.",
                sender: "landlord",
                avatar: "/guy1.png",
              },
              {
                text: "Ok, I'll bring someone to check the roofing sheets today, to see what it is.",
                sender: "tenant",
                avatar: "/lady1.png",
              },
              {
                text: "Thanks for the reminder. I will make sure about this, and I will finish it soon.",
                sender: "landlord",
                avatar: "/guy1.png",
              },
            ].map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-3 ${
                  msg.sender === "landlord" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "tenant" && (
                  <div className="h-8 w-8 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={msg.avatar}
                      alt="Avatar"
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div
                  className={`max-w-md rounded-2xl px-4 py-3 text-sm ${
                    msg.sender === "tenant"
                      ? "rounded-tl-2xl rounded-r-2xl bg-white text-slate-700 shadow-sm ring-1 ring-slate-200"
                      : "rounded-r-2xl rounded-tl-2xl bg-blue-600 text-white shadow-md"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === "landlord" && (
                  <div className="h-8 w-8 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={msg.avatar}
                      alt="Avatar"
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right - Text */}
          <div
            ref={conversationRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`mt-16 sm:mt-24 lg:mt-32 space-y-6 ${conversationRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-4xl font-bold text-slate-900">
              A Sound Tenants. A Happy Landlord
            </h2>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-slate-800">
                Status Updates
              </h3>
              <p className="text-base leading-relaxed text-slate-600">
                When dealing with maintenance problems, photos help explain the
                issue clearly—and videos make it even easier. Tenants can send in
                their requests with a selected category, a brief description,
                and any supporting images or videos.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-slate-800">
                Sometimes It Takes a Village
              </h3>
              <p className="text-base leading-relaxed text-slate-600">
                Info is shared with you and your maintenance personnel. It&apos;s
                ideal for easy access and future reference so your entire team
                can coordinate and knock out tasks quickly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Middle Image/Work Order Block */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          {/* Left - Image with Blue Shape */}
          <div
            ref={middleLeft.elementRef as React.RefObject<HTMLDivElement>}
            className={`relative ${middleLeft.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            {/* Dark Blue Curved Shape */}
            <div className="absolute left-0 top-0 h-full w-3/4 rounded-r-[60px] bg-indigo-400" />
            
            {/* Green Dots */}
            <div className="absolute left-8 top-8 h-3 w-3 rounded-full bg-green-700" />
            <div className="absolute right-8 top-12 h-3 w-3 rounded-full bg-green-700" />

            {/* Image */}
            <div className="relative z-10 ml-8 mt-8">
              <Image
                src="/oldman.png"
                alt="Landlord"
                width={600}
                height={700}
                className="h-full w-full rounded-3xl object-cover"
              />
            </div>
          </div>

          {/* Right - Work Order Form */}
          <div
            ref={middleRight.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 ${middleRight.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-4xl font-bold text-slate-900">
              Handle Work Order with Confidence
            </h2>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-slate-800">
                Maintenance Assignment
              </h3>
              <p className="text-base leading-relaxed text-slate-600">
                As a real estate developer, you know that property is more than
                just a place. As you or your past maintenance team leads into a
                problem, that problem often changes. Keep track of your work
                orders and books right in ConCRM.
              </p>
            </div>

            <div className="space-y-4 rounded-3xl bg-slate-50 p-6">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Property
                </label>
                <input
                  type="text"
                  value="Dusun Court"
                  readOnly
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Location
                </label>
                <input
                  type="text"
                  value="AG21"
                  readOnly
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Requested By
                </label>
                <input
                  type="text"
                  value="Naum Doe"
                  readOnly
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Maintenance Description
                </label>
                <input
                  type="text"
                  value="Acra"
                  readOnly
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Select Service Provider
                </label>
                <div className="space-y-2">
                  {[
                    { name: "John Smith", avatar: "/guy1.png" },
                    { name: "Sarah Johnson", avatar: "/lady1.png" },
                    { name: "Mike Davis", avatar: "/guy2.png" },
                  ].map((provider, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 overflow-hidden rounded-full bg-slate-200">
                          <Image
                            src={provider.avatar}
                            alt={provider.name}
                            width={32}
                            height={32}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <span className="text-sm text-slate-700">
                          {provider.name}
                        </span>
                      </div>
                      <button className="rounded-lg bg-blue-600 px-3 py-1 text-xs font-medium text-white hover:bg-blue-700">
                        Select
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mobile Map Block */}
      <section
        ref={mapSection.elementRef as React.RefObject<HTMLElement>}
        className={`mx-auto max-w-7xl px-6 py-16 lg:px-8 ${mapSection.isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="flex flex-col items-center">
          <h2 className="mb-12 text-center text-4xl font-bold text-slate-900">
            Access and Manage Maintenance Anywhere
          </h2>

          <div className="relative">
            {/* Floating Notification Pills */}
            <div className="absolute left-1/2 -top-10 z-20 -translate-x-1/2 rounded-full bg-yellow-400 px-4 py-2 text-xs font-medium text-yellow-950 shadow-lg">
              <div className="flex items-center gap-2">
                <span>New maintenance ticket created</span>
                <button className="text-yellow-900 hover:text-yellow-800">
                  <XMarkIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="absolute -left-20 top-10 z-20 rounded-full bg-blue-500 px-4 py-2 text-xs font-medium text-white shadow-lg">
              <div className="flex items-center gap-2">
                <span>John Smith, this sends...</span>
                <button className="text-white hover:text-blue-100">
                  <XMarkIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="absolute -right-24 top-1/2 z-20 -translate-y-1/2 rounded-full bg-red-500 px-4 py-2 text-xs font-medium text-white shadow-lg">
              <div className="flex items-center gap-2">
                <span>Deadline Passing for Maintenance</span>
                <button className="text-white hover:text-red-100">
                  <XMarkIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="absolute -bottom-8 right-10 z-20 rounded-full bg-green-700 px-4 py-2 text-xs font-medium text-white shadow-lg">
              <div className="flex items-center gap-2">
                <span>Contract payment completed</span>
                <button className="text-white hover:text-green-100">
                  <XMarkIcon className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative h-[600px] w-80 rounded-[40px] border-[14px] border-slate-300 bg-white p-3 shadow-2xl">
              <div className="flex h-full w-full flex-col overflow-hidden rounded-[28px] bg-slate-50">
                {/* Empty top area inside phone (behind notifications) */}
                <div className="h-[42%] bg-transparent" />
                {/* Map area anchored to the bottom */}
                <div className="relative h-[58%] w-full">
                  <Image
                    src="/map.jpg"
                    alt="Maintenance locations map"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials Block */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <TestimonialsSection />
      </div>
    </div>
  );
}
