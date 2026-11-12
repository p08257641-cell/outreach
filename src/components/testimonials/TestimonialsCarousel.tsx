import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { cn } from "@/lib/utils";

export default function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  if (count === 0) return null;
  const current = testimonials[index];

  return (
    <div className="relative">
      <TestimonialCard testimonial={current} featured />

      <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-6 sm:gap-4">
        <button
          type="button"
          onClick={prev}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy-700 shadow-soft ring-1 ring-cloud-dark transition hover:bg-navy-50 disabled:opacity-50"
          aria-label="Previous testimony"
          disabled={count <= 1}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === index ? "w-8 bg-royal-500" : "w-2 bg-navy-200 hover:bg-navy-300"
              )}
              aria-label={`Go to testimony ${i + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy-700 shadow-soft ring-1 ring-cloud-dark transition hover:bg-navy-50 disabled:opacity-50"
          aria-label="Next testimony"
          disabled={count <= 1}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
