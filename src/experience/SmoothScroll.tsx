import { useEffect, useRef } from "react";

import { useMediaQuery } from "@/hooks";

const EASE = 0.09;

/**
 * Replaces the browser's abrupt per-notch wheel scroll with an eased, inertial glide.
 * Only intercepts `wheel` (desktop mouse/trackpad) — touch scrolling and keyboard
 * scrolling stay fully native. Real `window.scrollTo` under the hood, so
 * IntersectionObserver-based reveals (`whileInView`) keep working unmodified.
 */
export function SmoothScroll() {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const targetY = useRef(0);
  const currentY = useRef(0);
  const rafId = useRef<number | null>(null);
  const active = useRef(false);

  useEffect(() => {
    if (reducedMotion) return;

    targetY.current = window.scrollY;
    currentY.current = window.scrollY;

    const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;

    const tick = () => {
      currentY.current += (targetY.current - currentY.current) * EASE;

      if (Math.abs(targetY.current - currentY.current) < 0.5) {
        currentY.current = targetY.current;
        window.scrollTo(0, currentY.current);
        active.current = false;
        return;
      }

      window.scrollTo(0, currentY.current);
      rafId.current = requestAnimationFrame(tick);
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return; // pinch-zoom gesture — leave untouched

      e.preventDefault();
      targetY.current = Math.min(Math.max(targetY.current + e.deltaY, 0), maxScroll());

      if (!active.current) {
        active.current = true;
        rafId.current = requestAnimationFrame(tick);
      }
    };

    const handleScroll = () => {
      if (!active.current) {
        targetY.current = window.scrollY;
        currentY.current = window.scrollY;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [reducedMotion]);

  return null;
}
