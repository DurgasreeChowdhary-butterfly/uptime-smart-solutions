/**
 * Shared class-string constants reused across design-system components.
 * Kept in a non-component module so Fast Refresh stays happy in the files that use them.
 */

export const buttonVariantClasses = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_0_1px_var(--color-primary)]",
  secondary: "bg-surface text-surface-foreground border border-border hover:bg-muted",
  outline: "border border-border text-foreground hover:bg-muted",
  ghost: "text-foreground hover:bg-muted",
} as const;

export const buttonBaseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

export const buttonSizeClasses = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
} as const;

export const sectionSpacingClasses = {
  none: "",
  sm: "py-12 md:py-16",
  md: "py-16 md:py-20",
  lg: "py-20 md:py-28",
  xl: "py-28 md:py-36",
} as const;
