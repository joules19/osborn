"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HOME_HERO_SLIDES } from "@/lib/data";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating]
  );

  const prev = useCallback(
    () => goTo((current - 1 + HOME_HERO_SLIDES.length) % HOME_HERO_SLIDES.length),
    [current, goTo]
  );
  const next = useCallback(
    () => goTo((current + 1) % HOME_HERO_SLIDES.length),
    [current, goTo]
  );

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = HOME_HERO_SLIDES[current];

  /* Gradient overlay colours per slide for visual variety */
  const gradients = [
    "from-[#0d1f3c]/80 via-[#0d1f3c]/50 to-transparent",
    "from-[#0d1f3c]/75 via-[#1B3260]/40 to-transparent",
    "from-[#0d1f3c]/85 via-[#0d1f3c]/55 to-transparent",
  ];

  return (
    <section
      className="relative h-[480px] md:h-[580px] lg:h-[640px] overflow-hidden bg-[#0d1f3c]"
      aria-label="Hero slideshow"
      aria-roledescription="carousel"
    >
      {/* Background: dark truck-workshop atmosphere using CSS */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#1B3260] to-slate-800"
        aria-hidden="true"
      />

      {/* Decorative pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #ffffff 0px,
            #ffffff 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradients[current]} transition-all duration-700`}
        aria-hidden="true"
      />

      {/* Slide content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-12">
        <div className="max-w-6xl mx-auto w-full">
          <div
            key={current}
            className="animate-in fade-in slide-in-from-left-8 duration-700"
          >
            {/* Blue accent bar */}
            <div className="w-16 h-1 bg-[#27AAE1] mb-6" aria-hidden="true" />

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white leading-tight max-w-2xl mb-4">
              {slide.headline}
            </h1>

            <p className="text-xl md:text-2xl text-[#27AAE1] font-semibold mb-8">
              {slide.subheading}
            </p>

            <Link
              href={slide.cta.href}
              className="inline-flex items-center gap-2 bg-white text-[#0d1f3c] px-7 py-3.5 font-bold uppercase tracking-widest text-sm hover:bg-[#27AAE1] hover:text-white transition-all duration-200 rounded"
            >
              {slide.cta.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Prev / Next */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-[#0057A8] text-white flex items-center justify-center transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} aria-hidden="true" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-[#0057A8] text-white flex items-center justify-center transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={20} aria-hidden="true" />
      </button>

      {/* Dots */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2"
        role="tablist"
        aria-label="Slide navigation"
      >
        {HOME_HERO_SLIDES.map((s, i) => (
          <button
            key={s.headline}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}: ${s.headline}`}
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-[#27AAE1] scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
