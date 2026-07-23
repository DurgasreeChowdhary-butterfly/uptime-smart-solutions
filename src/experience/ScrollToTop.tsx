import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// How long to keep waiting for a hash target before giving up (ms). Covers routes whose
// content — including the one it's scrolling to — hasn't mounted yet (lazy-loaded chunks,
// `Suspense` fallback still showing), so `#id` doesn't exist in the DOM the instant the
// route change commits.
const SCROLL_TARGET_TIMEOUT_MS = 2000;

/**
 * Runs on every route change, mounted once inside the Router.
 *
 * - No hash in the URL: scrolls to the top, as before.
 * - A hash is present (same-page anchor, or a nav link that routed Home first and landed
 *   on `/#section`): smooth-scrolls to that element once it exists, retrying across
 *   frames in case the target page is still mounting.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }

    const targetId = hash.slice(1);
    if (!targetId) return;

    let cancelled = false;
    let frame: number;
    const start = performance.now();

    function tryScroll() {
      if (cancelled) return;

      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }

      if (performance.now() - start < SCROLL_TARGET_TIMEOUT_MS) {
        frame = requestAnimationFrame(tryScroll);
      }
    }

    tryScroll();

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [pathname, hash]);

  return null;
}
