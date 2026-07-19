import { Image as ImageIcon } from "lucide-react";

import { Badge, Container, Reveal, SectionBackground, TechChip } from "@/components/ui";
import type { CaseStudyHeroProps } from "@/types";
import { cn } from "@/lib/utils";

/** Case-study page opener — mirrors the homepage `Hero`: eyebrow, title, meta badges, and a visual. */
export function CaseStudyHero({
  eyebrow = "CASE STUDY",
  title,
  tagline,
  type,
  industry,
  focus,
  accent,
  tech,
  metrics,
  image,
  className,
}: CaseStudyHeroProps) {
  return (
    <section id="overview" className={cn("relative isolate scroll-mt-24 overflow-hidden", className)}>
      <SectionBackground glowPosition="top" />

      <Container className="relative grid min-h-[70svh] items-center gap-10 pt-32 pb-16 lg:grid-cols-2 lg:gap-12 lg:pt-40">
        <div className="flex flex-col items-start">
          <Reveal variant="fadeInUp">
            <span className="mb-2 inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              {eyebrow}
            </span>
          </Reveal>

          <Reveal variant="fadeInUp" delay={0.05}>
            <h1 className="font-display text-[2.5rem] leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </Reveal>

          {tagline && (
            <Reveal variant="fadeInUp" delay={0.1} className="mt-4 max-w-lg text-base text-muted-foreground sm:text-lg">
              {tagline}
            </Reveal>
          )}

          {(type || industry || focus) && (
            <Reveal variant="fadeInUp" delay={0.15} className="mt-6 flex flex-wrap items-center gap-2">
              {type && <Badge accent={accent}>{type}</Badge>}
              {industry && <Badge variant="industry">{industry}</Badge>}
              {focus && (
                <Badge variant="status" tone="info">
                  {focus}
                </Badge>
              )}
            </Reveal>
          )}

          {tech && tech.length > 0 && (
            <Reveal variant="fadeInUp" delay={0.2} className="mt-4 flex flex-wrap gap-2">
              {tech.map((label) => (
                <TechChip key={label} label={label} accent={accent} />
              ))}
            </Reveal>
          )}

          {metrics && metrics.length > 0 && (
            <Reveal
              variant="fadeInUp"
              delay={0.25}
              className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4 sm:gap-x-10"
            >
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="font-display text-2xl font-semibold sm:text-3xl">{metric.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{metric.label}</p>
                </div>
              ))}
            </Reveal>
          )}
        </div>

        <Reveal variant="scaleIn" delay={0.15} className="relative mx-auto aspect-video w-full max-w-2xl">
          {image ? (
            <img
              src={image.src}
              alt={image.alt}
              fetchPriority="high"
              className="h-full w-full rounded-2xl border border-border object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-2xl border border-border bg-muted/40">
              <ImageIcon className="h-10 w-10 text-muted-foreground" aria-hidden />
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
