import { Image as ImageIcon } from "lucide-react";

import { Card, Reveal, Section, SectionHeading } from "@/components/ui";
import type { ArchitectureSectionProps } from "@/types";
import { cn } from "@/lib/utils";

/** System architecture — an optional diagram plus a grid of layer/component summaries. */
export function ArchitectureSection({
  eyebrow = "ARCHITECTURE",
  heading = "System Architecture",
  description,
  diagram,
  layers,
  className,
}: ArchitectureSectionProps) {
  return (
    <Section id="architecture" className={cn("scroll-mt-24", className)}>
      <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />

      <Reveal variant="fadeIn" className="relative mt-12 aspect-[16/7] w-full">
        {diagram ? (
          <img
            src={diagram.src}
            alt={diagram.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full rounded-2xl border border-border object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-2xl border border-border bg-muted/40">
            <ImageIcon className="h-10 w-10 text-muted-foreground" aria-hidden />
          </div>
        )}
      </Reveal>

      {layers && layers.length > 0 && (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {layers.map((layer, i) => (
            <Reveal key={layer.title} delay={i * 0.08}>
              <Card className="h-full">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-surface font-display text-sm font-semibold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {layer.icon && <layer.icon className="h-5 w-5 text-primary" aria-hidden />}
                </div>
                <p className="mt-4 font-display text-lg font-semibold">{layer.title}</p>
                <p className="mt-3 text-sm text-muted-foreground">{layer.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
