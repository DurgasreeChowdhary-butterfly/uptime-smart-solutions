import { motion } from "framer-motion";

import { transitionSmooth } from "@/animations";
import { cn } from "@/lib/utils";

export interface DividerProps {
  className?: string;
  /** Show the center accent glow dot. Defaults to `true`. */
  glow?: boolean;
}

/** Decorative horizontal rule that draws itself in as it enters the viewport. */
export function Divider({ className, glow = true }: DividerProps) {
  return (
    <div aria-hidden className={cn("relative h-px w-full", className)}>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={transitionSmooth}
        style={{ transformOrigin: "center" }}
        className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"
      />
      {glow && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ ...transitionSmooth, delay: 0.3 }}
          className="absolute top-1/2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px_2px_var(--color-accent)]"
        />
      )}
    </div>
  );
}
