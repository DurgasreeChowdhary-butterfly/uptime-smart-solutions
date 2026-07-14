import { motion } from "framer-motion";
import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

import { transitionFast } from "@/animations";
import { cn } from "@/lib/utils";

/** Shared glass-surface treatment, reused by `Card`'s glass variant and `GlassPanel`. */
export const glassSurfaceClasses = "border border-white/10 bg-surface/60 backdrop-blur-xl";

const variantClasses = {
  glass: glassSurfaceClasses,
  solid: "border border-border bg-surface",
} as const;

export type CardVariant = keyof typeof variantClasses;

type ConflictingHandlers =
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration"
  | "onDrag"
  | "onDragEnd"
  | "onDragStart"
  | "onTransitionEnd";

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, ConflictingHandlers> {
  variant?: CardVariant;
  /** Lift + border glow on hover. Defaults to `true`. */
  hover?: boolean;
}

/** Reusable premium surface for feature tiles, pricing cards, testimonials, etc. */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "glass", hover = true, className, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -4 } : undefined}
        transition={transitionFast}
        className={cn(
          "relative rounded-2xl p-6 transition-[border-color,box-shadow] duration-300",
          variantClasses[variant],
          hover && "hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_rgba(59,91,253,0.35)]",
          className,
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  },
);

Card.displayName = "Card";
