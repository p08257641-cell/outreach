import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";

// Place your images in public/gallery/ as 1.png, 2.png, 3.png, etc.
// Change the length to match your number of images.
const photos = Array.from({ length: 30 }, (_, i) => ({
  src: `/gallery/${i + 1}.png`,
  alt: `School outreach gallery photograph ${i + 1}`,
}));

export default function GallerySlideshow() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const reducedMotion = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);
  const touchStart = useRef<number | null>(null);
  const move = (delta: number) => setActive((current) => (current + delta + photos.length) % photos.length);

  useEffect(() => {
    if (!playing || expanded || reducedMotion) return;
    const timer = window.setInterval(() => move(1), 5500);
    return () => window.clearInterval(timer);
  }, [playing, expanded, reducedMotion]);

  useEffect(() => {
    if (!expanded) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
      if (e.key === "Tab") {
        const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-gallery-modal] button:not(:disabled)"));
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = previous; document.removeEventListener("keydown", onKeyDown); openerRef.current?.focus(); };
  }, [expanded]);

  const photo = photos[active];
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="relative isolate scroll-mt-24 overflow-hidden bg-blue-smoke-50 py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 bg-[url('/images/gallery-background.jpg')] bg-cover bg-center opacity-[0.13]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#F7F9FD]/90 via-blue-smoke-50/85 to-[#F4F7FC]/95" />
      <motion.div aria-hidden="true" className="pointer-events-none absolute -left-32 top-16 h-96 w-96 rounded-full bg-clear-sky/20 blur-[95px]" animate={reducedMotion ? undefined : { x: [0, 45, 0], y: [0, 35, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-antique-gold/20 blur-[100px]" />
      <div className="container-wide relative z-10">
        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-clear-sky-600">Moments from our mission</p>
          <h2 id="gallery-title" className="mt-4 text-4xl font-black tracking-[-0.045em] text-blue-smoke-900 sm:text-5xl">Our Gallery<span className="text-clear-sky">.</span></h2>
          <p className="mt-5 text-base leading-8 text-ink-light">Explore moments of faith, community, and outreach through our photo collection.</p>
        </motion.div>
        <div className="relative mx-auto mt-12 max-w-5xl">
          <div aria-hidden="true" className="pointer-events-none absolute -inset-3 rounded-[36px] bg-clear-sky/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[28px] border-[6px] border-white/80 bg-blue-smoke-900 shadow-[0_28px_80px_rgba(14,58,134,0.24)]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img key={photo.src} src={photo.src} alt={photo.alt} loading="eager" initial={reducedMotion ? false : { opacity: 0, scale: 1.025 }} animate={{ opacity: 1, scale: 1 }} exit={reducedMotion ? undefined : { opacity: 0 }} transition={{ duration: 0.4 }} className="aspect-[4/3] w-full object-contain sm:aspect-[16/9]" onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }} onTouchEnd={(e) => { if (touchStart.current === null) return; const distance = e.changedTouches[0].clientX - touchStart.current; if (Math.abs(distance) > 55) move(distance < 0 ? 1 : -1); touchStart.current = null; }} />
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-blue-smoke-950/80 to-transparent" />
            <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-blue-smoke-900/65 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md" aria-live="polite">{String(active + 1).padStart(2, "0")} / {photos.length}</span>
            <button ref={openerRef} type="button" onClick={() => setExpanded(true)} aria-label="View selected gallery image full screen" className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-white text-blue-smoke-900 transition hover:bg-fresh-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fresh-yellow"><Expand size={19} /></button>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button type="button" onClick={() => move(-1)} aria-label="Previous gallery photo" className="grid h-12 w-12 place-items-center rounded-full border border-blue-smoke-200 bg-white text-clear-sky-600 transition hover:bg-clear-sky hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clear-sky"><ArrowLeft size={20} /></button>
            <button type="button" onClick={() => setPlaying((v) => !v)} aria-pressed={playing} className="min-w-32 rounded-full bg-blue-smoke-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-clear-sky">{playing ? "Pause slideshow" : "Play slideshow"}</button>
            <button type="button" onClick={() => move(1)} aria-label="Next gallery photo" className="grid h-12 w-12 place-items-center rounded-full border border-blue-smoke-200 bg-white text-clear-sky-600 transition hover:bg-clear-sky hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clear-sky"><ArrowRight size={20} /></button>
          </div>
          <div className="mt-7 flex gap-2 overflow-x-auto pb-3" aria-label="Choose a gallery photo">
            {photos.map((item, index) => <button key={item.src} type="button" onClick={() => setActive(index)} aria-label={`Show photo ${index + 1}`} aria-current={index === active ? "true" : undefined} className={`h-16 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clear-sky ${index === active ? "border-clear-sky ring-2 ring-clear-sky/20" : "border-transparent opacity-65 hover:opacity-100"}`}><img src={item.src} alt="" loading="lazy" className="h-full w-full object-cover" /></button>)}
          </div>
        </div>
      </div>
      {expanded && <div data-gallery-modal role="dialog" aria-modal="true" aria-label="Gallery image viewer" className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-blue-smoke-950/95 p-4" onClick={() => setExpanded(false)}>
        <button ref={closeRef} type="button" onClick={() => setExpanded(false)} aria-label="Close gallery viewer" className="absolute right-5 top-5 z-10 grid h-12 w-12 place-items-center rounded-full bg-white text-blue-smoke-900"><X /></button>
        <img src={photo.src} alt={photo.alt} className="max-h-[65dvh] max-w-full rounded-xl object-contain sm:max-h-[78vh]" onClick={(e) => e.stopPropagation()} />
        <div className="mt-5 flex items-center gap-6" onClick={(e) => e.stopPropagation()}>
          <button type="button" onClick={() => move(-1)} aria-label="Previous full screen photo" className="grid h-12 w-12 place-items-center rounded-full bg-white text-blue-smoke-900"><ArrowLeft /></button>
          <span className="min-w-16 text-center text-sm font-bold text-white" aria-live="polite">{active + 1} / {photos.length}</span>
          <button type="button" onClick={() => move(1)} aria-label="Next full screen photo" className="grid h-12 w-12 place-items-center rounded-full bg-white text-blue-smoke-900"><ArrowRight /></button>
        </div>
      </div>}
    </section>
  );
}
