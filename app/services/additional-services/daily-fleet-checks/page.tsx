import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import ServiceSubNav from "@/components/services/ServiceSubNav";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { ADDITIONAL_SUB_NAV } from "@/lib/data";

export const metadata: Metadata = {
  title: "Daily Fleet Checks",
  description:
    "Regular daily fleet checks to keep your vehicles roadworthy, compliant and running at peak efficiency.",
};

export default function DailyFleetChecksPage() {
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
              Daily Fleet Checks
            </h1>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Regular daily checks are an essential part of keeping your
                fleet roadworthy and legally compliant. Osborn can help you
                implement and manage a rigorous daily check programme for your
                vehicles.
              </p>
              <p>
                By catching minor issues before they become major problems, you
                reduce the risk of breakdowns, DVSA prohibitions, and costly
                unplanned downtime.
              </p>
            </div>
          </div>
          <div className="bg-[#EEF4FA] rounded-xl p-8">
            <h3 className="font-bold text-[#1B3260] text-lg mb-4">
              Daily check programme
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              {[
                "Structured daily vehicle inspection programme",
                "Early identification of defects",
                "Reduced breakdown risk",
                "DVSA compliance documentation",
                "Integrated with maintenance scheduling",
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
