"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Abeni Lawson",
    title: "Property Manager",
    quote:
      "CuraPMS helps my team stay ahead of every task. Rent reminders and screening tools are exactly what we needed.",
    rating: 5,
    image: "/t4.jpg",
  },
  {
    name: "Daniel Mensah",
    title: "Landlord",
    quote:
      "The automation lets us scale without hiring a huge back office. Tenants love the quick response time.",
    rating: 5,
    image: "/t2.jpg",
  },
  {
    name: "Priscilla Owusu",
    title: "Community Lead",
    quote:
      "Expenses, leases, and maintenance all in one place. I finally have visibility into performance.",
    rating: 5,
    image: "/t3.jpg",
  },
  {
    name: "Kwame Boateng",
    title: "Portfolio Owner",
    quote:
      "The insight I get from CuraPMS has completely changed how I run my properties. I can see issues before they become problems.",
    rating: 5,
    image: "/t1.jpg",
  },
];

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cardStride = 372; // card width + gap
    let frame: number;

    const handleScroll = () => {
      frame = window.requestAnimationFrame(() => {
        const midpoint = track.scrollLeft + track.offsetWidth / 2;
        const index = Math.round(midpoint / cardStride);
        setActiveIndex(Math.min(Math.max(index, 0), testimonials.length - 1));
      });
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      track.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToCard = (index: number) => {
    if (!trackRef.current) return;
    const cardStride = 372;
    trackRef.current.scrollTo({
      left: index * cardStride,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      className={`space-y-8 sm:space-y-10 rounded-[36px] bg-white px-4 sm:px-6 py-12 sm:py-20 ring-1 ring-slate-100 lg:px-14 ${
        isVisible ? "opacity-0 animate-fade-in-blur" : "opacity-0"
      }`}
    >
      <header
        className={`text-center ${
          isVisible ? "opacity-0 animate-fade-in-blur" : "opacity-0"
        }`}
        style={{ animationDelay: isVisible ? "0.2s" : "0s" }}
      >
        <p className="text-2xl sm:text-3xl font-semibold text-slate-800 lg:text-4xl">
          See what our users say <span className="text-slate-900">about us</span>
        </p>
      </header>

      <div
        ref={trackRef}
        className="no-scrollbar mx-auto max-w-6xl overflow-x-auto overflow-y-hidden px-2 pb-4 sm:px-4"
      >
        <div className="flex w-max snap-x snap-mandatory items-stretch gap-8">
          {testimonials.map((person, index) => (
            <article
              key={person.name}
              className={`snap-center w-[280px] sm:w-[340px] flex-shrink-0 rounded-[20px] rounded-tl-[80px] bg-[#eef3fb] p-6 sm:p-10 text-left ${
                isVisible ? "opacity-0 animate-fade-in-blur" : "opacity-0"
              }`}
              style={{ animationDelay: isVisible ? `${0.4 + index * 0.15}s` : "0s" }}
            >
              <div className="flex items-center gap-4">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    {person.title}
                  </p>
                  <p className="text-lg font-semibold text-slate-900">
                    {person.name}
                  </p>
                  <div className="mt-1 flex gap-1 text-lg text-amber-400">
                    {"★".repeat(person.rating)}
                  </div>
                </div>
              </div>
              <p className="mt-6 text-base leading-relaxed text-slate-600">
                {person.quote}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToCard(index)}
            className={`h-2 rounded-full transition-all ${
              index === activeIndex ? "w-6 bg-slate-900" : "w-2 bg-slate-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

