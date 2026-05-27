import { cn } from "@/lib/utils";

interface PageBannerProps {
  title: string;
  className?: string;
}

export default function PageBanner({ title, className }: PageBannerProps) {
  return (
    <section
      className={cn(
        "bg-[#1B3260] py-10 px-4",
        className
      )}
      aria-label={`${title} page header`}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-widest text-white">
          {title}
        </h1>
      </div>
    </section>
  );
}
