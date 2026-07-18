import { Container, Reveal, Section, SectionBackground, SectionHeading, TechChip } from "@/components/ui";
import type { TechnologySectionProps } from "@/types";
import { cn } from "@/lib/utils";

/** Grouped technology-stack chips — same pattern as the homepage `Technology` section. */
export function TechnologySection({
  eyebrow = "TECHNOLOGY",
  heading = "Technology Stack",
  description,
  groups,
  className,
}: TechnologySectionProps) {
  return (
    <Section id="technology" container={false} className={cn("relative isolate scroll-mt-24 overflow-hidden", className)}>
      <SectionBackground glow={false} noise={false} />

      <Container>
        <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />

        <div className="mt-12 flex flex-col gap-8">
          {groups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.08}>
              <div>
                <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                  {group.label}
                </p>
                {group.description && (
                  <p className="mt-2 text-sm text-muted-foreground">{group.description}</p>
                )}
                <div className="mt-4 flex flex-wrap gap-3">
                  {group.items.map((label) => (
                    <TechChip key={label} label={label} />
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
