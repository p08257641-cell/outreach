import { motion, useReducedMotion } from "motion/react";
import AnimatedText from "@/components/ui/AnimatedText";
import { ArrowUpRight, BookOpen, HeartHandshake, Play, Sparkles } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/home/HeroSection";
import WelcomeSection from "@/components/home/WelcomeSection";
import VideoSection from "@/components/home/VideoSection";
import StoriesSection from "@/components/home/StoriesSection";
import OutreachStats from "@/components/ui/OutreachStats";
import TestimonialsCarousel from "@/components/testimonials/TestimonialsCarousel";
import UpcomingEventsSection from "@/components/home/UpcomingEventsSection";
import PartnerSection from "@/components/ui/PartnerSection";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site";

/** Decorative background layers only. No images or additional dependencies required. */
function LightAtmosphere({ dark = false }: { dark?: boolean }) {
  const reducedMotion = useReducedMotion();
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className={`absolute inset-0 ${dark
        ? "bg-[radial-gradient(ellipse_at_50%_0%,rgba(54,117,226,0.34),transparent_58%),linear-gradient(135deg,#0B2B66_0%,#0E3A86_52%,#081F4B_100%)]"
        : "bg-[radial-gradient(ellipse_at_12%_12%,rgba(219,170,44,0.12),transparent_40%),radial-gradient(ellipse_at_86%_24%,rgba(54,117,226,0.14),transparent_48%),linear-gradient(140deg,#F7F9FD_0%,#EDF2FA_55%,#FAFCFF_100%)]"}`} />
      <motion.div
        className={`absolute -left-32 top-[-12rem] h-[34rem] w-[34rem] rounded-full blur-[100px] ${dark ? "bg-clear-sky/25" : "bg-clear-sky-200/35"}`}
        animate={reducedMotion ? undefined : { x: [0, 65, 0], y: [0, 35, 0], opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute -right-36 bottom-[-15rem] h-[38rem] w-[38rem] rounded-full blur-[110px] ${dark ? "bg-fresh-yellow/10" : "bg-antique-gold-100/70"}`}
        animate={reducedMotion ? undefined : { x: [0, -55, 0], y: [0, -40, 0] }}
        transition={{ duration: 23, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className={`absolute left-1/2 top-[-30%] h-[130%] w-[55%] -translate-x-1/2 -rotate-[25deg] blur-3xl ${dark ? "bg-gradient-to-b from-white/[0.07] via-white/[0.025] to-transparent" : "bg-gradient-to-b from-white/80 via-white/20 to-transparent"}`} />
    </div>
  );
}

export default function Home() {
  const reducedMotion = useReducedMotion();
  const entrance = reducedMotion ? undefined : { opacity: 0, y: 30 };
  const reveal = { opacity: 1, y: 0 };

  return (
    <>
      <SEOHead title={`${siteConfig.name} — ${siteConfig.tagline}`} description={siteConfig.shortDescription} path="/" />
      <div id="home" className="scroll-mt-24"><HeroSection /></div>
      <WelcomeSection />
      <VideoSection />
      <StoriesSection />
      <OutreachStats />

      {/* Testimonies: a warm, luminous setting for personal stories */}
      <section id="testimonies" aria-labelledby="testimonies-title" className="relative isolate scroll-mt-24 overflow-hidden py-16 sm:py-24 lg:py-32">
        <LightAtmosphere />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[url('/images/prayer-gathering.jpg')] bg-cover bg-center opacity-[0.09]" />
        <div className="container-wide relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <AnimatedText>
              <span className="inline-flex items-center gap-2 rounded-full border border-clear-sky/20 bg-white/75 px-3.5 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-clear-sky-600 shadow-sm backdrop-blur sm:px-4 sm:text-xs sm:tracking-[0.18em]">
                <HeartHandshake className="h-4 w-4 shrink-0" aria-hidden="true" /> Real Stories, Real Hope
              </span>
            </AnimatedText>
            <AnimatedText delay={0.08}>
              <h2 id="testimonies-title" className="mt-5 text-balance text-3xl font-black leading-[1.08] tracking-[-0.055em] text-blue-smoke-900 min-[400px]:text-4xl sm:mt-6 sm:text-5xl lg:text-6xl">
                Lives <span className="text-clear-sky">Changed.</span> Faith <span className="text-clear-sky">Renewed.</span>
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.16}>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink-light sm:mt-6 sm:text-lg sm:leading-8">
                Hear from students and young people whose lives have been impacted through our outreach.
              </p>
            </AnimatedText>
          </div>
          <motion.div
            initial={entrance}
            whileInView={reveal}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mt-10 max-w-4xl rounded-[24px] border border-white/80 bg-white/65 p-3 shadow-[0_25px_80px_rgba(14,58,134,0.10)] backdrop-blur-xl sm:mt-14 sm:rounded-[32px] sm:p-6 lg:p-8"
          >
            <span aria-hidden="true" className="pointer-events-none absolute -top-6 left-4 select-none font-serif text-[72px] leading-none text-clear-sky/15 sm:-top-8 sm:left-10 sm:text-[110px]">“</span>
            <div className="relative"><TestimonialsCarousel testimonials={testimonials} /></div>
          </motion.div>
        </div>
      </section>

      <UpcomingEventsSection />

      
{/* Resources: cinematic editorial feature */}
<section
  id="resources"
  aria-labelledby="resources-title"
  className="relative isolate scroll-mt-24 overflow-hidden py-16 text-white sm:py-24 lg:py-32"
>
  <LightAtmosphere dark />

  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 bg-[url('/images/open-bible.jpg')] bg-cover bg-center opacity-[0.20]"
  />

  <div className="container-wide relative z-10 grid items-center gap-9 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
    <div>
      <AnimatedText>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-fresh-yellow backdrop-blur">
          <BookOpen className="h-4 w-4" aria-hidden="true" />
          Keep Growing
        </span>
      </AnimatedText>

      <AnimatedText delay={0.1}>
        <h2
          id="resources-title"
          className="mt-5 max-w-2xl text-balance text-3xl font-black leading-[1.08] tracking-[-0.055em] text-white min-[400px]:text-4xl sm:mt-6 sm:text-5xl lg:text-6xl"
        >
          Words of{" "}
          <span className="text-fresh-yellow">Life.</span>
          <br />
          Resources for the Journey.
        </h2>
      </AnimatedText>

      <AnimatedText delay={0.18}>
        <p className="mt-5 max-w-xl text-base leading-7 text-white/80 sm:mt-6 sm:text-lg sm:leading-8">
          Explore encouraging messages and opportunities to grow
          deeper in faith, purpose, and understanding.
        </p>
      </AnimatedText>

      {siteConfig.social.youtube && (
        <AnimatedText delay={0.25}>
          <a
            href={siteConfig.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-clear-sky px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_12px_40px_rgba(54,117,226,0.32)] transition duration-300 hover:-translate-y-1 hover:bg-clear-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fresh-yellow motion-reduce:transform-none sm:mt-9 sm:px-7 sm:py-4"
          >
            <Play
              className="h-4 w-4 fill-current"
              aria-hidden="true"
            />
            Watch Our Messages
            <ArrowUpRight
              className="h-4 w-4"
              aria-hidden="true"
            />
          </a>
        </AnimatedText>
      )}
    </div>

    <motion.div
      initial={
        reducedMotion
          ? undefined
          : { opacity: 0, y: 28, rotate: 1 }
      }
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative overflow-hidden rounded-[26px] border border-white/15 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-xl sm:rounded-[32px] sm:p-10 lg:p-12"
    >
      <div
        className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-clear-sky/35 blur-3xl"
        aria-hidden="true"
      />

      <Sparkles
        className="relative h-8 w-8 text-antique-gold sm:h-9 sm:w-9"
        aria-hidden="true"
      />

      <p className="relative mt-6 font-serif text-2xl leading-snug tracking-tight text-white sm:mt-8 sm:text-3xl lg:text-4xl">
        “Your word is a lamp to my feet and a light to my path.”
      </p>

      <p className="relative mt-5 text-xs font-bold uppercase tracking-[0.18em] text-antique-gold sm:mt-6 sm:text-sm">
        Psalm 119:105
      </p>

      <div
        className="relative mt-7 h-px w-full bg-gradient-to-r from-antique-gold/80 via-white/20 to-transparent sm:mt-10"
        aria-hidden="true"
      />

      <p className="relative mt-5 text-sm leading-7 text-white/80 sm:mt-6">
        Find encouragement and direction through
        Scripture-centered teaching.
      </p>
    </motion.div>
  </div>
</section>


    
<PartnerSection />

{/* Closing invitation: cinematic Get Involved section */}
<section
  id="join"
  aria-labelledby="join-title"
  className="relative isolate scroll-mt-24 overflow-hidden py-16 text-white sm:py-28 lg:py-36"
>
  <LightAtmosphere dark />

  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 bg-[url('/images/outreach-worship.jpg')] bg-cover bg-center opacity-[0.22]"
  />

  <div
    aria-hidden="true"
    className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_105%,rgba(244,199,52,0.12),transparent_55%)]"
  />

  <div className="container-wide relative z-10 text-center">
    <AnimatedText>
      <span className="inline-flex items-center gap-2 rounded-full border border-fresh-yellow/30 bg-fresh-yellow/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-fresh-yellow">
        <HeartHandshake
          className="h-4 w-4"
          aria-hidden="true"
        />
        Get Involved
      </span>
    </AnimatedText>

    <AnimatedText delay={0.08}>
      <h2
        id="join-title"
        className="mx-auto mt-6 max-w-4xl text-balance text-3xl font-black leading-[1.06] tracking-[-0.055em] text-white min-[400px]:text-5xl sm:mt-7 sm:text-6xl sm:leading-[1.04] sm:tracking-[-0.06em] lg:text-7xl"
      >
        Be Part of Something{" "}
        <span className="text-fresh-yellow">
          Greater.
        </span>
      </h2>
    </AnimatedText>

    <AnimatedText delay={0.16}>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/85 sm:mt-7 sm:text-lg sm:leading-8">
        Volunteer, partner with us, or discover how you
        can help bring faith, hope, and purpose to the
        next generation.
      </p>
    </AnimatedText>

    <AnimatedText delay={0.24}>
      <a
        href={siteConfig.contact.emailHref}
        className="mt-8 inline-flex items-center gap-3 rounded-full bg-clear-sky px-8 py-3.5 text-base font-extrabold text-white shadow-[0_15px_50px_rgba(54,117,226,0.34)] transition duration-300 hover:-translate-y-1 hover:bg-clear-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fresh-yellow motion-reduce:transform-none sm:mt-10 sm:px-9 sm:py-4"
      >
        Join the Mission

        <ArrowUpRight
          className="h-5 w-5"
          aria-hidden="true"
        />
      </a>
    </AnimatedText>
  </div>
</section>
    </>
  );
}
