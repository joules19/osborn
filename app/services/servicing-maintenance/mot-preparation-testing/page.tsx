import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import ServiceSubNav from "@/components/services/ServiceSubNav";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { SERVICING_SUB_NAV } from "@/lib/data";

export const metadata: Metadata = {
  title: "MoT Preparation & Testing",
  description:
    "Osborn's MoT success rate hit 100% in 2013. VOSA-approved tachograph centre, headlamp analyser, brake roller testing and full MoT presentation.",
};

const MOT_ITEMS = [
  "MoT headlamp alignment test",
  "MoT brake roller testing",
  "MoT test trailer hire (where applicable)",
  "Presentation for MoT",
  "MoT steam clean",
  "MoT test fees",
];

export default function MotPreparationPage() {
  return (
    <>
      <PageBanner title="Servicing & Maintenance" />
      <ServicePageLayout
        subNav={
          <ServiceSubNav
            items={SERVICING_SUB_NAV}
            parentLabel="Servicing & Maintenance"
          />
        }
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl font-black text-[#1B3260] mb-6">
              MoT Preparation &amp; Testing
            </h1>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                In 2013 our MoT success rate hit 100%. It was impressive
                result, especially when you compare it with VOSA&apos;s
                national stats. In the second quarter of 2013, only 77% of HGVs
                passed their MoTs at the initial test.
              </p>
              <p>
                At the same time, VOSA published details of the results of
                roadside inspections. From April to June there were 32,660
                roadside inspections carried out, resulting in 7,072 roadworthiness
                prohibitions.
              </p>
              <p>
                Make sure your vehicles are in good shape throughout the year.
                Let Osborn take care of them.
              </p>
              <p>
                Do remember that higher pass rates also keep your OCRS scores
                low. And that means there is less chance of being stopped by
                VOSA for a routine check.
              </p>
            </div>

            <h2 className="text-xl font-bold text-[#27AAE1] mt-8 mb-4">
              The best possible preparation of your vehicles for MoT testing
            </h2>
            <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
              <p>
                Our headlamp analyser not only checks headlamp alignment, but
                also measures beam intensity. It&apos;s also fully compatible
                with today&apos;s xenon lamps. What&apos;s more, it&apos;s one
                of the few headlamp analysers that prints out a certificate of
                compliance — a real benefit when DVSA checks your headlamp
                maintenance records.
              </p>
              <p>
                Our brake roller testing machine provides an accurate picture of
                each wheel&apos;s performance. Osborn&apos;s fully loaded test
                trailer is designed for a meaningful brake-roller test on three
                axle tractor units, and it&apos;s the ideal trailer to take for
                MoT presentation.
              </p>
            </div>

            <h2 className="text-xl font-bold text-[#27AAE1] mt-8 mb-3">
              No ministry plates – no MoT
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              Before a commercial vehicle goes for its annual test, it must have
              a plating certificate that shows the permitted axle and gross
              vehicle weights. When you first register a vehicle, it&apos;s all
              part of the process in the DVLA&apos;s V355 guidance notes. If
              you bought a new vehicle from a dealer who registered it, you need
              to make sure the plating certificate is included. If you have any
              problems or concerns, Osborn can advise.
            </p>
          </div>

          {/* MoT items included */}
          <div>
            <div className="bg-[#0d1f3c] rounded-xl p-8 text-white sticky top-24">
              <h3 className="text-lg font-bold mb-2">
                MoT Preparation — Included Services
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                The following are all part of our MoT Preparation for your
                vehicles and are also part of our Menu Pricing scheme.
              </p>
              <ul className="space-y-3">
                {MOT_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="text-[#27AAE1] shrink-0" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-xs text-slate-400">
                  100% MoT success rate in 2013 — versus 77% national average
                </p>
              </div>
            </div>
          </div>
        </div>
      </ServicePageLayout>
    </>
  );
}
