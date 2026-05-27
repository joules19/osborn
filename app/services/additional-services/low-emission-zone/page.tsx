import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import ServiceSubNav from "@/components/services/ServiceSubNav";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { ADDITIONAL_SUB_NAV } from "@/lib/data";

export const metadata: Metadata = {
  title: "Low Emission Zone Services",
  description:
    "Prepare your fleet for UK Low Emission Zones. Osborn helps ensure your vehicles meet LEZ and ULEZ requirements.",
};

export default function LowEmissionZonePage() {
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
              Low Emission Zone Services
            </h1>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                As Low Emission Zones and Ultra Low Emission Zones expand across
                the UK, it is increasingly important that your fleet meets the
                required emission standards.
              </p>
              <p>
                Osborn can help you understand the requirements and ensure your
                vehicles are compliant. From fitting the right particulate
                filters to advising on vehicle replacement strategies.
              </p>
              <p>
                With Osborn on your side, you can be confident that your fleet
                will comply with all current and forthcoming LEZ/ULEZ
                requirements.
              </p>
            </div>
          </div>
          <div className="bg-[#EEF4FA] rounded-xl p-8">
            <h3 className="font-bold text-[#1B3260] text-lg mb-4">
              LEZ compliance services
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              {[
                "LEZ and ULEZ compliance assessment",
                "Particulate filter fitting and maintenance",
                "Emission standard advice and guidance",
                "Vehicle modification where applicable",
                "Ongoing compliance monitoring",
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
