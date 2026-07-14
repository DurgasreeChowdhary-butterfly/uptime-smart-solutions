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
}

/** Reusable page-section wrapper: vertical rhythm + optional container + scroll reveal. */
export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ container = true, animate = true, spacing = "lg", className, children, ...props }, ref) => {
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
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        {...props}
      >
        {content}
      </motion.section>
    );
  },
);

Section.displayName = "Section";
