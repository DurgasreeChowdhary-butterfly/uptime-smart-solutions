import { GlassPanel, Reveal, Section } from "@/components/ui";
import type { ExecutiveSummaryProps } from "@/types";
import { cn } from "@/lib/utils";

/** Concise TL;DR panel — the summary paragraph alongside a row of quick facts. */
export function ExecutiveSummary({
  eyebrow = "OVERVIEW",
  heading = "Executive Summary",
  summary,
  facts,
  className,
}: ExecutiveSummaryProps) {
  return (
    <Section id="summary" className={cn("scroll-mt-24", className)}>
      <Reveal>
        <GlassPanel className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              {eyebrow}
            </span>
            <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{heading}</h2>
            <div className="mt-4 text-base text-muted-foreground sm:text-lg">{summary}</div>
          </div>

          {facts && facts.length > 0 && (
            <dl className="grid shrink-0 grid-cols-2 gap-x-8 gap-y-5 lg:grid-cols-1">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </GlassPanel>
      </Reveal>
    </Section>
  );
}
