import { Container, Reveal, Section, SectionBackground } from "@/components/ui";
import type { ProductVisionProps } from "@/types";
import { cn } from "@/lib/utils";

/** Large centered narrative statement of product vision — same treatment as the homepage editorial beats. */
export function ProductVision({
  eyebrow = "PRODUCT VISION",
  statement,
  className,
}: ProductVisionProps) {
  return (
    <Section id="vision" container={false} spacing="xl" className={cn("relative isolate scroll-mt-24 overflow-hidden", className)}>
      <SectionBackground grid={false} glowPosition="center" />

      <Container size="narrow" className="text-center">
        <Reveal variant="fadeIn" duration={0.9}>
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            {eyebrow}
          </span>
        </Reveal>

        <Reveal variant="fadeIn" duration={0.9} delay={0.05} className="mt-4">
          <p className="font-display text-2xl leading-snug font-medium tracking-tight text-balance sm:text-3xl lg:text-4xl">
            {statement}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
