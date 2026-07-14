import { Award, Gauge, ShieldCheck, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Container, GlassPanel, Reveal, Section, SectionBackground, SectionHeading } from "@/components/ui";

interface WhyPlaceholder {
  title: string;
  icon: LucideIcon;
}

const WHY_ITEMS: WhyPlaceholder[] = [
  { title: "Feature 01", icon: Sparkles },
  { title: "Feature 02", icon: Gauge },
  { title: "Feature 03", icon: ShieldCheck },
  { title: "Feature 04", icon: Award },
];

/** Layout-only placeholder grid for "why choose us" style feature highlights. */
export function WhyUptime() {
  return (
    <Section id="why-uptime" container={false} className="relative isolate scroll-mt-24 overflow-hidden">
      <SectionBackground grid={false} noise={false} />

      <Container>
        <SectionHeading eyebrow="[Eyebrow Label]" heading="[Section Heading]" />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <GlassPanel glow={false} className="h-full">
                <item.icon className="h-6 w-6 text-accent" aria-hidden />
                <p className="mt-4 font-display text-lg font-semibold">{item.title}</p>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
