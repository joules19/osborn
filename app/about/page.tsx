import type { Metadata } from "next";
import PageBanner from "@/components/ui/PageBanner";
import NewsletterBanner from "@/components/ui/NewsletterBanner";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Osborn Transport Services — professional fleet maintenance based in Leighton Buzzard, Bedfordshire. ISO9001 registered since 2015.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" />

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div>
            <h2 className="text-2xl font-bold text-[#27AAE1] mb-1">
              The Osborn Difference
            </h2>
            <h3 className="text-3xl font-black text-[#1B3260] mb-1">
              On your side from the start.
            </h3>
            <h3 className="text-3xl font-black text-[#1B3260] mb-6">
              That means saving you more than money
            </h3>

            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                The last thing you need is to have a vehicle miss an inspector,
                fail an MoT, or have a breakdown. The results can be serious,
                both for your delivery schedule, and your reputation.
              </p>
              <p>
                At Osborn, our aim is the same as yours. To make sure your
                fleet stays on the road, earning its keep, all of the time. And
                with escalating fuel costs and EU legislation creating more
                pressure every day, you need someone in your corner seven days
                a week, creating more pressure every day.
              </p>
              <p>
                Having your vehicles serviced and maintained by Osborn will
                undoubtedly save you money. It will also mean that you can
                entrust the care of your fleet to a company that prides itself
                on understanding the demands of your business, and always doing
                a first-class job.
              </p>
            </div>

            <div className="mt-8">
              <Button href="/why-use-osborn" size="lg">
                Why Use Osborn
              </Button>
            </div>
          </div>

          {/* Blue card with truck image placeholder */}
          <div className="bg-[#1B3260] rounded-xl overflow-hidden">
            {/* Visual accent - vehicle workshop aesthetic */}
            <div className="h-48 bg-gradient-to-br from-[#0d1f3c] to-[#27AAE1]/20 flex items-center justify-center">
              <div className="text-center px-8">
                <div className="text-6xl font-black text-white/10 uppercase tracking-widest">
                  OSBORN
                </div>
                <div className="w-16 h-1 bg-[#27AAE1] mx-auto mt-2" aria-hidden="true" />
              </div>
            </div>
            <div className="p-8 text-white">
              <p className="text-slate-300 text-sm leading-relaxed">
                Dedicated to achieving the highest standards in all we do,
                Osborn now work with some of the largest fleet operators in the UK.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {[
                  "ISO9001/2000 Registered",
                  "I.R.T.E Workshop Accreditation",
                  "Based in Leighton Buzzard, Bedfordshire",
                  "Serving clients across the UK",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-[#27AAE1]" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <NewsletterBanner />
    </>
  );
}
