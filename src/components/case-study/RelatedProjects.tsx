import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge, Card, Reveal, Section, SectionHeading } from "@/components/ui";
import { ROUTES } from "@/constants";
import type { RelatedProjectsProps } from "@/types";
import { cn } from "@/lib/utils";

/** Grid of teaser links to other case studies, for cross-navigation at the end of a project. */
export function RelatedProjects({
  eyebrow = "MORE WORK",
  heading = "Related Projects",
  description,
  projects,
  className,
}: RelatedProjectsProps) {
  return (
    <Section id="related" className={cn("scroll-mt-24", className)}>
      <SectionHeading eyebrow={eyebrow} heading={heading} description={description} />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <Link to={ROUTES.work(project.slug)} className="block h-full">
              <Card accent={project.accent} className="group flex h-full flex-col">
                <Badge accent={project.accent} className="self-start">
                  {project.type}
                </Badge>
                <p className="mt-4 font-display text-lg font-semibold">{project.title}</p>
                <p className="mt-1.5 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                  {project.industry}
                </p>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{project.summary}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-primary">
                  View Case Study
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
