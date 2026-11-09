import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/ui/PageHero";
import TestimonialCard from "@/components/ui/TestimonialCard";
import TestimonialsCarousel from "@/components/testimonials/TestimonialsCarousel";
import SectionHeading from "@/components/ui/SectionHeading";
import { EmptyState } from "@/components/ui/States";
import { testimonials, testimonyCategories } from "@/data/testimonials";
import { aboutImages } from "@/data/images";
import { cn } from "@/lib/utils";

export default function Testimonies() {
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? testimonials : testimonials.filter((t) => t.category === filter);

  return (
    <>
      <SEOHead
        title="Testimonies"
        description="Real stories from students and volunteers whose lives have been transformed through Ephesus Missions & Outreach."
        path="/testimonies"
      />

      <PageHero
        eyebrow="Testimonies"
        title="Lives Changed by Faith"
        subtitle="Real stories from the students and young people we've had the privilege to walk alongside."
        image={aboutImages.community}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          {testimonials.length > 0 && (
            <div className="mx-auto mb-16 max-w-3xl">
              <SectionHeading
                eyebrow="Featured Testimony"
                title="A Story of Transformation"
                align="center"
              />
              <div className="mt-8">
                <TestimonialsCarousel testimonials={testimonials} />
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {testimonyCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  filter === cat.id
                    ? "bg-royal-500 text-white"
                    : "bg-cloud text-navy-700 hover:bg-navy-50"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="mt-10">
            {filtered.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((testimonial, i) => (
                  <div
                    key={testimonial.id}
                    className="animate-fade-up"
                    style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState
                title="No Testimonies Yet"
                description="Stories from this category will appear here. Check back soon as we continue to collect and share testimonies."
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
