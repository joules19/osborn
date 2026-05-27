import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import ServiceSubNav from "@/components/services/ServiceSubNav";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { SERVICING_SUB_NAV } from "@/lib/data";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Servicing & Maintenance",
  description:
    "Osborn handles all your commercial vehicle servicing and maintenance requirements under one roof. MoT testing, preventative maintenance, computerised tracking and more.",
};

export default function ServicingMaintenancePage() {
  return (
    <>
      <PageBanner title="Services" />
      <ServicePageLayout
        subNav={
          <ServiceSubNav
            items={SERVICING_SUB_NAV}
            parentLabel="Servicing & Maintenance"
          />
        }
      >
        <div className="max-w-3xl">
          <h1 className="text-3xl font-black text-[#1B3260] mb-6">
            Servicing &amp; Maintenance
          </h1>
          <p className="text-slate-700 leading-relaxed mb-4">
            Today&apos;s fleets are under constant pressure to earn their keep.
            Managing the demands of delivery schedules, against the need to
            maintain your vehicles in good shape, isn&apos;t always easy.
          </p>
          <p className="text-slate-700 leading-relaxed mb-6">
            But with Osborn behind you, things look up. We can handle all your
            servicing and maintenance requirements, under one roof, and without
            any fuss.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {SERVICING_SUB_NAV.map((item) => (
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
