import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import NewsletterBanner from "@/components/ui/NewsletterBanner";
import { MENU_PRICING_ITEMS } from "@/lib/data";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Osborn's competitive pricing. Monthly menu pricing scheme covering oil, fluids, filters, MoT preparation, test fees and more.",
};

export default function PricingPage() {
  return (
    <>
      <PageBanner title="Pricing" />

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                There are no shortcuts in vehicle servicing and maintenance.
                Safety and reliability cannot be compromised to save a few quid.
                Having said that, there are always opportunities to improve
                efficiency, and manage work better.
              </p>
              <p>
                At Osborn, we are confident that we can help you reduce your
                running costs. With our planned maintenance programmes,
                comprehensive parts stores, and onsite repairs, your fleet will
                be off the road for less time.
              </p>
              <p>
                Our prices are very competitive. We beat main dealer prices year
                round. We don&apos;t need to run special price promotions.
              </p>
              <p>
                Our customers know that we offer excellent value, and proper
                customer service. That&apos;s why they stay with us. Not because
                they have to, but because they want to.
              </p>
            </div>

            <div className="mt-8">
              <Button href="/contact" size="lg">
                Get a Quote
              </Button>
            </div>
          </div>

          {/* Menu Pricing */}
          <div>
            <div className="bg-[#0d1f3c] rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-2">Menu Pricing</h2>
              <p className="text-slate-400 text-sm mb-6">
                To help our customers budget better each year, we offer a
                monthly payment scheme. It can be tailored to any make or model
                of vehicle, of any size, and from any type of fleet.
              </p>

              <h3 className="text-sm font-bold uppercase tracking-widest text-[#27AAE1] mb-4">
                What&apos;s included
              </h3>
              <ul className="space-y-3">
                {MENU_PRICING_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="text-[#27AAE1] shrink-0" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/20 text-xs text-slate-400">
                Tailored to any make, model or size of vehicle
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterBanner />
    </>
  );
}
