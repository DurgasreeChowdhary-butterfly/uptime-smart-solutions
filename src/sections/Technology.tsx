import { Container, Reveal, Section, SectionBackground, SectionHeading, TechChip } from "@/components/ui";

interface TechGroup {
  label: string;
  description: string;
  items: string[];
}

const TECH_GROUPS: TechGroup[] = [
  {
    label: "AI & Intelligence",
    description: "Intelligent systems powered by LLMs, retrieval, speech, computer vision, and automation.",
    items: [
      "Gemini",
      "LangChain",
      "HuggingFace",
      "Pinecone",
      "FAISS",
      "Deepgram",
      "ElevenLabs",
      "Pipecat",
      "TensorFlow",
      "OpenCV",
    ],
  },
  {
    label: "Frontend Engineering",
    description: "Responsive, accessible, and high-performance interfaces designed for exceptional user experiences.",
    items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "React Three Fiber", "Vite"],
  },
  {
    label: "Backend & Platform Engineering",
    description: "Secure APIs, scalable architectures, authentication, business logic, and enterprise-grade backend systems.",
    items: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "JWT", "Alembic", "REST APIs"],
  },
  {
    label: "Cloud & Deployment",
    description: "Reliable deployments, containerized applications, and cloud-native infrastructure.",
    items: ["Docker", "AWS", "Fly.io", "GitHub Actions"],
  },
  {
    label: "Payments & Integrations",
    description: "Connecting software with payment providers, communication platforms, and external business services.",
    items: ["Razorpay", "Twilio", "WhatsApp", "OCR"],
  },
];

/** Grouped technology chip structure showcasing the stack behind the studio's work. */
export function Technology() {
  return (
    <Section id="technology" container={false} className="relative isolate scroll-mt-24 overflow-hidden">
      <SectionBackground glow={false} noise={false} />

      <Container>
        <SectionHeading
          eyebrow="TECHNOLOGY"
          heading="Modern Technology. Production Engineering."
          description="We select technologies based on scalability, security, maintainability, and long-term business value—not trends."
        />

        <div className="mt-12 flex flex-col gap-8">
          {TECH_GROUPS.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.08}>
              <div>
                <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                  {group.label}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{group.description}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {group.items.map((label) => (
                    <TechChip key={label} label={label} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
