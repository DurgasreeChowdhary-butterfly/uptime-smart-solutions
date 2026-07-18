import { Link } from "react-router-dom";

import { Button, Container, Reveal, Section, SectionBackground } from "@/components/ui";
import { ROUTES } from "@/constants";
import { buttonBaseClasses, buttonSizeClasses, buttonVariantClasses } from "@/lib/styles";
import { cn } from "@/lib/utils";

// Real route change, not a same-page anchor — plain `Link`, not `Button href`. See
// `AboutHero.tsx` / `FeaturedProject.tsx` for why.
const viewWorkLinkClasses = cn(
  buttonBaseClasses,
  buttonVariantClasses.secondary,
  buttonSizeClasses.lg,
  "transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]",
);

/** Closing call-to-action for `/about` — same full-width treatment as the homepage `FinalCTA`. */
export function AboutCTA() {
  return (
    <Section id="about-cta" spacing="xl" container={false} className="relative isolate scroll-mt-24 overflow-hidden">
      <SectionBackground grid={false} glowPosition="center" />

      <Container size="narrow" className="flex flex-col items-center text-center">
        <Reveal variant="fadeInUp">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            LET&apos;S BUILD
          </span>
        </Reveal>

        <Reveal variant="fadeInUp" delay={0.05} className="mt-4">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Ready to Build Software That Solves Your Problem?
          </h2>
        </Reveal>

        <Reveal
          variant="fadeInUp"
          delay={0.08}
          className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          Let&apos;s talk about engineering AI-powered software built around your business, not the other way
          around.
        </Reveal>

        <Reveal
          variant="fadeInUp"
          delay={0.1}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="/#contact" size="lg">
            Start a Conversation
          </Button>
          <Link to={ROUTES.workIndex} className={viewWorkLinkClasses}>
            View Our Work
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
