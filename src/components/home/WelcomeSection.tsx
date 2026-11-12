import { ArrowUpRight, Users, Headphones, HeartHandshake, MessageCircle, Compass } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteConfig } from "@/data/site";

const cards = [
  { icon: Users, title: "Join Us", description: "Volunteer and be part of the mission.", to: "https://docs.google.com/forms/d/e/1FAIpQLSdldOnqezoEXBhQ1JW9BEKK0ZEz-PUXoQZ97XwCHRWXekf_jA/viewform", bg: "bg-blue-smoke-50", border: "border-blue-smoke-200", iconColor: "text-blue-smoke", hover: "hover:border-blue-smoke/50", accent: "#0E3A86" },
  { icon: Headphones, title: "Listen", description: "Access resources and messages.", to: "https://docs.google.com/forms/d/e/1FAIpQLSd_K9MJQYUmTGoNCGf4Auhh28Fd6lRSlRRHTxhbDus9DZFd0w/viewform", bg: "bg-clear-sky-50", border: "border-clear-sky-200", iconColor: "text-clear-sky-600", hover: "hover:border-clear-sky/50", accent: "#3675E2" },
  { icon: HeartHandshake, title: "Get Help", description: "Reach out for support and prayer.", to: "https://docs.google.com/forms/d/e/1FAIpQLSdt-X2ctnDnTeX0vMaCR4ZC8jNSiUD7yhYprSzcSn5TbOyzRA/viewform", bg: "bg-grass-green-50", border: "border-grass-green-200", iconColor: "text-grass-green", hover: "hover:border-grass-green/50", accent: "#1D7A32" },
  { icon: MessageCircle, title: "Ask a Question", description: "Curious about faith? Ask us.", to: "https://docs.google.com/forms/d/e/1FAIpQLSfXUoMpTi7dg07cVBtERloi4zZ9MRrvFOo0LOQHQBWrlYEDYA/viewform", bg: "bg-antique-gold-50", border: "border-antique-gold-200", iconColor: "text-antique-gold-700", hover: "hover:border-antique-gold/60", accent: "#B08A25" },
  { icon: Compass, title: "Discover Your Purpose", description: "Explore your calling and gifts.", to: "https://www.youtube.com/@ephesusgatheringsworldwide", bg: "bg-burgundy-50", border: "border-burgundy-200", iconColor: "text-burgundy", hover: "hover:border-burgundy/50", accent: "#7F102C" },
] as const;

export default function WelcomeSection() {
  const reducedMotion = useReducedMotion();
  return (
    <section id="about" className="scroll-mt-24 bg-white py-16 sm:py-24 lg:py-28" aria-labelledby="welcome-heading">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div initial={reducedMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }}>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-clear-sky-600">Welcome to the movement</p>
            <h2 id="welcome-heading" className="mt-4 text-balance text-3xl font-black leading-[1.1] tracking-[-0.045em] text-blue-smoke-900 min-[400px]:text-4xl sm:mt-5 sm:text-5xl">{siteConfig.greeting}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink-light sm:mt-6 sm:text-lg sm:leading-8">We are {siteConfig.name}, a Christian outreach organization reaching students and young people with the hope of the gospel. Through school outreach, mentorship, and community gatherings, we share faith, build meaningful relationships, and inspire lasting transformation.</p>
          </motion.div>
        </div>
        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.title} className="h-full last:sm:col-span-2 last:lg:col-span-1" initial={reducedMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.55, delay: reducedMotion ? 0 : index * 0.08 }}>
                <a href={card.to} className={`group flex h-full min-h-[190px] flex-col rounded-[24px] border p-5 shadow-[0_6px_20px_rgba(14,58,134,0.03)] transition-[transform,box-shadow,border-color] duration-300 motion-safe:hover:-translate-y-1.5 hover:shadow-[0_22px_55px_rgba(14,58,134,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clear-sky sm:min-h-[240px] sm:p-6 ${card.bg} ${card.border} ${card.hover}`}>
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-white/80 shadow-sm transition-colors duration-300 group-hover:bg-white ${card.iconColor}`}><Icon className="h-6 w-6" aria-hidden="true" /></span>
                  <h3 className="mt-6 text-lg font-extrabold tracking-tight text-blue-smoke-900 sm:mt-8">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-light">{card.description}</p>
                  <ArrowUpRight className="mt-auto h-5 w-5 self-end transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" style={{ color: card.accent }} aria-hidden="true" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
