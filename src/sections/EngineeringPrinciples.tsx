import { GlassPanel, Reveal, Section, SectionHeading } from "@/components/ui";

const PRINCIPLES = [
  {
    title: "Business Before Technology",
    description: "We solve business problems first, then select the technology that best fits the solution.",
  },
  {
    title: "Security by Design",
    description:
      "Authentication, authorization, auditability, and data protection are considered from the beginning—not added later.",
  },
  {
    title: "Built to Scale",
    description: "Our systems are designed to grow with increasing users, data, and operational complexity.",
  },
  {
    title: "Maintainable by Default",
    description:
      "Clean architecture, modular code, and documentation ensure software remains easy to evolve over time.",
  },
];

/** Grid of the engineering principles that guide how the studio builds software. */
export function EngineeringPrinciples() {
  return (
    <Section id="engineering-principles" className="scroll-mt-24">
      <SectionHeading
        eyebrow="OUR ENGINEERING PRINCIPLES"
        heading="How We Build Software That Lasts"
        description="Every decision we make is guided by engineering discipline, maintainability, security, and measurable business outcomes."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PRINCIPLES.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <GlassPanel glow={false} className="h-full">
              <p className="font-display text-lg font-semibold">{item.title}</p>
              <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
            </GlassPanel>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
