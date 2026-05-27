import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import ServiceSubNav from "@/components/services/ServiceSubNav";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { BREAKDOWN_SUB_NAV } from "@/lib/data";

export const metadata: Metadata = {
  title: "UK Wide Vehicle Recovery",
  description:
    "Osborn offer UK-wide vehicle recovery, always available. Get your vehicle recovered to our workshop or any destination in the UK.",
};

export default function UKWideVehicleRecoveryPage() {
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
              UK Wide Vehicle Recovery
            </h1>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                When a roadside repair is not possible, Osborn&apos;s UK-wide
                vehicle recovery service is always available. We can recover
                your vehicle to our workshop, or to any destination in the UK.
              </p>
              <p>
                Our recovery service operates 24 hours a day, 7 days a week,
                365 days a year. All calls are answered in person — you
                won&apos;t be left talking to a machine.
              </p>
              <p>
                Whether it&apos;s a car, a van, or a large commercial vehicle,
                we have the equipment and expertise to recover it safely and
                efficiently.
              </p>
            </div>
          </div>

          <div className="bg-[#EEF4FA] rounded-xl p-8">
            <h3 className="font-bold text-[#1B3260] text-lg mb-4">
              Recovery service features
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              {[
                "UK-wide coverage — anywhere, any time",
                "All calls answered in person 24/7",
                "Recovery for all vehicle types",
                "Transport to Osborn workshop or any UK destination",
                "Fast response times",
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
