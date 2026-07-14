import { motion, useScroll, useSpring } from "framer-motion";

import { useMediaQuery } from "@/hooks";

/** Very thin, brand-colored scroll-progress bar fixed to the top edge of the page. */
export function ScrollProgress() {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(
    scrollYProgress,
    reducedMotion ? { stiffness: 1000, damping: 100 } : { stiffness: 120, damping: 20, restDelta: 0.001 },
  );

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-primary to-accent"
      style={{ scaleX: progress }}
    />
  );
}
