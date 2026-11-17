import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Clock,
  FilterX,
  Search,
  Sparkles,
  User,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import {
  blogCategories,
  blogPosts,
  type BlogCategory,
} from "@/data/blog";
import { siteConfig } from "@/data/site";

type CategoryFilter = "All Messages" | BlogCategory;

export default function Blog() {
  const [category, setCategory] = useState<CategoryFilter>("All Messages");
  const [query, setQuery] = useState("");
  const reducedMotion = useReducedMotion();

  const filteredPosts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return blogPosts.filter((post) => {
      const matchesCategory =
        category === "All Messages" || post.category === category;
      if (!matchesCategory) return false;
      if (!normalized) return true;
      return (
        post.title.toLowerCase().includes(normalized) ||
        post.excerpt.toLowerCase().includes(normalized) ||
        post.scripture.toLowerCase().includes(normalized) ||
        post.speaker.toLowerCase().includes(normalized) ||
        (post.location?.toLowerCase().includes(normalized) ?? false) ||
        post.keyTakeaways.some((item) =>
          item.toLowerCase().includes(normalized)
        )
      );
    });
  }, [category, query]);

  const showFeaturedLayout =
    category === "All Messages" && !query.trim() && filteredPosts.length > 0;
  const featuredPost = showFeaturedLayout ? filteredPosts[0] : null;
  const gridPosts = showFeaturedLayout ? filteredPosts.slice(1) : filteredPosts;

  const hasActiveFilter = category !== "All Messages" || query.trim() !== "";

  return (
    <>
      <SEOHead
        title="Blog & Message Summaries | Ephesus School Outreach"
        description="Read summaries, key takeaways, and Scripture reflections from Ephesus Missions & Outreach messages."
        path="/blog"
      />
      <main className="min-h-screen bg-blue-smoke-50">
        {/* Hero */}
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
                <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />{" "}
                Message Summaries
              </span>

              <h1 className="mt-6 text-balance text-3xl font-black leading-[1.05] tracking-[-.05em] text-white min-[400px]:text-4xl sm:mt-7 sm:text-6xl sm:leading-[1.03] sm:tracking-[-.06em] lg:text-7xl">
                Words that stay.{" "}
                <span className="text-fresh-yellow">
                  Truth that transforms.
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:mt-6 sm:text-lg sm:leading-8">
                Catch up on summaries, key takeaways, and Scripture reflections
                from our school outreach sessions, gatherings, and teachings.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
                <a
                  href="#blog-messages"
                  className="inline-flex items-center gap-2 rounded-full bg-clear-sky px-6 py-3 text-sm font-bold text-white transition hover:bg-clear-sky-600"
                >
                  Read message summaries <ArrowUpRight className="h-4 w-4" />
                </a>
                {siteConfig.social.youtube && (
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/20"
                  >
                    Watch on YouTube <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Listing */}
        <section
          id="blog-messages"
          aria-labelledby="blog-heading"
          className="scroll-mt-24 py-14 sm:py-20"
        >
          <div className="container-wide">
            <div className="flex flex-wrap items-end justify-between gap-4 sm:gap-5">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[.2em] text-clear-sky-600">
                  Outreach Blog
                </p>
                <h2
                  id="blog-heading"
                  className="mt-3 text-3xl font-black tracking-tight text-blue-smoke-900 sm:text-4xl"
                >
                  Summary of messages<span className="text-clear-sky">.</span>
                </h2>
              </div>
              <p
                className="text-sm font-semibold text-ink-light"
                aria-live="polite"
              >
                {filteredPosts.length}{" "}
                {filteredPosts.length === 1 ? "message" : "messages"}
              </p>
            </div>

            {/* Search & Category Filter */}
            <div className="mt-8 rounded-[24px] border border-blue-smoke-100 bg-white p-4 shadow-[0_12px_40px_rgba(14,58,134,.06)] sm:mt-9 sm:rounded-[28px] sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-sm font-extrabold uppercase tracking-[.14em] text-blue-smoke-900">
                  Browse by topic
                </h3>
                {hasActiveFilter && (
                  <button
                    type="button"
                    onClick={() => {
                      setCategory("All Messages");
                      setQuery("");
                    }}
                    className="inline-flex items-center gap-2 text-sm font-bold text-clear-sky-600 hover:underline"
                  >
                    <FilterX className="h-4 w-4" /> Reset filters
                  </button>
                )}
              </div>

              <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div
                  className="flex flex-wrap gap-2"
                  role="group"
                  aria-label="Filter messages by topic"
                >
                  {(["All Messages", ...blogCategories] as CategoryFilter[]).map(
                    (value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setCategory(value)}
                        aria-pressed={category === value}
                        className={`rounded-full border px-3.5 py-2 text-xs font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clear-sky sm:px-4 sm:py-2.5 sm:text-sm ${
                          category === value
                            ? "border-clear-sky bg-clear-sky text-white shadow-[0_6px_18px_rgba(54,117,226,.25)]"
                            : "border-blue-smoke-100 bg-blue-smoke-50 text-blue-smoke-800 hover:border-clear-sky/50"
                        }`}
                      >
                        {value}
                      </button>
                    )
                  )}
                </div>

                <label className="relative block w-full lg:w-80">
                  <span className="sr-only">Search message summaries</span>
                  <Search
                    className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-light"
                    aria-hidden="true"
                  />
                  <input
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search title, scripture, or topic..."
                    className="w-full rounded-full border border-blue-smoke-100 bg-blue-smoke-50 py-2.5 pl-11 pr-4 text-sm text-blue-smoke-900 placeholder:text-ink-light focus:border-clear-sky focus:bg-white focus:outline-none focus:ring-2 focus:ring-clear-sky/20"
                  />
                </label>
              </div>
            </div>

            {filteredPosts.length > 0 ? (
              <div className="mt-8 space-y-8 sm:mt-10">
                {/* Featured Latest Message */}
                {featuredPost && (
                  <article className="group overflow-hidden rounded-[26px] border border-blue-smoke-100 bg-white shadow-[0_14px_45px_rgba(14,58,134,.08)] transition hover:shadow-[0_20px_55px_rgba(14,58,134,.12)] sm:rounded-[30px] lg:grid lg:grid-cols-[1.05fr_1fr]">
                    <Link
                      to={`/blog/${featuredPost.slug}`}
                      className="relative block aspect-[16/10] overflow-hidden bg-blue-smoke-900 lg:aspect-auto lg:h-full"
                    >
                      {featuredPost.coverImage ? (
                        <img
                          src={featuredPost.coverImage}
                          alt={featuredPost.title}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-blue-smoke">
                          <BookOpen className="h-12 w-12 text-fresh-yellow" />
                        </div>
                      )}
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-blue-smoke-950/70 via-transparent to-transparent"
                      />
                      <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-blue-smoke-900/85 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-[.14em] text-fresh-yellow backdrop-blur">
                        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                        Latest Summary
                      </span>
                    </Link>

                    <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5 text-xs font-bold text-ink-light">
                          <span className="rounded-full bg-clear-sky-50 px-3 py-1 text-clear-sky-600">
                            {featuredPost.category}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <CalendarDays
                              className="h-3.5 w-3.5 text-clear-sky-600"
                              aria-hidden="true"
                            />
                            {featuredPost.date}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Clock
                              className="h-3.5 w-3.5 text-clear-sky-600"
                              aria-hidden="true"
                            />
                            {featuredPost.readTime}
                          </span>
                        </div>

                        <h3 className="mt-4 text-2xl font-black leading-tight tracking-tight text-blue-smoke-900 sm:text-3xl">
                          <Link
                            to={`/blog/${featuredPost.slug}`}
                            className="transition hover:text-clear-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clear-sky"
                          >
                            {featuredPost.title}
                          </Link>
                        </h3>

                        <p className="mt-3 text-sm font-bold uppercase tracking-[.14em] text-antique-gold-700">
                          Key Scripture: {featuredPost.scripture}
                        </p>

                        <p className="mt-4 text-base leading-7 text-ink-light">
                          {featuredPost.excerpt}
                        </p>

                        {featuredPost.keyTakeaways.length > 0 && (
                          <ul className="mt-5 space-y-2 border-t border-blue-smoke-100 pt-5 text-sm leading-6 text-blue-smoke-800">
                            {featuredPost.keyTakeaways
                              .slice(0, 2)
                              .map((point) => (
                                <li
                                  key={point}
                                  className="flex items-start gap-2.5"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clear-sky"
                                  />
                                  <span>{point}</span>
                                </li>
                              ))}
                          </ul>
                        )}
                      </div>

                      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-blue-smoke-100 pt-5">
                        <span className="inline-flex items-center gap-2 text-xs font-semibold text-ink-light">
                          <User
                            className="h-4 w-4 text-clear-sky-600"
                            aria-hidden="true"
                          />
                          {featuredPost.speaker}
                        </span>
                        <Link
                          to={`/blog/${featuredPost.slug}`}
                          className="inline-flex items-center gap-2 rounded-full bg-clear-sky px-5 py-2.5 text-sm font-bold text-white transition hover:bg-clear-sky-600"
                        >
                          Read full summary
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </article>
                )}

                {/* Message Cards Grid */}
                {gridPosts.length > 0 && (
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {gridPosts.map((post) => (
                      <article
                        key={post.slug}
                        className="group flex flex-col overflow-hidden rounded-[24px] border border-blue-smoke-100 bg-white shadow-[0_12px_35px_rgba(14,58,134,.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(14,58,134,.11)]"
                      >
                        <Link
                          to={`/blog/${post.slug}`}
                          className="relative block aspect-[16/10] overflow-hidden bg-blue-smoke-900"
                        >
                          {post.coverImage ? (
                            <img
                              src={post.coverImage}
                              alt={post.title}
                              loading="lazy"
                              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-blue-smoke">
                              <BookOpen className="h-10 w-10 text-fresh-yellow" />
                            </div>
                          )}
                          <span className="absolute left-4 top-4 rounded-full bg-blue-smoke-900/80 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[.12em] text-fresh-yellow backdrop-blur">
                            {post.category}
                          </span>
                        </Link>

                        <div className="flex flex-1 flex-col p-6">
                          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-ink-light">
                            <span className="inline-flex items-center gap-1">
                              <CalendarDays
                                className="h-3.5 w-3.5 text-clear-sky-600"
                                aria-hidden="true"
                              />
                              {post.date}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <Clock
                                className="h-3.5 w-3.5 text-clear-sky-600"
                                aria-hidden="true"
                              />
                              {post.readTime}
                            </span>
                          </div>

                          <h3 className="mt-3 text-xl font-black leading-snug tracking-tight text-blue-smoke-900">
                            <Link
                              to={`/blog/${post.slug}`}
                              className="transition hover:text-clear-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clear-sky"
                            >
                              {post.title}
                            </Link>
                          </h3>

                          <p className="mt-2 text-xs font-bold uppercase tracking-[.12em] text-clear-sky-600">
                            {post.scripture}
                          </p>

                          <p className="mt-3 flex-1 text-sm leading-7 text-ink-light">
                            {post.excerpt}
                          </p>

                          <div className="mt-5 flex items-center justify-between border-t border-blue-smoke-100 pt-4">
                            <span className="truncate pr-2 text-xs font-semibold text-ink-light">
                              {post.speaker}
                            </span>
                            <Link
                              to={`/blog/${post.slug}`}
                              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-extrabold text-clear-sky-600 transition hover:text-blue-smoke-900"
                            >
                              Read summary
                              <ArrowRight
                                className="h-4 w-4"
                                aria-hidden="true"
                              />
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="mt-10 flex min-h-72 flex-col items-center justify-center rounded-[28px] border border-dashed border-blue-smoke-200 bg-white px-6 py-12 text-center">
                <BookOpen
                  className="h-10 w-10 text-clear-sky-600"
                  aria-hidden="true"
                />
                <h3 className="mt-5 text-xl font-black text-blue-smoke-900">
                  No message summaries found
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-ink-light">
                  {blogPosts.length === 0
                    ? "New outreach message summaries will be posted here soon."
                    : "Try a different topic or search term, or reset your filters to view all posted messages."}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
