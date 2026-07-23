import { Image as ImageIcon } from "lucide-react";

import { Container, Reveal, Section, SectionBackground, SectionHeading } from "@/components/ui";
import type { SolutionSectionProps } from "@/types";
import { cn } from "@/lib/utils";

/** The approach taken to solve the challenge — narrative plus an optional numbered approach list. */
export function SolutionSection({
  eyebrow = "THE SOLUTION",
  heading = "The Solution",
  description,
  approach,
  image,
  className,
}: SolutionSectionProps) {
  return (
    <Section id="solution" container={false} className={cn("relative isolate scroll-mt-24 overflow-hidden", className)}>
      <SectionBackground glow={false} noise={false} />

      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="scaleIn" className="relative mx-auto aspect-[4/3] w-full lg:order-2">
          {image ? (
            <img
              src={image.src}
              alt={image.alt}
              width={image.width ?? 1672}
              height={image.height ?? 941}
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

        <div className="lg:order-1">
          <SectionHeading eyebrow={eyebrow} heading={heading} />
          <div className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</div>

          {approach && approach.length > 0 && (
            <ol className="mt-6 flex flex-col gap-5">
              {approach.map((step, i) => (
                <li key={step.title}>
                  <Reveal variant="fadeInUp" delay={i * 0.06} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-surface font-display text-sm font-semibold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-foreground">{step.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          )}
        </div>
      </Container>
    </Section>
  );
}
