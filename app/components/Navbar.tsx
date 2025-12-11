"use client";

import {
  ComponentType,
  SVGProps,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpenIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  BellIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  HomeModernIcon,
  LightBulbIcon,
  LinkIcon,
  MegaphoneIcon,
  MicrophoneIcon,
  PencilSquareIcon,
  ShieldCheckIcon,
  SignalIcon,
  TruckIcon,
  UsersIcon,
  WrenchIcon,
  WrenchScrewdriverIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

type MenuKey = "features" | "propertyTypes";
type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;
type MenuCard = {
  title: string;
  description: string;
  icon: IconComponent;
  href?: string;
};
type TabConfig = Record<string, MenuCard[]>;

const menuConfig: Record<
  MenuKey,
  {
    tabs: string[];
    items: TabConfig;
  }
> = {
  features: {
    tabs: ["Landlord", "Tenant", "Agent", "Third-parties"],
    items: {
      Landlord: [
        {
          title: "Digital Rent Payments",
          description: "Collect rent online with reminders and receipts.",
          icon: CreditCardIcon,
          href: "/pages/digital-rent-payment",
        },
        {
          title: "Maintenance Request",
          description: "Track every request and keep vendors in sync.",
          icon: WrenchScrewdriverIcon,
          href: "/pages/maintenance-request",
        },
        {
          title: "Expense & Reporting",
          description: "Get real-time insights on each building.",
          icon: ChartBarIcon,
          href: "/pages/expense-reporting",
        },
        {
          title: "Forms & Documents",
          description: "Templates for every lease.",
          icon: DocumentTextIcon,
          href: "/pages/forms-documents",
        },
        {
          title: "Security & Cloud",
          description: "Enterprise-grade security and encryption.",
          icon: ShieldCheckIcon,
          href: "/pages/security-cloud",
        },
        {
          title: "Integrations & APIs",
          description: "Connect accounting, CRM, and custom tools.",
          icon: LinkIcon,
          href: "/pages/integrations-apis",
        },
        {
          title: "Automated Reminders",
          description: "Automated reminders for invoices and payments.",
          icon: BellIcon,
          href: "/pages/automated-reminders",
        },
        {
          title: "Ease in Rent Collection",
          description: "Collect rent without the hassle.",
          icon: CreditCardIcon,
          href: "/pages/ease-rent-collection",
        },
      ],
      Tenant: [
        {
          title: "Lease Signing",
          description: "Execute compliant leases from any device.",
          icon: PencilSquareIcon,
          href: "/pages/lease-signing",
        },
        {
          title: "Listing and Syndicating",
          description: "Broadcast vacancies to 20+ marketplaces.",
          icon: MegaphoneIcon,
          href: "/pages/listing-syndication",
        },
        {
          title: "Mobile Apps",
          description: "Give tenants 24/7 access to their account.",
          icon: DevicePhoneMobileIcon,
          href: "/pages/mobile-app",
        },
        
        {
          title: "Tenant Screening",
          description: "Background and credit checks in seconds.",
          icon: ClipboardDocumentCheckIcon,
          href: "/pages/tenant-screening",
        },
        {
          title: "Book Maintenance Repairs",
          description: "Source vetted pros with transparent pricing.",
          icon: WrenchIcon,
          href: "/pages/book-maintenance-repairs",
        },
        {
          title: "Tenant Communication",
          description: "Communicate directly with tenants seamlessly.",
          icon: MicrophoneIcon,
          href: "/pages/tenant-communication",
        },
        {
          title: "Tenant Credit Reporting",
          description: "Track and report tenant credit history.",
          icon: ChartBarIcon,
          href: "/pages/tenant-credit-reporting",
        },
      ],
      Agent: [
        {
          title: "Listing and Syndicating",
          description: "Broadcast vacancies to 20+ marketplaces.",
          icon: MegaphoneIcon,
          href: "/pages/listing-syndication",
        },
        {
          title: "Tenant Screening",
          description: "Background and credit checks in seconds.",
          icon: ClipboardDocumentCheckIcon,
          href: "/pages/tenant-screening",
        },
        {
          title: "Lease Signing",
          description: "Execute compliant leases from any device.",
          icon: PencilSquareIcon,
          href: "/pages/lease-signing",
        },
        {
          title: "Digital Rent Payments",
          description: "Collect rent online with reminders and receipts.",
          icon: CreditCardIcon,
          href: "/pages/digital-rent-payment",
        },
        {
          title: "Expense & Reporting",
          description: "Get real-time insights on each building.",
          icon: ChartBarIcon,
          href: "/pages/expense-reporting",
        },
        {
          title: "Forms & Documents",
          description: "Templates for every lease.",
          icon: DocumentTextIcon,
          href: "/pages/forms-documents",
        },
      ],
      "Third-parties": [
        {
          title: "Tradesmen/Tradeswomen",
          description: "Connect with skilled professionals for property maintenance.",
          icon: UsersIcon,
          href: "/pages/tradesmen-tradeswomen",
        },
        {
          title: "Maintenance Team",
          description: "Manage and coordinate your maintenance workforce.",
          icon: WrenchScrewdriverIcon,
          href: "/pages/maintenance-team",
        },
        {
          title: "Vendors & Suppliers",
          description: "Manage suppliers and vendors for property materials and services.",
          icon: TruckIcon,
          href: "/pages/vendors-suppliers",
        },
        {
          title: "Contractors",
          description: "Coordinate construction and renovation contractors.",
          icon: BuildingOfficeIcon,
          href: "/pages/contractors",
        },
        {
          title: "Property Inspectors",
          description: "Schedule and manage property inspections.",
          icon: ClipboardDocumentCheckIcon,
          href: "/pages/property-inspectors",
        },
        {
          title: "Legal Services",
          description: "Connect with legal professionals for property matters.",
          icon: BookOpenIcon,
          href: "/pages/legal-services",
        },
        {
          title: "Cleaning Services",
          description: "Manage cleaning and janitorial service providers.",
          icon: LightBulbIcon,
          href: "/pages/cleaning-services",
        },
        {
          title: "Security Services",
          description: "Coordinate security personnel and surveillance services.",
          icon: ShieldCheckIcon,
          href: "/pages/security-services",
        },
      ],
    },
  },
  propertyTypes: {
    tabs: ["Residential", "Commercial"],
    items: {
      Residential: [
        {
          title: "Residential Property",
          description: "Your safety comes first with verified listings.",
          icon: HomeModernIcon,
          href: "/pages/residential-property",
        },
        {
          title: "Airbnb",
          description: "A smarter way to find a place to stay.",
          icon: HomeModernIcon,
          href: "/pages/airbnb",
        },
        {
          title: "Apartments & Condos",
          description: "High-rise and mid-rise portfolios.",
          icon: BuildingOfficeIcon,
          href: "/pages/apartments-condos",
        },
        {
          title: "Single Family Homes",
          description: "Scale scattered-site operations.",
          icon: HomeModernIcon,
          href: "/pages/single-family-homes",
        },
        {
          title: "Student Housing",
          description: "Automate move-ins & co-living leases.",
          icon: AcademicCapIcon,
          href: "/pages/student-housing",
        },
      ],
      Commercial: [
        {
          title: "Commercial Property",
          description: "Secure the right space for your business dreams.",
          icon: BuildingOfficeIcon,
          href: "/pages/commercial-property",
        },
        {
          title: "Salon",
          description: "Effortless salon management made simple.",
          icon: BuildingOfficeIcon,
          href: "/pages/salon",
        },
        {
          title: "Warehouse",
          description: "Smart warehousing made easy.",
          icon: BuildingOfficeIcon,
          href: "/pages/warehouse",
        },
        {
          title: "Parking",
          description: "Clear, controlled, and convenient parking management.",
          icon: TruckIcon,
          href: "/pages/parking",
        },
        {
          title: "Retail & Mixed Use",
          description: "Track vendors and NNN reimbursements.",
          icon: BuildingOfficeIcon,
          href: "/pages/retail-mixed-use",
        },
        {
          title: "Office",
          description: "Manage suites, amenities, and renewals.",
          icon: BriefcaseIcon,
          href: "/pages/office",
        },
        {
          title: "Industrial",
          description: "Monitor inspections and logistics tenants.",
          icon: TruckIcon,
          href: "/pages/industrial",
        },
      ],
    },
  },
};

const primaryLinks = [
  { label: "Features", href: "/pages/features", menuKey: "features" as const },
  {
    label: "Property Types",
    href: "/pages/property-type",
    menuKey: "propertyTypes" as const,
  },
  { label: "Pricing", href: "/pages/pricing" },
];

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [activeTab, setActiveTab] = useState<Record<string, string>>({
    features: "Landlord",
    propertyTypes: "Residential",
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const menu = activeMenu ? menuConfig[activeMenu] : null;
  const currentTab = activeMenu ? activeTab[activeMenu] : null;
  const menuItems: MenuCard[] =
    activeMenu && currentTab
      ? menu?.items[currentTab as keyof TabConfig] ?? []
      : [];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node | null)
      ) {
        setActiveMenu(null);
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (menuKey: keyof typeof menuConfig | undefined) => {
    if (!menuKey) {
      setActiveMenu(null);
      return;
    }

    setActiveMenu((prev) => (prev === menuKey ? null : menuKey));
  };

  return (
    <nav ref={navRef} className="sticky top-0 z-50 w-full bg-transparent py-4">
    <div className="relative mx-auto flex w-full items-center justify-between rounded-tr-lg rounded-bl-lg bg-white/80 backdrop-blur-md border border-white/20 shadow-lg px-6 py-2 lg:max-w-6xl lg:px-8">
      {/* Logo container with fixed height and overflow handling */}
      <div className="relative flex h-12 w-38 items-center overflow-visible">
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/logo.png"
            alt="CuraPMS logo"
            width={300}
            height={50} 
            className="h-auto w-auto object-contain" // Added this
            style={{ transform: 'scale(1.2)', transformOrigin: 'left center' }} // Scale it up
            priority
          />
        </Link>
      </div>

        <div className="hidden items-center gap-6 text-lg font-medium text-black/90 lg:flex">
          {primaryLinks.map((item) => (
            <div key={item.label} className="relative flex flex-col items-center">
              {item.menuKey ? (
                <button
                  type="button"
                  onClick={() => toggleMenu(item.menuKey)}
                  className={`inline-flex items-center gap-1 rounded-tr-lg rounded-bl-lg px-4 py-1 text-lg transition ${
                    activeMenu === item.menuKey
                      ? "border border-slate-200 bg-white text-black shadow-sm"
                      : "border border-transparent text-black/80 hover:border-slate-200 hover:bg-white/80 hover:text-black"
                  }`}
                  aria-expanded={activeMenu === item.menuKey}
                >
                  {item.label}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 12 12"
                    className="h-3 w-3 text-black/70"
                  >
                    <path
                      d="M2 4l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-lg text-black/80 transition hover:text-black"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/pages/signup"
            className="hidden rounded-tr-lg rounded-bl-lg bg-green-700 px-6 py-2 text-base font-semibold text-white shadow-sm transition hover:bg-[#52c173] lg:block"
          >
            Sign Up
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden rounded-lg p-2 text-black/80 hover:bg-white/80 transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute left-0 top-full z-40 mt-2 w-full rounded-3xl bg-white/95 p-6 shadow-lg ring-1 ring-black/5 backdrop-blur lg:hidden">
          <div className="space-y-4">
            {primaryLinks.map((item) => (
              <div key={item.label}>
                {item.menuKey ? (
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => {
                        const newMenu = activeMenu === item.menuKey ? null : item.menuKey;
                        setActiveMenu(newMenu);
                        if (newMenu) {
                          setActiveTab((prev) => ({
                            ...prev,
                            [newMenu]: activeTab[newMenu] || menuConfig[newMenu].tabs[0],
                          }));
                        }
                      }}
                      className="flex w-full items-center justify-between rounded-tr-lg rounded-bl-lg px-4 py-3 text-base font-medium text-black/90 hover:bg-slate-50"
                    >
                      {item.label}
                      <svg
                        className={`h-4 w-4 transition-transform ${
                          activeMenu === item.menuKey ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 12 12"
                      >
                        <path
                          d="M2 4l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {activeMenu === item.menuKey && (
                      <div className="ml-4 mt-2 space-y-2 rounded-xl border-l-4 border-indigo-400 bg-indigo-50/50 pl-4 pr-2 py-3 shadow-sm">
                        <div className="flex gap-2 overflow-x-auto pb-2">
                          {menuConfig[item.menuKey].tabs.map((tab) => (
                            <button
                              key={tab}
                              type="button"
                              onClick={() =>
                                setActiveTab((prev) => ({ ...prev, [item.menuKey!]: tab }))
                              }
                              className={`whitespace-nowrap rounded-tr-lg rounded-bl-lg px-4 py-2 text-sm font-medium transition-colors ${
                                activeTab[item.menuKey] === tab
                                  ? "bg-indigo-600 text-white font-semibold shadow-md"
                                  : "bg-white text-slate-700 hover:bg-indigo-100 hover:text-indigo-700"
                              }`}
                            >
                              {tab}
                            </button>
                          ))}
                        </div>
                        <div className="mt-4 space-y-2">
                          {menuConfig[item.menuKey].items[
                            (activeTab[item.menuKey] || menuConfig[item.menuKey].tabs[0]) as keyof TabConfig
                          ]?.map((menuItem) => (
                            <Link
                              key={menuItem.title}
                              href={menuItem.href || "#"}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setActiveMenu(null);
                              }}
                              className="block rounded-tr-lg rounded-bl-lg bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-indigo-100 hover:text-indigo-700"
                            >
                              {menuItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-tr-lg rounded-bl-lg px-4 py-3 text-base font-medium text-black/90 hover:bg-slate-50"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/pages/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-tr-lg rounded-bl-lg bg-green-700 px-6 py-3 text-center text-base font-semibold text-white shadow-sm transition hover:bg-[#52c173]"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}

      {/* Desktop Mega Menu */}
      {activeMenu && menu && (
        <div className="absolute left-1/2 top-full z-30 mt-2 hidden w-full max-w-4xl -translate-x-1/2 rounded-3xl bg-white/95 p-6 shadow-lg ring-1 ring-black/5 backdrop-blur lg:block">
          <div className="mb-4 flex gap-6 text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
            {menu.tabs.map((tab) => (
              <button
                key={tab}
                className={`pb-2 ${
                  currentTab === tab
                    ? "text-slate-900"
                    : "text-slate-400 hover:text-slate-600"
                }`}
                onClick={() =>
                  setActiveTab((prev) => ({ ...prev, [activeMenu]: tab }))
                }
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-5">
            {menuItems?.map((item) => {
              const content = (
                <>
                  <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-slate-900">
                      {item.title}
                    </p>
                    <p className="text-sm text-slate-500">{item.description}</p>
                  </div>
                </>
              );

              if (item.href) {
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex gap-3 rounded-2xl border border-slate-100/60 bg-white/80 p-4 transition hover:border-indigo-200 hover:bg-white hover:shadow-md"
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <div
                  key={item.title}
                  className="flex gap-3 rounded-2xl border border-slate-100/60 bg-white/80 p-4"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
