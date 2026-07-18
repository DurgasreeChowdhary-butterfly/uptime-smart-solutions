import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Marks the field as invalid — red border + ring, paired with an error message via `aria-describedby`. */
  invalid?: boolean;
}

/** Multi-line text input styled to match `Input`. */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ invalid, className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      aria-invalid={invalid || undefined}
      className={cn(
        "min-h-32 w-full resize-y rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground",
        "transition-colors outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40",
        invalid && "border-rose-400/50 focus-visible:border-rose-400/60 focus-visible:ring-rose-400/30",
        className,
      )}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";
