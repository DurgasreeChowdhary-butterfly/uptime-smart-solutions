import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";

import { transitionSmooth } from "@/animations";
import { Button, Container } from "@/components/ui";
import { NAV_LINKS, ROUTES } from "@/constants";
import { useActiveSection, useScrolled } from "@/hooks";
import { cn } from "@/lib/utils";

// Intrinsic size of `/logo.png`, set as HTML attributes below so the browser can reserve
// the correct aspect ratio before the image loads — avoids layout shift even though the
// displayed height is overridden responsively by the `h-*` classes.
const LOGO_INTRINSIC_WIDTH = 960;
const LOGO_INTRINSIC_HEIGHT = 379;

const SECTION_IDS = NAV_LINKS.filter((link) => link.href.startsWith("#")).map((link) => link.href.replace("#", ""));

/** Premium floating navbar: transparent over the hero, blurs in once scrolled. */
export function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);
  const location = useLocation();
  const isHome = location.pathname === ROUTES.home;
  const toSectionHref = (hash: string) => (isHome ? hash : `${ROUTES.home}${hash}`);

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
            className="h-9 w-auto md:h-10 lg:h-11"
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
                aria-current={isActive ? "page" : undefined}
                className={linkClassName}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden xl:block">
          <Button href={toSectionHref("#contact")} size="sm" className="group">
            Let&rsquo;s Talk
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>
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
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={linkClassName}
                  >
                    {link.label}
                  </a>
                );
              })}
              <Button
                href={toSectionHref("#contact")}
                size="sm"
                className="mt-2 w-full justify-center"
                onClick={() => setOpen(false)}
              >
                Let&rsquo;s Talk
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
