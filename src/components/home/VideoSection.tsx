import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function VideoSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="lead-convener-message"
      aria-labelledby="convener-title"
      className="relative isolate scroll-mt-24 overflow-hidden bg-blue-smoke py-16 text-white sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 bg-[url('/images/convener-background.jpg')] bg-cover bg-center opacity-25" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-blue-smoke-900/95 via-blue-smoke/90 to-blue-smoke-950/95" />
      <motion.div aria-hidden="true" className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-clear-sky/30 blur-[100px]" animate={reducedMotion ? undefined : { x: [0, 45, 0], y: [0, -25, 0] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }} />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-fresh-yellow/10 blur-[100px]" />
      <div className="container-wide relative z-10 py-0">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-fresh-yellow">
            A Personal Welcome
          </p>

          <h2
            id="convener-title"
            className="mt-4 text-balance text-3xl font-black leading-[1.12] tracking-[-0.045em] text-white min-[400px]:text-4xl sm:text-5xl lg:text-[3.25rem]"
          >
            A Message From{" "}
            <span className="text-fresh-yellow">Our</span>{" "}
            Lead Convener
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            A word of vision, encouragement, and invitation from the heart of
            our outreach mission.
          </p>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.85,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto mt-10 max-w-5xl"
        >
          <div aria-hidden="true" className="pointer-events-none absolute -inset-3 rounded-[34px] bg-clear-sky/25 blur-2xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-white/20 bg-blue-smoke-950/70 shadow-[0_25px_80px_rgba(0,0,0,0.38)] backdrop-blur-xl">
            <div className="grid lg:grid-cols-[0.86fr_1.14fr]">
              <div className="relative aspect-[16/10] overflow-hidden bg-blue-smoke-900 sm:aspect-[16/9] lg:aspect-auto lg:min-h-full">
                <img
                  src="/images/convener-background.jpg"
                  alt="Lead Convener speaking during an Ephesus school outreach gathering"
                  loading="lazy"
                  className="h-full w-full object-cover object-[50%_14%] lg:object-top"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-smoke-950/65 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-blue-smoke-950/10 lg:to-blue-smoke-950/55"
                />
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div>
                  <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-antique-gold">
                    <Quote className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Welcome Note
                  </span>

                  <h3 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-white sm:text-4xl">
                    {siteConfig.greeting}
                  </h3>

                  <div className="mt-4 space-y-3.5 text-[15px] leading-7 text-white/85 sm:text-base">
                    <p>
                      Welcome to {siteConfig.name}, the outreach arm of{" "}
                      {siteConfig.associatedMinistry}. Since{" "}
                      {siteConfig.foundedYear}, God has entrusted us with a joyful
                      mandate: to step onto high school campuses and into
                      communities with the unchanging hope of the gospel.
                    </p>
                    <p>
                      What starts in a school assembly or lunch-hour gathering grows
                      into lasting mentorship, honest conversations about faith, and
                      young people discovering their God-given purpose.
                    </p>
                    <p>
                      Whether you are a student seeking hope, a volunteer ready to
                      serve, or a partner standing with us in prayer — you have a
                      vital place in this mission.
                    </p>
                  </div>
                </div>

                <div className="mt-7">
                  <div
                    aria-hidden="true"
                    className="h-px w-full bg-gradient-to-r from-antique-gold/80 via-white/20 to-transparent"
                  />

                  <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-base font-extrabold text-white">
                        Lead Convener
                      </p>
                      <p className="mt-0.5 text-xs font-bold uppercase tracking-[0.16em] text-fresh-yellow">
                        {siteConfig.associatedMinistry}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center sm:gap-3.5">
                    <a
                      href={siteConfig.forms.joinUs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-clear-sky px-7 py-3 text-sm font-extrabold text-white shadow-[0_12px_35px_rgba(54,117,226,0.36)] transition duration-300 hover:-translate-y-0.5 hover:bg-clear-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fresh-yellow motion-reduce:transform-none"
                    >
                      Join the Mission
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>

                    <Link
                      to="/contact"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:border-fresh-yellow/60 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                      Connect With Us
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
