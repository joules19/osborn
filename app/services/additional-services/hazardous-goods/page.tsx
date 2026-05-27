import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import ServiceSubNav from "@/components/services/ServiceSubNav";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { ADDITIONAL_SUB_NAV } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hazardous Goods Services",
  description:
    "ADR-licensed technicians for hazardous goods vehicles. Osborn can assist fuel tankers and vehicles carrying hazardous materials.",
};

export default function HazardousGoodsPage() {
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
              Hazardous Goods Services
            </h1>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Osborn&apos;s technicians hold ADR licences, allowing them to
                assist fuel tankers and vehicles carrying hazardous goods.
                This is an important capability that sets Osborn apart from
                most other fleet maintenance providers.
              </p>
              <p>
                Whether you need roadside assistance or workshop repairs for
                hazardous goods vehicles, Osborn has the trained and certified
                personnel to help.
              </p>
            </div>
          </div>
          <div className="bg-[#EEF4FA] rounded-xl p-8">
            <h3 className="font-bold text-[#1B3260] text-lg mb-4">
              Hazardous goods capability
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              {[
                "ADR-licensed technicians on staff",
                "Assistance for fuel tankers",
                "Hazardous goods vehicle maintenance",
                "Roadside and workshop services",
                "Full regulatory compliance",
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
