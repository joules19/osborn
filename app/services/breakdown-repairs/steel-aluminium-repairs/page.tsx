import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import ServiceSubNav from "@/components/services/ServiceSubNav";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { BREAKDOWN_SUB_NAV } from "@/lib/data";

export const metadata: Metadata = {
  title: "Steel & Aluminium Repairs / Welding",
  description:
    "Osborn carry out all steel and aluminium welding and structural repairs on site. We do not outsource anything.",
};

export default function SteelAluminiumRepairsPage() {
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
              Steel &amp; Aluminium Repairs / Welding
            </h1>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                All steel and aluminium welding is carried out on site at our
                workshop. We do not outsource anything — which means faster
                turnaround times and complete quality control.
              </p>
              <p>
                Our technicians are experienced in all types of structural
                repairs and fabrication for commercial vehicles, trailers and
                bodies.
              </p>
              <p>
                Whether it&apos;s a minor repair or major structural work, our
                purpose-built workshop has the space and equipment to handle it.
              </p>
            </div>
          </div>

          <div className="bg-[#EEF4FA] rounded-xl p-8">
            <h3 className="font-bold text-[#1B3260] text-lg mb-4">
              Our capabilities
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              {[
                "Steel welding and fabrication",
                "Aluminium welding and fabrication",
                "Structural repairs for commercial vehicles",
                "Trailer and body repairs",
                "All work carried out on site — nothing outsourced",
                "Purpose-built workshop with full equipment",
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
