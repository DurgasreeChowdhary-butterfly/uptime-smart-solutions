import { Link } from "react-router-dom";

import { Button, Container, Reveal, Section, SectionBackground } from "@/components/ui";
import { ROUTES } from "@/constants";
import { buttonBaseClasses, buttonSizeClasses, buttonVariantClasses } from "@/lib/styles";
import { cn } from "@/lib/utils";

// A real route change (not a same-page anchor) — plain `Link`, not `Button href`. See
// `AboutHero.tsx` / `FeaturedProject.tsx` for why: Framer Motion's `whileTap` gesture
// recognition can drop a real (slightly-moved) click as a "drag", silently no-op'ing
// navigation. Styled to match `Button`'s primary variant exactly.
//
// Previously this was `<Button href="#contact">`, but this section is itself
// `id="contact"` — the button linked to its own containing section, which is a no-op on
// the Home page (there's no contact form here to scroll to; it lives on `/contact`).
const startConversationLinkClasses = cn(buttonBaseClasses, buttonVariantClasses.primary, buttonSizeClasses.lg);

/** Full-width closing CTA. */
export function FinalCTA() {
  return (
    <Section id="contact" spacing="xl" container={false} className="relative isolate scroll-mt-24 overflow-hidden">
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
            Ready to Build Something Exceptional?
          </h2>
        </Reveal>

        <Reveal
          variant="fadeInUp"
          delay={0.08}
          className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          Whether you&apos;re creating an AI-powered product, modernizing business operations, or launching a custom
          software platform, we&apos;re ready to help turn your vision into production-ready software.
        </Reveal>

        <Reveal
          variant="fadeInUp"
          delay={0.1}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link to={ROUTES.contact} className={startConversationLinkClasses}>
            Start a Conversation
          </Link>
          <Button href="#work" size="lg" variant="secondary">
            Explore Our Work
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
