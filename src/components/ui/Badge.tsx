import type { HTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export type BadgeVariant = "technology" | "industry" | "status";
export type BadgeTone = "neutral" | "success" | "warning" | "error" | "info";
/** Semantic case-study accent hues — subtle borders/glow/chip outlines, never solid fills. */
export type BadgeAccent = "blue" | "purple" | "green" | "orange" | "cyan" | "indigo";

const variantClasses: Record<Exclude<BadgeVariant, "status">, string> = {
  technology: "border-border bg-surface text-foreground",
  industry: "border-primary/25 bg-primary/10 text-primary",
};

const toneClasses: Record<BadgeTone, string> = {
  neutral: "border-border bg-muted text-muted-foreground",
  success: "border-accent/30 bg-accent/10 text-accent",
  info: "border-primary/30 bg-primary/10 text-primary",
  warning: "border-amber-400/30 bg-amber-400/10 text-amber-400",
  error: "border-rose-400/30 bg-rose-400/10 text-rose-400",
};

const accentClasses: Record<BadgeAccent, string> = {
  blue: "border-accent-blue/30 bg-accent-blue/10 text-accent-blue",
  purple: "border-accent-purple/30 bg-accent-purple/10 text-accent-purple",
  green: "border-accent-green/30 bg-accent-green/10 text-accent-green",
  orange: "border-accent-orange/30 bg-accent-orange/10 text-accent-orange",
  cyan: "border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan",
  indigo: "border-accent-indigo/30 bg-accent-indigo/10 text-accent-indigo",
};

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  /** Semantic color, used when `variant="status"`. Defaults to `neutral`. */
  tone?: BadgeTone;
  /** Case-study accent hue. Overrides `variant`/`tone` coloring when set. */
  accent?: BadgeAccent;
  icon?: LucideIcon;
}

/** Small pill label for tech stacks, industries, status indicators, or accented case-study tags. */
export function Badge({
  variant = "technology",
  tone = "neutral",
  accent,
  icon: Icon,
  className,
  children,
  ...props
}: BadgeProps) {
  const colorClasses = accent ? accentClasses[accent] : variant === "status" ? toneClasses[tone] : variantClasses[variant];

  return (
    <span
      className={cn(
        "inline-flex max-w-full items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        colorClasses,
        className,
      )}
      {...props}
    >
      {Icon && <Icon className="h-3 w-3" aria-hidden />}
      {children}
    </span>
  );
}
