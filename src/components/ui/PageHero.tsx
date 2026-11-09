import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  image?: string;
  align?: "left" | "center";
  children?: ReactNode;
  className?: string;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  align = "left",
  children,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden bg-navy-900", className)}>
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover opacity-30"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900/90 to-navy-800/70" />
        </div>
      )}
      {!image && <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-800" />}

      <div
        className={cn(
          "container-wide relative z-10 py-20 sm:py-24 lg:py-32",
          align === "center" && "text-center"
        )}
      >
        <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
          {eyebrow && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold-400 animate-fade-up">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl animate-fade-up text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg leading-relaxed text-navy-100 animate-fade-up sm:text-xl">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
        </div>
      </div>
    </section>
  );
}
