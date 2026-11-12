import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const common =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-[background-color,color,box-shadow,transform,border-color] duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clear-sky disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none disabled:transform-none";

const primary =
  "bg-clear-sky text-white shadow-[0_10px_28px_rgba(54,117,226,0.24)] hover:bg-clear-sky-600 hover:shadow-[0_16px_36px_rgba(54,117,226,0.30)]";

const secondary =
  "border border-blue-smoke-200 bg-white text-blue-smoke-900 hover:border-clear-sky hover:bg-blue-smoke-50 hover:text-clear-sky-600";

function ButtonContent({
  children,
  to,
  href,
  onClick,
  className,
  type = "button",
  disabled = false,
  variant,
}: PrimaryButtonProps & { variant: "primary" | "secondary" }) {
  const classes = cn(common, variant === "primary" ? primary : secondary, className);

  // Disabled links should not be focusable or navigable.
  if (disabled && (to || href)) {
    return (
      <span className={cn(classes, "pointer-events-none opacity-50")} aria-disabled="true">
        {children}
      </span>
    );
  }

  if (to) {
    // Fragment links remain on the current landing page.
    if (to.startsWith("#")) {
      return (
        <a href={to} onClick={onClick} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <Link to={to} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    const external = /^https?:\/\//i.test(href) || href.startsWith("//");
    return (
      <a
        href={href}
        onClick={onClick}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}

export function PrimaryButton(props: PrimaryButtonProps) {
  return <ButtonContent {...props} variant="primary" />;
}

export function SecondaryButton(props: PrimaryButtonProps) {
  return <ButtonContent {...props} variant="secondary" />;
}
