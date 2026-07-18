import { Blocks, Boxes, CircuitBoard, Hexagon, Layers, Shapes } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Card, Reveal, Section, SectionHeading, TechChip } from "@/components/ui";

interface Industry {
  title: string;
  description: string;
  solutions: string[];
  icon: LucideIcon;
}

const INDUSTRIES: Industry[] = [
  {
    title: "FinTech & TaxTech",
    description:
      "Secure financial platforms, tax automation, compliance workflows, and intelligent document processing.",
    solutions: ["TaxEase AI"],
    icon: Layers,
  },
  {
    title: "Retail & Digital Commerce",
    description:
      "Modern commerce platforms, online payments, affiliate systems, inventory management, and AI-assisted shopping experiences.",
    solutions: ["Prakruti Organics", "Retail Management Platform"],
    icon: Boxes,
  },
  {
    title: "Property Management",
    description:
      "Resident lifecycle management, automated billing, settlements, occupancy tracking, and operational automation.",
    solutions: ["Iraivi Nest"],
    icon: Hexagon,
  },
  {
    title: "Enterprise & Banking",
    description:
      "Enterprise workflow automation, computer vision, internal process optimization, and intelligent operational tools.",
    solutions: ["Enterprise Workflow Automation"],
    icon: Blocks,
  },
  {
    title: "Professional Services",
    description:
      "Digital platforms that streamline client engagement, appointment management, lead generation, and business operations.",
    solutions: ["CA Firm Digital Operations Suite"],
    icon: Shapes,
  },
  {
    title: "Artificial Intelligence",
    description:
      "LLM applications, Voice AI, Retrieval-Augmented Generation, document intelligence, and custom AI-powered software.",
    solutions: ["VoiceIQ", "DocuMind AI", "Opportunity Intelligence Platform"],
    icon: CircuitBoard,
  },
];

/** Grid of the industries Uptime Smart Solutions builds for. */
export function Industries() {
  return (
    <Section id="industries" className="scroll-mt-24">
      <SectionHeading
        eyebrow="INDUSTRIES"
        heading="Industries We Engineer For"
        description="From AI-powered startups to enterprise organizations, we build secure, scalable software solutions tailored to the unique operational needs of every industry."
      />

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {INDUSTRIES.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05} className="min-w-0">
            <Card className="flex h-full min-w-0 flex-col items-center gap-3 py-8 text-center">
              <item.icon className="h-7 w-7 text-primary" aria-hidden />
              <p className="text-sm font-medium">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.description}</p>
              <div className="flex w-full flex-wrap items-center justify-center gap-1.5">
                {item.solutions.map((label) => (
                  <TechChip key={label} label={label} />
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
