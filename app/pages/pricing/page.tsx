"use client";

import { PricingHero } from "@/app/components/sections/pricing/PricingHero";
import { PricingDashboardPreview } from "@/app/components/sections/pricing/PricingDashboardPreview";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function PricingPage() {
  const heroSection = useScrollAnimation();
  const dashboardSection = useScrollAnimation();
  const testimonialsSection = useScrollAnimation();

  return (
    <div className="min-h-screen px-6 py-12 lg:px-0">
      <div
        ref={heroSection.elementRef as React.RefObject<HTMLDivElement>}
        className={heroSection.isVisible ? "animate-fade-in-up" : "opacity-0"}
      >
        <PricingHero />
      </div>
      
      <div
        ref={dashboardSection.elementRef as React.RefObject<HTMLDivElement>}
        className={dashboardSection.isVisible ? "animate-fade-in-up" : "opacity-0"}
        style={{ animationDelay: "0.2s" }}
      >
        <PricingDashboardPreview />
      </div>

      <div
        ref={testimonialsSection.elementRef as React.RefObject<HTMLDivElement>}
        className={`mx-auto max-w-7xl px-6 pb-16 lg:px-8 ${testimonialsSection.isVisible ? "animate-fade-in-blur" : "opacity-0"}`}
        style={{ animationDelay: "0.4s" }}
      >
        <TestimonialsSection />
      </div>
    </div>
  );
}

