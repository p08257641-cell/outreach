import { useEffect, useRef, useState } from "react";
import { impactStats } from "@/data/impact";

function AnimatedCounter({ value, suffix, raw }: { value: number; suffix: string; raw?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(raw ? value : 0);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (raw || reduceMotion || typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      return;
    }
    let frame = 0;
    let started = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return;
      started = true;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / 1400, 1);
        setDisplay(Math.round(value * (1 - Math.pow(1 - t, 3))));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.2 });
    observer.observe(element);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value, raw]);
  return <span ref={ref} className="tabular-nums">{display.toLocaleString()}{suffix}</span>;
}

/** Standalone stat grid: parent section controls background and vertical spacing. */
export default function ImpactStats({ light = false }: { light?: boolean }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {impactStats.map((stat, index) => (
        <div key={`${stat.label}-${index}`} className={`rounded-[26px] border p-7 sm:p-8 ${light ? "border-white/10 bg-white/10" : "border-[#E9E4F2] bg-white shadow-[0_12px_40px_rgba(23,13,46,0.04)]"}`}>
          <div className={`text-4xl font-black tracking-[-0.06em] sm:text-5xl ${light ? "text-[#D7FF35]" : "text-[#713BFF]"}`}><AnimatedCounter value={stat.value} suffix={stat.suffix} raw={stat.raw} /></div>
          <h3 className={`mt-5 text-sm font-extrabold uppercase tracking-[0.1em] ${light ? "text-white" : "text-[#170D2E]"}`}>{stat.label}</h3>
          {stat.description && <p className={`mt-2 text-sm leading-6 ${light ? "text-white/70" : "text-[#625D70]"}`}>{stat.description}</p>}
        </div>
      ))}
    </div>
  );
}
