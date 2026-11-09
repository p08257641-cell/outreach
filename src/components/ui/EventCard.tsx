import { Link } from "react-router-dom";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import type { EventItem } from "@/data/events";
import { formatDate } from "@/lib/utils";

export default function EventCard({ event }: { event: EventItem }) {
  const isPast = event.status === "past";

  return (
    <article className="card-base group flex flex-col overflow-hidden hover:shadow-lift">
      <div className="bg-gradient-to-br from-navy-800 to-navy-900 p-6">
        <div className="flex items-center justify-between">
          <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
            isPast ? "bg-navy-700 text-navy-200" : "bg-gold-500 text-navy-900"
          }`}>
            {isPast ? "Past Event" : "Upcoming"}
          </span>
          <span className="rounded-full bg-navy-700 px-3 py-1 text-xs font-medium capitalize text-navy-100">
            {event.category}
          </span>
        </div>
        <p className="mt-4 text-lg font-bold text-white">{event.title}</p>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="space-y-2 text-sm text-ink-light">
          <p className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-royal-500" />
            {formatDate(event.date)}
            {event.time && ` · ${event.time}`}
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-royal-500" />
            {event.location}
          </p>
        </div>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-navy-700">{event.description}</p>

        {event.registrationUrl && !isPast ? (
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-royal-600 transition hover:text-royal-700"
          >
            Register now
            <ArrowRight className="h-4 w-4" />
          </a>
        ) : (
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-royal-600 transition hover:text-royal-700"
          >
            Enquire
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </article>
  );
}
