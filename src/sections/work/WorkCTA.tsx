import { Button, Container, Reveal, Section, SectionBackground } from "@/components/ui";

/** Closing call-to-action for the `/work` index — same full-width treatment as the homepage `FinalCTA`. */
export function WorkCTA() {
  return (
    <Section id="work-cta" spacing="xl" container={false} className="relative isolate scroll-mt-24 overflow-hidden">
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
            Have a Project in Mind?
          </h2>
        </Reveal>

        <Reveal
          variant="fadeInUp"
          delay={0.08}
          className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          Let&apos;s talk about engineering your next AI-driven product or platform.
        </Reveal>

        <Reveal
          variant="fadeInUp"
          delay={0.1}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="/#contact" size="lg">
            Start a Conversation
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
