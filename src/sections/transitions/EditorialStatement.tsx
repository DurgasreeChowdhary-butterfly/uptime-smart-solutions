import { Container, Reveal, Section, SectionBackground } from "@/components/ui";

export interface EditorialStatementProps {
  id?: string;
  /** The narrative line displayed for this beat. */
  statement: string;
}

/**
 * Minimal full-bleed narrative beat between sections — large editorial
 * typography and a soft centered glow. Meant to make the homepage read as
 * one continuous journey rather than stacked blocks.
 */
export function EditorialStatement({ id, statement }: EditorialStatementProps) {
  return (
    <Section id={id} container={false} spacing="xl" animate={false} className="relative isolate scroll-mt-24 overflow-hidden">
      <SectionBackground grid={false} noise={false} glowPosition="center" />

      <Container size="narrow" className="text-center">
        <Reveal variant="fadeIn" duration={0.9}>
          <p className="font-display text-2xl leading-snug font-medium tracking-tight text-balance sm:text-3xl lg:text-4xl">
            {statement}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
