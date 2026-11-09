
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const behavior: ScrollBehavior = prefersReducedMotion
      ? "auto"
      : "smooth";

    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
      return;
    }

    let sectionId = hash.slice(1);

    try {
      sectionId = decodeURIComponent(sectionId);
    } catch {
      // Keep original section ID.
    }

    let animationFrame = 0;
    let attempts = 0;

    const scrollToSection = () => {
      const target = document.getElementById(sectionId);

      if (target) {
        target.scrollIntoView({
          behavior,
          block: "start",
        });
        return;
      }

      if (attempts++ < 30) {
        animationFrame =
          window.requestAnimationFrame(scrollToSection);
      }
    };

    animationFrame =
      window.requestAnimationFrame(scrollToSection);

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [pathname, hash, key]);

  return null;
}
