import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { transitionSmooth } from "@/animations";
import { Button, Container } from "@/components/ui";
import { NAV_LINKS, ROUTES, SITE } from "@/constants";
import { useScrolled } from "@/hooks";

/** Premium floating navbar: transparent over the hero, blurs in once scrolled. */
export function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);

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
        <Link
          to={ROUTES.home}
          className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight"
        >
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
          {SITE.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#contact" size="sm" className="group">
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground md:hidden"
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
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <Button
                href="#contact"
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
