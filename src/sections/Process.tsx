import { Divider, Reveal, Section, SectionHeading } from "@/components/ui";

const STEPS = [
  { title: "Step 01" },
  { title: "Step 02" },
  { title: "Step 03" },
  { title: "Step 04" },
  { title: "Step 05" },
];

/** Layout-only five-step process timeline. Connectors animate in on desktop via `Divider`. */
export function Process() {
  return (
    <Section id="process" className="scroll-mt-24">
      <SectionHeading eyebrow="[Eyebrow Label]" heading="[Section Heading]" />

      <div className="mt-16 flex flex-col gap-10 lg:flex-row lg:gap-0">
        {STEPS.map((step, i) => (
          <div key={step.title} className="flex flex-1 flex-col items-center text-center">
            <div className="flex w-full items-center">
              <div className="hidden h-px flex-1 lg:block">{i > 0 && <Divider glow={false} />}</div>

              <Reveal delay={i * 0.1} variant="scaleIn" className="shrink-0 px-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-surface font-display text-base font-semibold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </Reveal>

              <div className="hidden h-px flex-1 lg:block">
                {i < STEPS.length - 1 && <Divider glow={false} />}
              </div>
            </div>

            <p className="mt-3 text-sm font-medium">{step.title}</p>

            {i < STEPS.length - 1 && <div aria-hidden className="mt-6 h-8 w-px bg-border lg:hidden" />}
          </div>
        ))}
      </div>
    </Section>
  );
}
