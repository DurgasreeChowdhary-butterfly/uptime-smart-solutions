import { motion } from "framer-motion";
import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

import { fadeInUp } from "@/animations";
import { sectionSpacingClasses } from "@/lib/styles";
import { cn } from "@/lib/utils";

import { Container } from "./Container";

type ConflictingHandlers =
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration"
  | "onDrag"
  | "onDragEnd"
  | "onDragStart"
  | "onTransitionEnd";

export type SectionSpacing = keyof typeof sectionSpacingClasses;

export interface SectionProps extends Omit<HTMLAttributes<HTMLElement>, ConflictingHandlers> {
  /** Wrap children in a centered `Container`. Defaults to `true`. */
  container?: boolean;
  /** Animate children in as the section enters the viewport. Defaults to `true`. */
  animate?: boolean;
  /** Vertical padding scale. Defaults to `lg`, matching the site's standard rhythm. */
  spacing?: SectionSpacing;
  /**
   * Fraction of the section's own height that must be visible before its reveal
   * animation fires. Defaults to `0.2`, matching every other `Section` on the site.
   *
   * Pass `"some"` for sections whose content can grow taller than the viewport on
   * narrow screens (e.g. a grid that collapses from 3 columns to 1) — a fixed
   * fraction of a very tall element can require more pixels on-screen at once than
   * a mobile viewport has, so the reveal never triggers and the section stays at
   * `opacity: 0` forever, looking "empty" even though its content did mount.
   */
  viewportAmount?: number | "some" | "all";
}

/** Reusable page-section wrapper: vertical rhythm + optional container + scroll reveal. */
export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ container = true, animate = true, spacing = "lg", viewportAmount = 0.2, className, children, ...props }, ref) => {
    const content = container ? <Container>{children}</Container> : children;

    if (!animate) {
      return (
        <section ref={ref} className={cn(sectionSpacingClasses[spacing], className)} {...props}>
          {content}
        </section>
      );
    }

    return (
      <motion.section
        ref={ref}
        className={cn(sectionSpacingClasses[spacing], className)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: viewportAmount }}
        variants={fadeInUp}
        {...props}
      >
        {content}
      </motion.section>
    );
  },
);

Section.displayName = "Section";
