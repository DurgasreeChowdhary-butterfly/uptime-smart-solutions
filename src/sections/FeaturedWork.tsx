import { ArrowRight, Image as ImageIcon } from "lucide-react";

import { Card, Reveal, Section, SectionHeading } from "@/components/ui";

const CASE_STUDIES = Array.from({ length: 6 }, (_, i) => ({
  title: `Case Study 0${i + 1}`,
}));

/** Layout-only placeholder grid for featured case studies — no real project content yet. */
export function FeaturedWork() {
  return (
    <Section id="work" className="scroll-mt-24">
      <SectionHeading eyebrow="[Eyebrow Label]" heading="[Section Heading]" />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CASE_STUDIES.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <Card className="flex h-full flex-col overflow-hidden p-0">
              <div className="flex aspect-video items-center justify-center border-b border-border bg-muted/40">
                <ImageIcon className="h-8 w-8 text-muted-foreground" aria-hidden />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-display text-lg font-semibold">{item.title}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-primary">
                  View Case Study
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
