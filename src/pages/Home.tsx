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
        ? "bg-[radial-gradient(ellipse_at_50%_0%,rgba(113,59,255,0.30),transparent_58%),linear-gradient(135deg,#170D2E_0%,#241044_52%,#130B28_100%)]"
        : "bg-[radial-gradient(ellipse_at_12%_12%,rgba(215,255,53,0.12),transparent_40%),radial-gradient(ellipse_at_86%_24%,rgba(113,59,255,0.15),transparent_48%),linear-gradient(140deg,#F9F7FF_0%,#F0ECFF_55%,#FBFAFF_100%)]"}`} />
      <motion.div
        className={`absolute -left-32 top-[-12rem] h-[34rem] w-[34rem] rounded-full blur-[100px] ${dark ? "bg-[#713BFF]/25" : "bg-[#B4A0FF]/25"}`}
        animate={reducedMotion ? undefined : { x: [0, 65, 0], y: [0, 35, 0], opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute -right-36 bottom-[-15rem] h-[38rem] w-[38rem] rounded-full blur-[110px] ${dark ? "bg-[#D7FF35]/10" : "bg-[#E8D9FF]/65"}`}
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
      <section id="testimonies" aria-labelledby="testimonies-title" className="relative isolate scroll-mt-24 overflow-hidden py-24 sm:py-28 lg:py-32">
        <LightAtmosphere />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[url('/images/prayer-gathering.jpg')] bg-cover bg-center opacity-[0.09]" />
        <div className="container-wide relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <AnimatedText>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#713BFF]/15 bg-white/70 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#713BFF] shadow-sm backdrop-blur">
                <HeartHandshake className="h-4 w-4" aria-hidden="true" /> Real Stories, Real Hope
              </span>
            </AnimatedText>
            <AnimatedText delay={0.08}>
              <h2 id="testimonies-title" className="mt-6 text-balance text-4xl font-black leading-[1.08] tracking-[-0.055em] text-[#170D2E] sm:text-5xl lg:text-6xl">
                Lives <span className="text-[#713BFF]">Changed.</span> Faith <span className="text-[#713BFF]">Renewed.</span>
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.16}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#625D70] sm:text-lg">
                Hear from students and young people whose lives have been impacted through our outreach.
              </p>
            </AnimatedText>
          </div>
          <motion.div
            initial={entrance}
            whileInView={reveal}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mt-14 max-w-4xl rounded-[32px] border border-white/80 bg-white/65 p-4 shadow-[0_25px_80px_rgba(57,34,105,0.10)] backdrop-blur-xl sm:p-8"
          >
            <span aria-hidden="true" className="pointer-events-none absolute -top-8 left-5 select-none font-serif text-[110px] leading-none text-[#713BFF]/15 sm:left-10">“</span>
            <div className="relative"><TestimonialsCarousel testimonials={testimonials} /></div>
          </motion.div>
        </div>
      </section>

      <UpcomingEventsSection />

      
{/* Resources: cinematic editorial feature */}
<section
  id="resources"
  aria-labelledby="resources-title"
  className="relative isolate scroll-mt-24 overflow-hidden py-24 text-white sm:py-28 lg:py-32"
>
  <LightAtmosphere dark />

  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 bg-[url('/images/open-bible.jpg')] bg-cover bg-center opacity-[0.20]"
  />

  <div className="container-wide relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
    <div>
      <AnimatedText>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#D7FF35] backdrop-blur">
          <BookOpen className="h-4 w-4" aria-hidden="true" />
          Keep Growing
        </span>
      </AnimatedText>

      <AnimatedText delay={0.1}>
        <h2
          id="resources-title"
          className="mt-6 max-w-2xl text-balance text-4xl font-black leading-[1.08] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl"
        >
          Words of{" "}
          <span className="text-[#D7FF35]">Life.</span>
          <br />
          Resources for the Journey.
        </h2>
      </AnimatedText>

      <AnimatedText delay={0.18}>
        <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
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
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#713BFF] px-7 py-4 text-sm font-extrabold text-white shadow-[0_12px_40px_rgba(113,59,255,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#8257FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D7FF35] motion-reduce:transform-none"
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
          : { opacity: 0, x: 35, rotate: 2 }
      }
      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/[0.07] p-8 shadow-2xl backdrop-blur-xl sm:p-12"
    >
      <div
        className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#713BFF]/35 blur-3xl"
        aria-hidden="true"
      />

      <Sparkles
        className="relative h-9 w-9 text-[#D7FF35]"
        aria-hidden="true"
      />

      <p className="relative mt-8 font-serif text-3xl leading-snug tracking-tight text-white sm:text-4xl">
        “Your word is a lamp to my feet and a light to my path.”
      </p>

      <p className="relative mt-6 text-sm font-bold uppercase tracking-[0.18em] text-[#D7FF35]">
        Psalm 119:105
      </p>

      <div
        className="relative mt-10 h-px w-full bg-gradient-to-r from-[#D7FF35]/70 via-white/20 to-transparent"
        aria-hidden="true"
      />

      <p className="relative mt-6 text-sm leading-7 text-white/75">
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
  className="relative isolate scroll-mt-24 overflow-hidden py-24 text-white sm:py-32 lg:py-36"
>
  <LightAtmosphere dark />

  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 bg-[url('/images/outreach-worship.jpg')] bg-cover bg-center opacity-[0.22]"
  />

  <div
    aria-hidden="true"
    className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_105%,rgba(215,255,53,0.10),transparent_55%)]"
  />

  <div className="container-wide relative z-10 text-center">
    <AnimatedText>
      <span className="inline-flex items-center gap-2 rounded-full border border-[#D7FF35]/25 bg-[#D7FF35]/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#D7FF35]">
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
        className="mx-auto mt-7 max-w-4xl text-balance text-5xl font-black leading-[1.04] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl"
      >
        Be Part of Something{" "}
        <span className="text-[#D7FF35]">
          Greater.
        </span>
      </h2>
    </AnimatedText>

    <AnimatedText delay={0.16}>
      <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
        Volunteer, partner with us, or discover how you
        can help bring faith, hope, and purpose to the
        next generation.
      </p>
    </AnimatedText>

    <AnimatedText delay={0.24}>
      <a
        href={siteConfig.contact.emailHref}
        className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#713BFF] px-9 py-4 text-base font-extrabold text-white shadow-[0_15px_50px_rgba(113,59,255,0.30)] transition duration-300 hover:-translate-y-1 hover:bg-[#8257FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D7FF35] motion-reduce:transform-none"
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
