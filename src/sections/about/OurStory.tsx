import { GlassPanel, Reveal, Section, SectionHeading } from "@/components/ui";

/** Company narrative: what Uptime builds, and how it approaches the work. */
export function OurStory() {
  return (
    <Section id="our-story" className="scroll-mt-24">
      <SectionHeading
        eyebrow="OUR STORY"
        heading="Software Built Around the Business Problem, Not the Trend"
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
        <Reveal className="flex flex-col gap-5 text-base text-muted-foreground sm:text-lg">
          <p>
            Uptime Smart Solutions builds AI-powered software and enterprise applications for businesses that need
            technology to do real work — not just demonstrate a proof of concept.
          </p>
          <p>
            Every engagement starts with the operational problem a business is actually facing. Only once that&apos;s
            understood do we choose the architecture, the AI capabilities, and the technology stack that fit — not
            the other way around.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <GlassPanel className="h-full">
            <p className="font-display text-lg font-semibold">Built to Last, Not Just to Ship</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Quality and maintainability aren&apos;t treated as afterthoughts. We build systems meant to be
              extended and trusted long after the first release, because we approach client relationships as
              long-term partnerships rather than one-off projects.
            </p>
          </GlassPanel>
        </Reveal>
      </div>
    </Section>
  );
}
