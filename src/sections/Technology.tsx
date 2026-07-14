import { Cloud, Code2, Cpu, Database, GitBranch, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Container, Reveal, Section, SectionBackground, SectionHeading, TechChip } from "@/components/ui";

interface TechItem {
  label: string;
  icon: LucideIcon;
}

interface TechGroup {
  label: string;
  items: TechItem[];
}

const TECH_GROUPS: TechGroup[] = [
  {
    label: "Category 01",
    items: [
      { label: "Technology 01", icon: Code2 },
      { label: "Technology 02", icon: Cpu },
      { label: "Technology 03", icon: Layers },
    ],
  },
  {
    label: "Category 02",
    items: [
      { label: "Technology 04", icon: Database },
      { label: "Technology 05", icon: Cloud },
    ],
  },
  {
    label: "Category 03",
    items: [
      { label: "Technology 06", icon: GitBranch },
      { label: "Technology 07", icon: Cpu },
      { label: "Technology 08", icon: Code2 },
    ],
  },
];

/** Layout-only grouped technology chip structure — categories and chips are placeholders. */
export function Technology() {
  return (
    <Section id="technology" container={false} className="relative isolate scroll-mt-24 overflow-hidden">
      <SectionBackground glow={false} noise={false} />

      <Container>
        <SectionHeading eyebrow="[Eyebrow Label]" heading="[Section Heading]" />

        <div className="mt-12 flex flex-col gap-8">
          {TECH_GROUPS.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.08}>
              <div>
                <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                  {group.label}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <TechChip key={item.label} label={item.label} icon={item.icon} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
