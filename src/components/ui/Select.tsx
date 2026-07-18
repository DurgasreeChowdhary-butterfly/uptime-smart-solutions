import { ChevronDown } from "lucide-react";
import { forwardRef } from "react";
import type { SelectHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /** Marks the field as invalid — red border + ring, paired with an error message via `aria-describedby`. */
  invalid?: boolean;
}

/** Native `<select>` styled to match `Input`, with a custom chevron indicator. */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ invalid, className, children, ...props }, ref) => {
  return (
    <div className="relative">
      <select
        ref={ref}
        aria-invalid={invalid || undefined}
        className={cn(
          "h-11 w-full appearance-none rounded-xl border border-border bg-surface/60 px-4 pr-10 text-sm text-foreground",
          "transition-colors outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40",
          invalid && "border-rose-400/50 focus-visible:border-rose-400/60 focus-visible:ring-rose-400/30",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden
      />
    </div>
  );
});

Select.displayName = "Select";
