
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

import { mainNav, ctaNav } from "@/data/navigation";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const dialogId = useId();

  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close the menu when the route changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  // Handle keyboard navigation, focus and body scrolling.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => element.getClientRects().length > 0);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === first
      ) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [open]);

  const handleNavigate = (
    event: React.MouseEvent<HTMLAnchorElement>,
    destination: string
  ) => {
    setOpen(false);

    // When clicking the current homepage section again,
    // scroll directly because the URL may not change.
    if (
      location.pathname === "/" &&
      destination.startsWith("/#") &&
      location.hash === destination.slice(1)
    ) {
      event.preventDefault();

      const sectionId = destination.slice(2);
      const target = document.getElementById(sectionId);

      target?.scrollIntoView({
        behavior: window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
          ? "auto"
          : "smooth",
        block: "start",
      });
    }

    // All other navigation is handled by React Router.
    // ScrollToTop handles scrolling after route changes.
  };

  const isActive = (destination: string) => {
    if (destination === "/") {
      return location.pathname === "/" && !location.hash;
    }

    if (destination.startsWith("/#")) {
      return (
        location.pathname === "/" &&
        location.hash === destination.slice(1)
      );
    }

    return location.pathname === destination;
  };

  return (
    <>
      {/* Mobile Menu Trigger */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls={dialogId}
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#170D2E]/10 text-[#170D2E] transition hover:bg-[#F5F3FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#713BFF] lg:hidden"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {open &&
        createPortal(
          <div
            id={dialogId}
            className="fixed inset-0 z-[200] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Backdrop */}
            <button
              type="button"
              className="absolute inset-0 h-full w-full cursor-default bg-[#10071F]/75 backdrop-blur-sm"
              aria-label="Close navigation"
              onClick={() => setOpen(false)}
            />

            {/* Slide-out Panel */}
            <div
              ref={panelRef}
              className="absolute inset-y-0 right-0 flex w-[min(88vw,390px)] flex-col overflow-y-auto bg-white shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#170D2E]/10 px-6 py-5">
                <Link
                  to="/"
                  onClick={(event) =>
                    handleNavigate(event, "/")
                  }
                  aria-label="Ephesus School Outreach Home"
                  className="flex shrink-0 items-center"
                >
                  <img
                    src="/images/ephesus-logo.png"
                    alt="Ephesus School Outreach"
                    width={180}
                    height={64}
                    className="h-12 w-auto max-w-[180px] object-contain"
                  />
                </Link>

                <button
                  ref={closeRef}
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-xl bg-[#F5F3FF] text-[#170D2E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#713BFF]"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              {/* Section Label */}
              <div className="px-6 pb-2 pt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#713BFF]">
                Explore
              </div>

              {/* Navigation Links */}
              <nav
                aria-label="Mobile primary navigation"
                className="flex flex-col gap-1 px-4 pb-5"
              >
                {mainNav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={(event) =>
                      handleNavigate(event, item.to)
                    }
                    aria-current={
                      isActive(item.to) ? "page" : undefined
                    }
                    className={`rounded-xl px-4 py-3 text-base font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#713BFF] ${
                      isActive(item.to)
                        ? "bg-[#F0EBFF] text-[#713BFF]"
                        : "text-[#170D2E] hover:bg-[#F5F3FF] hover:text-[#713BFF]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Get Involved CTA */}
              <div className="mt-auto border-t border-[#170D2E]/10 px-6 py-6">
                <Link
                  to={ctaNav.to}
                  onClick={(event) =>
                    handleNavigate(event, ctaNav.to)
                  }
                  className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#713BFF] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#8257FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#713BFF]"
                >
                  {ctaNav.label}
                  <ArrowUpRight
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </Link>

                <p className="mt-4 text-center text-xs text-[#6B627C]">
                  Inspiring faith. Changing lives.
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
