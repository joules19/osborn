import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import NewsletterBanner from "@/components/ui/NewsletterBanner";
import { WHY_USE_REASONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Why Use Osborn",
  description:
    "10 reasons why Osborn Transport Services is the right choice for your fleet — from 24/7 availability to ISO9001 quality standards.",
};

export default function WhyUseOsbornPage() {
  return (
    <>
      <PageBanner title="Why Use Osborn" />

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Reasons grid */}
          <div>
            <h2 className="text-2xl font-bold text-[#27AAE1] mb-6">
              Here are just some of the reasons
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_USE_REASONS.map((reason) => (
                <div
                  key={reason.num}
                  className="flex items-start gap-3 p-4 rounded-lg border border-slate-200 hover:border-[#0057A8] hover:shadow-sm transition-all"
                >
                  <span
                    className="w-7 h-7 rounded-full bg-[#0057A8] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    {reason.num}
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {reason.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mark Foster quote */}
          <div>
            <h2 className="text-2xl font-bold text-[#27AAE1] mb-6">
              Setting the highest standards
            </h2>
            <div className="bg-[#EEF4FA] rounded-xl p-8">
              <h3 className="text-lg font-bold text-[#1B3260] mb-4">
                Mark Foster, owner and manager of Osborn Transport:
              </h3>
              <blockquote className="space-y-3 text-slate-700 text-sm leading-relaxed italic border-l-4 border-[#27AAE1] pl-4">
                <p>
                  &ldquo;I was destined to work with vehicles. As a boy, I was
                  either playing mechanics, or helping my father restore vintage
                  cars. I joined Osborn Transport at the age of 15, and worked
                  my way up to Senior Technician.
                </p>
                <p>
                  By 2002, I was John Osborn&apos;s right hand man. John
                  announced his retirement, and asked me if I would like to buy
                  the company. I jumped at the chance.
                </p>
                <p>
                  From that day, we have invested in the business, particularly
                  in technology. We have the latest diagnostic equipment and
                  computer systems. They run across the whole organisation, and
                  throughout our modern, purpose-built premises.
                </p>
                <p>
                  Dedicated to achieving the highest standards in all we do,
                  Osborn now work with some of the largest fleet operators in
                  the UK.&rdquo;
                </p>
              </blockquote>
            </div>

            {/* Accreditations */}
            <div className="mt-8 p-6 bg-[#0d1f3c] rounded-xl text-white">
              <h3 className="font-bold text-lg mb-3">
                Accreditations & Certifications
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-[#27AAE1]" aria-hidden="true">✓</span>
                  ISO9001/2000 Registered Company
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#27AAE1]" aria-hidden="true">✓</span>
                  I.R.T.E Workshop Accreditation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#27AAE1]" aria-hidden="true">✓</span>
                  VOSA-approved Tachograph Centre on site
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#27AAE1]" aria-hidden="true">✓</span>
                  ADR-licensed technicians for hazardous goods
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <NewsletterBanner />
    </>
  );
}
