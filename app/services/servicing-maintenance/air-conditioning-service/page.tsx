import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import ServiceSubNav from "@/components/services/ServiceSubNav";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { SERVICING_SUB_NAV } from "@/lib/data";

export const metadata: Metadata = {
  title: "Air Conditioning Service",
  description:
    "Complete air conditioning service for trucks and cars. Leak detection, repairs and regas. Properly trained technicians with the latest equipment.",
};

export default function AirConditioningServicePage() {
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
              Air Conditioning Service
            </h1>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Osborn now offer a complete air conditioning service for your
                trucks (and your cars too). With properly trained technicians,
                and the very latest equipment, we offer leak detection, repairs
                and regas for every type of vehicle.
              </p>
              <p>
                You can have AC checks and tests done whenever your vehicles
                come to us for servicing and maintenance.
              </p>
              <p>
                Or we can come to you, and do all the work at your place.
              </p>
            </div>
          </div>

          <div className="bg-[#EEF4FA] rounded-xl p-8">
            <h3 className="font-bold text-[#1B3260] text-lg mb-4">
              AC Service includes
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              {[
                "Leak detection using latest equipment",
                "Repairs for all vehicle types",
                "Regas / refrigerant recharge",
                "Available at our workshop or on-site at your premises",
                "For trucks, HGVs and cars",
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
