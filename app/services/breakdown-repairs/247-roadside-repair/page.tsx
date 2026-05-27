import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import ServiceSubNav from "@/components/services/ServiceSubNav";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { BREAKDOWN_SUB_NAV, COMPANY } from "@/lib/data";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "24/7 Roadside Repair",
  description:
    "62% of vehicles attended at the roadside are repaired within 90 minutes. Osborn answers all calls in person, 24 hours a day.",
};

export default function RoadsideRepairPage() {
  return (
    <>
      <PageBanner title="Breakdown & Repairs" />
      <ServicePageLayout
        subNav={
          <ServiceSubNav
            items={BREAKDOWN_SUB_NAV}
            parentLabel="Breakdown & Repairs"
          />
        }
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-3xl font-black text-[#1B3260] mb-6">
              24/7 Roadside Repair
            </h1>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                When you have a breakdown, the most important thing is to get
                back on the road as quickly as possible. Osborn&apos;s fleet of
                fully equipped service vans means we can get to you fast, and
                fix the problem on the spot.
              </p>
              <p>
                62% of vehicles we attend at the roadside are repaired within
                90 minutes. Our vans carry over 1,000 parts to handle the
                majority of breakdowns on the spot.
              </p>
              <p>
                All calls are answered in person, 24 hours a day. You
                won&apos;t get a recorded message, no matter what time you call.
              </p>
            </div>

            <div className="mt-8 p-6 bg-[#27AAE1] rounded-xl text-white">
              <p className="font-bold text-2xl mb-2">
                Need help right now?
              </p>
              <p className="text-white/90 mb-4 text-sm">
                All calls answered in person — 24 hours a day, 7 days a week
              </p>
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 bg-white text-[#0057A8] px-6 py-3 rounded font-bold hover:bg-[#0d1f3c] hover:text-white transition-colors"
              >
                <Phone size={18} aria-hidden="true" />
                {COMPANY.phone}
              </a>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { label: "62%", desc: "Roadside repairs completed within 90 minutes" },
              { label: "24/7", desc: "All calls answered in person — no recorded messages" },
              { label: "1,000+", desc: "Parts carried on each service van" },
              { label: "365", desc: "Days a year, always available" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-6 p-5 border border-slate-200 rounded-lg"
              >
                <div
                  className="text-4xl font-black text-[#0057A8] shrink-0 w-20 text-center"
                  aria-label={stat.label}
                >
                  {stat.label}
                </div>
                <p className="text-slate-700 text-sm">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ServicePageLayout>
    </>
  );
}
