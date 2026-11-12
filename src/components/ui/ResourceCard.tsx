import { Download, Play, FileText, Activity, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { Resource } from "@/data/resources";
import { resourceTypeLabels } from "@/data/resources";

const typeStyles = {
  "study-guide": { icon: FileText, bg: "bg-blue-smoke-50", border: "border-blue-smoke-200", color: "text-blue-smoke" },
  video: { icon: Play, bg: "bg-clear-sky-50", border: "border-clear-sky-200", color: "text-clear-sky-600" },
  presentation: { icon: Download, bg: "bg-grass-green-50", border: "border-grass-green-200", color: "text-grass-green" },
  activity: { icon: Activity, bg: "bg-dark-teal-50", border: "border-dark-teal-200", color: "text-dark-teal" },
} as const;

export default function ResourceCard({ resource }: { resource: Resource }) {
  const style = typeStyles[resource.type];
  const Icon = style.icon;
  const reducedMotion = useReducedMotion();
  const external = /^https?:\/\//i.test(resource.url);
  return (
    <motion.article whileHover={reducedMotion ? undefined : { y: -5 }} transition={{ duration: 0.25 }} className={`group flex h-full flex-col rounded-[26px] border p-6 shadow-[0_8px_30px_rgba(14,58,134,0.045)] transition-shadow duration-300 hover:shadow-[0_22px_55px_rgba(14,58,134,0.11)] ${style.bg} ${style.border}`}>
      <div className="flex items-start justify-between gap-4">
        <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/85 shadow-sm ${style.color}`}><Icon className="h-6 w-6" aria-hidden="true" /></span>
        {resource.featured && <span className="rounded-full bg-fresh-yellow px-3 py-1 text-xs font-bold text-blue-smoke-950">Featured</span>}
      </div>
      <h3 className="mt-5 text-lg font-extrabold tracking-tight text-blue-smoke-900">{resource.title}</h3>
      <p className={`mt-2 text-xs font-bold uppercase tracking-[0.13em] ${style.color}`}>{resourceTypeLabels[resource.type]}</p>
      <p className="mt-3 flex-1 text-sm leading-7 text-ink-light">{resource.description}</p>
      <a href={resource.url} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className={`mt-6 inline-flex items-center gap-2 self-start text-sm font-extrabold focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clear-sky ${style.color}`}>
        {resource.type === "video" ? "Watch now" : "Access resource"}
        <ArrowUpRight className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" aria-hidden="true" />
      </a>
    </motion.article>
  );
}
