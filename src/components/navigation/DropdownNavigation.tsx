import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { NavItem } from "@/data/navigation";

// Optional dropdown for grouping section anchors on the landing page.
// Your current SiteHeader does not render this component.
type LandingNavGroup = { label: string; children: NavItem[] };

export default function DropdownNavigation({ item }: { item: LandingNavGroup }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative" onMouseLeave={() => setOpen(false)}>
      <button type="button" aria-expanded={open} aria-haspopup="true" onClick={() => setOpen(value => !value)}
        className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-[#170D2E] transition hover:text-[#713BFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#713BFF]">
        {item.label}<ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 min-w-[230px] pt-2">
          <nav aria-label={`${item.label} sections`} className="rounded-2xl border border-[#170D2E]/10 bg-white p-2 shadow-xl">
            {item.children.map(child => (
              <a key={child.to} href={child.to} onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-[#170D2E] transition hover:bg-[#F5F3FF] hover:text-[#713BFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#713BFF]">
                {child.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
