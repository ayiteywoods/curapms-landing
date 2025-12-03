"use client";

import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function ContactUsPage() {
  const heroSection = useScrollAnimation();
  const formSection = useScrollAnimation();
  const infoSection = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={heroSection.elementRef as React.RefObject<HTMLElement>}
        className={`mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 ${heroSection.isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <div className="text-center space-y-6">
          <div className="inline-block rounded-lg bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-600">
            Contact Us
          </div>
          <h1 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
            Have questions? We&apos;re here to help. Reach out to our team and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div
            ref={formSection.elementRef as React.RefObject<HTMLDivElement>}
            className={`${formSection.isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <div className="rounded-3xl bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.12)] ring-1 ring-slate-100">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Send us a Message
              </h2>
              <form
                action="mailto:info@nerasolgh.com"
                method="POST"
                encType="text/plain"
                className="space-y-5"
              >
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="Name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="Email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="phone"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="Phone"
                    type="tel"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                    placeholder="+233 ..."
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="subject"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="Subject"
                    type="text"
                    required
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="Message"
                    required
                    rows={5}
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-tr-lg rounded-bl-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-green-800"
                >
                  Send Message
                </button>

                <p className="pt-2 text-[11px] text-slate-400">
                  Your message will open in your default email client addressed to{" "}
                  <span className="font-semibold text-slate-500">
                    info@nerasolgh.com
                  </span>
                  . You can review and send it from there.
                </p>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div
            ref={infoSection.elementRef as React.RefObject<HTMLDivElement>}
            className={`space-y-8 ${infoSection.isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div>
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-100">
                    <EnvelopeIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Email</p>
                    <a
                      href="mailto:info@nerasolgh.com"
                      className="text-sm text-slate-600 hover:text-indigo-600"
                    >
                      info@nerasolgh.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-100">
                    <PhoneIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Phone</p>
                    <a
                      href="tel:+233000000000"
                      className="text-sm text-slate-600 hover:text-indigo-600"
                    >
                      +233 (0) 200072899 
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-100">
                    <MapPinIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Address</p>
                    <p className="text-sm text-slate-600">
                    12 Ameda St. Roman Ridge,Accra, Ghana
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-indigo-50 p-8">
              <h3 className="mb-4 text-xl font-bold text-slate-900">
                Business Hours
              </h3>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span>Closed</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

