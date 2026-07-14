import { Boxes, Cpu, Shield, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Card, Container, Reveal, Section, SectionBackground, SectionHeading } from "@/components/ui";

interface CapabilityPlaceholder {
  title: string;
  icon: LucideIcon;
}

const CAPABILITIES: CapabilityPlaceholder[] = [
  { title: "Capability 01", icon: Cpu },
  { title: "Capability 02", icon: Workflow },
  { title: "Capability 03", icon: Shield },
  { title: "Capability 04", icon: Boxes },
];

/** Layout-only placeholder grid for the site's engineering capabilities. */
export function Capabilities() {
  return (
    <Section id="capabilities" container={false} className="relative isolate scroll-mt-24 overflow-hidden">
      <SectionBackground glow={false} noise={false} />

      <Container>
        <SectionHeading eyebrow="[Eyebrow Label]" heading="[Section Heading]" />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <Card className="h-full">
                <item.icon className="h-6 w-6 text-primary" aria-hidden />
                <p className="mt-4 font-display text-lg font-semibold">{item.title}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
