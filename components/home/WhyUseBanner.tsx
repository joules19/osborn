import { WHY_USE_REASONS } from "@/lib/data";
import Link from "next/link";

export default function WhyUseBanner() {
  const featured = WHY_USE_REASONS.slice(0, 4);

  return (
    <section className="py-16 px-4 bg-white" aria-label="Why choose Osborn">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <span className="text-[#27AAE1] text-xs font-bold uppercase tracking-widest">
              Why Osborn?
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1B3260] mt-1">
              Here are just some of the reasons
            </h2>
          </div>
          <Link
            href="/why-use-osborn"
            className="text-[#0057A8] font-semibold text-sm hover:text-[#27AAE1] transition-colors shrink-0"
          >
            See all 10 reasons →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((reason) => (
            <div
              key={reason.num}
              className="relative p-6 border border-slate-200 rounded-lg hover:border-[#0057A8] hover:shadow-md transition-all group"
            >
              <div
                className="w-9 h-9 rounded-full bg-[#0057A8] text-white flex items-center justify-center text-sm font-bold mb-4 group-hover:bg-[#27AAE1] transition-colors"
                aria-hidden="true"
              >
                {reason.num}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
