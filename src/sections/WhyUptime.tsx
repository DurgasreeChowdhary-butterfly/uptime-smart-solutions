import { Award, Gauge, ShieldCheck, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Container, GlassPanel, Reveal, Section, SectionBackground, SectionHeading } from "@/components/ui";

interface WhyItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const WHY_ITEMS: WhyItem[] = [
  {
    title: "AI-Native Engineering",
    description:
      "Artificial intelligence is built into our engineering process where it creates measurable business value—from intelligent assistants and automation to Voice AI and Retrieval-Augmented Generation systems.",
    icon: Sparkles,
  },
  {
    title: "Production-Ready Architecture",
    description:
      "We design systems for reliability, maintainability, and growth with scalable APIs, secure authentication, modular architectures, and clean engineering practices.",
    icon: Gauge,
  },
  {
    title: "Business-Driven Solutions",
    description:
      "Every solution begins with understanding business operations before writing code, ensuring technology solves real operational challenges rather than adding complexity.",
    icon: ShieldCheck,
  },
  {
    title: "Long-Term Technology Partner",
    description:
      "We focus on building software that can evolve with your business through maintainable codebases, extensible architectures, and continuous improvement.",
    icon: Award,
  },
];

/** Grid of "why choose us" feature highlights. */
export function WhyUptime() {
  return (
    <Section id="why-uptime" container={false} className="relative isolate scroll-mt-24 overflow-hidden">
      <SectionBackground grid={false} noise={false} />

      <Container>
        <SectionHeading
          eyebrow="WHY UPTIME"
          heading="Engineering Software That Businesses Can Rely On"
          description="We combine AI expertise, production-grade engineering, and business-first thinking to build software that is scalable, secure, and designed for long-term success."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <GlassPanel glow={false} className="h-full">
                <item.icon className="h-6 w-6 text-accent" aria-hidden />
                <p className="mt-4 font-display text-lg font-semibold">{item.title}</p>
                <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
