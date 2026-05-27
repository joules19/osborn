import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import ServiceSubNav from "@/components/services/ServiceSubNav";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { ADDITIONAL_SUB_NAV, COMPANY } from "@/lib/data";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Out-of-Hours & Weekend Services",
  description:
    "Osborn is open until midnight Monday–Friday and 8am–12 Saturday. Mobile vans available evenings and weekends for on-site servicing.",
};

export default function OutOfHoursServicesPage() {
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
              Out-of-Hours &amp; Weekend Services
            </h1>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Our workshops at Leighton Buzzard are open for business six
                days a week. From Monday to Friday we operate from 7:00am until
                6:00pm, plus a night shift every weekday until midnight. We also
                open on Saturdays, from 8:00am until 12:00 noon.
              </p>
              <p>
                Too busy to come to us? No problem — we&apos;ll come to you.
              </p>
              <p>
                With our fleet of service vans, the technicians at Osborn can
                do inspections and servicing on your vehicles at your premises,
                at a time to suit you. The work can even be done after hours,
                or on Saturdays.
              </p>
            </div>

            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="mt-8 inline-flex items-center gap-2 bg-[#0057A8] text-white px-6 py-3 rounded font-bold hover:bg-[#27AAE1] transition-colors"
            >
              <Phone size={18} aria-hidden="true" />
              Call {COMPANY.phone}
            </a>
          </div>

          <div className="space-y-4">
            {[
              {
                label: "Mon – Fri",
                value: "7:00am – Midnight",
                sub: "Day and night shift",
              },
              {
                label: "Saturday",
                value: "8:00am – 12 Noon",
                sub: "Weekend availability",
              },
              {
                label: "Mobile Service",
                value: "Your Premises",
                sub: "Evenings & weekends",
              },
              {
                label: "Emergency",
                value: "24 / 7",
                sub: "All calls answered in person",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-6 p-5 bg-[#EEF4FA] rounded-lg border-l-4 border-[#0057A8]"
              >
                <div className="shrink-0 w-24 text-right">
                  <div className="text-xs font-bold uppercase text-slate-500">
                    {item.label}
                  </div>
                  <div className="text-xl font-black text-[#1B3260]">
                    {item.value}
                  </div>
                </div>
                <p className="text-sm text-slate-600">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </ServicePageLayout>
    </>
  );
}
