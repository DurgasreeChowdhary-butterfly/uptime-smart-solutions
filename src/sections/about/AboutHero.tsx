import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Button, Container, Reveal, SectionBackground } from "@/components/ui";
import { ROUTES } from "@/constants";
import { buttonBaseClasses, buttonSizeClasses, buttonVariantClasses } from "@/lib/styles";
import { cn } from "@/lib/utils";

// A real route change (not a same-page anchor), so this is a plain `Link` rather than
// the animated `Button` — see `FeaturedProject.tsx` for why: Framer Motion's `whileTap`
// gesture recognition can drop a real (slightly-moved) click as a "drag", silently
// no-op'ing navigation. Styled to match `Button`'s secondary variant exactly.
const viewWorkLinkClasses = cn(
  buttonBaseClasses,
  buttonVariantClasses.secondary,
  buttonSizeClasses.lg,
  "transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]",
);

/** Opener for the `/about` page — same lighter-weight treatment as `WorkHero`. */
export function AboutHero() {
  return (
    <section id="about-hero" className="relative isolate scroll-mt-24 overflow-hidden">
      <SectionBackground glowPosition="top" />

      <Container className="relative flex min-h-[60svh] flex-col items-start justify-center gap-4 pt-32 pb-16 lg:pt-40">
        <Reveal variant="fadeInUp">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            ABOUT US
          </span>
        </Reveal>

        <Reveal variant="fadeInUp" delay={0.05}>
          <h1 className="max-w-3xl font-display text-[2.5rem] leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Engineering Intelligent Software That Solves Real Business Problems
          </h1>
        </Reveal>

        <Reveal variant="fadeInUp" delay={0.1} className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          Uptime Smart Solutions is an engineering studio that designs and builds AI-powered software, automation,
          and enterprise applications for businesses that need technology to solve real operational problems.
        </Reveal>

        <Reveal variant="fadeInUp" delay={0.15} className="mt-4 flex flex-wrap items-center gap-4">
          <Button href="/#contact" size="lg" className="group">
            Start a Conversation
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>
          <Link to={ROUTES.workIndex} className={viewWorkLinkClasses}>
            View Our Work
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
