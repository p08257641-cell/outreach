import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteConfig } from "@/data/site";

type ContactItem = {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
};

export default function ContactCard() {
  const reducedMotion = useReducedMotion();

  const items: ContactItem[] = [
    { icon: Phone, label: "Phone", value: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
    { icon: Mail, label: "Email", value: siteConfig.contact.email, href: siteConfig.contact.emailHref },
    { icon: MapPin, label: "Location", value: siteConfig.contact.address },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map(({ icon: Icon, label, value, href }, index) => (
        <motion.div
          key={label}
          initial={reducedMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, delay: reducedMotion ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className={`group flex min-w-0 items-start gap-4 rounded-[24px] border border-blue-smoke-100 bg-white p-5 shadow-[0_8px_30px_rgba(14,58,134,0.04)] transition-colors duration-300 hover:border-clear-sky-200 hover:bg-blue-smoke-50/70 sm:p-6 ${label === "Email" ? "sm:col-span-2" : ""}`}
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-clear-sky-100 text-clear-sky-600 transition-colors duration-300 group-hover:bg-clear-sky group-hover:text-white">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-clear-sky-600">{label}</p>
            {href ? (
              <a
                href={href}
                className="mt-2 inline-flex max-w-full items-start gap-2 text-[13px] font-semibold leading-6 text-blue-smoke-900 transition-colors hover:text-clear-sky-600 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clear-sky min-[420px]:text-sm sm:text-base"
              >
                <span className="min-w-0 [overflow-wrap:anywhere]">{value}</span>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            ) : (
              <p className="mt-2 break-words text-sm font-semibold leading-6 text-blue-smoke-900 sm:text-base">{value}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
