import type { HTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export type BadgeVariant = "technology" | "industry" | "status";
export type BadgeTone = "neutral" | "success" | "warning" | "error" | "info";

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

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  /** Semantic color, used when `variant="status"`. Defaults to `neutral`. */
  tone?: BadgeTone;
  icon?: LucideIcon;
}

/** Small pill label for tech stacks, industries, or status indicators. */
export function Badge({
  variant = "technology",
  tone = "neutral",
  icon: Icon,
  className,
  children,
  ...props
}: BadgeProps) {
  const colorClasses = variant === "status" ? toneClasses[tone] : variantClasses[variant];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium whitespace-nowrap",
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
