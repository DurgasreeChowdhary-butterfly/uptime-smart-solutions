import { motion } from "framer-motion";

/**
 * Suspense fallback for lazy-loaded routes. Shown only while a route's JS chunk is
 * still downloading — Navbar/Footer stay mounted (this lives inside `MainLayout`'s
 * `<Outlet>`, not around the whole app), so only the content area shows this briefly.
 *
 * Full viewport height, not just a short spinner box: `<main>` sits between a fixed
 * Navbar and a real (~400px) Footer, so a short fallback leaves the Footer visible
 * within the first viewport. It then jumps far down once the real page (which always
 * exceeds one viewport) loads in — a large, measured layout shift. Filling the viewport
 * here keeps the Footer off-screen until real content is ready to take its place.
 */
export function RouteFallback() {
  return (
    <div role="status" aria-label="Loading page" className="flex min-h-svh items-center justify-center">
      <motion.span
        aria-hidden
        className="h-9 w-9 rounded-full border-2 border-primary/25 border-t-primary"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
