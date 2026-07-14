import { Button, Container, Reveal, Section, SectionBackground } from "@/components/ui";

/** Layout-only full-width closing CTA — placeholder heading/buttons, no invented copy. */
export function FinalCTA() {
  return (
    <Section id="cta" spacing="xl" container={false} className="relative isolate scroll-mt-24 overflow-hidden">
      <SectionBackground grid={false} glowPosition="center" />

      <Container size="narrow" className="flex flex-col items-center text-center">
        <Reveal variant="fadeInUp">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            [CTA Heading]
          </h2>
        </Reveal>

        <Reveal
          variant="fadeInUp"
          delay={0.1}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="#contact" size="lg">
            [Primary Action]
          </Button>
          <Button href="#contact" size="lg" variant="secondary">
            [Secondary Action]
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
