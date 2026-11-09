import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/ui/PageHero";
import EventCard from "@/components/ui/EventCard";
import { EmptyState } from "@/components/ui/States";
import { PrimaryButton } from "@/components/ui/Button";
import { events, eventCategories } from "@/data/events";
import { aboutImages } from "@/data/images";
import { cn } from "@/lib/utils";

export default function Events() {
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? events : events.filter((e) => e.category === filter);

  return (
    <>
      <SEOHead
        title="Events"
        description="Upcoming and past events from Ephesus Missions & Outreach — school visits, gatherings, workshops, and special events."
        path="/events"
      />

      <PageHero
        eyebrow="Events"
        title="Upcoming & Past Events"
        subtitle="School outreach visits, Sunday gatherings, leadership workshops, and special community events."
        image={aboutImages.hero}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2">
            {eventCategories.map((cat) => (
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
                {filtered.map((event, i) => (
                  <div
                    key={event.id}
                    className="animate-fade-up"
                    style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
                  >
                    <EventCard event={event} />
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState
                title="No Events Found"
                description="There are no events in this category right now. Check back soon or contact us for upcoming opportunities."
              >
                <PrimaryButton to="/contact">Contact Us</PrimaryButton>
              </EmptyState>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
