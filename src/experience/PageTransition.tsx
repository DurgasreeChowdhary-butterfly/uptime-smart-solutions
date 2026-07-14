import { motion } from "framer-motion";

import { EASE_SMOOTH } from "@/animations";
import type { WithChildren } from "@/types";

/**
 * Reusable page-enter animation. Wrap a page's root content in this so every
 * route fades/slides in consistently — future pages inherit the effect simply
 * by using the same wrapper, with no per-page animation code of their own.
 */
export function PageTransition({ children }: WithChildren) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE_SMOOTH }}
    >
      {children}
    </motion.div>
  );
}
