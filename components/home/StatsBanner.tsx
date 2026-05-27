const STATS = [
  { value: "24/7", label: "Emergency Response" },
  { value: "62%", label: "Roadside repairs done in 90 mins" },
  { value: "5,000+", label: "Parts kept in stock" },
  { value: "100%", label: "MoT success rate (2013)" },
];

export default function StatsBanner() {
  return (
    <section
      className="bg-[#0d1f3c] py-12 px-4"
      aria-label="Key statistics"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div
              className="text-4xl lg:text-5xl font-black text-[#27AAE1] mb-2"
              aria-label={`${stat.value} — ${stat.label}`}
            >
              {stat.value}
            </div>
            <p className="text-slate-300 text-sm leading-snug">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
