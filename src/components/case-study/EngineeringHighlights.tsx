import { GlassPanel, Reveal, Section, SectionHeading } from "@/components/ui";
import type { EngineeringHighlightsProps } from "@/types";
import { cn } from "@/lib/utils";

/** Notable technical decisions/achievements — same tile pattern as the homepage `EngineeringPrinciples` grid. */
export function EngineeringHighlights({
  eyebrow = "ENGINEERING",
  heading = "Engineering Highlights",
  description,
  highlights,
  className,
}: EngineeringHighlightsProps) {
  return (
    <Section id="engineering" className={cn("scroll-mt-24", className)}>
      <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <GlassPanel glow={false} className="h-full">
              {item.icon && <item.icon className="h-6 w-6 text-accent" aria-hidden />}
              <p className="mt-4 font-display text-lg font-semibold">{item.title}</p>
              <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
            </GlassPanel>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
