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
    <section id="impact" aria-labelledby="outreach-impact-title" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#713BFF]">Our Outreach Impact</p>
          <h2 id="outreach-impact-title" className="mt-4 text-balance text-4xl font-black leading-[1.1] tracking-[-0.045em] text-[#170D2E] sm:text-5xl">Ephesus Gatherings <span className="text-[#713BFF]">Outreach Program.</span></h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#625D70]">Ephesus Gatherings Outreach Unit is a ministry wing of Ephesus Gatherings Worldwide responsible for reaching people. Over the past two years, by the grace of God, this program has reached many people and won souls for the Lord.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div key={stat.label} initial={reducedMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6, delay: reducedMotion ? 0 : index * 0.08 }} className="rounded-[24px] border border-[#EAE6F4] bg-[#FAF9FF] p-7 text-center shadow-[0_8px_30px_rgba(23,13,46,0.05)]">
              <div className="text-4xl font-black tracking-tight text-[#713BFF] sm:text-5xl"><Counter value={stat.value}/></div>
              <h3 className="mt-4 text-base font-extrabold text-[#170D2E]">{stat.label}</h3>
              <p className="mt-2 text-sm leading-6 text-[#625D70]">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
