import { Card, Reveal, Section, SectionHeading } from "@/components/ui";
import type { FeatureGridProps } from "@/types";
import { cn } from "@/lib/utils";

/** Grid of product/platform features — same tile pattern as the homepage `Capabilities` grid. */
export function FeatureGrid({
  eyebrow = "FEATURES",
  heading = "Key Features",
  description,
  image,
  features,
  className,
}: FeatureGridProps) {
  return (
    <Section id="features" className={cn("scroll-mt-24", className)}>
      <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />

      {image ? (
        <Reveal variant="fadeIn" className="relative mt-12 aspect-video w-full">
          <img
            src={image.src}
            alt={image.alt}
            width={1672}
            height={941}
            loading="lazy"
            decoding="async"
            className="h-full w-full rounded-2xl border border-border object-cover"
          />
        </Reveal>
      ) : null}

      <div
        className={cn(
          "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
          image ? "mt-8" : "mt-12",
        )}
      >
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
