import type { ReactNode } from "react";
import { Navbar } from "../components/Navbar";
import { SiteFooter } from "../components/SiteFooter";

export const metadata = {
  title: "CuraPMS | Home",
  description: "CuraPMS - Unified property management system",
};

export default function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen text-slate-900">
      <Navbar />
      <div className="flex min-h-screen w-full flex-col">
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </section>
  );
}
