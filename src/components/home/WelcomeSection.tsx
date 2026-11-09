import { ArrowUpRight, Users, Headphones, HeartHandshake, MessageCircle, Compass } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteConfig } from "@/data/site";

const cards = [
  { icon: Users, title: "Join Us", description: "Volunteer and be part of the mission.", to: "https://docs.google.com/forms/d/e/1FAIpQLSdldOnqezoEXBhQ1JW9BEKK0ZEz-PUXoQZ97XwCHRWXekf_jA/viewform", bg: "bg-[#EEE7FF]", border: "border-[#D9CBFF]", iconColor: "text-[#713BFF]", hover: "hover:border-[#713BFF]/50", accent: "#713BFF" },
  { icon: Headphones, title: "Listen", description: "Access resources and messages.", to: "https://docs.google.com/forms/d/e/1FAIpQLSd_K9MJQYUmTGoNCGf4Auhh28Fd6lRSlRRHTxhbDus9DZFd0w/viewform", bg: "bg-[#E3F3FF]", border: "border-[#BBDFFF]", iconColor: "text-[#1677D2]", hover: "hover:border-[#1677D2]/50", accent: "#1677D2" },
  { icon: HeartHandshake, title: "Get Help", description: "Reach out for support and prayer.", to: "https://docs.google.com/forms/d/e/1FAIpQLSdt-X2ctnDnTeX0vMaCR4ZC8jNSiUD7yhYprSzcSn5TbOyzRA/viewform", bg: "bg-[#E4F8EB]", border: "border-[#BDE8CB]", iconColor: "text-[#15854C]", hover: "hover:border-[#15854C]/50", accent: "#15854C" },
  { icon: MessageCircle, title: "Ask a Question", description: "Curious about faith? Ask us.", to: "https://docs.google.com/forms/d/e/1FAIpQLSfXUoMpTi7dg07cVBtERloi4zZ9MRrvFOo0LOQHQBWrlYEDYA/viewform", bg: "bg-[#FFF0DE]", border: "border-[#F6D8AF]", iconColor: "text-[#C66A13]", hover: "hover:border-[#C66A13]/50", accent: "#C66A13" },
  { icon: Compass, title: "Discover Your Purpose", description: "Explore your calling and gifts.", to: "https://www.youtube.com/@ephesusgatheringsworldwide", bg: "bg-[#FFE7E9]", border: "border-[#F5C3CC]", iconColor: "text-[#C53C56]", hover: "hover:border-[#C53C56]/50", accent: "#C53C56" },
] as const;

export default function WelcomeSection() {
  const reducedMotion = useReducedMotion();
  return (
    <section id="about" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28" aria-labelledby="welcome-heading">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div initial={reducedMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }}>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#713BFF]">Welcome to the movement</p>
            <h2 id="welcome-heading" className="mt-5 text-balance text-4xl font-black leading-[1.1] tracking-[-0.045em] text-[#170D2E] sm:text-5xl">{siteConfig.greeting}</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#625D70] sm:text-lg">We are {siteConfig.name}, a Christian outreach organization reaching students and young people with the hope of the gospel. Through school outreach, mentorship, and community gatherings, we share faith, build meaningful relationships, and inspire lasting transformation.</p>
          </motion.div>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.title} className="h-full" initial={reducedMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.55, delay: reducedMotion ? 0 : index * 0.08 }}>
                <a href={card.to} className={`group flex min-h-[250px] h-full flex-col rounded-[24px] border p-6 shadow-[0_6px_20px_rgba(23,13,46,0.025)] transition-[transform,box-shadow,border-color] duration-300 motion-safe:hover:-translate-y-1.5 hover:shadow-[0_22px_55px_rgba(23,13,46,0.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#713BFF] ${card.bg} ${card.border} ${card.hover}`}>
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-white/75 shadow-sm transition-colors duration-300 group-hover:bg-white ${card.iconColor}`}><Icon className="h-6 w-6" aria-hidden="true" /></span>
                  <h3 className="mt-8 text-lg font-extrabold tracking-tight text-[#170D2E]">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#625D70]">{card.description}</p>
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
