import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Figures transcribed from the reference screenshot; verify before publishing.
const stats = [
  { value: 6, label: "Schools Reached", description: "Reaching students across the region" },
  { value: 5500, label: "People Reached", description: "Lives touched through our programs" },
  { value: 1350, label: "Souls Won", description: "Lives responding to the gospel" },
  { value: 1250, label: "Bibles Distributed", description: "Sharing the Word of God" },
];

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);
  const [display, setDisplay] = useState(0);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.25 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!visible) return;
    if (reducedMotion) { setDisplay(value); return; }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1500, 1);
      setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, reducedMotion, value]);
  return <span ref={ref} className="tabular-nums">{display.toLocaleString("en-US")}</span>;
}

export default function OutreachStats() {
  const reducedMotion = useReducedMotion();
  return (
    <section id="impact" aria-labelledby="outreach-impact-title" className="scroll-mt-24 bg-white py-16 sm:py-24 lg:py-28">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-clear-sky-600">Our Outreach Impact</p>
          <h2 id="outreach-impact-title" className="mt-4 text-balance text-3xl font-black leading-[1.1] tracking-[-0.045em] text-blue-smoke-900 min-[400px]:text-4xl sm:text-5xl">Ephesus Gatherings <span className="text-clear-sky">Outreach Program.</span></h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink-light sm:mt-6 sm:leading-8">Ephesus Gatherings Outreach Unit is a ministry wing of Ephesus Gatherings Worldwide responsible for reaching people. Over the past two years, by the grace of God, this program has reached many people and won souls for the Lord.</p>
        </div>
        <div className="mt-10 grid gap-4 min-[420px]:grid-cols-2 sm:mt-12 sm:gap-5 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div key={stat.label} initial={reducedMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6, delay: reducedMotion ? 0 : index * 0.08 }} className="rounded-[24px] border border-blue-smoke-100 bg-blue-smoke-50/70 p-5 text-center shadow-[0_8px_30px_rgba(14,58,134,0.05)] sm:p-7">
              <div className="text-3xl font-black tracking-tight text-clear-sky-600 min-[400px]:text-4xl sm:text-5xl"><Counter value={stat.value}/></div>
              <h3 className="mt-4 text-base font-extrabold text-blue-smoke-900">{stat.label}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-light">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
