import { Home, ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";

export default function NotFound() {
  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <>
      <SEOHead
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        path="/404"
        noindex
      />

      <section className="flex min-h-[70vh] items-center justify-center bg-navy-900 px-6">
        <div className="text-center">
          <p className="text-7xl font-bold text-gold-400 sm:text-8xl">404</p>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Page Not Found</h1>
          <p className="mt-4 max-w-md text-navy-200">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={goHome}
              className="inline-flex items-center gap-2 rounded-full bg-royal-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-royal-600"
            >
              <Home className="h-4 w-4" />
              Back Home
            </button>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
