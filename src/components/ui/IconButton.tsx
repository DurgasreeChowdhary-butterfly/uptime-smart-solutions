import { motion } from "framer-motion";
import { forwardRef } from "react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";

import { transitionFast } from "@/animations";
import { buttonVariantClasses } from "@/lib/styles";
import { cn } from "@/lib/utils";

export type IconButtonVariant = keyof typeof buttonVariantClasses;

const sizeClasses = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-13 w-13",
} as const;

const iconSizeClasses = {
  sm: "h-4 w-4",
  md: "h-[18px] w-[18px]",
  lg: "h-5 w-5",
} as const;

export type IconButtonSize = keyof typeof sizeClasses;

type ConflictingHandlers =
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration"
  | "onDrag"
  | "onDragEnd"
  | "onDragStart"
  | "onTransitionEnd";

interface SharedProps {
  icon: LucideIcon;
  /** Accessible name — required, since the control has no visible text. */
  label: string;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  className?: string;
}

type IconButtonAsButton = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, ConflictingHandlers> & { href?: undefined };

type IconButtonAsAnchor = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, ConflictingHandlers> & { href: string };

export type IconButtonProps = IconButtonAsButton | IconButtonAsAnchor;

const baseClasses =
  "inline-flex shrink-0 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

/** Circular icon-only control — same color language as `Button`, sized for toolbars and social links. */
export const IconButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, IconButtonProps>(
  ({ icon: Icon, label, variant = "ghost", size = "md", className, ...props }, ref) => {
    const classes = cn(
      baseClasses,
      buttonVariantClasses[variant],
      sizeClasses[size],
      className,
    );

    if (props.href !== undefined) {
      const { href, ...anchorProps } = props as IconButtonAsAnchor;
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          aria-label={label}
          className={classes}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          transition={transitionFast}
          {...anchorProps}
        >
          <Icon className={iconSizeClasses[size]} aria-hidden />
        </motion.a>
      );
    }

    const buttonProps = props as IconButtonAsButton;
    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
        aria-label={label}
        className={classes}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        transition={transitionFast}
        {...buttonProps}
      >
        <Icon className={iconSizeClasses[size]} aria-hidden />
      </motion.button>
    );
  },
);

IconButton.displayName = "IconButton";
