import type { Metadata } from "next";
import HeroSlider from "@/components/home/HeroSlider";
import ServiceCards from "@/components/home/ServiceCards";
import AccreditationBanner from "@/components/home/AccreditationBanner";
import WhyUseBanner from "@/components/home/WhyUseBanner";
import StatsBanner from "@/components/home/StatsBanner";
import NewsletterBanner from "@/components/ui/NewsletterBanner";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Fleet Maintenance & Recovery Services | Osborn Transport",
  description:
    "Osborn Transport Services — professional fleet maintenance, servicing & 24/7 breakdown recovery in Bedfordshire and across the UK. ISO9001 registered.",
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* Service cards + accreditation */}
      <ServiceCards />
      <div className="bg-[#EEF4FA] border-l-4 border-[#27AAE1] px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <AccreditationBanner />
        </div>
      </div>

      <StatsBanner />

      <WhyUseBanner />

      {/* About snapshot */}
      <section className="bg-[#EEF4FA] py-16 px-4" aria-label="About Osborn">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-[#27AAE1] text-xs font-bold uppercase tracking-widest">
              The Osborn Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3260] mt-2 mb-4 leading-tight">
              On your side from the start.
              <br />
              That means saving you more than money.
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              The last thing you need is to have a vehicle miss an inspector,
              fail an MoT, or have a breakdown. The results can be serious, both
              for your delivery schedule and your reputation.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              At Osborn, our aim is the same as yours. To make sure your fleet
              stays on the road, earning its keep — all of the time. With
              escalating fuel costs and EU legislation creating more pressure
              every day, you need someone in your corner, seven days a week.
            </p>
            <Button href="/about" size="lg">
              About Us
            </Button>
          </div>

          <div className="bg-[#1B3260] rounded-xl p-10 text-white">
            <h3 className="text-2xl font-bold mb-6">
              Having your vehicles maintained by Osborn will undoubtedly save
              you money.
            </h3>
            <ul className="space-y-3 text-slate-200 text-sm">
              {[
                "Entrust the care of your fleet to a company that understands your business demands",
                "Always doing a first-class job",
                "Working with some of the largest fleet operators in the UK",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    className="text-[#27AAE1] font-bold mt-0.5"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-sm text-slate-300">
                Based in Leighton Buzzard — serving the UK
              </p>
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="text-[#27AAE1] font-bold text-xl hover:text-white transition-colors"
              >
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Breakdown CTA */}
      <section
        className="bg-[#27AAE1] py-14 px-4 text-center"
        aria-label="24/7 breakdown call to action"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">
            Breakdown? We&apos;re here 24 / 7
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            From roadside repairs to UK-wide vehicle recovery — all calls
            answered in person, any time of day or night.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#0057A8] font-bold uppercase tracking-widest text-sm rounded hover:bg-[#0d1f3c] hover:text-white transition-all"
            >
              Call {COMPANY.phone}
            </a>
            <Button
              href="/services/breakdown-repairs"
              size="lg"
              className="bg-transparent border-2 border-white !text-white hover:bg-white hover:!text-[#0057A8]"
            >
              Breakdown Services
            </Button>
          </div>
        </div>
      </section>

      <NewsletterBanner />
    </>
  );
}
