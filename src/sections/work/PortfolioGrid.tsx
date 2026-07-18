import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge, Card, Reveal, Section, SectionHeading, TechChip } from "@/components/ui";
import { ROUTES } from "@/constants";
import { cn } from "@/lib/utils";
import { CASE_STUDIES } from "@/sections/FeaturedWork";

const metaLabelClasses = "text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase";

/** Full portfolio grid — every engineering project, linkable only where a case study is actually published. */
export function PortfolioGrid() {
  return (
    <Section id="portfolio" className="scroll-mt-24">
      <SectionHeading
        eyebrow="PORTFOLIO"
        heading="Engineering Portfolio"
        description="Every platform listed here has shipped. Case studies are published progressively — projects without one yet are marked accordingly."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CASE_STUDIES.map((item, i) => {
          const cardContent = (
            <Card accent={item.accent} hover={Boolean(item.slug)} className="flex h-full flex-col">
              <Badge accent={item.accent} className="self-start">
                {item.type}
              </Badge>
              <p className="mt-4 font-display text-lg font-semibold">{item.title}</p>

              <p className={cn("mt-4", metaLabelClasses)}>Industry</p>
              <p className="mt-1.5 text-sm text-muted-foreground">{item.industry}</p>

              <p className={cn("mt-4", metaLabelClasses)}>Technology</p>
              <div className="mt-1.5 flex flex-wrap gap-2">
                {item.tech.map((label) => (
                  <TechChip key={label} label={label} accent={item.accent} />
                ))}
              </div>

              <div className="mt-6 flex-1" />

              {item.slug ? (
                <span className="inline-flex items-center gap-1.5 self-start text-sm font-medium text-primary">
                  View Case Study
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              ) : (
                <Badge variant="status" tone="neutral" className="self-start">
                  Coming Soon
                </Badge>
              )}
            </Card>
          );

          return (
            <Reveal key={item.title} delay={i * 0.06}>
              {item.slug ? (
                <Link to={ROUTES.work(item.slug)} className="block h-full" aria-label={`View the ${item.title} case study`}>
                  {cardContent}
                </Link>
              ) : (
                <div aria-label={`${item.title} — case study coming soon`}>{cardContent}</div>
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
