import { AnimatedStat, Card, Reveal, Section, SectionHeading } from "@/components/ui";
import type { BusinessImpactProps } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Outcomes of the work. Supports verified count-up metrics via `AnimatedStat`
 * when real figures exist, and/or qualitative outcome tiles when they don't —
 * so impact never has to be padded out with an invented number.
 */
export function BusinessImpact({
  eyebrow = "BUSINESS IMPACT",
  heading = "The Impact",
  description,
  metrics,
  outcomes,
  className,
}: BusinessImpactProps) {
  return (
    <Section id="impact" className={cn("scroll-mt-24", className)}>
      <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />

      {metrics && metrics.length > 0 && (
        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.08}>
              <AnimatedStat {...metric} />
            </Reveal>
          ))}
        </div>
      )}

      {outcomes && outcomes.length > 0 && (
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome, i) => (
            <Reveal key={outcome.title} delay={i * 0.08}>
              <Card className="h-full">
                <p className="font-display text-lg font-semibold">{outcome.title}</p>
                {outcome.description && (
                  <p className="mt-3 text-sm text-muted-foreground">{outcome.description}</p>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
