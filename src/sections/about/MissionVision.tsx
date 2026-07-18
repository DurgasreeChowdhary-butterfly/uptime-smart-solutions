import { Compass, Target } from "lucide-react";

import { Card, Reveal, Section, SectionHeading } from "@/components/ui";

const ITEMS = [
  {
    title: "Mission",
    icon: Target,
    description:
      "To engineer AI-powered software and enterprise applications that solve real business problems — built with the quality and maintainability to serve as a long-term foundation, not a short-term fix.",
  },
  {
    title: "Vision",
    icon: Compass,
    description:
      "To be a long-term engineering partner for businesses that need software they can trust — building intelligent systems that stay reliable, secure, and easy to evolve as those businesses grow.",
  },
];

/** Two-card mission and vision statement. */
export function MissionVision() {
  return (
    <Section id="mission-vision" className="scroll-mt-24">
      <SectionHeading eyebrow="MISSION & VISION" heading="What We're Building Toward" />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <Card hover={false} className="h-full">
              <item.icon className="h-6 w-6 text-primary" aria-hidden />
              <p className="mt-4 font-display text-xl font-semibold">{item.title}</p>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">{item.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
