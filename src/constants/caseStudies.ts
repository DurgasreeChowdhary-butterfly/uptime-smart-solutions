import { Calculator, ScanText, ShieldCheck, Workflow } from "lucide-react";

import type { CaseStudyRegistryEntry } from "@/types";

/**
 * Registry of case studies served at `/work/:slug`.
 * Add entries here as `{ slug, layout: CaseStudyLayoutProps }` to publish one.
 */
export const CASE_STUDIES: CaseStudyRegistryEntry[] = [
  {
    slug: "taxease-ai",
    layout: {
      hero: {
        title: "TaxEase AI",
        tagline: "Simplifying income tax filing through secure, guided digital workflows.",
        type: "AI-Powered Tax Platform",
        industry: "FinTech / TaxTech",
        focus: "Secure • Guided • AI-Assisted",
        accent: "blue",
        tech: ["React", "FastAPI", "PostgreSQL", "OCR", "AI"],
      },
      productVision: {
        statement:
          "TaxEase AI exists to make income tax filing accurate, secure, and easy to follow — replacing fragmented paperwork with a single guided digital workflow that pairs a deterministic, auditable tax engine with AI-assisted document understanding.",
      },
      executiveSummary: {
        summary:
          "TaxEase AI is a production-ready tax filing platform built for the FinTech / TaxTech space. It combines a deterministic tax calculation engine with AI-assisted document understanding, guiding individuals through income tax filing via a secure, step-by-step digital workflow.",
        facts: [
          { label: "Industry", value: "FinTech / TaxTech" },
          { label: "Platform Type", value: "AI-Powered Tax Platform" },
          { label: "Core Engine", value: "Deterministic Tax Calculations" },
          { label: "Document Handling", value: "AI-Assisted OCR" },
        ],
      },
      challenge: {
        description:
          "Income tax filing is a process where accuracy and compliance are non-negotiable, yet it traditionally depends on manually reconciling financial documents and applying tax rules that leave little room for error. TaxEase AI needed to simplify this process for individuals without compromising the accuracy, security, or auditability the domain demands.",
        painPoints: [
          "Manual reconciliation of financial documents during filing",
          "Low tolerance for calculation error in a compliance-driven domain",
          "Need for a guided experience that remains secure end to end",
        ],
      },
      solution: {
        description:
          "Uptime Smart Solutions engineered TaxEase AI as a production-ready platform that pairs a deterministic, rules-based tax engine with AI-assisted document understanding — so every calculation stays accurate and auditable, while document-heavy steps are simplified through automation. Security is treated as a foundational design constraint, not an afterthought.",
        approach: [
          {
            title: "JWT Authentication",
            description: "Access to the platform is governed by JSON Web Tokens, keeping authentication stateless and verifiable on every request.",
          },
          {
            title: "Secure Session Handling",
            description: "Sessions are managed to limit exposure, reducing the window in which a compromised token could be misused.",
          },
          {
            title: "Input Validation",
            description: "Every input — from questionnaire answers to uploaded documents — is validated before it is processed or stored.",
          },
          {
            title: "Protected Document Uploads",
            description: "Document uploads are handled through a protected pathway, keeping sensitive financial files isolated from unauthorized access.",
          },
          {
            title: "Audit-Friendly Architecture",
            description: "Because tax calculations are deterministic and rule-based, every result can be traced back to the inputs and rules that produced it.",
          },
          {
            title: "Principle of Least Privilege",
            description: "System components and services are scoped to the minimum access they need to perform their function, limiting the blast radius of any single failure.",
          },
        ],
      },
      architecture: {
        description:
          "AI is used to accelerate document understanding, not to determine tax outcomes. Every extracted value passes through human verification before it reaches a separate, deterministic tax engine — keeping AI-assisted convenience clearly separated from the auditable, rules-based logic that governs financial correctness.",
        layers: [
          {
            title: "Client (Mobile / Desktop)",
            description: "The guided experience is accessible from mobile and desktop clients, giving users a consistent entry point into the filing workflow.",
          },
          {
            title: "Guided Questionnaire",
            description: "A structured, step-by-step questionnaire captures the information needed to determine which forms and rules apply before any documents are uploaded.",
          },
          {
            title: "Secure Document Upload",
            description: "Financial documents are uploaded through a protected channel, keeping sensitive data isolated from the point of capture onward.",
          },
          {
            title: "AI Document Understanding",
            description: "AI and OCR extract structured data from uploaded documents, reducing manual entry while leaving financial correctness to a later stage.",
          },
          {
            title: "Human Verification",
            description: "Extracted data is presented for human review before it is accepted, ensuring AI output never reaches the tax engine unchecked.",
          },
          {
            title: "Deterministic Tax Engine",
            description: "Verified inputs are processed by a deterministic, rules-based engine, keeping every tax calculation consistent, traceable, and auditable.",
          },
          {
            title: "Tax Summary & Reports",
            description: "The engine's output is compiled into a clear summary and reports the individual can review before filing.",
          },
        ],
      },
      featureGrid: {
        features: [
          {
            title: "Guided Filing Workflow",
            description: "A step-by-step digital workflow walks individuals through income tax filing from start to finish.",
            icon: Workflow,
          },
          {
            title: "Deterministic Tax Engine",
            description: "Tax calculations run through a deterministic, rules-based engine built for accuracy and auditability.",
            icon: Calculator,
          },
          {
            title: "AI-Assisted Document Understanding",
            description: "OCR and AI extract and interpret uploaded financial documents to reduce manual data entry.",
            icon: ScanText,
          },
          {
            title: "Secure by Design",
            description: "Sensitive financial and tax data is handled through secure digital workflows throughout the platform.",
            icon: ShieldCheck,
          },
        ],
      },
      technology: {
        description: "Each technology was chosen deliberately, for a specific role in keeping the platform accurate, secure, and maintainable.",
        groups: [
          {
            label: "React",
            description: "Modern component architecture for building a responsive, guided user interface.",
            items: ["React"],
          },
          {
            label: "FastAPI",
            description: "High-performance Python backend with automatic, type-safe API documentation.",
            items: ["FastAPI"],
          },
          {
            label: "PostgreSQL",
            description: "Reliable relational storage suited to structured, audit-sensitive financial records.",
            items: ["PostgreSQL"],
          },
          {
            label: "OCR",
            description: "Extracts text and structured data from uploaded financial documents to reduce manual entry.",
            items: ["OCR"],
          },
          {
            label: "AI",
            description: "Assists in interpreting document content — layered on top of, and clearly separated from, the deterministic tax engine.",
            items: ["AI"],
          },
        ],
      },
      engineeringHighlights: {
        highlights: [
          {
            title: "AI Assists, Never Decides",
            description: "AI accelerates document understanding, but every financial outcome is computed by deterministic business logic — AI never determines a tax result directly.",
          },
          {
            title: "Deterministic Business Rules",
            description: "Tax logic is implemented as explicit, rules-based code rather than model inference, so outcomes remain consistent, traceable, and auditable.",
          },
          {
            title: "Modular Architecture for Rule Updates",
            description: "Tax rules change frequently. The business logic layer is structured so rule updates can be made without touching the AI, presentation, or data layers.",
          },
          {
            title: "Validation at Every Stage",
            description: "Input is validated at the client, API, and business-logic layers, catching malformed or unexpected data before it can affect a calculation.",
          },
          {
            title: "Separation of Presentation, Logic, and AI Services",
            description: "The frontend, business logic, and AI document-understanding services are cleanly separated, so each can evolve, scale, and be tested independently.",
          },
          {
            title: "Mobile-First Product Architecture",
            description: "The product experience is designed mobile-first, ensuring the guided workflow performs well on the constrained screens and connections most individual filers use.",
          },
        ],
      },
      businessImpact: {
        description: "Outcomes are described qualitatively — no usage, revenue, or adoption figures are published for this engagement.",
        outcomes: [
          {
            title: "Simplifies Tax Preparation",
            description: "Replaces fragmented, manual paperwork with a single guided digital workflow.",
          },
          {
            title: "Improves Transparency",
            description: "Deterministic, auditable calculations make it clear how each tax outcome was reached.",
          },
          {
            title: "Reduces Manual Effort",
            description: "AI-assisted document understanding reduces the amount of manual data entry required to file.",
          },
          {
            title: "Extensible Platform",
            description: "A modular architecture allows tax rules and features to evolve without a ground-up rebuild.",
          },
          {
            title: "Ready for Future Expansion",
            description: "The separation between AI, business logic, and presentation layers leaves room to add new capabilities over time.",
          },
        ],
      },
      cta: {
        heading: "Interested in Building Something Similar?",
        description: "Let's talk about engineering a secure, AI-driven platform for your business.",
        primaryCta: { label: "Start a Conversation", href: "/#contact" },
        secondaryCta: { label: "Explore Our Work", href: "/#work" },
      },
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudyRegistryEntry | undefined {
  return CASE_STUDIES.find((entry) => entry.slug === slug);
}
