import { Container, Reveal, SectionBackground } from "@/components/ui";

/** Opener for the `/work` portfolio index — same treatment as the homepage `Hero`. */
export function WorkHero() {
  return (
    <section id="work-hero" className="relative isolate scroll-mt-24 overflow-hidden">
      <SectionBackground glowPosition="top" />

      <Container className="relative flex min-h-[50svh] flex-col items-start justify-center gap-4 pt-32 pb-16 lg:pt-40">
        <Reveal variant="fadeInUp">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            OUR WORK
          </span>
        </Reveal>

        <Reveal variant="fadeInUp" delay={0.05}>
          <h1 className="font-display text-[2.5rem] leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Engineering Work
          </h1>
        </Reveal>

        <Reveal variant="fadeInUp" delay={0.1} className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          A portfolio of production-grade software platforms engineered across AI, automation, commerce, and
          enterprise operations. Case studies are published as each project clears review.
        </Reveal>
      </Container>
    </section>
  );
}
