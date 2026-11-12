import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, Heart, Users, CalendarDays, BookOpen, Play } from "lucide-react";

// Add or replace story video entries below as additional reels are uploaded.
const stories = [
  {
    src: "https://outreach.ephesusgatheringsworldwide.org/wp-content/uploads/2025/09/ACCRA-ACA-RECAP.mp4",
    poster: "/images/accra-story-poster.jpg",
    label: "Accra Academy Outreach",
  },
];

const features = [
  { icon: Heart, title: "Real Impact", subtitle: "Authentic testimonies", description: "Watch students share their personal transformation stories and see the genuine impact of our programs.", color: "#0E3A86", bg: "#E2E8F4" },
  { icon: Users, title: "Behind the Scenes", subtitle: "The people behind the mission", description: "Go behind the scenes with the team preparing for outreach and connecting with young people.", color: "#2B5FB5", bg: "#E3E8FC" },
  { icon: CalendarDays, title: "Event Highlights", subtitle: "Memorable moments", description: "Experience the energy and connection of our school outreach and community gatherings.", color: "#1D7A32", bg: "#DFECE2" },
  { icon: BookOpen, title: "Life Lessons", subtitle: "Words that stay with us", description: "Discover messages of faith, purpose, and encouragement shared during our outreach.", color: "#82641B", bg: "#FDF2DE" },
];

function FeatureCard({ feature, index }: { feature: (typeof features)[number]; index: number }) {
  const Icon = feature.icon;
  const reducedMotion = useReducedMotion();
  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: reducedMotion ? 0 : index * 0.09 }}
      whileHover={reducedMotion ? undefined : { y: -4 }}
      className="group rounded-[24px] border border-blue-smoke-100 bg-white p-5 shadow-[0_12px_35px_rgba(14,58,134,0.04)] transition-shadow hover:shadow-[0_20px_55px_rgba(14,58,134,0.10)] sm:p-6"
    >
      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl" style={{ color: feature.color, backgroundColor: feature.bg }}><Icon size={22} aria-hidden="true" /></span>
        <div className="min-w-0"><h3 className="text-base font-extrabold text-blue-smoke-900">{feature.title}</h3><p className="mt-0.5 text-xs font-medium text-ink-light">{feature.subtitle}</p></div>
      </div>
      <p className="mt-4 text-sm leading-7 text-ink-light">{feature.description}</p>
    </motion.article>
  );
}

export default function StoriesSection() {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();
  const touchStart = useRef<number | null>(null);
  function changeVideo(direction: -1 | 1) {
    videoRef.current?.pause();
    setActive((current) => (current + direction + stories.length) % stories.length);
  }

  return (
    <section id="stories" aria-labelledby="stories-title" className="relative scroll-mt-24 overflow-hidden bg-blue-smoke-50 py-16 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -right-48 top-20 h-[450px] w-[450px] rounded-full bg-clear-sky/[0.08] blur-[100px]" aria-hidden="true" />
      <div className="container-wide relative">
        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-clear-sky-600">Voices from the mission</p>
          <h2 id="stories-title" className="mt-4 text-balance text-3xl font-black leading-[1.1] tracking-[-0.045em] text-blue-smoke-900 min-[400px]:text-4xl sm:text-5xl lg:text-6xl">Stories That <span className="text-clear-sky">Inspire.</span></h2>
          <p className="mt-4 text-base leading-7 text-ink-light sm:mt-5 sm:text-lg sm:leading-8">Real moments. Real people. Real impact. Experience the stories behind our outreach.</p>
        </motion.div>
        <div className="mt-10 grid items-center gap-6 sm:mt-14 sm:gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(280px,390px)_minmax(0,1fr)] lg:gap-8">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-1">{features.slice(0, 2).map((feature, i) => <FeatureCard key={feature.title} feature={feature} index={i} />)}</div>
          <motion.div initial={reducedMotion ? false : { opacity: 0, y: 30, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.75 }} className="mx-auto w-full max-w-[330px] sm:max-w-[390px]">
            <div className="overflow-hidden rounded-[30px] border border-clear-sky/30 bg-blue-smoke-900 p-1.5 shadow-[0_28px_85px_rgba(14,58,134,0.24)]">
              <div className="relative overflow-hidden rounded-[24px] bg-black" onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }} onTouchEnd={(e) => { if (touchStart.current === null) return; const dx = e.changedTouches[0].clientX - touchStart.current; if (Math.abs(dx) > 80) changeVideo(dx < 0 ? 1 : -1); touchStart.current = null; }}>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div key={stories[active].src} initial={reducedMotion ? false : { opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={reducedMotion ? undefined : { opacity: 0, x: -18 }} transition={{ duration: 0.28 }}>
                    <video ref={videoRef} controls playsInline preload="metadata" poster={stories[active].poster} aria-label={stories[active].label} className="aspect-[9/16] w-full bg-black object-contain">
                      <source src={stories[active].src} type="video/mp4" />Your browser does not support HTML5 video.
                    </video>
                  </motion.div>
                </AnimatePresence>
                <span className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-blue-smoke-900/75 px-3 py-2 text-xs font-bold text-white backdrop-blur"><Play size={13} fill="currentColor" /> OUR STORIES</span>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between gap-4">
              <button type="button" onClick={() => changeVideo(-1)} disabled={stories.length < 2} aria-label="Previous story video" className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-blue-smoke-200 bg-white text-clear-sky-600 transition hover:border-clear-sky hover:bg-clear-sky hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clear-sky disabled:opacity-40"><ArrowLeft size={20} /></button>
              <div className="min-w-0 text-center"><p className="truncate text-sm font-extrabold text-blue-smoke-900" aria-live="polite">{stories[active].label}</p><p className="mt-1 text-xs font-semibold text-clear-sky-600">{String(active + 1).padStart(2, "0")} / {String(stories.length).padStart(2, "0")}</p></div>
              <button type="button" onClick={() => changeVideo(1)} disabled={stories.length < 2} aria-label="Next story video" className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-blue-smoke-200 bg-white text-clear-sky-600 transition hover:border-clear-sky hover:bg-clear-sky hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clear-sky disabled:opacity-40"><ArrowRight size={20} /></button>
            </div>
            <div className="mt-4 flex justify-center gap-2" aria-label="Story video selection">{stories.map((story, i) => <button key={story.src} type="button" onClick={() => { videoRef.current?.pause(); setActive(i); }} aria-label={`Show ${story.label}`} aria-current={active === i ? "true" : undefined} className={`h-1.5 rounded-full transition-all ${active === i ? "w-9 bg-clear-sky" : "w-4 bg-blue-smoke-200 hover:bg-clear-sky/60"}`} />)}</div>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-1">{features.slice(2).map((feature, i) => <FeatureCard key={feature.title} feature={feature} index={i + 2} />)}</div>
        </div>
      </div>
    </section>
  );
}
