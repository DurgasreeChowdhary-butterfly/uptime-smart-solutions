import { motion } from "framer-motion";
import { forwardRef } from "react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

import { transitionFast } from "@/animations";
import { buttonVariantClasses as variantClasses } from "@/lib/styles";
import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
} as const;

export type ButtonVariant = keyof typeof variantClasses;
export type ButtonSize = keyof typeof sizeClasses;

type ConflictingHandlers =
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration"
  | "onDrag"
  | "onDragEnd"
  | "onDragStart"
  | "onTransitionEnd";

interface SharedProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type ButtonAsButton = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, ConflictingHandlers> & { href?: undefined };

type ButtonAsAnchor = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, ConflictingHandlers> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

/** Reusable call-to-action control. Renders an `<a>` when `href` is passed, otherwise a `<button>`. */
export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, ...props }, ref) => {
    const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

    if (props.href !== undefined) {
      const { href, ...anchorProps } = props as ButtonAsAnchor;
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={transitionFast}
          {...anchorProps}
        />
      );
    }

    const buttonProps = props as ButtonAsButton;
    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={transitionFast}
        {...buttonProps}
      />
    );
  },
);

Button.displayName = "Button";
