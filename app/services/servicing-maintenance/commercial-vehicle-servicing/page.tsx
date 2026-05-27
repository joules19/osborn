import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import ServiceSubNav from "@/components/services/ServiceSubNav";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import { SERVICING_SUB_NAV } from "@/lib/data";

export const metadata: Metadata = {
  title: "Commercial Vehicle Servicing",
  description:
    "Osborn plans and manages your vehicle inspection and maintenance schedules. Open 7am–midnight Monday–Friday and 8am–12 Saturday. Free collection & delivery.",
};

export default function CommercialVehicleServicingPage() {
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
              Commercial Vehicle Servicing
            </h1>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Keeping you on the road is our number one priority. At Osborn,
                we plan and manage your vehicle inspection and maintenance
                schedules.
              </p>
              <p>
                We will call or send you an email at the beginning of the week
                the work falls due. You can then choose a time that works best
                for you, during the day, or on our night shift.
              </p>
              <p>
                At Osborn we work hard, and late, to make sure your vehicles
                are earning their keep, all of the time. We are open for
                business from 7:00am to midnight, Monday to Friday, and from
                8:00am to 12 noon on Saturday.
              </p>
              <p>
                If one of your drivers has a mechanical problem late in the day,
                they can bring the vehicle in, and wait while we do the work.
                Or simply use one of our courtesy vans to get back to the depot,
                or get back home.
              </p>
              <p>Free vehicle collection and delivery is also available.</p>
              <p>
                When vehicles work harder, repairs are more likely. Osborn are
                always around to help. We keep over 5,000 parts in stock, and a
                further 1,000 on our service vans.
              </p>
            </div>
          </div>

          {/* Feature highlights */}
          <div className="space-y-4">
            {[
              {
                title: "7am – Midnight",
                desc: "Monday to Friday, plus night shift availability",
              },
              {
                title: "8am – 12 Noon",
                desc: "Saturday opening",
              },
              {
                title: "5,000+ Parts",
                desc: "In stock at our workshop",
              },
              {
                title: "Free Collection & Delivery",
                desc: "Or use our courtesy vans",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 p-4 rounded-lg bg-[#EEF4FA] border-l-4 border-[#0057A8]"
              >
                <div>
                  <h3 className="font-bold text-[#1B3260]">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ServicePageLayout>
    </>
  );
}
