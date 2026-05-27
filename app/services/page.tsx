import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/ui/PageBanner";
import NewsletterBanner from "@/components/ui/NewsletterBanner";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Browse all Osborn Transport Services: commercial vehicle servicing, MoT testing, breakdown & recovery, preventative maintenance and more.",
};

const SERVICES = [
  {
    title: "Servicing & Maintenance",
    href: "/services/servicing-maintenance",
    description:
      "Comprehensive servicing, MoT preparation and testing, preventative maintenance, computerised tracking, and air conditioning service.",
    items: [
      "Commercial Vehicle Servicing",
      "MoT Preparation & Testing",
      "Preventative Maintenance",
      "Computerised Maintenance Tracking",
      "Air Conditioning Service",
    ],
  },
  {
    title: "Breakdown & Repairs",
    href: "/services/breakdown-repairs",
    description:
      "From roadside repairs to UK-wide vehicle recovery — 24 hours a day, 365 days a year. 62% of roadside repairs completed within 90 minutes.",
    items: [
      "24/7 Roadside Repair",
      "UK Wide Vehicle Recovery",
      "Free Vehicle Recovery Account",
      "Steel & Aluminium Repairs / Welding",
    ],
  },
  {
    title: "Additional Services",
    href: "/services/additional-services",
    description:
      "Understanding the needs of our customers is very important at Osborn. All our services are geared to helping clients be as efficient as possible.",
    items: [
      "VOSA-Approved Tachograph Centre",
      "Hazardous Goods Services",
      "Low Emission Zone Services",
      "Mobile Servicing Vans",
      "Daily Fleet Checks",
      "Out-of-Hours & Weekend Services",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Services" />

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <article
              key={service.href}
              className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="bg-[#0d1f3c] p-6">
                <h2 className="text-xl font-bold text-white uppercase tracking-wide">
                  {service.title}
                </h2>
              </div>
              <div className="p-6">
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-slate-700 flex items-start gap-2"
                    >
                      <span
                        className="text-[#0057A8] mt-0.5 shrink-0"
                        aria-hidden="true"
                      >
                        ›
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0057A8] uppercase tracking-widest hover:text-[#27AAE1] transition-colors group-hover:gap-3"
                >
                  View Service
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <NewsletterBanner />
    </>
  );
}
