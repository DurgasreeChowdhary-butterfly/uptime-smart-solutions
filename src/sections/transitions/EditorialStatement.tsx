import { Container, Reveal, Section, SectionBackground } from "@/components/ui";

export interface EditorialStatementProps {
  id?: string;
}

/**
 * Minimal full-bleed narrative beat between sections — large editorial
 * typography and a soft centered glow, no content of its own. Meant to make
 * the homepage read as one continuous journey rather than stacked blocks.
 */
export function EditorialStatement({ id }: EditorialStatementProps) {
  return (
    <Section id={id} container={false} spacing="xl" animate={false} className="relative isolate scroll-mt-24 overflow-hidden">
      <SectionBackground grid={false} noise={false} glowPosition="center" />

      <Container size="narrow" className="text-center">
        <Reveal variant="fadeIn" duration={0.9}>
          <p className="font-display text-2xl leading-snug font-medium tracking-tight text-balance sm:text-3xl lg:text-4xl">
            [Editorial Statement]
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
