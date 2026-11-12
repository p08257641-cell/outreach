import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({ testimonial, featured = false }: { testimonial: Testimonial; featured?: boolean }) {
  return (
    <figure
      className={`relative flex flex-col rounded-2xl p-5 sm:p-8 ${
        featured
          ? "bg-navy-900 text-white shadow-lift"
          : "bg-white shadow-card ring-1 ring-cloud-dark"
      }`}
    >
      <Quote className={`h-8 w-8 sm:h-10 sm:w-10 ${featured ? "text-gold-400" : "text-gold-300"}`} fill="currentColor" />
      <blockquote className={`mt-3 flex-1 text-base leading-relaxed sm:mt-4 sm:text-lg ${featured ? "text-navy-100" : "text-navy-700"}`}>
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3.5 sm:mt-6 sm:gap-4">
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12 ${featured ? "bg-gold-500 text-navy-900" : "bg-navy-50 text-navy-700"} font-heading font-bold`}>
          {testimonial.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className={`font-semibold ${featured ? "text-white" : "text-navy-800"}`}>
            {testimonial.name}
          </p>
          <p className={`text-sm ${featured ? "text-navy-200" : "text-ink-light"}`}>
            {testimonial.context}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
