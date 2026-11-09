import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Camera, FilterX, X } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { galleryPhotos, gallerySchools, galleryYears, type GallerySchool, type GalleryYear } from "@/data/gallery";

type SchoolFilter = "All Schools" | GallerySchool;
type YearFilter = "All Years" | GalleryYear;

export default function Gallery() {
  const [school, setSchool] = useState<SchoolFilter>("All Schools");
  const [year, setYear] = useState<YearFilter>("All Years");
  const [selected, setSelected] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const photos = useMemo(() => galleryPhotos.filter((photo) =>
    (school === "All Schools" || photo.school === school) &&
    (year === "All Years" || photo.year === year)
  ), [school, year]);

  const activePhoto = selected === null ? null : photos[selected];
  const move = (step: number) => setSelected((current) => current === null || !photos.length
    ? null : (current + step + photos.length) % photos.length);

  useEffect(() => { setSelected(null); }, [school, year]);

  useEffect(() => {
    if (selected === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
      if (event.key !== "Tab" || !modalRef.current) return;
      const focusable = Array.from(modalRef.current.querySelectorAll<HTMLButtonElement>("button:not(:disabled)"));
      if (!focusable.length) return;
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      openerRef.current?.focus();
    };
  }, [selected, photos.length]);

  return (
    <>
      <SEOHead title="Outreach Gallery | Ephesus School Outreach" description="Explore school outreach photographs by school and year." path="/gallery" />
      <main className="min-h-screen bg-[#F8F6FF]">
        <section className="relative isolate overflow-hidden bg-[#170D2E] px-5 pb-20 pt-24 text-white sm:pb-24 sm:pt-28">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(113,59,255,.40),transparent_55%)]" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#713BFF]/20 blur-[90px]" />
          <div className="container-wide relative z-10">
            <motion.div initial={reducedMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[.18em] text-[#D7FF35]"><Camera className="h-4 w-4" /> Moments from our mission</span>
              
<h1 className="mt-7 text-balance text-5xl font-black leading-[1.03] tracking-[-.06em] text-white sm:text-6xl lg:text-7xl">
  Stories captured.{" "}
  <span className="text-[#D7FF35]">
    Lives impacted.
  </span>
</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">Explore moments of faith, connection, and community from our school outreach visits. Browse all photos or narrow the collection by school and year.</p>
              <a href="#gallery-collection" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#713BFF] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#8257FF]">Explore the collection <ArrowUpRight className="h-4 w-4" /></a>
            </motion.div>
          </div>
        </section>

        <section id="gallery-collection" aria-labelledby="gallery-heading" className="scroll-mt-24 py-16 sm:py-20">
          <div className="container-wide">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#713BFF]">Explore our outreach</p><h2 id="gallery-heading" className="mt-3 text-3xl font-black tracking-tight text-[#170D2E] sm:text-4xl">Photo collection<span className="text-[#713BFF]">.</span></h2></div>
              <p className="text-sm font-semibold text-[#625D70]" aria-live="polite">{photos.length} {photos.length === 1 ? "photo" : "photos"}</p>
            </div>

            <div className="mt-9 rounded-[28px] border border-[#E9E1F7] bg-white p-5 shadow-[0_12px_40px_rgba(23,13,46,.06)] sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3"><h3 className="text-sm font-extrabold uppercase tracking-[.14em] text-[#170D2E]">Browse by school</h3><button type="button" onClick={() => { setSchool("All Schools"); setYear("All Years"); }} className="inline-flex items-center gap-2 text-sm font-bold text-[#713BFF] hover:underline"><FilterX className="h-4 w-4" /> Reset filters</button></div>
              <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter by school">
                {(["All Schools", ...gallerySchools] as SchoolFilter[]).map((value) => <button key={value} type="button" onClick={() => setSchool(value)} aria-pressed={school === value} className={`rounded-full border px-4 py-2.5 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#713BFF] ${school === value ? "border-[#713BFF] bg-[#713BFF] text-white shadow-[0_6px_18px_rgba(113,59,255,.2)]" : "border-[#E9E1F7] bg-[#F8F6FF] text-[#40364F] hover:border-[#713BFF]/50"}`}>{value}</button>)}
              </div>
              <div className="mt-7 border-t border-[#EEE9F6] pt-6"><h3 className="text-sm font-extrabold uppercase tracking-[.14em] text-[#170D2E]">Browse by year</h3><div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter by year">
                {(["All Years", ...galleryYears] as YearFilter[]).map((value) => <button key={value} type="button" onClick={() => setYear(value)} aria-pressed={year === value} className={`rounded-full border px-4 py-2.5 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#713BFF] ${year === value ? "border-[#170D2E] bg-[#170D2E] text-[#D7FF35]" : "border-[#E9E1F7] bg-[#F8F6FF] text-[#40364F] hover:border-[#713BFF]/50"}`}>{value}</button>)}
              </div></div>
            </div>

            {photos.length ? (
              <motion.div layout className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
                <AnimatePresence mode="popLayout">
                  {photos.map((photo, index) => <motion.button key={photo.id} type="button" layout initial={reducedMotion ? false : { opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} exit={reducedMotion ? undefined : { opacity: 0, scale: .94 }} transition={{ duration: .25 }} onClick={(event) => { openerRef.current = event.currentTarget; setSelected(index); }} aria-label={`Open photo: ${photo.alt}`} className="group relative aspect-[4/5] overflow-hidden rounded-[20px] bg-[#170D2E] text-left shadow-[0_12px_35px_rgba(23,13,46,.12)] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#713BFF] sm:rounded-[24px]">
                    <img src={photo.src} alt={photo.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110 group-focus-visible:scale-105" />
                    <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#10071F]/90 via-transparent to-transparent" />
                    <span className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5"><span className="block text-sm font-extrabold sm:text-base">{photo.school}</span><span className="mt-1 block text-xs font-semibold text-[#D7FF35]">{photo.year}</span></span>
                  </motion.button>)}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div className="mt-10 flex min-h-72 flex-col items-center justify-center rounded-[28px] border border-dashed border-[#D8CBF1] bg-white px-6 py-12 text-center">
                <Camera className="h-10 w-10 text-[#713BFF]" aria-hidden="true" /><h3 className="mt-5 text-xl font-black text-[#170D2E]">No photos in this collection yet</h3><p className="mt-3 max-w-md text-sm leading-7 text-[#625D70]">{galleryPhotos.length === 0 ? "Add your photos and their school/year details in src/data/gallery.ts to populate the gallery." : "Try a different school or year, or choose All Schools and All Years to see the full collection."}</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <AnimatePresence>
        {activePhoto && <motion.div ref={modalRef} role="dialog" aria-modal="true" aria-label="Gallery photo viewer" initial={reducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={reducedMotion ? undefined : { opacity: 0 }} className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0D071A]/95 p-4" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
          <button ref={closeRef} type="button" onClick={() => setSelected(null)} aria-label="Close gallery" className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white text-[#170D2E]"><X className="h-5 w-5" /></button>
          <img src={activePhoto.src} alt={activePhoto.alt} className="max-h-[75vh] max-w-full rounded-xl object-contain" />
          <p className="mt-4 text-center text-sm font-bold text-white">{activePhoto.school} <span className="text-[#D7FF35]">· {activePhoto.year}</span></p>
          <div className="mt-4 flex items-center gap-5"><button type="button" onClick={() => move(-1)} aria-label="Previous photo" className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#170D2E]"><ArrowLeft /></button><span className="min-w-16 text-center text-sm font-bold text-white" aria-live="polite">{selected! + 1} / {photos.length}</span><button type="button" onClick={() => move(1)} aria-label="Next photo" className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#170D2E]"><ArrowRight /></button></div>
        </motion.div>}
      </AnimatePresence>
    </>
  );
}
