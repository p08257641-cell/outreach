import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Camera, ExternalLink, FilterX, FolderOpen, X } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import {
  galleryAlbums,
  galleryPhotos,
  gallerySchools,
  galleryYears,
  type GallerySchool,
  type GalleryYear,
} from "@/data/gallery";

type SchoolFilter = "All Schools" | GallerySchool;
type YearFilter = "All Years" | GalleryYear;

const PAGE_SIZE = 24;

export default function Gallery() {
  const [school, setSchool] = useState<SchoolFilter>("All Schools");
  const [year, setYear] = useState<YearFilter>("All Years");
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE);
  const [selected, setSelected] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const photos = useMemo(
    () =>
      galleryPhotos.filter(
        (photo) =>
          (school === "All Schools" || photo.school === school) &&
          (year === "All Years" || photo.year === year)
      ),
    [school, year]
  );

  const visiblePhotos = useMemo(
    () => photos.slice(0, visibleCount),
    [photos, visibleCount]
  );

  const activeAlbum = useMemo(
    () =>
      school === "All Schools"
        ? null
        : galleryAlbums.find(
            (album) =>
              album.school === school &&
              (year === "All Years" || album.year === year)
          ) ?? null,
    [school, year]
  );

  const activePhoto = selected === null ? null : photos[selected];
  const move = (step: number) =>
    setSelected((current) =>
      current === null || !photos.length
        ? null
        : (current + step + photos.length) % photos.length
    );

  useEffect(() => {
    setSelected(null);
    setVisibleCount(PAGE_SIZE);
  }, [school, year]);

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
      const focusable = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(
          "button:not(:disabled), a[href]"
        )
      );
      if (!focusable.length) return;
      const first = focusable[0],
        last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      openerRef.current?.focus();
    };
  }, [selected, photos.length]);

  const remaining = Math.max(0, photos.length - visiblePhotos.length);

  return (
    <>
      <SEOHead
        title="Outreach Gallery | Ephesus School Outreach"
        description="Explore school outreach photographs by school and year."
        path="/gallery"
      />
      <main className="min-h-screen bg-blue-smoke-50">
        <section className="relative isolate overflow-hidden bg-blue-smoke pb-14 pt-16 text-white sm:pb-24 sm:pt-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(54,117,226,.42),transparent_55%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-clear-sky/25 blur-[90px]"
          />
          <div className="container-wide relative z-10">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-[11px] font-extrabold uppercase tracking-[.14em] text-fresh-yellow sm:px-4 sm:text-xs sm:tracking-[.18em]">
                <Camera className="h-4 w-4 shrink-0" /> Moments from our mission
              </span>

              <h1 className="mt-6 text-balance text-3xl font-black leading-[1.05] tracking-[-.05em] text-white min-[400px]:text-4xl sm:mt-7 sm:text-6xl sm:leading-[1.03] sm:tracking-[-.06em] lg:text-7xl">
                Stories captured.{" "}
                <span className="text-fresh-yellow">Lives impacted.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:mt-6 sm:text-lg sm:leading-8">
                Explore moments of faith, connection, and community from our
                school outreach visits. Browse all photos or narrow the
                collection by school and year.
              </p>
              <a
                href="#gallery-collection"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-clear-sky px-6 py-3 text-sm font-bold text-white transition hover:bg-clear-sky-600 sm:mt-8"
              >
                Explore the collection <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </section>

        <section
          id="gallery-collection"
          aria-labelledby="gallery-heading"
          className="scroll-mt-24 py-14 sm:py-20"
        >
          <div className="container-wide">
            <div className="flex flex-wrap items-end justify-between gap-4 sm:gap-5">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[.2em] text-clear-sky-600">
                  Explore our outreach
                </p>
                <h2
                  id="gallery-heading"
                  className="mt-3 text-3xl font-black tracking-tight text-blue-smoke-900 sm:text-4xl"
                >
                  Photo collection<span className="text-clear-sky">.</span>
                </h2>
              </div>
              <p
                className="text-sm font-semibold text-ink-light"
                aria-live="polite"
              >
                {photos.length === visiblePhotos.length
                  ? `${photos.length} ${photos.length === 1 ? "photo" : "photos"}`
                  : `Showing ${visiblePhotos.length} of ${photos.length} photos`}
              </p>
            </div>

            <div className="mt-8 rounded-[24px] border border-blue-smoke-100 bg-white p-4 shadow-[0_12px_40px_rgba(14,58,134,.06)] sm:mt-9 sm:rounded-[28px] sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-sm font-extrabold uppercase tracking-[.14em] text-blue-smoke-900">
                  Browse by school
                </h3>
                <div className="flex flex-wrap items-center gap-4">
                  {activeAlbum && (
                    <a
                      href={activeAlbum.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-smoke-900 hover:text-clear-sky-600 hover:underline"
                    >
                      <FolderOpen className="h-4 w-4 text-clear-sky-600" />
                      Open {activeAlbum.school} {activeAlbum.year} on Google Drive
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      setSchool("All Schools");
                      setYear("All Years");
                    }}
                    className="inline-flex items-center gap-2 text-sm font-bold text-clear-sky-600 hover:underline"
                  >
                    <FilterX className="h-4 w-4" /> Reset filters
                  </button>
                </div>
              </div>
              <div
                className="mt-4 flex flex-wrap gap-2"
                role="group"
                aria-label="Filter by school"
              >
                {(["All Schools", ...gallerySchools] as SchoolFilter[]).map(
                  (value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setSchool(value)}
                      aria-pressed={school === value}
                      className={`rounded-full border px-3.5 py-2 text-xs font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clear-sky sm:px-4 sm:py-2.5 sm:text-sm ${
                        school === value
                          ? "border-clear-sky bg-clear-sky text-white shadow-[0_6px_18px_rgba(54,117,226,.25)]"
                          : "border-blue-smoke-100 bg-blue-smoke-50 text-blue-smoke-800 hover:border-clear-sky/50"
                      }`}
                    >
                      {value}
                    </button>
                  )
                )}
              </div>
              <div className="mt-6 border-t border-blue-smoke-100 pt-5 sm:mt-7 sm:pt-6">
                <h3 className="text-sm font-extrabold uppercase tracking-[.14em] text-blue-smoke-900">
                  Browse by year
                </h3>
                <div
                  className="mt-4 flex flex-wrap gap-2"
                  role="group"
                  aria-label="Filter by year"
                >
                  {(["All Years", ...galleryYears] as YearFilter[]).map(
                    (value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setYear(value)}
                        aria-pressed={year === value}
                        className={`rounded-full border px-3.5 py-2 text-xs font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clear-sky sm:px-4 sm:py-2.5 sm:text-sm ${
                          year === value
                            ? "border-blue-smoke bg-blue-smoke text-fresh-yellow"
                            : "border-blue-smoke-100 bg-blue-smoke-50 text-blue-smoke-800 hover:border-clear-sky/50"
                        }`}
                      >
                        {value}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>

            {visiblePhotos.length ? (
              <>
                <div className="mt-8 grid grid-cols-1 gap-4 min-[360px]:grid-cols-2 sm:mt-10 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
                  {visiblePhotos.map((photo, index) => (
                    <button
                      key={photo.id}
                      type="button"
                      onClick={(event) => {
                        openerRef.current = event.currentTarget;
                        setSelected(index);
                      }}
                      aria-label={`Open photo: ${photo.alt}`}
                      className="group relative aspect-[4/5] overflow-hidden rounded-[20px] bg-blue-smoke-900 text-left shadow-[0_12px_35px_rgba(14,58,134,.12)] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-clear-sky sm:rounded-[24px]"
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110 group-focus-visible:scale-105"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-blue-smoke-950/90 via-transparent to-transparent"
                      />
                      <span className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
                        <span className="block text-sm font-extrabold sm:text-base">
                          {photo.school}
                        </span>
                        <span className="mt-1 block text-xs font-semibold text-fresh-yellow">
                          {photo.year}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>

                {remaining > 0 && (
                  <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setVisibleCount((current) => current + PAGE_SIZE)
                      }
                      className="rounded-full bg-clear-sky px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_10px_30px_rgba(54,117,226,.28)] transition hover:-translate-y-0.5 hover:bg-clear-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clear-sky"
                    >
                      Load {Math.min(PAGE_SIZE, remaining)} more photos (
                      {remaining} remaining)
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="mt-10 flex min-h-72 flex-col items-center justify-center rounded-[28px] border border-dashed border-blue-smoke-200 bg-white px-6 py-12 text-center">
                <Camera
                  className="h-10 w-10 text-clear-sky-600"
                  aria-hidden="true"
                />
                <h3 className="mt-5 text-xl font-black text-blue-smoke-900">
                  No photos in this collection yet
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-ink-light">
                  {galleryPhotos.length === 0
                    ? "Add your photos and their school/year details in src/data/gallery.ts to populate the gallery."
                    : "Try a different school or year, or choose All Schools and All Years to see the full collection."}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <AnimatePresence>
        {activePhoto && (
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery photo viewer"
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0 }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-blue-smoke-950/95 p-4"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelected(null);
            }}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close gallery"
              className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white text-blue-smoke-900"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={activePhoto.fullSrc}
              alt={activePhoto.alt}
              referrerPolicy="no-referrer"
              className="max-h-[65dvh] max-w-full rounded-xl object-contain sm:max-h-[75vh]"
            />
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-center">
              <p className="text-sm font-bold text-white">
                {activePhoto.school}{" "}
                <span className="text-fresh-yellow">· {activePhoto.year}</span>
              </p>
              <a
                href={activePhoto.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-white transition hover:bg-white/20"
              >
                Open in Drive <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="mt-4 flex items-center gap-5">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Previous photo"
                className="grid h-11 w-11 place-items-center rounded-full bg-white text-blue-smoke-900"
              >
                <ArrowLeft />
              </button>
              <span
                className="min-w-16 text-center text-sm font-bold text-white"
                aria-live="polite"
              >
                {selected! + 1} / {photos.length}
              </span>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Next photo"
                className="grid h-11 w-11 place-items-center rounded-full bg-white text-blue-smoke-900"
              >
                <ArrowRight />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
