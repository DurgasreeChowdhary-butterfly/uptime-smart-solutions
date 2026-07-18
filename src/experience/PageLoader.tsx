import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { EASE_SMOOTH } from "@/animations";

const MIN_DISPLAY_MS = 700;

/**
 * Minimal branded loading screen, shown only for the very first paint of a
 * real page load — client-side route changes never remount this (it lives
 * outside the router). Fades away and never reappears.
 */
export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), MIN_DISPLAY_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-label="Loading"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: EASE_SMOOTH }}
          className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <motion.span
            aria-hidden
            className="h-9 w-9 rounded-full border-2 border-primary/25 border-t-primary"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
          />
          <motion.span
            aria-hidden
            className="absolute h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_var(--color-accent)]"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
