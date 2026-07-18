import { PageTransition } from "@/experience";
import type { CaseStudyLayoutProps } from "@/types";

import { ArchitectureSection } from "./ArchitectureSection";
import { BusinessImpact } from "./BusinessImpact";
import { CaseStudyCTA } from "./CaseStudyCTA";
import { CaseStudyHero } from "./CaseStudyHero";
import { ChallengeSection } from "./ChallengeSection";
import { EngineeringHighlights } from "./EngineeringHighlights";
import { ExecutiveSummary } from "./ExecutiveSummary";
import { FeatureGrid } from "./FeatureGrid";
import { GallerySection } from "./GallerySection";
import { ProductVision } from "./ProductVision";
import { RelatedProjects } from "./RelatedProjects";
import { SolutionSection } from "./SolutionSection";
import { TechnologySection } from "./TechnologySection";

/**
 * Composes the full case-study page from its section props. Every section but
 * `hero` is optional — pass only the ones a given project actually needs, and
 * they render in a fixed, sensible narrative order.
 */
export function CaseStudyLayout({
  hero,
  productVision,
  executiveSummary,
  challenge,
  solution,
  architecture,
  featureGrid,
  technology,
  gallery,
  engineeringHighlights,
  businessImpact,
  relatedProjects,
  cta,
}: CaseStudyLayoutProps) {
  return (
    <PageTransition>
      <CaseStudyHero {...hero} />
      {productVision && <ProductVision {...productVision} />}
      {executiveSummary && <ExecutiveSummary {...executiveSummary} />}
      {challenge && <ChallengeSection {...challenge} />}
      {solution && <SolutionSection {...solution} />}
      {architecture && <ArchitectureSection {...architecture} />}
      {featureGrid && <FeatureGrid {...featureGrid} />}
      {technology && <TechnologySection {...technology} />}
      {gallery && <GallerySection {...gallery} />}
      {engineeringHighlights && <EngineeringHighlights {...engineeringHighlights} />}
      {businessImpact && <BusinessImpact {...businessImpact} />}
      {relatedProjects && <RelatedProjects {...relatedProjects} />}
      {cta && <CaseStudyCTA {...cta} />}
    </PageTransition>
  );
}
