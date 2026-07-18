import { Card, Reveal, Section, SectionHeading } from "@/components/ui";
import type { FeatureGridProps } from "@/types";
import { cn } from "@/lib/utils";

/** Grid of product/platform features — same tile pattern as the homepage `Capabilities` grid. */
export function FeatureGrid({
  eyebrow = "FEATURES",
  heading = "Key Features",
  description,
  features,
  className,
}: FeatureGridProps) {
  return (
    <Section id="features" className={cn("scroll-mt-24", className)}>
      <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => (
          <Reveal key={feature.title} delay={i * 0.08}>
            <Card className="h-full">
              {feature.icon && <feature.icon className="h-6 w-6 text-primary" aria-hidden />}
              <p className="mt-4 font-display text-lg font-semibold">{feature.title}</p>
              <p className="mt-3 text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
