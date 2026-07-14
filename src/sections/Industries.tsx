import { Blocks, Boxes, CircuitBoard, Hexagon, Layers, Shapes } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Card, Reveal, Section, SectionHeading } from "@/components/ui";

interface IndustryPlaceholder {
  title: string;
  icon: LucideIcon;
}

const INDUSTRIES: IndustryPlaceholder[] = [
  { title: "Industry 01", icon: Layers },
  { title: "Industry 02", icon: Boxes },
  { title: "Industry 03", icon: Hexagon },
  { title: "Industry 04", icon: Blocks },
  { title: "Industry 05", icon: Shapes },
  { title: "Industry 06", icon: CircuitBoard },
];

/** Layout-only placeholder grid for the industries the site will eventually list. */
export function Industries() {
  return (
    <Section id="industries" className="scroll-mt-24">
      <SectionHeading eyebrow="[Eyebrow Label]" heading="[Section Heading]" />

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {INDUSTRIES.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <Card className="flex flex-col items-center gap-3 py-8 text-center">
              <item.icon className="h-7 w-7 text-primary" aria-hidden />
              <p className="text-sm font-medium">{item.title}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
