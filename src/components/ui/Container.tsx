import { createElement, forwardRef } from "react";
import type { ElementType, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type ContainerSize = "narrow" | "default" | "wide" | "full";

const sizeClasses: Record<ContainerSize, string> = {
  narrow: "max-w-3xl",
  default: "max-w-(--container-max)",
  wide: "max-w-[96rem]",
  full: "max-w-none",
};

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Element/component to render as. Defaults to `div`. */
  as?: ElementType;
  /** Max-width variant. Defaults to `default` (the site's standard content width). */
  size?: ContainerSize;
}

/** Centers content and caps its width, with consistent responsive gutters. */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ as: Tag = "div", size = "default", className, children, ...props }, ref) => {
    return createElement(
      Tag,
      {
        ref,
        className: cn("mx-auto w-full px-6 md:px-10", sizeClasses[size], className),
        ...props,
      },
      children,
    );
  },
);

Container.displayName = "Container";
