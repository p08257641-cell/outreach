
import { motion, useReducedMotion } from "motion/react";

export default function VideoSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="lead-convener-message"
      aria-labelledby="convener-title"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#170D2E] py-20 text-white sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 bg-[url('/images/convener-background.jpg')] bg-cover bg-center opacity-30" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#170D2E]/95 via-[#241044]/85 to-[#170D2E]/90" />
      <motion.div aria-hidden="true" className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#713BFF]/35 blur-[100px]" animate={reducedMotion ? undefined : { x: [0, 45, 0], y: [0, -25, 0] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }} />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#D7FF35]/10 blur-[100px]" />
      <div className="container-wide relative z-10">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#D7FF35]">
            A Personal Welcome
          </p>

          <h2
            id="convener-title"
            className="mt-5 text-balance text-4xl font-black leading-[1.12] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl"
          >
            A Message From{" "}
            <span className="text-[#D7FF35]">Our</span>{" "}
            Lead Convener
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Kindly press the play button to listen to a short
            welcome message from our Lead Convener.
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
          className="relative mx-auto mt-12 max-w-5xl"
        >
          <div aria-hidden="true" className="pointer-events-none absolute -inset-3 rounded-[34px] bg-[#713BFF]/25 blur-2xl" />
          <div className="relative overflow-hidden rounded-[26px] border border-white/20 bg-white/10 p-1.5 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-2">
            <video
              controls
              playsInline
              preload="metadata"
              aria-label="Welcome message from our Lead Convener"
              className="aspect-video w-full rounded-[20px] bg-black object-contain"
            >
              <source
                src="https://ephesusgatheringsworldwide.org/wp-content/uploads/2025/08/Final-Outreach-Video-Egw.mp4"
                type="video/mp4"
              />
              Your browser does not support HTML5 video.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
