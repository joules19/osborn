import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import NewsletterBanner from "@/components/ui/NewsletterBanner";
import { OPERATING_HOURS, COMPANY } from "@/lib/data";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Operating Hours",
  description:
    "Osborn is open Monday–Friday 7am–midnight and Saturday 8am–12noon. Mobile service vans available at your premises too.",
};

export default function OperatingHoursPage() {
  return (
    <>
      <PageBanner title="Operating Hours" />

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-slate-700 leading-relaxed mb-8">
              Our workshops at Leighton Buzzard are open for business six days a
              week. From Monday to Friday we operate from 7:00am until 6:00pm,
              plus a night shift every weekday until midnight. We also open on
              Saturdays, from 8:00am until 12:00 noon.
            </p>

            {/* Hours cards */}
            <div className="space-y-4">
              {Object.values(OPERATING_HOURS).map((entry) => (
                <div
                  key={entry.label}
                  className="flex items-center gap-6 p-5 bg-[#EEF4FA] rounded-lg border-l-4 border-[#0057A8]"
                >
                  <div className="shrink-0 w-32">
                    <div className="text-xs font-bold uppercase text-slate-500">
                      {entry.label}
                    </div>
                  </div>
                  <div className="text-[#1B3260] font-bold">{entry.hours}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#27AAE1] mb-4">
              Too busy to come to us?
              <br />
              <span className="text-[#1B3260]">No problem, we&apos;ll come to you</span>
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              With our fleet of service vans, the technicians at Osborn can do
              inspections and servicing on your vehicles at your premises, at a
              time to suit you. The work can even be done after hours, or on
              Saturdays.
            </p>

            <div className="bg-[#0d1f3c] rounded-xl p-8 text-white">
              <p className="font-bold text-lg mb-2">
                For emergency assistance call us any time
              </p>
              <p className="text-slate-400 text-sm mb-4">
                All calls answered in person — 24/7
              </p>
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 bg-[#27AAE1] text-white px-6 py-3 rounded font-bold hover:bg-[#1b95cc] transition-colors"
              >
                <Phone size={18} aria-hidden="true" />
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <NewsletterBanner />
    </>
  );
}
