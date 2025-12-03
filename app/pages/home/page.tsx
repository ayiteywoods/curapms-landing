import { HeroIntroSection } from "@/app/components/sections/HeroIntroSection";
import { SaveMoreSection } from "@/app/components/sections/SaveMoreSection";
import { ManageSection } from "@/app/components/sections/ManageSection";
import { DashboardSection } from "@/app/components/sections/DashboardSection";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { SiteFooter } from "@/app/components/SiteFooter";
import { WorkflowSection } from "@/app/components/sections/WorkflowSection";

export default function HomePage() {
  return (
    <div >
      
      <main className="flex w-full flex-col px-4 sm:px-6 lg:px-0 pb-24 pt-10 space-y-6 lg:space-y-0">
        <HeroIntroSection />
        <SaveMoreSection />
        <WorkflowSection />
        <ManageSection />
        <DashboardSection />
        <TestimonialsSection />
      </main>
    </div>
  );
}
