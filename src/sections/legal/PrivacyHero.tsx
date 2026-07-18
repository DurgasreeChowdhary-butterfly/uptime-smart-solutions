import { Container, Reveal, SectionBackground } from "@/components/ui";

const LAST_UPDATED = "July 18, 2026";

/** Opener for the `/privacy` page — same lighter-weight treatment as `ContactHero`. */
export function PrivacyHero() {
  return (
    <section id="privacy-hero" className="relative isolate scroll-mt-24 overflow-hidden">
      <SectionBackground glowPosition="top" />

      <Container className="relative flex min-h-[35svh] flex-col items-start justify-center gap-4 pt-32 pb-16 lg:pt-40">
        <Reveal variant="fadeInUp">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            LEGAL
          </span>
        </Reveal>

        <Reveal variant="fadeInUp" delay={0.05}>
          <h1 className="font-display text-[2.5rem] leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>
        </Reveal>

        <Reveal variant="fadeInUp" delay={0.1} className="text-sm text-muted-foreground">
          Last updated: {LAST_UPDATED}
        </Reveal>
      </Container>
    </section>
  );
}
