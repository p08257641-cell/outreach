
import {
  ArrowUpRight,
  Presentation,
  Users,
  BookOpen,
  Sparkles,
  Clock,
  Users2,
} from "lucide-react";

import { motion, useReducedMotion } from "motion/react";
import type { Program } from "@/data/programs";

const iconMap = {
  presentation: Presentation,
  users: Users,
  "book-open": BookOpen,
  sparkles: Sparkles,
};

export default function ProgramCard({
  program,
}: {
  program: Program;
}) {
  const Icon = iconMap[program.icon] ?? BookOpen;
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={reducedMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-[#EAE6F4] bg-white shadow-[0_8px_30px_rgba(23,13,46,0.05)] transition-shadow duration-300 hover:shadow-[0_25px_60px_rgba(23,13,46,0.13)]"
    >
      {/* Program image */}
      <div className="relative h-52 overflow-hidden bg-[#EDE6FF]">
        <img
          src={program.image}
          alt={program.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.style.visibility = "hidden";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#170D2E]/40 via-transparent to-transparent" />

        <span className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-2xl border border-white/60 bg-white/95 text-[#713BFF] shadow-lg backdrop-blur-sm">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>

      {/* Card content */}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-[0.13em] text-[#713BFF]">
          {program.tagline}
        </p>

        <h3 className="mt-2 text-xl font-extrabold leading-snug tracking-tight text-[#170D2E]">
          {program.name}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#625D70]">
          {program.description}
        </p>

        {/* Program information */}
        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-[#625D70]">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {program.duration}
          </span>

          <span className="inline-flex items-center gap-1.5">
            <Users2 className="h-4 w-4" aria-hidden="true" />
            {program.audience}
          </span>
        </div>

        {/* Landing-page navigation */}
        <a
          href="#contact"
          aria-label={`Enquire about ${program.name}`}
          className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-extrabold text-[#713BFF] transition-colors hover:text-[#4D22C5] focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713BFF]"
        >
          Enquire about this program

          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.article>
  );
}
