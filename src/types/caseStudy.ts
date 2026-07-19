import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import type { BadgeAccent } from "@/components/ui";

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudyFact {
  label: string;
  value: string;
}

export interface CaseStudyImage {
  src: string;
  alt: string;
}

export interface CaseStudyHeroProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  tagline?: ReactNode;
  type?: string;
  industry?: string;
  /** Short focus tag, e.g. "Secure • Guided • AI-Assisted". */
  focus?: string;
  accent?: BadgeAccent;
  tech?: string[];
  metrics?: CaseStudyMetric[];
  image?: CaseStudyImage;
  className?: string;
}

export interface ProductVisionProps {
  eyebrow?: ReactNode;
  statement: ReactNode;
  className?: string;
}

export interface ExecutiveSummaryProps {
  eyebrow?: ReactNode;
  heading?: ReactNode;
  summary: ReactNode;
  facts?: CaseStudyFact[];
  className?: string;
}

export interface ChallengeSectionProps {
  eyebrow?: ReactNode;
  heading?: ReactNode;
  description: ReactNode;
  painPoints?: string[];
  image?: CaseStudyImage;
  className?: string;
}

export interface SolutionApproachStep {
  title: string;
  description: string;
}

export interface SolutionSectionProps {
  eyebrow?: ReactNode;
  heading?: ReactNode;
  description: ReactNode;
  approach?: SolutionApproachStep[];
  image?: CaseStudyImage;
  className?: string;
}

export interface ArchitectureLayer {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface ArchitectureSectionProps {
  eyebrow?: ReactNode;
  heading?: ReactNode;
  description?: ReactNode;
  diagram?: CaseStudyImage;
  layers?: ArchitectureLayer[];
  className?: string;
}

export interface FeatureGridItem {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface FeatureGridProps {
  eyebrow?: ReactNode;
  heading?: ReactNode;
  description?: ReactNode;
  image?: CaseStudyImage;
  features: FeatureGridItem[];
  className?: string;
}

export interface TechnologyGroup {
  label: string;
  description?: string;
  items: string[];
}

export interface TechnologySectionProps {
  eyebrow?: ReactNode;
  heading?: ReactNode;
  description?: ReactNode;
  groups: TechnologyGroup[];
  className?: string;
}

export interface GalleryImage extends CaseStudyImage {
  caption?: string;
}

export interface GallerySectionProps {
  eyebrow?: ReactNode;
  heading?: ReactNode;
  description?: ReactNode;
  images: GalleryImage[];
  className?: string;
}

export interface EngineeringHighlight {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface EngineeringHighlightsProps {
  eyebrow?: ReactNode;
  heading?: ReactNode;
  description?: ReactNode;
  highlights: EngineeringHighlight[];
  className?: string;
}

export interface BusinessImpactMetric {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  description?: string;
}

/** A qualitative outcome — for impact that shouldn't be reduced to an unverified number. */
export interface BusinessImpactOutcome {
  title: string;
  description?: string;
}

export interface BusinessImpactProps {
  eyebrow?: ReactNode;
  heading?: ReactNode;
  description?: ReactNode;
  /** Count-up numeric stats. Omit when there are no verified figures to report. */
  metrics?: BusinessImpactMetric[];
  /** Qualitative outcomes, rendered as tiles. Use when impact can't be reduced to a number. */
  outcomes?: BusinessImpactOutcome[];
  className?: string;
}

export interface RelatedProjectSummary {
  slug: string;
  title: string;
  type: string;
  industry: string;
  summary: string;
  accent?: BadgeAccent;
}

export interface RelatedProjectsProps {
  eyebrow?: ReactNode;
  heading?: ReactNode;
  description?: ReactNode;
  projects: RelatedProjectSummary[];
  className?: string;
}

export interface CaseStudyCTAAction {
  label: string;
  href: string;
}

export interface CaseStudyCTAProps {
  eyebrow?: ReactNode;
  heading: ReactNode;
  description?: ReactNode;
  primaryCta: CaseStudyCTAAction;
  secondaryCta?: CaseStudyCTAAction;
  className?: string;
}

/** Full prop set for the `CaseStudyLayout` orchestrator — every section but the hero is optional. */
export interface CaseStudyLayoutProps {
  hero: CaseStudyHeroProps;
  productVision?: ProductVisionProps;
  executiveSummary?: ExecutiveSummaryProps;
  challenge?: ChallengeSectionProps;
  solution?: SolutionSectionProps;
  architecture?: ArchitectureSectionProps;
  featureGrid?: FeatureGridProps;
  technology?: TechnologySectionProps;
  gallery?: GallerySectionProps;
  engineeringHighlights?: EngineeringHighlightsProps;
  businessImpact?: BusinessImpactProps;
  relatedProjects?: RelatedProjectsProps;
  cta?: CaseStudyCTAProps;
}

/** A registry entry mapping a routable `/work/:slug` to the data that hydrates its layout. */
export interface CaseStudyRegistryEntry {
  slug: string;
  layout: CaseStudyLayoutProps;
}
