import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import ServiceSubNav from "@/components/services/ServiceSubNav";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { BREAKDOWN_SUB_NAV } from "@/lib/data";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Breakdown & Repairs",
  description:
    "From roadside repairs to UK-wide vehicle recovery — 24 hours a day, 365 days a year. All calls answered in person. No recorded messages.",
};

export default function BreakdownRepairsPage() {
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
        <div className="max-w-3xl">
          <h1 className="text-3xl font-black text-[#1B3260] mb-6">
            Breakdown &amp; Repairs
          </h1>
          <p className="text-slate-700 leading-relaxed mb-4">
            From roadside repairs, to UK wide vehicle recovery, to structural
            repairs at our workshops, Osborn are there for you, every day of
            the year, 24 hours a day.
          </p>
          <p className="text-slate-700 leading-relaxed mb-8">
            You won&apos;t get a recorded message if you call in the middle of
            the night. All calls are answered in person — always.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {BREAKDOWN_SUB_NAV.map((item) => (
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
