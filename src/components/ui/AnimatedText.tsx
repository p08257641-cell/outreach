import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
};

export default function AnimatedText({ children, className = "", delay = 0, direction = "up" }: Props) {
  const reducedMotion = useReducedMotion();
  const offset = direction === "left" ? { x: -32, y: 0 } : direction === "right" ? { x: 32, y: 0 } : { x: 0, y: 32 };
  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, ...offset, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, delay: reducedMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
