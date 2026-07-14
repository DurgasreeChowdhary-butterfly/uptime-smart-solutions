import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { glassSurfaceClasses } from "./Card";

export interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  /** Soft corner glow blob. Defaults to `true`. */
  glow?: boolean;
}

/** Static premium glass surface for feature panels, quotes, and highlighted content blocks. */
export const GlassPanel = forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ glow = true, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden rounded-3xl p-8", glassSurfaceClasses, className)}
        {...props}
      >
        {glow && (
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 -z-10 h-56 w-56 rounded-full bg-primary/20 blur-3xl"
          />
        )}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.06] via-transparent to-transparent"
        />
        <div className="relative">{children}</div>
      </div>
    );
  },
);

GlassPanel.displayName = "GlassPanel";
