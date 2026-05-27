import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import ServiceSubNav from "@/components/services/ServiceSubNav";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { ADDITIONAL_SUB_NAV } from "@/lib/data";

export const metadata: Metadata = {
  title: "VOSA-Approved Tachograph Centre",
  description:
    "Osborn is a VOSA-approved tachograph centre on site. Calibration, installation and inspection of analogue and digital tachographs.",
};

export default function TachographCentrePage() {
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
              VOSA-Approved Tachograph Centre
            </h1>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Osborn operates a VOSA-approved tachograph centre on site. This
                means that all tachograph work — from routine calibration to
                installation and fault repair — can be carried out at our
                workshop without the need to visit a separate specialist.
              </p>
              <p>
                Having an approved tachograph centre on site saves you time and
                money, and ensures that all work is carried out to the
                highest standards, with full compliance certification.
              </p>
            </div>
          </div>
          <div className="bg-[#EEF4FA] rounded-xl p-8">
            <h3 className="font-bold text-[#1B3260] text-lg mb-4">
              Tachograph services
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              {[
                "VOSA-approved on-site centre",
                "Analogue and digital tachograph calibration",
                "New tachograph installation",
                "Fault diagnosis and repair",
                "Full compliance documentation",
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
