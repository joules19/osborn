import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import ServiceSubNav from "@/components/services/ServiceSubNav";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { SERVICING_SUB_NAV } from "@/lib/data";

export const metadata: Metadata = {
  title: "Preventative Maintenance",
  description:
    "Osborn's preventative maintenance programme keeps your fleet running efficiently. Particulate filter maintenance, DVSA compliance and more.",
};

export default function PreventativeMaintenancePage() {
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
              Preventative Maintenance
            </h1>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                One of Osborn&apos;s valuable services for customers is our
                preventative maintenance programme. Keeping your vehicles
                working efficiently at all times is critical to your
                company&apos;s financial health. With Osborn, you can be
                confident your vehicles are always in good shape, with
                maintenance and servicing planned well in advance, and at a
                time to fit your schedule.
              </p>
              <p>
                And with Osborn on your side, you know you&apos;ll be
                conforming to the latest legislation.
              </p>
              <p>
                For example, the DVSA are issuing immediate prohibitions for
                defective fuel systems and leaks. There will be no more
                tolerance for even the smallest amount of diesel spillage. All
                the more reason to talk with Osborn today.
              </p>
            </div>

            <h2 className="text-xl font-bold text-[#27AAE1] mt-8 mb-4">
              When did you last have your particulate filters checked?
            </h2>
            <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
              <p>
                Diesel powered vehicles have been the mainstay of the European
                trucking business for a long time. Properly maintained, and with
                well fitted, good quality particulate filters onboard, diesel
                vehicles are no more polluting than those using petrol.
              </p>
              <p>
                At Osborn, we set the highest standards of maintenance and
                repairs for all of our customers. So you can be sure that your
                vehicles are always in great shape. And they won&apos;t be adding
                to air pollution problems.
              </p>
              <p>
                Diesel particulate filters have to be warranted for two years,
                but longevity depends on correct installation, and proper,
                regular cleaning.
              </p>
              <p>
                At Osborn we only fit Cawell Advanced Regenerative Trap (ART)
                filters, which are highly effective at low temperatures, and
                suitable for both urban and trunking operations. Cawell filters
                are not the cheapest, but we believe they are the best, and will
                help reduce your maintenance costs, and fuel consumption.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-[#EEF4FA] rounded-xl p-8 border-l-4 border-[#27AAE1]">
              <h3 className="font-bold text-[#1B3260] text-lg mb-4">
                Why preventative maintenance matters
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {[
                  "Keeps vehicles compliant with the latest DVSA legislation",
                  "Reduces costly unplanned breakdowns",
                  "Maintains fuel efficiency and reduces emissions",
                  "Scheduled around your operations to minimise downtime",
                  "We fit only Cawell ART filters — the best in class",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="text-[#0057A8] shrink-0 font-bold" aria-hidden="true">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ServicePageLayout>
    </>
  );
}
