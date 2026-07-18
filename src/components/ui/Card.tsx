import { motion } from "framer-motion";
import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

import { transitionFast } from "@/animations";
import { cn } from "@/lib/utils";
import type { BadgeAccent } from "./Badge";

/** Shared glass-surface treatment, reused by `Card`'s glass variant and `GlassPanel`. */
export const glassSurfaceClasses = "border border-white/10 bg-surface/60 backdrop-blur-xl";

const variantClasses = {
  glass: glassSurfaceClasses,
  solid: "border border-border bg-surface",
} as const;

export type CardVariant = keyof typeof variantClasses;

/** Case-study accent hue, reused from `Badge` so chips and card glow share one palette. */
export type CardAccent = BadgeAccent;

const accentHoverClasses: Record<CardAccent, string> = {
  blue: "hover:border-accent-blue/40 hover:shadow-[0_20px_60px_-20px_rgba(59,130,246,0.35)]",
  purple: "hover:border-accent-purple/40 hover:shadow-[0_20px_60px_-20px_rgba(168,85,247,0.35)]",
  green: "hover:border-accent-green/40 hover:shadow-[0_20px_60px_-20px_rgba(34,197,94,0.35)]",
  orange: "hover:border-accent-orange/40 hover:shadow-[0_20px_60px_-20px_rgba(249,115,22,0.35)]",
  cyan: "hover:border-accent-cyan/40 hover:shadow-[0_20px_60px_-20px_rgba(6,182,212,0.35)]",
  indigo: "hover:border-accent-indigo/40 hover:shadow-[0_20px_60px_-20px_rgba(99,102,241,0.35)]",
};

const defaultHoverClasses = "hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_rgba(59,91,253,0.35)]";

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
  /** Case-study accent hue for the hover border/glow. Defaults to the primary brand color. */
  accent?: CardAccent;
}

/** Reusable premium surface for feature tiles, pricing cards, testimonials, etc. */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "glass", hover = true, accent, className, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -4 } : undefined}
        transition={transitionFast}
        className={cn(
          "relative rounded-2xl p-6 transition-[border-color,box-shadow] duration-300",
          variantClasses[variant],
          hover && (accent ? accentHoverClasses[accent] : defaultHoverClasses),
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
