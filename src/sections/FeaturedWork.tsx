import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

import type { BadgeAccent } from "@/components/ui";
import { Badge, Card, Reveal, Section, SectionHeading, TechChip } from "@/components/ui";
import { ROUTES } from "@/constants";
import { cn } from "@/lib/utils";

export interface CaseStudy {
  title: string;
  type: string;
  industry: string;
  problem: string;
  tech: string[];
  outcome: string;
  accent: BadgeAccent;
  /** Flagship case study — spans two columns on desktop. */
  hero?: boolean;
  /** `/work/:slug` this project links to. Omitted for projects without a published case study yet. */
  slug?: string;
  /** Card thumbnail. Falls back to a placeholder icon when omitted. */
  image?: { src: string; alt: string };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "TaxEase AI",
    type: "AI Platform",
    industry: "FinTech / TaxTech",
    problem: "Simplifying income tax filing through secure, guided digital workflows.",
    tech: ["React", "FastAPI", "PostgreSQL", "OCR", "AI"],
    outcome:
      "Built a production-ready platform combining deterministic tax calculations with AI-assisted document understanding.",
    accent: "blue",
    hero: true,
    slug: "taxease-ai",
    image: {
      src: "/taxease-ai/hero.png",
      alt: "TaxEase AI platform dashboard showing the guided income tax filing workflow",
    },
  },
  {
    title: "VoiceIQ",
    type: "AI Platform",
    industry: "Voice AI",
    problem: "Enterprise voice automation with real-time AI conversations.",
    tech: ["Pipecat", "Deepgram", "ElevenLabs", "Gemini"],
    outcome: "Developed a production-ready Voice AI platform for automated customer interactions.",
    accent: "purple",
    slug: "voiceiq",
    image: {
      src: "/voiceiq/hero.png",
      alt: "VoiceIQ real-time voice AI dashboard showing live calls, AI conversation intelligence, and call analytics",
    },
  },
  {
    title: "Prakruti Organics",
    type: "Commerce Platform",
    industry: "Retail Commerce",
    problem: "Modernizing commerce through AI-powered shopping experiences.",
    tech: ["React", "FastAPI", "PostgreSQL", "Gemini", "Razorpay"],
    outcome: "Unified commerce, payments, AI assistance, and affiliate marketing into a single platform.",
    accent: "green",
    slug: "prakruti-organics",
    image: {
      src: "/prakruti-organics/hero.png",
      alt: "Prakruti Organics unified commerce platform showing the customer shopping experience, e-commerce storefront, and business operations dashboard",
    },
  },
  {
    title: "Iraivi Nest",
    type: "SaaS Platform",
    industry: "Property Management",
    problem: "Digitizing resident operations and automated billing.",
    tech: ["React", "FastAPI", "PostgreSQL"],
    outcome: "Automated billing, electricity allocation, and resident lifecycle management.",
    accent: "orange",
    slug: "iraivi-nest",
    image: {
      src: "/iraivi-nest/hero.png",
      alt: "Iraivi Nest property management dashboard showing resident registration, billing and electricity engines, and the business operations overview",
    },
  },
  {
    title: "Enterprise Workflow Automation",
    type: "Enterprise Automation",
    industry: "Enterprise Banking",
    problem: "Reducing manual intervention in enterprise workflows.",
    tech: ["Python", "TensorFlow", "OpenCV", "Selenium"],
    outcome: "Automated CAPTCHA recognition and workflow execution using deep learning.",
    accent: "cyan",
    image: {
      src: "/enterprise-workflow/hero.png",
      alt: "Enterprise Workflow Automation AI engine connecting disconnected systems to automated outcomes and an operations dashboard",
    },
  },
  {
    title: "Opportunity Intelligence CRM",
    type: "Business Platform",
    industry: "Freelance CRM",
    problem: "Helping freelancers discover and prioritize better opportunities.",
    tech: ["React", "FastAPI", "Gemini", "PostgreSQL"],
    outcome: "Centralized opportunity discovery, AI analysis, proposal strategy, and pipeline management.",
    accent: "indigo",
    image: {
      src: "/opportunity-intelligence/hero.png",
      alt: "Opportunity Intelligence CRM AI engine turning lead sources into scored opportunities, an automated sales pipeline, and an executive CRM dashboard",
    },
  },
];

const metaLabelClasses = "text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase";

/** Grid of featured engineering case studies. */
export function FeaturedWork() {
  return (
    <Section id="work" className="scroll-mt-24">
      <SectionHeading
        eyebrow="FEATURED WORK"
        heading="Featured Engineering Work"
        description="A selection of production-grade software platforms engineered to solve real business challenges across AI, automation, commerce, and enterprise operations."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CASE_STUDIES.map((item, i) => {
          const cardContent = (
            <Card accent={item.accent} hover={Boolean(item.slug)} className="flex h-full flex-col overflow-hidden p-0">
              <div className="flex aspect-video items-center justify-center overflow-hidden border-b border-border bg-muted/40">
                {item.image ? (
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    width={1672}
                    height={941}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <ImageIcon className="h-8 w-8 text-muted-foreground" aria-hidden />
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <Badge accent={item.accent} className="self-start">
                  {item.type}
                </Badge>
                <p className="mt-4 font-display text-lg font-semibold">{item.title}</p>

                <p className={cn("mt-4", metaLabelClasses)}>Industry</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{item.industry}</p>

                <p className={cn("mt-4", metaLabelClasses)}>Business Challenge</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{item.problem}</p>

                <p className={cn("mt-4", metaLabelClasses)}>Technology</p>
                <div className="mt-1.5 flex flex-wrap gap-2">
                  {item.tech.map((label) => (
                    <TechChip key={label} label={label} accent={item.accent} />
                  ))}
                </div>

                <p className={cn("mt-4", metaLabelClasses)}>Business Impact</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{item.outcome}</p>

                {item.slug ? (
                  <span className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-link">
                    View Case Study
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                ) : (
                  <Badge variant="status" tone="neutral" className="mt-6 self-start">
                    Coming Soon
                  </Badge>
                )}
              </div>
            </Card>
          );

          return (
            <Reveal key={item.title} delay={i * 0.06} className={item.hero ? "lg:col-span-2" : undefined}>
              {item.slug ? (
                <Link to={ROUTES.work(item.slug)} className="block h-full" aria-label={`View the ${item.title} case study`}>
                  {cardContent}
                </Link>
              ) : (
                cardContent
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
