import { Divider, Reveal, Section, SectionHeading } from "@/components/ui";

const STEPS = [
  {
    title: "Discover",
    description:
      "Understand business goals, operational workflows, technical constraints, and success metrics before defining the solution.",
  },
  {
    title: "Architect",
    description:
      "Design scalable system architecture, select the right technologies, define APIs, data models, and integration strategies.",
  },
  {
    title: "Engineer",
    description:
      "Develop production-grade software using modern engineering practices, modular architecture, testing, and secure coding standards.",
  },
  {
    title: "Validate",
    description:
      "Verify functionality through testing, performance optimization, security reviews, and user feedback before deployment.",
  },
  {
    title: "Scale",
    description: "Deploy, monitor, and continuously improve the platform as business requirements evolve.",
  },
];

/** Five-step process timeline. Connectors animate in on desktop via `Divider`. */
export function Process() {
  return (
    <Section id="process" className="scroll-mt-24">
      <SectionHeading
        eyebrow="PROCESS"
        heading="From Business Challenge to Production Software"
        description="Every successful software product starts with understanding the business problem. Our engineering process focuses on building scalable solutions through collaboration, architecture, and iterative delivery."
      />

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
            <p className="mt-2 max-w-[16rem] text-sm text-muted-foreground">{step.description}</p>

            {i < STEPS.length - 1 && <div aria-hidden className="mt-6 h-8 w-px bg-border lg:hidden" />}
          </div>
        ))}
      </div>
    </Section>
  );
}
