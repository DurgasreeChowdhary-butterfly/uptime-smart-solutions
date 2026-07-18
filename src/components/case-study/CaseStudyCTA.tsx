import { Button, Container, Reveal, Section, SectionBackground } from "@/components/ui";
import type { CaseStudyCTAProps } from "@/types";
import { cn } from "@/lib/utils";

/** Closing call-to-action — same full-width treatment as the homepage `FinalCTA`. */
export function CaseStudyCTA({
  eyebrow = "LET'S BUILD",
  heading,
  description,
  primaryCta,
  secondaryCta,
  className,
}: CaseStudyCTAProps) {
  return (
    <Section
      id="cta"
      spacing="xl"
      container={false}
      className={cn("relative isolate scroll-mt-24 overflow-hidden", className)}
    >
      <SectionBackground grid={false} glowPosition="center" />

      <Container size="narrow" className="flex flex-col items-center text-center">
        <Reveal variant="fadeInUp">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            {eyebrow}
          </span>
        </Reveal>

        <Reveal variant="fadeInUp" delay={0.05} className="mt-4">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
        </Reveal>

        {description && (
          <Reveal
            variant="fadeInUp"
            delay={0.08}
            className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg"
          >
            {description}
          </Reveal>
        )}

        <Reveal
          variant="fadeInUp"
          delay={0.1}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href={primaryCta.href} size="lg">
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button href={secondaryCta.href} size="lg" variant="secondary">
              {secondaryCta.label}
            </Button>
          )}
        </Reveal>
      </Container>
    </Section>
  );
}
