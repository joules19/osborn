import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import ServiceSubNav from "@/components/services/ServiceSubNav";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { BREAKDOWN_SUB_NAV } from "@/lib/data";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Free Vehicle Recovery Account",
  description:
    "Open a free vehicle recovery account with Osborn and get access to our 24/7 roadside repair and UK-wide recovery services whenever you need them.",
};

export default function FreeVehicleRecoveryAccountPage() {
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
              Free Vehicle Recovery Account
            </h1>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Open a free vehicle recovery account with Osborn and get
                immediate access to our full breakdown and recovery service —
                any time you need it.
              </p>
              <p>
                With an Osborn recovery account, your drivers will always have
                a number to call in an emergency. One call, answered in person,
                24 hours a day.
              </p>
              <p>
                There is no charge to open an account. You only pay when you
                use the service. It&apos;s that simple.
              </p>
            </div>

            <div className="mt-8">
              <Button href="/contact" size="lg">
                Open a Free Account
              </Button>
            </div>
          </div>

          <div className="bg-[#0d1f3c] rounded-xl p-8 text-white">
            <h3 className="text-lg font-bold mb-4">Account benefits</h3>
            <ul className="space-y-3 text-sm text-slate-200">
              {[
                "Free to open — no setup fees",
                "Pay only when you use the service",
                "24/7 access to roadside repair and recovery",
                "All calls answered in person",
                "UK-wide coverage",
                "Priority response for account holders",
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-2">
                  <span className="text-[#27AAE1] shrink-0" aria-hidden="true">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ServicePageLayout>
    </>
  );
}
