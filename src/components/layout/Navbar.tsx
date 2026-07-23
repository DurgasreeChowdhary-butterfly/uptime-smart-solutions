import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { transitionFast, transitionSmooth } from "@/animations";
import { Container } from "@/components/ui";
import { NAV_LINKS, ROUTES } from "@/constants";
import { useActiveSection, useScrolled } from "@/hooks";
import { buttonBaseClasses, buttonSizeClasses, buttonVariantClasses } from "@/lib/styles";
import { cn } from "@/lib/utils";

// Intrinsic size of `/logo.png`, set as HTML attributes below so the browser can reserve
// the correct aspect ratio before the image loads — avoids layout shift even though the
// displayed height is overridden responsively by the `h-*` classes.
const LOGO_INTRINSIC_WIDTH = 960;
const LOGO_INTRINSIC_HEIGHT = 379;

const SECTION_IDS = NAV_LINKS.filter((link) => link.href.startsWith("#")).map((link) => link.href.replace("#", ""));

// Same classes and `whileHover` as `Button`, but deliberately no `whileTap` — on a
// touchscreen, Framer Motion's tap-vs-drag gesture recognition can read a real
// (slightly-moved) tap as a drag and silently drop the click, which would otherwise
// make this section-nav CTA randomly no-op on mobile. See `FinalCTA.tsx` for the same
// lesson learned on a different button. Dropping only `whileTap` (not `whileHover`)
// keeps the desktop hover feel identical to `Button`.
const ctaLinkClasses = cn(buttonBaseClasses, buttonVariantClasses.primary, buttonSizeClasses.sm, "group");

/** Premium floating navbar: transparent over the hero, blurs in once scrolled. */
export function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === ROUTES.home;
  const toSectionHref = (hash: string) => (isHome ? hash : `${ROUTES.home}${hash}`);

  // Section-anchor nav links (Expertise/Solutions/Projects/Company/Contact) navigate
  // client-side instead of relying on the browser's native `<a href="#hash">` jump —
  // that native jump only works same-page; from another route it's a plain anchor with
  // a path in it, so the browser does a full hard reload that lands on Home at the top
  // with no scroll, since the target section doesn't exist in the DOM until the page has
  // re-rendered. Routing there with `navigate()` keeps it a single SPA transition either
  // way, and `ScrollToTop` (keyed on `location.hash`) does the actual scrolling, retrying
  // until the target section has mounted, e.g. after a lazy-loaded route.
  function handleSectionNavClick(e: MouseEvent<HTMLAnchorElement>, hash: string) {
    // Let modified/non-primary clicks fall through to the browser's normal handling
    // (open in new tab, open in new window, etc.) instead of hijacking them.
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    e.preventDefault();
    setOpen(false);
    // Unlock body scroll synchronously rather than waiting on the lock effect's cleanup —
    // the scroll this triggers must not race a still-`overflow: hidden` body.
    document.body.style.overflow = "";
    navigate(toSectionHref(hash));
  }

  // Lock body scroll while the mobile menu is open, and always restore it on close/unmount.
  useEffect(() => {
    if (!open) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Let Escape close the mobile menu, matching click-outside/link-click behavior.
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  function handleLogoClick(e: MouseEvent<HTMLAnchorElement>) {
    setOpen(false);
    if (location.pathname !== ROUTES.home) return;
    e.preventDefault();
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        aria-hidden
        initial={false}
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={transitionSmooth}
        className="absolute inset-0 border-b border-border bg-background/80 backdrop-blur-xl"
      />

      <Container className="relative z-10 flex h-16 items-center justify-between md:h-20">
        {/* `/logo.png` is the cropped asset from Phase 10.1 — still an opaque white
        background baked in (source had no alpha channel), so it needs *some* light
        backing to read cleanly on the dark navbar. Kept to the smallest padding that
        avoids the mark touching the edge, no shadow/ring — a mark, not a card. */}
        <Link
          to={ROUTES.home}
          onClick={handleLogoClick}
          aria-label="Uptime Smart Solutions — Home"
          className="flex shrink-0 items-center rounded-md bg-white p-1 transition-opacity hover:opacity-90"
        >
          <img
            src="/logo.png"
            alt="Uptime Smart Solutions Pvt. Ltd."
            width={LOGO_INTRINSIC_WIDTH}
            height={LOGO_INTRINSIC_HEIGHT}
            className="h-10 w-auto md:h-11 lg:h-12"
          />
        </Link>

        {/* The centered nav (6 links) plus the logo + CTA need ~1220px of room to coexist
        without colliding — that only reliably clears at `xl` (1280px, which is also
        `--container-max`, so the row never gets any wider beyond this point). Below `xl`,
        stick with the hamburger menu rather than let nav links visually overlap either side. */}
        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 xl:flex"
        >
          {NAV_LINKS.map((link) => {
            const isRoute = !link.href.startsWith("#");
            const isActive = isRoute ? location.pathname === link.href : activeId === link.href.slice(1);
            const linkClassName = cn(
              "text-sm transition-colors hover:text-foreground",
              isActive ? "text-foreground" : "text-muted-foreground",
            );

            if (isRoute) {
              return (
                <Link key={link.href} to={link.href} aria-current={isActive ? "page" : undefined} className={linkClassName}>
                  {link.label}
                </Link>
              );
            }

            return (
              <a
                key={link.href}
                href={toSectionHref(link.href)}
                onClick={(e) => handleSectionNavClick(e, link.href)}
                aria-current={isActive ? "page" : undefined}
                className={linkClassName}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden xl:block">
          <motion.a
            href={toSectionHref("#contact")}
            onClick={(e) => handleSectionNavClick(e, "#contact")}
            whileHover={{ scale: 1.02 }}
            transition={transitionFast}
            className={ctaLinkClasses}
          >
            Discuss Your Project
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </motion.a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={transitionSmooth}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl xl:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => {
                const isRoute = !link.href.startsWith("#");
                const isActive = isRoute ? location.pathname === link.href : activeId === link.href.slice(1);
                const linkClassName = cn(
                  "rounded-lg px-3 py-3 text-sm transition-colors hover:bg-muted hover:text-foreground",
                  isActive ? "bg-muted text-foreground" : "text-muted-foreground",
                );

                if (isRoute) {
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={linkClassName}
                    >
                      {link.label}
                    </Link>
                  );
                }

                return (
                  <a
                    key={link.href}
                    href={toSectionHref(link.href)}
                    onClick={(e) => handleSectionNavClick(e, link.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={linkClassName}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href={toSectionHref("#contact")}
                onClick={(e) => handleSectionNavClick(e, "#contact")}
                className={cn(ctaLinkClasses, "mt-2 w-full justify-center")}
              >
                Discuss Your Project
                <ArrowRight className="h-4 w-4" />
              </a>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
