import { Boxes, Cpu, Shield, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Badge, Card, Container, Reveal, Section, SectionBackground, SectionHeading } from "@/components/ui";

interface Capability {
  title: string;
  description: string;
  work: string[];
  icon: LucideIcon;
}

const CAPABILITIES: Capability[] = [
  {
    title: "AI Engineering",
    description:
      "Build intelligent software powered by Large Language Models, Voice AI, Retrieval-Augmented Generation, Computer Vision, and AI workflows designed for real business operations.",
    work: ["TaxEase AI", "VoiceIQ", "DocuMind AI"],
    icon: Cpu,
  },
  {
    title: "Intelligent Business Automation",
    description:
      "Transform manual workflows into automated business processes through AI-driven automation, enterprise integrations, and operational software.",
    work: ["Iraivi Nest", "Enterprise Workflow Automation", "CA Operations Suite"],
    icon: Workflow,
  },
  {
    title: "Digital Commerce & Customer Platforms",
    description:
      "Develop scalable customer-facing platforms combining e-commerce, payments, AI assistance, analytics, and business management.",
    work: ["Prakruthi Organics", "Retail Management Platform"],
    icon: Shield,
  },
  {
    title: "Custom Enterprise Software",
    description:
      "Engineer secure, scalable software platforms tailored to unique business operations, CRM workflows, reporting, and digital transformation initiatives.",
    work: ["Opportunity Intelligence CRM", "Custom Business Platforms"],
    icon: Boxes,
  },
];

/** Grid of the site's engineering capabilities. */
export function Capabilities() {
  return (
    <Section id="capabilities" container={false} className="relative isolate scroll-mt-24 overflow-hidden">
      <SectionBackground glow={false} noise={false} />

      <Container>
        <SectionHeading
          eyebrow="[Eyebrow Label]"
          heading="Engineering Capabilities"
          description="We engineer intelligent software, AI-powered automation, and scalable digital platforms that solve complex business problems across industries."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <Card className="h-full">
                <item.icon className="h-6 w-6 text-primary" aria-hidden />
                <p className="mt-4 font-display text-lg font-semibold">{item.title}</p>
                <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.work.map((label) => (
                    <Badge key={label}>{label}</Badge>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
