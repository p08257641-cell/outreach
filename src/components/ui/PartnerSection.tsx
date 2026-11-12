import { motion, useReducedMotion } from "motion/react";
import { partners, partnerImage } from "@/data/partners";
import SectionHeading from "@/components/ui/SectionHeading";

export default function PartnerSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="container-wide relative z-10">
        <SectionHeading
          eyebrow="Partners"
          title="Standing Together in Mission"
          subtitle="We are grateful for the partners who walk alongside us in reaching young people with faith, hope, and purpose."
          align="center"
        />

        <div className="mt-10 grid grid-cols-1 items-stretch gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={
                reducedMotion
                  ? false
                  : { opacity: 0, y: 25 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: reducedMotion ? 0 : index * 0.1,
              }}
              whileHover={
                reducedMotion ? undefined : { y: -5 }
              }
              className="group flex flex-col items-center justify-center gap-5 rounded-[24px] border border-blue-smoke-100 bg-blue-smoke-50/60 px-6 py-8 text-center transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(54,117,226,0.12)] sm:gap-6 sm:px-8 sm:py-10 last:sm:col-span-2 last:md:col-span-1"
            >
              <div className="flex h-32 w-full items-center justify-center">
                <img
                  src={partner.image || partnerImage}
                  alt={partner.name}
                  loading="lazy"
                  className="max-h-28 w-full max-w-[280px] object-contain transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-blue-smoke-900">
                  {partner.name}
                </h3>

                {partner.description && (
                  <p className="mt-2 text-sm leading-6 text-ink-light">
                    {partner.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
