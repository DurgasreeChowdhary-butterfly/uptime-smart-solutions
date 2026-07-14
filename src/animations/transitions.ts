import type { Transition } from "framer-motion";

/** Signature smooth-premium easing curve, used across the site. */
export const EASE_SMOOTH = [0.16, 1, 0.3, 1] as const;

export const transitionSmooth: Transition = {
  duration: 0.7,
  ease: EASE_SMOOTH,
};

export const transitionFast: Transition = {
  duration: 0.35,
  ease: EASE_SMOOTH,
};

export const transitionSpring: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 24,
};
