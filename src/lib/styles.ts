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

export const sectionSpacingClasses = {
  none: "",
  sm: "py-12 md:py-16",
  md: "py-16 md:py-20",
  lg: "py-20 md:py-28",
  xl: "py-28 md:py-36",
} as const;
