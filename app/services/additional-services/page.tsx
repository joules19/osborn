import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import ServiceSubNav from "@/components/services/ServiceSubNav";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { ADDITIONAL_SUB_NAV } from "@/lib/data";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Additional Services",
  description:
    "VOSA-approved tachograph centre, hazardous goods, low emission zone, mobile servicing vans, daily fleet checks and out-of-hours services.",
};

export default function AdditionalServicesPage() {
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
        <div className="max-w-3xl">
          <h1 className="text-3xl font-black text-[#1B3260] mb-6">
            Additional Services
          </h1>
          <p className="text-slate-700 leading-relaxed mb-4">
            Understanding the needs of our customers is very important at
            Osborn. We are not driven by a main dealer mentality, too often
            concerned with maximising profit.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            All our services are geared to helping our clients be as efficient
            and effective as possible.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ADDITIONAL_SUB_NAV.map((item) => (
              <Button
                key={item.href}
                href={item.href}
                variant="outline"
                size="md"
                className="justify-start"
              >
                {item.label} →
              </Button>
            ))}
          </div>
        </div>
      </ServicePageLayout>
    </>
  );
}
