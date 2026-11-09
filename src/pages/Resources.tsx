import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/ui/PageHero";
import ResourceCard from "@/components/ui/ResourceCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { resources, resourceCategories } from "@/data/resources";
import { aboutImages } from "@/data/images";
import { cn } from "@/lib/utils";

export default function Resources() {
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? resources : resources.filter((r) => r.type === filter);

  return (
    <>
      <SEOHead
        title="Resources"
        description="Study guides, videos, presentations, and activities for young people exploring faith and purpose."
        path="/resources"
      />

      <PageHero
        eyebrow="Resources"
        title="Faith Resources for Young People"
        subtitle="Study guides, videos, presentations, and activities designed to help you explore faith, purpose, and growth."
        image={aboutImages.students}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2">
            {resourceCategories.map((cat) => (
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

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((resource, i) => (
              <div
                key={resource.id}
                className="animate-fade-up"
                style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
              >
                <ResourceCard resource={resource} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cloud">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Can't Find What You Need?"
            title="Ask Us a Question"
            subtitle="If you're looking for specific resources or guidance, we're here to help."
            align="center"
          />
          <div className="mt-8 text-center">
            <a
              href="/ask"
              className="inline-flex items-center gap-2 rounded-full bg-royal-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-royal-600"
            >
              Ask a Question
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
