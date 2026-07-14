import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import type { LucideIcon } from "lucide-react";

import { EASE_SMOOTH } from "@/animations";
import { useMediaQuery } from "@/hooks";
import { cn } from "@/lib/utils";

export interface AnimatedStatProps {
  /** Final numeric value to count up to. */
  value: number;
  prefix?: string;
  suffix?: string;
  /** Decimal places to display, e.g. `1` for "99.9". Defaults to `0`. */
  decimals?: number;
  label: string;
  description?: string;
  icon?: LucideIcon;
  /** Count-up duration in seconds. Defaults to `1.6`. */
  duration?: number;
  className?: string;
}

/** Metric tile that counts up from zero once scrolled into view. */
export function AnimatedStat({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  label,
  description,
  icon: Icon,
  duration = 1.6,
  className,
}: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => v.toFixed(decimals));
  const staticValue = `${prefix}${value.toFixed(decimals)}${suffix}`;

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: reducedMotion ? 0 : duration,
      ease: EASE_SMOOTH,
    });
    return controls.stop;
  }, [inView, value, duration, count, reducedMotion]);

  return (
    <div ref={ref} className={cn("flex flex-col items-start gap-2", className)}>
      {Icon && <Icon className="h-5 w-5 text-primary" aria-hidden />}
      <p className="font-display text-3xl font-semibold sm:text-4xl" aria-hidden="true">
        {prefix}
        <motion.span>{rounded}</motion.span>
        {suffix}
      </p>
      <span className="sr-only">{staticValue}</span>
      <p className="text-sm font-medium text-foreground">{label}</p>
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
    </div>
  );
}
