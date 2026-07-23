import {
  AudioLines,
  AudioWaveform,
  Bot,
  Brain,
  Calculator,
  CreditCard,
  Filter,
  LineChart,
  MessageSquare,
  Mic,
  Receipt,
  ScanText,
  Send,
  Share2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

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
        image: {
          src: "/taxease-ai/hero.png",
          alt: "TaxEase AI platform dashboard showing the guided income tax filing workflow",
        },
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
        image: {
          src: "/taxease-ai/challenge.png",
          alt: "Manual, fragmented financial document reconciliation that TaxEase AI replaces",
        },
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
        image: {
          src: "/taxease-ai/solution.png",
          alt: "TaxEase AI's secure, guided digital tax filing workflow interface",
        },
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
        diagram: {
          src: "/taxease-ai/architecture.png",
          alt: "TaxEase AI system architecture diagram: users through the React frontend, authentication and secure file upload, FastAPI backend, OCR and AI document intelligence, business rules and tax calculation engines, compliance validation, PostgreSQL database, audit logs, analytics dashboard, and cloud infrastructure",
          width: 941,
          height: 1672,
        },
      },
      featureGrid: {
        image: {
          src: "/taxease-ai/features.png",
          alt: "Overview of TaxEase AI's key platform features: guided filing, deterministic tax engine, AI document understanding, and secure design",
        },
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
  {
    slug: "voiceiq",
    layout: {
      hero: {
        title: "VoiceIQ",
        tagline: "Enterprise voice automation with real-time AI conversations.",
        type: "AI Platform",
        industry: "Voice AI",
        focus: "Real-Time • Voice-First • AI-Assisted",
        accent: "purple",
        tech: ["Pipecat", "Deepgram", "ElevenLabs", "Gemini"],
        image: {
          src: "/voiceiq/hero.png",
          alt: "VoiceIQ real-time voice AI dashboard showing live calls, AI conversation intelligence, and call analytics",
        },
      },
      productVision: {
        statement:
          "VoiceIQ exists to let enterprises automate customer voice interactions without losing the immediacy of a live conversation — pairing real-time speech recognition, conversational AI, and natural voice synthesis into a single responsive pipeline.",
      },
      executiveSummary: {
        summary:
          "VoiceIQ is a production-ready Voice AI platform built for enterprise customer interactions. It combines real-time speech recognition, conversational AI, and natural-sounding voice synthesis to automate voice conversations that would otherwise need a live agent.",
        facts: [
          { label: "Industry", value: "Voice AI" },
          { label: "Platform Type", value: "AI Platform" },
          { label: "Conversation Mode", value: "Real-Time Voice" },
          { label: "Speech Pipeline", value: "Speech-to-Text → AI → Text-to-Speech" },
        ],
      },
      challenge: {
        description:
          "Automating enterprise voice interactions is harder than automating text-based ones: a system has to transcribe speech, understand and respond to it, and speak the response back — all fast enough that the exchange still feels like a conversation rather than a back-and-forth with a machine.",
        painPoints: [
          "Real-time transcription of live speech with minimal delay",
          "Generating contextually appropriate responses fast enough to sustain a live conversation",
          "Producing natural-sounding speech output rather than robotic text-to-speech",
        ],
        image: {
          src: "/voiceiq/challenge.png",
          alt: "Overwhelmed manual contact center workflow with ringing phones, missed calls, and disconnected spreadsheets that VoiceIQ replaces",
        },
      },
      solution: {
        description:
          "Uptime Smart Solutions built VoiceIQ around a real-time voice pipeline that pairs specialized, best-of-breed services for each stage of the conversation — transcription, understanding, and response — rather than one general-purpose model, keeping every stage fast and independently upgradable.",
        approach: [
          {
            title: "Real-Time Audio Pipeline",
            description:
              "Pipecat orchestrates the real-time audio pipeline, streaming audio between the speech, language, and voice-synthesis stages with minimal added latency.",
          },
          {
            title: "Speech-to-Text",
            description: "Deepgram transcribes live speech into text in real time, forming the input to the conversational layer.",
          },
          {
            title: "Conversational Intelligence",
            description: "Gemini interprets the transcribed speech and generates the AI's response within the conversation.",
          },
          {
            title: "Natural Voice Synthesis",
            description: "ElevenLabs converts the AI's text response back into natural-sounding speech.",
          },
        ],
        image: {
          src: "/voiceiq/solution.png",
          alt: "VoiceIQ's real-time voice pipeline, from speech recognition through AI understanding, business rules, CRM updates, and workflow automation",
        },
      },
      architecture: {
        diagram: {
          src: "/voiceiq/architecture.png",
          alt: "VoiceIQ system architecture diagram: customer calls flow through the telephony platform, Deepgram speech-to-text, Gemini AI reasoning, business logic and knowledge base, Pipedream automation, ElevenLabs text-to-speech, CRM database, analytics dashboard, and cloud infrastructure",
          width: 1672,
          height: 941,
        },
      },
      featureGrid: {
        image: {
          src: "/voiceiq/features.png",
          alt: "Overview of VoiceIQ's key features: live voice calls, AI voice assistant, sentiment analysis, CRM integration, workflow automation, and multi-language support",
        },
        features: [
          {
            title: "Real-Time Voice Conversations",
            description: "Enterprises can automate live, spoken customer interactions instead of routing them to text-based bots or human agents.",
            icon: Mic,
          },
          {
            title: "Live Speech Recognition",
            description: "Speech is transcribed in real time as the conversation happens, powering every downstream response.",
            icon: AudioLines,
          },
          {
            title: "AI-Driven Responses",
            description: "Conversational AI interprets what's said and generates a contextually relevant reply.",
            icon: MessageSquare,
          },
          {
            title: "Natural-Sounding Voice Output",
            description: "Responses are spoken back in natural-sounding synthesized voice rather than robotic text-to-speech.",
            icon: AudioWaveform,
          },
        ],
      },
      technology: {
        description: "Each technology was chosen for a specific role in the real-time voice pipeline.",
        groups: [
          {
            label: "Pipecat",
            description: "Open-source framework for orchestrating real-time voice and multimodal AI pipelines.",
            items: ["Pipecat"],
          },
          {
            label: "Deepgram",
            description: "Real-time speech-to-text transcription.",
            items: ["Deepgram"],
          },
          {
            label: "ElevenLabs",
            description: "AI voice synthesis for natural-sounding spoken responses.",
            items: ["ElevenLabs"],
          },
          {
            label: "Gemini",
            description: "Large language model powering the conversational responses.",
            items: ["Gemini"],
          },
        ],
      },
      engineeringHighlights: {
        highlights: [
          {
            title: "Best-of-Breed Pipeline, Not One Model",
            description:
              "Speech recognition, conversational AI, and voice synthesis are handled by separate, specialized services rather than a single general-purpose model, so each stage can be upgraded or swapped independently.",
          },
          {
            title: "Real-Time Orchestration",
            description:
              "Pipecat coordinates the audio pipeline so transcription, response generation, and voice synthesis stay in sync during a live conversation.",
          },
          {
            title: "Separation of Speech and Language Layers",
            description:
              "Speech-to-text, language understanding, and text-to-speech are kept as distinct layers, so the conversational logic isn't tied to any one speech provider.",
          },
        ],
      },
      businessImpact: {
        description: "Outcomes are described qualitatively — no usage, adoption, or deployment figures are published for this engagement.",
        outcomes: [
          {
            title: "Production-Ready Voice Automation",
            description: "Delivered a production-ready Voice AI platform for automating enterprise customer interactions.",
          },
          {
            title: "Real-Time Conversational Experience",
            description: "Combines real-time speech recognition, conversational AI, and voice synthesis into a single responsive pipeline.",
          },
          {
            title: "Specialized, Swappable Pipeline",
            description: "Each stage of the voice pipeline uses a dedicated, best-of-breed service rather than one general-purpose model.",
          },
        ],
      },
      cta: {
        heading: "Interested in Building Something Similar?",
        description: "Let's talk about engineering a real-time, AI-driven voice platform for your business.",
        primaryCta: { label: "Start a Conversation", href: "/#contact" },
        secondaryCta: { label: "Explore Our Work", href: "/#work" },
      },
    },
  },
  {
    slug: "prakruti-organics",
    layout: {
      hero: {
        title: "Prakruti Organics",
        tagline: "Modernizing commerce through AI-powered shopping experiences.",
        type: "Commerce Platform",
        industry: "Retail Commerce",
        focus: "Commerce • AI-Assisted • Unified",
        accent: "green",
        tech: ["React", "FastAPI", "PostgreSQL", "Gemini", "Razorpay"],
        image: {
          src: "/prakruti-organics/hero.png",
          alt: "Prakruti Organics unified commerce platform showing the customer shopping experience, e-commerce storefront, and business operations dashboard",
        },
      },
      productVision: {
        statement:
          "Prakruti Organics exists to modernize retail commerce by unifying shopping, payments, AI-assisted guidance, and affiliate marketing into a single platform — replacing what would otherwise be several disconnected systems with one cohesive experience.",
      },
      executiveSummary: {
        summary:
          "Prakruti Organics is a production-ready commerce platform built for retail. It unifies online shopping, secure payments, AI-powered shopping assistance, and affiliate marketing into a single platform.",
        facts: [
          { label: "Industry", value: "Retail Commerce" },
          { label: "Platform Type", value: "Commerce Platform" },
          { label: "Payments", value: "Razorpay-Integrated" },
          { label: "Shopping Assistance", value: "Gemini-Powered AI" },
        ],
      },
      challenge: {
        description:
          "Retail commerce is often split across separate systems — a storefront, a payments processor, and affiliate/referral tracking — bolted together rather than designed as one experience. Prakruti Organics needed a single platform that unified these functions instead of stitching together disconnected tools.",
        painPoints: [
          "Commerce, payments, AI assistance, and affiliate marketing typically live in separate, disconnected systems",
          "Shoppers increasingly expect AI-powered guidance, not just a static product catalog",
          "Payments need to be secure and suited to the retail market being served",
        ],
        image: {
          src: "/prakruti-organics/challenge.png",
          alt: "Disconnected, manual retail operations — paper order books, phone orders, manual inventory tracking, and stock confusion — that Prakruti Organics replaces",
        },
      },
      solution: {
        description:
          "Uptime Smart Solutions built Prakruti Organics as a single platform unifying commerce, payments, AI assistance, and affiliate marketing, rather than integrating several separate third-party tools.",
        approach: [
          {
            title: "Unified Commerce Platform",
            description: "Shopping, payments, AI assistance, and affiliate marketing are unified into one platform rather than stitched together from separate tools.",
          },
          {
            title: "Secure Payments",
            description: "Razorpay handles payment processing, giving the platform a secure payments layer suited to its retail market.",
          },
          {
            title: "AI-Assisted Shopping",
            description: "Gemini powers AI-assisted shopping experiences, helping customers navigate the storefront.",
          },
          {
            title: "Built-In Affiliate Marketing",
            description: "Affiliate marketing is built into the platform itself, rather than run through a separate third-party system.",
          },
        ],
        image: {
          src: "/prakruti-organics/solution.png",
          alt: "Prakruti Organics' unified commerce workflow, from product browsing and checkout through payment, order processing, and inventory updates",
        },
      },
      architecture: {
        diagram: {
          src: "/prakruti-organics/architecture.png",
          alt: "Prakruti Organics system architecture diagram: customer through the React frontend, REST API, FastAPI backend, authentication, business logic, Razorpay payment gateway, PostgreSQL database, admin dashboard, and cloud hosting",
          width: 941,
          height: 1672,
        },
      },
      featureGrid: {
        image: {
          src: "/prakruti-organics/features.png",
          alt: "Overview of Prakruti Organics' key features: product catalog, smart search, secure checkout, Razorpay payments, GST billing, and customer reviews",
        },
        features: [
          {
            title: "Unified Commerce Experience",
            description: "Shopping, payments, AI assistance, and affiliate marketing are combined into a single retail platform.",
            icon: ShoppingBag,
          },
          {
            title: "Integrated Payments",
            description: "Razorpay is integrated directly into the platform for secure checkout.",
            icon: CreditCard,
          },
          {
            title: "AI-Powered Shopping Assistance",
            description: "Gemini-powered AI helps guide customers through the shopping experience.",
            icon: Sparkles,
          },
          {
            title: "Built-In Affiliate Marketing",
            description: "Affiliate marketing runs natively within the platform rather than through a separate tool.",
            icon: Share2,
          },
        ],
      },
      technology: {
        description: "Each technology was chosen for a specific role in the unified commerce platform.",
        groups: [
          {
            label: "React",
            description: "Modern component architecture for the storefront and shopping interface.",
            items: ["React"],
          },
          {
            label: "FastAPI",
            description: "High-performance Python backend powering the platform's API.",
            items: ["FastAPI"],
          },
          {
            label: "PostgreSQL",
            description: "Reliable relational storage for commerce, customer, and affiliate data.",
            items: ["PostgreSQL"],
          },
          {
            label: "Gemini",
            description: "Powers the AI-assisted shopping experience.",
            items: ["Gemini"],
          },
          {
            label: "Razorpay",
            description: "Payment gateway integration for secure transactions.",
            items: ["Razorpay"],
          },
        ],
      },
      engineeringHighlights: {
        highlights: [
          {
            title: "Unified Platform, Not Bolted-On Tools",
            description:
              "Commerce, payments, AI assistance, and affiliate marketing are built into a single platform rather than integrated as separate third-party add-ons.",
          },
          {
            title: "AI Layered Onto Commerce",
            description: "Gemini-powered assistance is layered on top of the core commerce and payment flows, rather than replacing them.",
          },
          {
            title: "Payments Suited to the Market Served",
            description: "Razorpay was chosen to give the platform a payments layer suited to the retail market it serves.",
          },
        ],
      },
      businessImpact: {
        description: "Outcomes are described qualitatively — no revenue, adoption, or usage figures are published for this engagement.",
        outcomes: [
          {
            title: "Unified Commerce Platform",
            description: "Brought shopping, payments, AI assistance, and affiliate marketing together into a single platform.",
          },
          {
            title: "AI-Assisted Shopping Experience",
            description: "Added AI-powered guidance to the retail shopping experience.",
          },
          {
            title: "Integrated Payments",
            description: "Integrated Razorpay for secure payment processing within the platform.",
          },
        ],
      },
      cta: {
        heading: "Interested in Building Something Similar?",
        description: "Let's talk about engineering a unified commerce platform for your business.",
        primaryCta: { label: "Start a Conversation", href: "/#contact" },
        secondaryCta: { label: "Explore Our Work", href: "/#work" },
      },
    },
  },
  {
    slug: "iraivi-nest",
    layout: {
      hero: {
        title: "Iraivi Nest",
        tagline: "Digitizing resident operations and automated billing.",
        type: "SaaS Platform",
        industry: "Property Management",
        focus: "Digitized • Automated • Resident-Focused",
        accent: "orange",
        tech: ["React", "FastAPI", "PostgreSQL"],
        image: {
          src: "/iraivi-nest/hero.png",
          alt: "Iraivi Nest property management dashboard showing resident registration, billing and electricity engines, and the business operations overview",
        },
      },
      productVision: {
        statement:
          "Iraivi Nest exists to digitize property management operations — replacing manual billing and resident administration with a platform that automates billing, electricity allocation, and resident lifecycle management.",
      },
      executiveSummary: {
        summary:
          "Iraivi Nest is a SaaS platform built for property management. It digitizes resident operations, automating billing, electricity allocation, and resident lifecycle management.",
        facts: [
          { label: "Industry", value: "Property Management" },
          { label: "Platform Type", value: "SaaS Platform" },
          { label: "Billing", value: "Automated" },
          { label: "Resident Management", value: "Lifecycle-Based" },
        ],
      },
      challenge: {
        description:
          "Property management operations — billing residents, allocating shared electricity costs, and tracking residents through their lifecycle — are traditionally handled manually. Iraivi Nest needed to digitize these operations into a single platform.",
        painPoints: [
          "Resident billing handled manually rather than automatically",
          "Electricity costs allocated across residents without an automated process",
          "Residents tracked through onboarding and move-out without a unified system",
        ],
        image: {
          src: "/iraivi-nest/challenge.png",
          alt: "Overwhelmed manual property management — paper resident registers, notebook rent calculations, and missed payments — that Iraivi Nest replaces",
        },
      },
      solution: {
        description:
          "Uptime Smart Solutions built Iraivi Nest as a SaaS platform for property management, digitizing resident operations to automate billing, electricity allocation, and resident lifecycle management.",
        approach: [
          {
            title: "Automated Billing",
            description: "Resident billing is automated within the platform rather than handled manually.",
          },
          {
            title: "Electricity Allocation",
            description: "Electricity costs are allocated across residents automatically.",
          },
          {
            title: "Resident Lifecycle Management",
            description: "Residents are tracked through their lifecycle, from onboarding through move-out.",
          },
        ],
        image: {
          src: "/iraivi-nest/solution.png",
          alt: "Iraivi Nest's automated resident workflow, from registration and room allocation through billing, payment collection, and vacating settlement",
        },
      },
      architecture: {
        diagram: {
          src: "/iraivi-nest/architecture.png",
          alt: "Iraivi Nest system architecture diagram: residents through the React frontend, FastAPI backend, authentication, business rules engine, room allocation, billing and electricity calculation engines, payment module, PostgreSQL database, reporting dashboard, and cloud infrastructure",
          width: 941,
          height: 1672,
        },
      },
      featureGrid: {
        image: {
          src: "/iraivi-nest/features.png",
          alt: "Overview of Iraivi Nest's key features: resident management, room and bed allocation, automated billing, electricity calculation, and occupancy analytics",
        },
        features: [
          {
            title: "Automated Billing",
            description: "Resident billing is generated and processed automatically within the platform.",
            icon: Receipt,
          },
          {
            title: "Electricity Allocation",
            description: "Shared electricity costs are allocated across residents automatically.",
            icon: Zap,
          },
          {
            title: "Resident Lifecycle Management",
            description: "Residents are managed through their full lifecycle, from onboarding through move-out.",
            icon: Users,
          },
        ],
      },
      technology: {
        description: "Each technology was chosen for a specific role in digitizing resident operations.",
        groups: [
          {
            label: "React",
            description: "Modern component architecture for the resident-facing interface.",
            items: ["React"],
          },
          {
            label: "FastAPI",
            description: "High-performance Python backend powering the platform's API.",
            items: ["FastAPI"],
          },
          {
            label: "PostgreSQL",
            description: "Reliable relational storage for billing, allocation, and resident records.",
            items: ["PostgreSQL"],
          },
        ],
      },
      businessImpact: {
        description: "Outcomes are described qualitatively — no adoption, usage, or revenue figures are published for this engagement.",
        outcomes: [
          {
            title: "Automated Billing",
            description: "Digitized and automated resident billing.",
          },
          {
            title: "Automated Electricity Allocation",
            description: "Automated the allocation of electricity costs across residents.",
          },
          {
            title: "Resident Lifecycle Management",
            description: "Digitized resident lifecycle management from onboarding through move-out.",
          },
        ],
      },
      cta: {
        heading: "Interested in Building Something Similar?",
        description: "Let's talk about engineering a digitized property management platform for your business.",
        primaryCta: { label: "Start a Conversation", href: "/#contact" },
        secondaryCta: { label: "Explore Our Work", href: "/#work" },
      },
    },
  },
  {
    slug: "enterprise-workflow",
    layout: {
      hero: {
        title: "Enterprise Workflow Automation",
        tagline: "Removing manual intervention from enterprise banking operations, including systems with no API access.",
        type: "Enterprise Automation",
        industry: "Enterprise Banking",
        focus: "Automated • Rules-Governed • Audit-Ready",
        accent: "cyan",
        tech: ["Python", "TensorFlow", "OpenCV", "Selenium"],
        image: {
          src: "/enterprise-workflow/hero.png",
          alt: "Enterprise Workflow Automation AI engine connecting disconnected systems to automated outcomes and an operations dashboard",
        },
      },
      productVision: {
        statement:
          "Enterprise Workflow Automation exists to remove manual intervention from repetitive back-office processes — connecting disconnected systems, applying consistent business rules, and extending automation to legacy portals that were never built with an API in mind.",
      },
      executiveSummary: {
        summary:
          "Enterprise Workflow Automation is a production-ready automation platform built for enterprise banking operations. It connects disconnected email, CRM, ERP, HR, and finance systems into a single rules-driven workflow engine, and uses computer vision and browser automation to complete tasks on legacy systems that expose no API.",
        facts: [
          { label: "Industry", value: "Enterprise Banking" },
          { label: "Platform Type", value: "Enterprise Automation" },
          { label: "Decisioning", value: "AI-Assisted, Rules-Governed" },
          { label: "Legacy System Access", value: "Computer-Vision-Driven Automation" },
        ],
      },
      challenge: {
        description:
          "Back-office operations at enterprise scale — invoice approvals, vendor onboarding, purchase requests, contract approvals — depend on data spread across email inboxes, spreadsheets, CRM, ERP, HR, and finance systems with no shared source of truth. Approval cycles routinely stretch across several days, the same record gets re-typed into multiple systems by hand, and some of the portals these processes depend on have no API at all — only a login form and a CAPTCHA standing between the workflow and completion.",
        painPoints: [
          "Data scattered across email, spreadsheets, CRM, ERP, HR, and finance systems with no single source of truth",
          "The same record manually re-entered into multiple systems, with no protection against transcription errors",
          "Approval cycles for budgets, vendor onboarding, and contracts stretching 3–6+ days with no real-time visibility",
          "Legacy vendor and regulatory portals that expose no API, gating routine tasks behind a manual, CAPTCHA-protected form",
        ],
        image: {
          src: "/enterprise-workflow/challenge.png",
          alt: "Disconnected email, CRM, ERP, HR, and finance systems causing duplicate work, lost requests, and delayed approvals",
        },
      },
      solution: {
        description:
          "Uptime Smart Solutions built a workflow automation engine that captures a business event, routes it through an AI-assisted decision layer and a deterministic business-rules engine, and executes it end to end — including, where a target system offers no programmatic access, driving that system's own web interface directly via computer vision and browser automation.",
        approach: [
          {
            title: "Real-Time Event Capture",
            description: "Business events — a new purchase order, an incoming invoice — are captured the moment they occur and handed to the workflow engine.",
          },
          {
            title: "AI-Assisted Decisioning",
            description: "An AI decision engine validates the data, assesses risk, and checks policy compliance before a workflow is allowed to proceed.",
          },
          {
            title: "Deterministic Business Rules",
            description: "An approval matrix, budget allocation, delegation rules, and compliance checks are applied consistently, the same way every time.",
          },
          {
            title: "API-First Integration",
            description: "Wherever a downstream system exposes an API, the integration layer connects to it directly to update records and trigger the next step.",
          },
          {
            title: "Computer-Vision Automation for Legacy Systems",
            description: "Where no API exists, Selenium drives a browser session while OpenCV and a TensorFlow model recognize and solve CAPTCHAs, so the workflow completes the task exactly as a human operator would.",
          },
          {
            title: "Unified Notifications & Reporting",
            description: "Once a workflow completes, stakeholders are notified automatically and audit-ready reports and dashboards update without manual reconciliation.",
          },
        ],
        image: {
          src: "/enterprise-workflow/solution.png",
          alt: "Enterprise Workflow Automation pipeline from business event through AI decisioning, business rules, system integration, and reporting",
        },
      },
      architecture: {
        description:
          "Every workflow starts as a business event and passes through AI-assisted decisioning and deterministic business rules before it touches a single downstream system. Where a system exposes an API, the integration layer calls it directly; where it doesn't, a computer-vision layer takes over that system's own interface so the workflow can still complete without a person sitting through the manual steps.",
        layers: [
          {
            title: "Workflow Engine",
            description: "Orchestrates trigger conditions and hands each business event to the right automated process.",
          },
          {
            title: "AI Decision Engine",
            description: "Validates data, assesses risk, and checks policy compliance before a workflow is allowed to proceed.",
          },
          {
            title: "Business Rules Engine",
            description: "Applies the approval matrix, budget allocation, delegation rules, and compliance checks deterministically.",
          },
          {
            title: "Integration Layer",
            description: "Connects to CRM, ERP, HR, and finance systems directly, wherever an API is available.",
          },
          {
            title: "Computer-Vision Automation",
            description: "Selenium drives the browser session while OpenCV and a TensorFlow model recognize and solve CAPTCHAs on systems that expose no API.",
          },
          {
            title: "PostgreSQL Database",
            description: "Stores workflow state, audit history, and every decision the engine makes, ready for compliance review.",
          },
          {
            title: "Analytics Engine",
            description: "Rolls processing time, success rate, and cost savings into a live operations view.",
          },
          {
            title: "Cloud Infrastructure",
            description: "Hosts the platform with the availability enterprise banking operations depend on.",
          },
        ],
        diagram: {
          src: "/enterprise-workflow/architecture.png",
          alt: "Enterprise Workflow Automation system architecture diagram: users through the React dashboard, FastAPI backend, authentication, workflow engine, business rules engine, AI decision engine, integration layer, REST APIs, CRM/ERP systems, PostgreSQL database, analytics engine, and cloud infrastructure",
          width: 941,
          height: 1672,
        },
      },
      featureGrid: {
        image: {
          src: "/enterprise-workflow/features.png",
          alt: "Overview of Enterprise Workflow Automation's key features: workflow builder, AI decision engine, business rules, API integrations, and analytics dashboard",
        },
        features: [
          {
            title: "Visual Workflow Builder",
            description: "Business events, triggers, and approval steps are configured visually rather than hard-coded into the platform.",
            icon: Workflow,
          },
          {
            title: "AI-Assisted Decisioning",
            description: "An AI decision engine validates data, assesses risk, and checks policy compliance before a workflow proceeds.",
            icon: Brain,
          },
          {
            title: "Legacy System Automation",
            description: "Computer vision and browser automation complete tasks on legacy portals that expose no API.",
            icon: Bot,
          },
          {
            title: "Audit-Ready Reporting",
            description: "Every automated decision and action is logged, giving compliance teams a complete, traceable record.",
            icon: ShieldCheck,
          },
        ],
      },
      technology: {
        description: "Each technology was chosen for a specific role in automating both API-connected and API-less enterprise systems.",
        groups: [
          {
            label: "Python",
            description: "Core language orchestrating the workflow engine, business rules, and automation pipeline.",
            items: ["Python"],
          },
          {
            label: "TensorFlow",
            description: "Powers the deep learning model that recognizes and solves CAPTCHAs on legacy, API-less systems.",
            items: ["TensorFlow"],
          },
          {
            label: "OpenCV",
            description: "Preprocesses screen and document images before they reach the recognition model.",
            items: ["OpenCV"],
          },
          {
            label: "Selenium",
            description: "Drives browser sessions to complete tasks on systems that offer no programmatic API.",
            items: ["Selenium"],
          },
        ],
      },
      gallery: {
        description: "A closer look at the problem this platform replaces and the automated workflow that replaced it.",
        images: [
          {
            src: "/enterprise-workflow/challenge.png",
            alt: "Disconnected email, CRM, ERP, HR, and finance systems causing duplicate work and delayed approvals",
            caption: "Before: approvals and records scattered across disconnected systems, with no shared source of truth.",
          },
          {
            src: "/enterprise-workflow/solution.png",
            alt: "Automated workflow from business event through AI decisioning, business rules, and system integration",
            caption: "The automated path: event capture, AI-assisted decisioning, business rules, and integration in one flow.",
          },
          {
            src: "/enterprise-workflow/features.png",
            alt: "Workflow automation engine dashboard with builder, AI decision engine, integrations, and live analytics",
            caption: "Inside the platform: workflow builder, AI decision engine, integrations, and real-time analytics.",
          },
        ],
      },
      engineeringHighlights: {
        highlights: [
          {
            title: "Computer Vision for Systems Without APIs",
            description: "Selenium, OpenCV, and a TensorFlow CAPTCHA-recognition model let the platform complete tasks on legacy portals that were never built to be automated.",
          },
          {
            title: "AI Assists, Rules Decide",
            description: "The AI decision engine flags risk and validates data, but final approval logic runs through deterministic, auditable business rules.",
          },
          {
            title: "Full Audit Trail for Regulated Operations",
            description: "Every automated action — including CAPTCHA-gated legacy-system interactions — is logged for compliance review.",
          },
          {
            title: "Modular Integration Layer",
            description: "CRM, ERP, HR, and finance systems connect through a shared integration layer, so adding a new system doesn't mean rebuilding the workflow engine.",
          },
        ],
      },
      businessImpact: {
        description: "Outcomes are described qualitatively — no usage, revenue, or adoption figures are published for this engagement.",
        outcomes: [
          {
            title: "Reduces Manual Data Entry",
            description: "Records no longer need to be re-typed by hand into every downstream system.",
          },
          {
            title: "Shrinks Approval Cycle Times",
            description: "Business events move through decisioning and rules automatically instead of waiting in someone's inbox.",
          },
          {
            title: "Extends Automation to Legacy Systems",
            description: "Computer vision and browser automation bring API-less, CAPTCHA-gated portals into the same automated workflow.",
          },
          {
            title: "Improves Audit Readiness",
            description: "Every automated decision is logged, giving compliance teams a traceable record on demand.",
          },
        ],
      },
      relatedProjects: {
        projects: [
          {
            slug: "taxease-ai",
            title: "TaxEase AI",
            type: "AI-Powered Tax Platform",
            industry: "FinTech / TaxTech",
            summary: "A deterministic, rules-based tax engine paired with AI-assisted document understanding.",
            accent: "blue",
          },
          {
            slug: "iraivi-nest",
            title: "Iraivi Nest",
            type: "SaaS Platform",
            industry: "Property Management",
            summary: "Automated billing, electricity allocation, and resident lifecycle management.",
            accent: "orange",
          },
          {
            slug: "opportunity-intelligence",
            title: "Opportunity Intelligence CRM",
            type: "Business Platform",
            industry: "Freelance CRM",
            summary: "AI-scored lead pipeline with automated follow-up, proposals, and revenue forecasting.",
            accent: "indigo",
          },
        ],
      },
      cta: {
        heading: "Interested in Building Something Similar?",
        description: "Let's talk about automating your enterprise workflows, including the systems that were never built with an API.",
        primaryCta: { label: "Start a Conversation", href: "/#contact" },
        secondaryCta: { label: "Explore Our Work", href: "/#work" },
      },
    },
  },
  {
    slug: "opportunity-intelligence",
    layout: {
      hero: {
        title: "Opportunity Intelligence CRM",
        tagline: "Helping freelancers and small agencies discover, score, and prioritize the opportunities most likely to close.",
        type: "Business Platform",
        industry: "Freelance CRM",
        focus: "Unified • AI-Scored • Pipeline-Driven",
        accent: "indigo",
        tech: ["React", "FastAPI", "Gemini", "PostgreSQL"],
        image: {
          src: "/opportunity-intelligence/hero.png",
          alt: "Opportunity Intelligence CRM AI engine turning lead sources into scored opportunities, an automated sales pipeline, and an executive CRM dashboard",
        },
      },
      productVision: {
        statement:
          "Opportunity Intelligence CRM exists to give freelancers and small agencies the same lead visibility and prioritization that larger sales teams take for granted — replacing scattered spreadsheets, chats, and inboxes with one AI-scored pipeline.",
      },
      executiveSummary: {
        summary:
          "Opportunity Intelligence CRM is a production-ready business platform built for freelancers and small agencies. It centralizes leads from every channel, scores and prioritizes them with AI, and automates follow-up, proposal tracking, and revenue forecasting from a single pipeline.",
        facts: [
          { label: "Industry", value: "Freelance CRM" },
          { label: "Platform Type", value: "Business Platform" },
          { label: "Lead Scoring", value: "AI-Powered" },
          { label: "Forecasting", value: "Real-Time Pipeline Rollup" },
        ],
      },
      challenge: {
        description:
          "Freelancers and small agencies generate leads from a wide spread of channels — website forms, WhatsApp, LinkedIn, email campaigns, paid ads, and referrals — but rarely have a system to bring them together. Leads sit in spreadsheets, chat threads, and inboxes with no consistent scoring or follow-up discipline, so good opportunities get missed, duplicated, or simply outpaced by a more responsive competitor.",
        painPoints: [
          "Leads scattered across spreadsheets, WhatsApp threads, email inboxes, and sticky notes with no single source of truth",
          "No consistent way to score or prioritize which leads deserve a follow-up first",
          "Follow-ups missed and the same lead worked twice because nothing tracks who's already reached out",
          "No real-time visibility into pipeline stage, deal value, or next steps",
        ],
        image: {
          src: "/opportunity-intelligence/challenge.png",
          alt: "Leads scattered across spreadsheets, WhatsApp conversations, emails, and sticky notes, leading to missed follow-ups and lost opportunities",
        },
      },
      solution: {
        description:
          "Uptime Smart Solutions built Opportunity Intelligence CRM around a single pipeline that captures leads from every channel, enriches and scores them with Gemini-powered AI, and automates the follow-up and proposal work that would otherwise depend on someone remembering to do it.",
        approach: [
          {
            title: "Unified Lead Capture",
            description: "Leads from website forms, WhatsApp, LinkedIn, email campaigns, paid ads, and referrals are captured into one system instead of six.",
          },
          {
            title: "AI Lead Enrichment & Scoring",
            description: "Gemini-powered enrichment adds firmographic and technographic context, then scores each lead so reps know who to call first.",
          },
          {
            title: "Buying-Intent Analysis",
            description: "Intent signals are surfaced automatically, showing which conversations are ready to move to a proposal.",
          },
          {
            title: "Automated Sales Assignment & Follow-Up",
            description: "Leads route to the right person automatically, with follow-up sequences that don't depend on someone remembering.",
          },
          {
            title: "Proposal & Pipeline Management",
            description: "Proposal status and pipeline stage are tracked centrally, not scattered across a rep's inbox.",
          },
          {
            title: "Revenue Forecasting",
            description: "Pipeline value and win probability roll up into a forecast that updates automatically as deals move.",
          },
        ],
        image: {
          src: "/opportunity-intelligence/solution.png",
          alt: "Opportunity Intelligence CRM workflow from lead capture through AI scoring, intent analysis, sales assignment, and revenue forecasting",
        },
      },
      architecture: {
        description:
          "Leads enter from every channel into a single CRM data model. An AI intelligence engine scores and enriches each one before workflow automation and notifications take over — so the pipeline, proposal, and revenue-forecast views stay current without manual updates.",
        layers: [
          {
            title: "Lead Sources",
            description: "Website forms, WhatsApp, LinkedIn, email campaigns, paid ads, and referrals all feed into a single intake point.",
          },
          {
            title: "CRM Service",
            description: "Holds every contact, account, and deal in one data model instead of several disconnected spreadsheets.",
          },
          {
            title: "AI Intelligence Engine",
            description: "Gemini enriches each lead with additional context and surfaces buying-intent signals.",
          },
          {
            title: "Lead Scoring Engine",
            description: "Ranks leads by score so reps always know which conversation to prioritize next.",
          },
          {
            title: "Workflow Automation",
            description: "Automates follow-up sequences, reminders, and proposal status updates.",
          },
          {
            title: "Notification Service",
            description: "Keeps reps informed by email, SMS, and WhatsApp as a lead moves through the pipeline.",
          },
          {
            title: "PostgreSQL Database",
            description: "Stores contacts, deals, and pipeline history behind every dashboard view.",
          },
          {
            title: "Business Intelligence Dashboard",
            description: "Rolls pipeline value, win rate, and forecast into a single executive view.",
          },
        ],
        diagram: {
          src: "/opportunity-intelligence/architecture.png",
          alt: "Opportunity Intelligence CRM system architecture diagram: lead sources through the React dashboard, FastAPI backend, authentication, CRM service, AI intelligence engine, lead scoring engine, workflow automation, notification service, PostgreSQL database, analytics engine, business intelligence dashboard, and cloud infrastructure",
          width: 941,
          height: 1672,
        },
      },
      featureGrid: {
        image: {
          src: "/opportunity-intelligence/features.png",
          alt: "Overview of Opportunity Intelligence CRM's key features: lead capture, AI lead scoring, opportunity tracking, sales pipeline, and revenue forecasting",
        },
        features: [
          {
            title: "AI-Powered Lead Scoring",
            description: "Every lead is scored and enriched automatically, so reps always know which opportunity to work next.",
            icon: TrendingUp,
          },
          {
            title: "Unified Opportunity Pipeline",
            description: "Leads from every channel move through one pipeline instead of being tracked separately per source.",
            icon: Filter,
          },
          {
            title: "Automated Follow-Ups & Proposals",
            description: "Follow-up sequences and proposal status updates run automatically, without depending on someone remembering.",
            icon: Send,
          },
          {
            title: "Revenue Forecasting & Analytics",
            description: "Pipeline value, win probability, and forecast revenue update in real time as deals move stage.",
            icon: LineChart,
          },
        ],
      },
      technology: {
        description: "Each technology was chosen for a specific role in turning scattered leads into a scored, forecastable pipeline.",
        groups: [
          {
            label: "React",
            description: "Modern component architecture for the CRM dashboard and pipeline views.",
            items: ["React"],
          },
          {
            label: "FastAPI",
            description: "High-performance Python backend powering the platform's API.",
            items: ["FastAPI"],
          },
          {
            label: "Gemini",
            description: "Powers lead enrichment, scoring, intent analysis, and AI-generated recommendations.",
            items: ["Gemini"],
          },
          {
            label: "PostgreSQL",
            description: "Reliable relational storage for contacts, deals, and pipeline history.",
            items: ["PostgreSQL"],
          },
        ],
      },
      gallery: {
        description: "A closer look at the problem this platform replaces and the pipeline that replaced it.",
        images: [
          {
            src: "/opportunity-intelligence/challenge.png",
            alt: "Leads scattered across spreadsheets, WhatsApp, email, and sticky notes, leading to missed follow-ups",
            caption: "Before: leads scattered across spreadsheets, chats, and inboxes, with opportunities falling through the cracks.",
          },
          {
            src: "/opportunity-intelligence/solution.png",
            alt: "Automated pipeline from lead capture through AI scoring, sales assignment, and revenue forecasting",
            caption: "The automated pipeline: capture, AI scoring, intent analysis, follow-up, and forecasting in one flow.",
          },
          {
            src: "/opportunity-intelligence/features.png",
            alt: "AI CRM engine dashboard with lead capture, scoring, pipeline tracking, and revenue forecasting",
            caption: "Inside the platform: lead capture, AI scoring, pipeline tracking, and forecasting in one dashboard.",
          },
        ],
      },
      engineeringHighlights: {
        highlights: [
          {
            title: "AI Scores, Reps Decide",
            description: "AI ranks and enriches leads, but each rep still owns the relationship and the final call — scoring speeds up prioritization, it doesn't replace judgment.",
          },
          {
            title: "Single Source of Truth Across Channels",
            description: "Unifying website, WhatsApp, LinkedIn, email, ads, and referrals into one lead record eliminates duplicate and conflicting entries.",
          },
          {
            title: "Modular AI Layer",
            description: "Gemini-powered scoring, enrichment, and insights sit on top of the core CRM data model, so the AI layer can evolve independently of it.",
          },
          {
            title: "Real-Time Pipeline & Forecast Updates",
            description: "Revenue forecasts recalculate as deals move stage, rather than depending on a manual monthly rollup.",
          },
        ],
      },
      businessImpact: {
        description: "Outcomes are described qualitatively — no usage, revenue, or adoption figures are published for this engagement.",
        outcomes: [
          {
            title: "Centralizes Lead Discovery",
            description: "Consolidates leads from every channel into a single pipeline instead of scattered spreadsheets and chats.",
          },
          {
            title: "Improves Follow-Up Discipline",
            description: "Automated reminders and sequences reduce the number of leads that fall through the cracks.",
          },
          {
            title: "Prioritizes High-Intent Opportunities",
            description: "AI scoring and intent analysis help reps focus effort on the leads most likely to close.",
          },
          {
            title: "Improves Pipeline Visibility",
            description: "A real-time dashboard replaces manual reporting across the funnel, from lead to closed deal.",
          },
        ],
      },
      relatedProjects: {
        projects: [
          {
            slug: "prakruti-organics",
            title: "Prakruti Organics",
            type: "Commerce Platform",
            industry: "Retail Commerce",
            summary: "AI-powered shopping assistance unified with commerce, payments, and affiliate marketing.",
            accent: "green",
          },
          {
            slug: "voiceiq",
            title: "VoiceIQ",
            type: "AI Platform",
            industry: "Voice AI",
            summary: "Real-time voice AI pipeline for automating enterprise customer conversations.",
            accent: "purple",
          },
          {
            slug: "enterprise-workflow",
            title: "Enterprise Workflow Automation",
            type: "Enterprise Automation",
            industry: "Enterprise Banking",
            summary: "Rules-governed workflow automation extended to legacy, API-less enterprise systems.",
            accent: "cyan",
          },
        ],
      },
      cta: {
        heading: "Interested in Building Something Similar?",
        description: "Let's talk about engineering an AI-scored CRM pipeline for your business.",
        primaryCta: { label: "Start a Conversation", href: "/#contact" },
        secondaryCta: { label: "Explore Our Work", href: "/#work" },
      },
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudyRegistryEntry | undefined {
  return CASE_STUDIES.find((entry) => entry.slug === slug);
}
