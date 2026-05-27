import Link from "next/link";
import { ArrowRight, Wrench, AlertCircle, Plus } from "lucide-react";
import { HOME_SERVICE_CARDS } from "@/lib/data";

const cardConfig = [
  {
    icon: Wrench,
    bg: "bg-[#1a3a5c]",
    accent: "border-[#0057A8]",
    iconColor: "text-[#27AAE1]",
  },
  {
    icon: AlertCircle,
    bg: "bg-[#0d2d4d]",
    accent: "border-[#27AAE1]",
    iconColor: "text-[#27AAE1]",
  },
  {
    icon: Plus,
    bg: "bg-[#152840]",
    accent: "border-[#0057A8]",
    iconColor: "text-[#27AAE1]",
  },
];

export default function ServiceCards() {
  return (
    <section
      className="py-0"
      aria-label="Main services"
    >
      <div className="grid grid-cols-1 md:grid-cols-3">
        {HOME_SERVICE_CARDS.map((card, i) => {
          const { icon: Icon, bg, accent, iconColor } = cardConfig[i];
          return (
            <article
              key={card.href}
              className={`${bg} border-t-4 ${accent} group`}
            >
              <div className="p-8 lg:p-10 h-full flex flex-col">
                <Icon
                  className={`${iconColor} mb-4`}
                  size={36}
                  aria-hidden="true"
                />
                <h2 className="text-xl font-bold uppercase tracking-wide text-white mb-3">
                  {card.title}
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#27AAE1] uppercase tracking-widest hover:gap-3 transition-all"
                  aria-label={`Read more about ${card.title}`}
                >
                  Read More
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
