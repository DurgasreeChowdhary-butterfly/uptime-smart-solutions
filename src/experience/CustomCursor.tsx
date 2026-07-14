import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

import { useMediaQuery } from "@/hooks";

const INTERACTIVE_SELECTOR = "a, button, [role='button'], input, textarea, select, summary";
const MAGNETIC_SELECTOR = "a, button, [role='button']";
const MAGNETIC_PULL = 0.45;
const MAGNETIC_MAX_DISTANCE = 70;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * Small premium cursor (dot + trailing glow ring), desktop-only. Reacts to any
 * interactive element site-wide (the "global hover system") and gets magnetically
 * pulled toward buttons/links it passes near.
 *
 * The pull is applied to the cursor's own position, not the hovered element's —
 * `Button`/`IconButton` already animate their own `transform` via `whileHover`,
 * and directly mutating that same element's inline style would just get
 * overwritten by Framer Motion's own per-frame render of it. Moving the cursor
 * instead achieves the same magnetic feel with no risk of fighting React for
 * ownership of an element it doesn't control.
 */
export function CustomCursor() {
  const isPointerFine = useMediaQuery("(pointer: fine)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springConfig = reducedMotion
    ? { stiffness: 1000, damping: 100 }
    : { stiffness: 300, damping: 30, mass: 0.4 };
  const ringX = useSpring(x, springConfig);
  const ringY = useSpring(y, springConfig);

  useEffect(() => {
    if (!isPointerFine) return;

    document.documentElement.classList.add("custom-cursor-active");

    const handleMove = (e: MouseEvent) => {
      setVisible(true);

      const target = (e.target as HTMLElement)?.closest?.(MAGNETIC_SELECTOR) as HTMLElement | null;
      let px = e.clientX;
      let py = e.clientY;

      if (target && !reducedMotion) {
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);

        if (distance < MAGNETIC_MAX_DISTANCE) {
          px = lerp(e.clientX, centerX, MAGNETIC_PULL);
          py = lerp(e.clientY, centerY, MAGNETIC_PULL);
        }
      }

      x.set(px);
      y.set(py);
      setHovering(!!(e.target as HTMLElement)?.closest?.(INTERACTIVE_SELECTOR));
    };

    const handleLeaveWindow = () => setVisible(false);

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseout", handleLeaveWindow);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeaveWindow);
    };
  }, [isPointerFine, reducedMotion, x, y]);

  if (!isPointerFine) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[200] h-2 w-2 rounded-full bg-primary"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[200] rounded-full border border-primary/40"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: visible ? 1 : 0,
          width: hovering ? 52 : 32,
          height: hovering ? 52 : 32,
          backgroundColor: hovering
            ? "color-mix(in oklab, var(--color-primary) 15%, transparent)"
            : "transparent",
        }}
        transition={{ duration: reducedMotion ? 0 : 0.25, ease: "easeOut" }}
      />
    </>
  );
}
