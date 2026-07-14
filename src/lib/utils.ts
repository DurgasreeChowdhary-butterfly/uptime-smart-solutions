import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names, resolving conflicting Tailwind utility classes
 * (last one wins) instead of concatenating them.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
