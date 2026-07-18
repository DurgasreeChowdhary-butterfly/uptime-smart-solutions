import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface FormFieldProps {
  label: string;
  htmlFor: string;
  /** Shows a required marker next to the label and exposes it to screen readers. */
  required?: boolean;
  /** Validation error — rendered as an alert and linked via `aria-describedby` on the field itself. */
  error?: string;
  /** Helper text shown when there's no error. */
  hint?: string;
  className?: string;
  children: ReactNode;
}

/** Label + control + error/hint layout, shared by every field in `ContactForm`. */
export function FormField({ label, htmlFor, required, error, hint, className, children }: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
        {required && (
          <span className="ml-1 text-rose-400" aria-hidden>
            *
          </span>
        )}
        {required && <span className="sr-only"> (required)</span>}
      </label>

      {children}

      {error ? (
        <p id={`${htmlFor}-error`} role="alert" className="text-xs text-rose-400">
          {error}
        </p>
      ) : hint ? (
        <p id={`${htmlFor}-hint`} className="text-xs text-muted-foreground">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
