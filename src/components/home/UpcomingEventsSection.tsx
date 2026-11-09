
import { motion, useReducedMotion } from "motion/react";
import {
  CalendarDays,
  Clock3,
  MapPin,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

import { upcomingEvents } from "@/data/upcomingEvents";
import AnimatedText from "@/components/ui/AnimatedText";

export default function UpcomingEventsSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="events"
      aria-labelledby="events-title"
      className="scroll-mt-24 bg-[#F5F3FF] py-20 sm:py-24 lg:py-28"
    >
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedText>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#713BFF]">
              Stay Connected
            </p>
          </AnimatedText>

          <AnimatedText delay={0.08}>
            <h2
              id="events-title"
              className="mt-4 text-4xl font-black tracking-[-0.045em] text-[#170D2E] sm:text-5xl"
            >
              Upcoming{" "}
              <span className="text-[#713BFF]">Events.</span>
            </h2>
          </AnimatedText>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#625D70]">
            Join us for meaningful gatherings, school outreach
            programs, and opportunities to grow in faith.
          </p>
        </div>

        {upcomingEvents.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <motion.article
                key={event.id}
                initial={
                  reducedMotion
                    ? false
                    : { opacity: 0, y: 35 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: reducedMotion ? 0 : index * 0.1,
                }}
                className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-[#EAE6F4] bg-white shadow-[0_8px_30px_rgba(23,13,46,0.05)] transition-shadow duration-300 hover:shadow-[0_20px_55px_rgba(23,13,46,0.12)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#170D2E]">
                  <img
                    src={event.image}
                    alt={`${event.title} event poster`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#170D2E]/45 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full bg-[#D7FF35] px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-[#170D2E]">
                    Upcoming
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-extrabold tracking-tight text-[#170D2E]">
                    {event.title}
                  </h3>

                  <div className="mt-5 space-y-3 text-sm text-[#625D70]">
                    <p className="flex items-center gap-3">
                      <CalendarDays className="h-4 w-4 shrink-0 text-[#713BFF]" />
                      {event.date}
                    </p>

                    <p className="flex items-center gap-3">
                      <Clock3 className="h-4 w-4 shrink-0 text-[#713BFF]" />
                      {event.time}
                    </p>

                    <p className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 shrink-0 text-[#713BFF]" />
                      {event.location}
                    </p>
                  </div>

                  <p className="mt-5 flex-1 text-sm leading-7 text-[#625D70]">
                    {event.description}
                  </p>

                  <a
                    href={event.registrationUrl || "#contact"}
                    target={
                      event.registrationUrl?.startsWith("https://")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      event.registrationUrl?.startsWith("https://")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="mt-7 inline-flex items-center justify-between gap-3 rounded-full bg-[#713BFF] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#8257FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713BFF]"
                  >
                    {event.registrationUrl
                      ? "Register / Learn More"
                      : "Enquire About Event"}

                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-12 max-w-2xl rounded-[26px] border border-[#EAE6F4] bg-white px-8 py-12 text-center shadow-sm">
            <CalendarDays className="mx-auto h-10 w-10 text-[#713BFF]" />

            <h3 className="mt-5 text-2xl font-extrabold text-[#170D2E]">
              New Events Coming Soon
            </h3>

            <p className="mx-auto mt-4 max-w-md leading-7 text-[#625D70]">
              We are preparing more opportunities to connect,
              serve, and make a difference. Get in touch to
              learn about upcoming activities.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#713BFF] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#8257FF]"
            >
              Contact Our Team
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
