import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge, Container, GlassPanel, Reveal, Section, SectionHeading, TechChip } from "@/components/ui";
import { ROUTES } from "@/constants";
import { buttonBaseClasses, buttonSizeClasses, buttonVariantClasses } from "@/lib/styles";
import { cn } from "@/lib/utils";
import { CASE_STUDIES } from "@/sections/FeaturedWork";

// Same visual treatment as `Button`, but as a plain `Link` — the CTA is a route change,
// not a same-page anchor, and Framer Motion's whileTap gesture recognition can drop a
// real (slightly-moved) click as a "drag" while still playing the press animation, so
// navigation silently no-ops. A real `Link` plus a CSS-only hover/press effect avoids that.
const caseStudyLinkClasses = cn(
  buttonBaseClasses,
  buttonVariantClasses.primary,
  buttonSizeClasses.md,
  "mt-6 group transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
);

/** Spotlight for the one project with a published case study. */
export function FeaturedProject() {
  const project = CASE_STUDIES.find((item) => item.slug);
  if (!project) return null;

  const caseStudyHref = ROUTES.work(project.slug!);

  return (
    <Section id="featured-project" container={false} className="scroll-mt-24">
      <Container>
        <SectionHeading eyebrow="FEATURED PROJECT" heading="Flagship Case Study" />

        <Reveal className="mt-12">
          <GlassPanel className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge accent={project.accent} className="self-start">
                {project.type}
              </Badge>
              <p className="mt-4 font-display text-2xl font-semibold sm:text-3xl">{project.title}</p>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">{project.problem}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((label) => (
                  <TechChip key={label} label={label} accent={project.accent} />
                ))}
              </div>

              <Link to={caseStudyHref} className={caseStudyLinkClasses}>
                View Case Study
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">Industry</p>
              <p className="mt-1.5 text-sm text-muted-foreground">{project.industry}</p>

              <p className="mt-5 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                Business Impact
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">{project.outcome}</p>
            </div>
          </GlassPanel>
        </Reveal>
      </Container>
    </Section>
  );
}
