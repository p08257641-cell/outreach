import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { ctaNav, mainNav } from "@/data/navigation";
import { cn } from "@/lib/utils";
import MobileNavigation from "@/components/navigation/MobileNavigation";

export default function SiteHeader() {
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("/");

  // Detect scrolling to update header appearance.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Track the active navigation item.
  useEffect(() => {
    if (location.pathname !== "/") {
      setActive(location.pathname);
      return;
    }

    setActive(
      location.hash
        ? `/${location.hash}`
        : "/"
    );

    const sections = mainNav
      .filter((item) => item.to.startsWith("/#"))
      .map((item) =>
        document.getElementById(item.to.slice(2))
      )
      .filter(
        (section): section is HTMLElement =>
          section !== null
      );

    if (
      typeof IntersectionObserver === "undefined" ||
      sections.length === 0
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`/#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname, location.hash]);

  // Smooth-scroll when the destination is already
  // on the currently displayed homepage.
  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    destination: string
  ) => {
    if (
      location.pathname !== "/" ||
      !destination.startsWith("/#")
    ) {
      return;
    }

    const sectionId = destination.slice(2);
    const target = document.getElementById(sectionId);

    if (!target) return;

    event.preventDefault();

    if (location.hash !== `#${sectionId}`) {
      window.history.pushState(
        window.history.state,
        "",
        destination
      );
    }

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActive(destination);
  };

  const isActive = (destination: string) => {
    if (destination === "/") {
      return active === "/";
    }

    if (destination.startsWith("/#")) {
      return active === destination;
    }

    return active === destination || active.startsWith(`${destination}/`);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition duration-300",
        scrolled
          ? "border-cloud-dark bg-white/90 shadow-soft backdrop-blur-md"
          : "border-transparent bg-white"
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between lg:h-20">
        {/* Brand Logo */}
        <Link
          to="/"
          aria-label="Ephesus School Outreach Home"
          className="flex shrink-0 items-center"
          onClick={() => {
            if (location.pathname === "/") {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          }}
        >
          <img
            src="/images/ephesus-logo.png"
            alt="Ephesus School Outreach"
            width={180}
            height={64}
            className="h-10 w-auto max-w-[145px] object-contain sm:h-12 sm:max-w-[170px] lg:h-12 lg:max-w-[155px] xl:h-16 xl:max-w-[180px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-0.5 lg:flex xl:gap-1"
          aria-label="Main navigation"
        >
          {mainNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={(event) =>
                handleNavigation(event, item.to)
              }
              aria-current={
                isActive(item.to) ? "page" : undefined
              }
              className={cn(
                "whitespace-nowrap rounded-lg px-2 py-2 text-sm font-medium transition-colors duration-200 hover:text-clear-sky-600 xl:px-3",
                isActive(item.to)
                  ? "font-semibold text-clear-sky-600"
                  : "text-blue-smoke-700"
              )}
            >
              {item.label}
            </Link>
          ))}

          {/* Get Involved CTA */}
          <Link
            to={ctaNav.to}
            onClick={(event) =>
              handleNavigation(event, ctaNav.to)
            }
            className="ml-1.5 inline-flex shrink-0 whitespace-nowrap items-center gap-2 rounded-full bg-clear-sky px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-clear-sky-600 active:scale-[0.98] xl:ml-2 xl:px-5"
          >
            {ctaNav.label}
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <MobileNavigation />
      </div>
    </header>
  );
}
