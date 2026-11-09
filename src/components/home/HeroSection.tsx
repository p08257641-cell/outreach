import { ArrowRight, Play, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { siteConfig } from "@/data/site";
import { homeImages as imgs } from "@/data/images";

export default function HeroSection() {
  const reducedMotion = useReducedMotion();
  const entrance = (delay: number, distance = 28) => ({
    initial: reducedMotion ? false as const : { opacity: 0, y: distance, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.8, delay: reducedMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  });
  return (
    <section className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-[#170D2E] text-white lg:min-h-[780px]">
      <img src={imgs.hero} alt="Young people gathered in worship and fellowship" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#170D2E]/70 via-[#170D2E]/50 to-[#170D2E]/15" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#170D2E]/45 via-transparent to-[#170D2E]/10" />
      <div className="container-wide w-full py-24 sm:py-32">
        <div className="max-w-[790px]">
          <motion.p {...entrance(0.05)} className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D7FF35] backdrop-blur-md sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#D7FF35]" aria-hidden="true" />
            {siteConfig.greeting}
          </motion.p>
          <h1 className="max-w-[820px] text-balance text-[clamp(3.4rem,7.5vw,7.5rem)] font-black leading-[0.98] tracking-[-0.065em]" aria-label="Inspiring Faith. Changing Lives.">
            {([
              { words: ["Inspiring", "Faith."], color: "text-white", offset: 0 },
              { words: ["Changing", "Lives."], color: "text-[#D7FF35]", offset: 0.65 },
            ] as const).map((line, lineIndex) => (
              <span key={lineIndex} aria-hidden="true" className={`block pb-3 ${lineIndex === 1 ? "mt-2" : ""}`}>
                {line.words.map((word, wordIndex) => (
                  <span key={word} className="mr-[0.22em] inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em] last:mr-0">
                    <motion.span
                      className={`inline-block ${line.color}`}
                      initial={reducedMotion ? false : { opacity: 0, y: "110%", rotateX: -30 }}
                      animate={reducedMotion ? { opacity: 1, y: "0%", rotateX: 0 } : {
                        opacity: [0, 1, 1, 1, 0],
                        y: ["110%", "0%", "0%", "0%", "-100%"],
                        rotateX: [-30, 0, 0, 0, 15],
                      }}
                      transition={reducedMotion ? { duration: 0 } : {
                        duration: 8,
                        repeat: Infinity,
                        times: [0, 0.14, 0.72, 0.86, 1],
                        delay: line.offset + wordIndex * 0.2,
                        ease: "easeInOut",
                      }}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <motion.p {...entrance(0.6)} className="mt-8 max-w-xl text-base leading-8 text-white/80 sm:text-lg">{siteConfig.shortDescription}</motion.p>
          <motion.div {...entrance(0.78)} className="mt-10 flex flex-wrap items-center gap-3">
            <Link to="/#join" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#713BFF] px-7 py-3 text-sm font-bold text-white shadow-[0_12px_35px_rgba(113,59,255,0.35)] transition hover:-translate-y-0.5 hover:bg-[#8257FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D7FF35] motion-reduce:transform-none">Get Involved <ArrowUpRight className="h-4 w-4" /></Link>
            <Link to="/#about" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Explore Our Mission <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/#lead-convener-message" className="inline-flex min-h-12 items-center gap-3 px-2 text-sm font-semibold text-white/90 transition hover:text-[#D7FF35]"><span className="grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-white/10"><Play className="h-4 w-4" fill="currentColor" /></span>Watch Our Story</Link>
          </motion.div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#713BFF] via-[#D7FF35] to-[#713BFF]" />
    </section>
  );
}
