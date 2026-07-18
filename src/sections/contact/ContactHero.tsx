import { Container, Reveal, SectionBackground } from "@/components/ui";

/** Opener for the `/contact` page — same lighter-weight treatment as `WorkHero`. */
export function ContactHero() {
  return (
    <section id="contact-hero" className="relative isolate scroll-mt-24 overflow-hidden">
      <SectionBackground glowPosition="top" />

      <Container className="relative flex min-h-[45svh] flex-col items-start justify-center gap-4 pt-32 pb-16 lg:pt-40">
        <Reveal variant="fadeInUp">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            CONTACT
          </span>
        </Reveal>

        <Reveal variant="fadeInUp" delay={0.05}>
          <h1 className="max-w-3xl font-display text-[2.5rem] leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Let&apos;s Talk About Your Project
          </h1>
        </Reveal>

        <Reveal variant="fadeInUp" delay={0.1} className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          Tell us about the problem you&apos;re trying to solve, and we&apos;ll follow up to talk through how we&apos;d
          approach it.
        </Reveal>
      </Container>
    </section>
  );
}
