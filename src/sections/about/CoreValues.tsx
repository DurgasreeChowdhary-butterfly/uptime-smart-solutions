import { BookOpen, Eye, Gauge, Heart, Lightbulb, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Card, Reveal, Section, SectionHeading } from "@/components/ui";

interface CoreValue {
  title: string;
  description: string;
  icon: LucideIcon;
}

const CORE_VALUES: CoreValue[] = [
  {
    title: "Engineering Excellence",
    description: "We hold our own engineering to a high standard — clean architecture, tested code, and decisions that hold up under real use.",
    icon: Gauge,
  },
  {
    title: "Customer First",
    description: "Every technical decision is weighed against the business problem it's meant to solve for the people we build it for.",
    icon: Heart,
  },
  {
    title: "Transparency",
    description: "Clear communication about progress, trade-offs, and decisions — no black boxes between us and the people we work with.",
    icon: Eye,
  },
  {
    title: "Continuous Learning",
    description: "The tools and techniques for building good software keep changing, and we keep learning so our engineering stays current.",
    icon: BookOpen,
  },
  {
    title: "Security by Design",
    description: "Authentication, authorization, and data protection are considered from the start of a project, not bolted on afterward.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation with Purpose",
    description: "We adopt new tools and AI capabilities when they solve a real problem — not simply because they're new.",
    icon: Lightbulb,
  },
];

/** Grid of the six values that guide how the studio operates. */
export function CoreValues() {
  return (
    <Section id="core-values" className="scroll-mt-24">
      <SectionHeading
        eyebrow="CORE VALUES"
        heading="What Guides How We Work"
        description="These aren't slogans — they're the standards every engagement is measured against."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CORE_VALUES.map((value, i) => (
          <Reveal key={value.title} delay={i * 0.06}>
            <Card className="h-full">
              <value.icon className="h-6 w-6 text-primary" aria-hidden />
              <p className="mt-4 font-display text-lg font-semibold">{value.title}</p>
              <p className="mt-3 text-sm text-muted-foreground">{value.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
