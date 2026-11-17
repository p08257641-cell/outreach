import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock,
  MapPin,
  Play,
  User,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <>
        <SEOHead
          title="Message Not Found | Blog"
          description="The requested message summary could not be found."
          path="/blog"
        />
        <main className="min-h-[70vh] bg-blue-smoke-50 py-20">
          <div className="container-wide">
            <div className="mx-auto max-w-xl rounded-[28px] border border-blue-smoke-100 bg-white p-8 text-center shadow-[0_12px_40px_rgba(14,58,134,.06)] sm:p-12">
              <BookOpen
                className="mx-auto h-10 w-10 text-clear-sky-600"
                aria-hidden="true"
              />
              <h1 className="mt-5 text-2xl font-black text-blue-smoke-900 sm:text-3xl">
                Message summary not found
              </h1>
              <p className="mt-3 text-sm leading-7 text-ink-light">
                The message summary you are looking for may have moved or is no
                longer available.
              </p>
              <Link
                to="/blog"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-clear-sky px-6 py-3 text-sm font-bold text-white transition hover:bg-clear-sky-600"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to all messages
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <SEOHead
        title={`${post.title} | Outreach Blog`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
      />
      <main className="min-h-screen bg-blue-smoke-50">
        {/* Header */}
        <section className="relative isolate overflow-hidden bg-blue-smoke pb-14 pt-12 text-white sm:pb-20 sm:pt-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(54,117,226,.42),transparent_55%)]"
          />
          <div className="container-wide relative z-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-white/80 transition hover:text-fresh-yellow"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Blog
            </Link>

            <div className="mt-6 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-[.16em] text-fresh-yellow">
                {post.category}
              </span>

              <h1 className="mt-5 text-balance text-3xl font-black leading-[1.08] tracking-[-.045em] text-white sm:text-5xl">
                {post.title}
              </h1>

              <p className="mt-5 text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                {post.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-sm text-white/80">
                <span className="inline-flex items-center gap-2">
                  <User
                    className="h-4 w-4 text-fresh-yellow"
                    aria-hidden="true"
                  />
                  {post.speaker}
                </span>
                <span className="inline-flex items-center gap-2">
                  <CalendarDays
                    className="h-4 w-4 text-fresh-yellow"
                    aria-hidden="true"
                  />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock
                    className="h-4 w-4 text-fresh-yellow"
                    aria-hidden="true"
                  />
                  {post.readTime}
                </span>
                {post.location && (
                  <span className="inline-flex items-center gap-2">
                    <MapPin
                      className="h-4 w-4 text-fresh-yellow"
                      aria-hidden="true"
                    />
                    {post.location}
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-12 sm:py-16">
          <div className="container-wide">
            <div className="mx-auto max-w-3xl overflow-hidden rounded-[28px] border border-blue-smoke-100 bg-white shadow-[0_14px_45px_rgba(14,58,134,.07)]">
              {post.coverImage && (
                <div className="aspect-[16/9] w-full overflow-hidden bg-blue-smoke-900">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              <div className="p-6 sm:p-10 lg:p-12">
                {/* Scripture Pill */}
                <div className="inline-flex items-center gap-2 rounded-full bg-clear-sky-50 px-4 py-2 text-xs font-extrabold uppercase tracking-[.14em] text-clear-sky-600">
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  Key Scripture: {post.scripture}
                </div>

                {/* Key Takeaways Box */}
                {post.keyTakeaways.length > 0 && (
                  <div className="mt-7 rounded-[22px] border border-clear-sky/20 bg-blue-smoke-50/80 p-5 sm:p-7">
                    <h2 className="text-sm font-extrabold uppercase tracking-[.16em] text-blue-smoke-900">
                      Key Takeaways
                    </h2>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-blue-smoke-900 sm:text-base">
                      {post.keyTakeaways.map((takeaway) => (
                        <li key={takeaway} className="flex items-start gap-3">
                          <CheckCircle2
                            className="mt-1 h-5 w-5 shrink-0 text-clear-sky-600"
                            aria-hidden="true"
                          />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Summary Paragraphs */}
                <div className="mt-8 space-y-5 text-base leading-8 text-ink-light sm:text-lg sm:leading-9">
                  {post.body.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-blue-smoke-100 pt-7">
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-sm font-extrabold text-blue-smoke-900 transition hover:text-clear-sky-600"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    All message summaries
                  </Link>

                  {post.videoUrl && (
                    <a
                      href={post.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-clear-sky px-5 py-3 text-sm font-bold text-white transition hover:bg-clear-sky-600"
                    >
                      <Play
                        className="h-4 w-4 fill-current"
                        aria-hidden="true"
                      />
                      Watch messages on YouTube
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* More Message Summaries */}
            {relatedPosts.length > 0 && (
              <section
                aria-labelledby="more-messages-heading"
                className="mx-auto mt-14 max-w-3xl"
              >
                <h2
                  id="more-messages-heading"
                  className="text-xl font-black tracking-tight text-blue-smoke-900 sm:text-2xl"
                >
                  More message summaries<span className="text-clear-sky">.</span>
                </h2>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  {relatedPosts.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/blog/${item.slug}`}
                      className="group flex flex-col rounded-[22px] border border-blue-smoke-100 bg-white p-6 shadow-[0_10px_30px_rgba(14,58,134,.05)] transition hover:-translate-y-0.5 hover:border-clear-sky/40"
                    >
                      <span className="text-xs font-extrabold uppercase tracking-[.14em] text-clear-sky-600">
                        {item.category} · {item.date}
                      </span>
                      <h3 className="mt-2.5 text-lg font-black text-blue-smoke-900 transition group-hover:text-clear-sky-600">
                        {item.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-6 text-ink-light">
                        {item.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-extrabold text-clear-sky-600">
                        Read summary
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>
      </main>
    </>
  );
}
