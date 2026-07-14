import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { fadeInUp, staggerContainer } from "@/animations";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  /** Small uppercase label above the heading, e.g. "AI & Software Engineering". */
  eyebrow?: ReactNode;
  heading: ReactNode;
  description?: ReactNode;
  /** Defaults to `left`. */
  align?: "left" | "center";
  /** Heading tag to render. Defaults to `h2`. */
  as?: "h2" | "h3";
  className?: string;
}

/** Reusable eyebrow + heading + description block, with scroll-triggered stagger reveal. */
export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  as = "h2",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  const headingClasses = "font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={staggerContainer}
      className={cn("flex flex-col", centered ? "items-center text-center" : "items-start text-left", className)}
    >
      {eyebrow && (
        <motion.span
          variants={fadeInUp}
          className="mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          {eyebrow}
        </motion.span>
      )}

      {as === "h3" ? (
        <motion.h3 variants={fadeInUp} className={cn(headingClasses, "text-balance")}>
          {heading}
        </motion.h3>
      ) : (
        <motion.h2 variants={fadeInUp} className={cn(headingClasses, "text-balance")}>
          {heading}
        </motion.h2>
      )}

      {description && (
        <motion.p
          variants={fadeInUp}
          className={cn(
            "mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg",
            centered && "mx-auto",
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
