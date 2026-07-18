import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Marks the field as invalid — red border + ring, paired with an error message via `aria-describedby`. */
  invalid?: boolean;
}

/** Text input styled to match the site's dark surface + rounded design language. */
export const Input = forwardRef<HTMLInputElement, InputProps>(({ invalid, className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      aria-invalid={invalid || undefined}
      className={cn(
        "h-11 w-full rounded-xl border border-border bg-surface/60 px-4 text-sm text-foreground placeholder:text-muted-foreground",
        "transition-colors outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40",
        invalid && "border-rose-400/50 focus-visible:border-rose-400/60 focus-visible:ring-rose-400/30",
        className,
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";
