import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import ServiceSubNav from "@/components/services/ServiceSubNav";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { SERVICING_SUB_NAV } from "@/lib/data";

export const metadata: Metadata = {
  title: "Computerised Maintenance Tracking",
  description:
    "Osborn's workshop control system gives you detailed lifetime costs for all your vehicles — every job from bulb replacement to major service.",
};

export default function ComputerisedMaintenanceTrackingPage() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-3xl font-black text-[#1B3260] mb-6">
              Computerised Maintenance Tracking
            </h1>
            <p className="text-slate-700 leading-relaxed mb-4">
              Osborn&apos;s workshop control system gives you detailed lifetime
              costs for all your vehicles. We can produce a report showing every
              job carried out by us, from a bulb replacement to a major service.
              Or tailor reports for different areas, such as damage, defects, or
              servicing.
            </p>
            <p className="text-slate-700 leading-relaxed">
              This gives you complete visibility and control over your fleet
              maintenance spend — helping you make informed decisions and plan
              budgets with confidence.
            </p>
          </div>

          <div className="bg-[#0d1f3c] rounded-xl p-8 text-white">
            <h3 className="text-lg font-bold mb-4">What you get</h3>
            <ul className="space-y-3 text-sm text-slate-200">
              {[
                "Detailed lifetime cost reporting per vehicle",
                "Full job history from bulb to major service",
                "Tailored reports by category: damage, defects, servicing",
                "Integrated with your MoT and service schedule",
                "Accessible reporting for fleet managers",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#27AAE1] shrink-0" aria-hidden="true">✓</span>
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
