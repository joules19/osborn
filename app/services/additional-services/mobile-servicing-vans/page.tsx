import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import ServiceSubNav from "@/components/services/ServiceSubNav";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { ADDITIONAL_SUB_NAV } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mobile Servicing Vans",
  description:
    "Osborn's fleet of service vans can do inspections and servicing at your premises. At a time to suit you, weekdays or Saturdays.",
};

export default function MobileServicingVansPage() {
  return (
    <>
      <PageBanner title="Additional Services" />
      <ServicePageLayout
        subNav={
          <ServiceSubNav
            items={ADDITIONAL_SUB_NAV}
            parentLabel="Additional Services"
          />
        }
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl font-black text-[#1B3260] mb-6">
              Mobile Servicing Vans
            </h1>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Our fleet of fully equipped service vans can carry out
                inspections and servicing at your premises — at a time to suit
                you. The work can even be done after hours, or on Saturdays.
              </p>
              <p>
                This means minimal disruption to your operations. Your vehicles
                stay where they are; we bring the workshop to you.
              </p>
              <p>
                Each van carries over 1,000 parts, so most jobs can be
                completed on the first visit.
              </p>
            </div>
          </div>
          <div className="bg-[#EEF4FA] rounded-xl p-8">
            <h3 className="font-bold text-[#1B3260] text-lg mb-4">
              Mobile service benefits
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              {[
                "We come to your premises",
                "Available weekdays, evenings and Saturdays",
                "1,000+ parts carried on each van",
                "Minimal disruption to your operations",
                "Same quality as our workshop",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#0057A8] shrink-0 font-bold" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ServicePageLayout>
    </>
  );
}
