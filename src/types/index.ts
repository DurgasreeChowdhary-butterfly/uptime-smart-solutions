import type { ReactNode } from "react";

export * from "./caseStudy";

export interface NavLink {
  label: string;
  href: string;
}

export interface WithChildren {
  children?: ReactNode;
}

export interface WithClassName {
  className?: string;
}
