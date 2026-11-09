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
          className="group flex min-w-0 items-start gap-4 rounded-[24px] border border-[#EAE6F4] bg-white p-5 shadow-[0_8px_30px_rgba(23,13,46,0.04)] transition-colors duration-300 hover:border-[#CDBDFF] hover:bg-[#FAF9FF] sm:p-6"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F1EBFF] text-[#713BFF] transition-colors duration-300 group-hover:bg-[#713BFF] group-hover:text-white">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#713BFF]">{label}</p>
            {href ? (
              <a
                href={href}
                className="mt-2 inline-flex max-w-full items-start gap-2 break-words text-sm font-semibold leading-6 text-[#170D2E] transition-colors hover:text-[#713BFF] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#713BFF] sm:text-base"
              >
                <span className="min-w-0 break-all sm:break-words">{value}</span>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            ) : (
              <p className="mt-2 break-words text-sm font-semibold leading-6 text-[#170D2E] sm:text-base">{value}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
