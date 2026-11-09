
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

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              className="group flex flex-col items-center justify-center gap-6 rounded-[24px] border border-[#EAE6F4] bg-[#F8F7FF] px-8 py-10 text-center transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(113,59,255,0.12)]"
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
                <h3 className="font-heading text-base font-bold text-[#170D2E]">
                  {partner.name}
                </h3>

                {partner.description && (
                  <p className="mt-2 text-sm leading-6 text-[#625D70]">
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
