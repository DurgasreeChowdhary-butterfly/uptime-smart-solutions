import { motion } from "framer-motion";

import { EASE_SMOOTH } from "@/animations";
import type { WithChildren, WithClassName } from "@/types";

export type RevealVariant = "fadeIn" | "fadeInUp" | "fadeInDown" | "scaleIn";

const OFFSETS: Record<RevealVariant, { y?: number; scale?: number }> = {
  fadeIn: {},
  fadeInUp: { y: 24 },
  fadeInDown: { y: -24 },
  scaleIn: { scale: 0.94 },
};

export interface RevealProps extends WithChildren, WithClassName {
  variant?: RevealVariant;
  /** Delay in seconds before the animation starts. */
  delay?: number;
  duration?: number;
  /** Only animate once, the first time it enters the viewport. Defaults to `true`. */
  once?: boolean;
  /** Fraction of the element that must be visible to trigger. Defaults to `0.2`. */
  amount?: number;
}

/** Generic scroll-triggered reveal wrapper — drop any content in to animate it into view. */
export function Reveal({
  children,
  className,
  variant = "fadeInUp",
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const offset = OFFSETS[variant];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={{ duration, ease: EASE_SMOOTH, delay }}
    >
      {children}
    </motion.div>
  );
}
