import { ChevronDown } from "lucide-react";

import { GlassPanel, Reveal, Section, SectionHeading } from "@/components/ui";

const FAQ_ITEMS = [
  {
    question: "What kind of projects do you take on?",
    answer:
      "We build AI-powered software, automation, and custom enterprise applications — from AI platforms and voice AI systems to commerce platforms and internal business tools.",
  },
  {
    question: "How does a project usually start?",
    answer:
      "Every engagement starts with understanding the business problem you're trying to solve. From there we move through our Discover, Design, Build, Deploy, and Support process.",
  },
  {
    question: "Do you work with startups, or only larger enterprises?",
    answer:
      "Both — the approach is tailored to the scale and constraints of the business, not a one-size-fits-all package.",
  },
  {
    question: "What does support look like after launch?",
    answer:
      "Support doesn't end at deployment. Our process includes an ongoing Support phase so the software keeps working as your business's needs change.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "Our stack spans AI and LLM integration, modern frontend and backend engineering, cloud deployment, and payment/communication integrations.",
  },
  {
    question: "How do I get started?",
    answer:
      "Fill out the contact form above with a bit about your project, or reach out directly by email — we'll follow up to schedule a conversation.",
  },
];

/** Accordion FAQ — native `<details>`, accessible and keyboard-operable with no JS. */
export function ContactFAQ() {
  return (
    <Section id="contact-faq" className="scroll-mt-24">
      <SectionHeading eyebrow="FAQ" heading="Common Questions" />

      <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-4">
        {FAQ_ITEMS.map((item, i) => (
          <Reveal key={item.question} delay={i * 0.05}>
            <GlassPanel glow={false} className="p-0">
              <details className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold marker:content-none">
                  {item.question}
                  <ChevronDown
                    className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="mt-3 text-sm text-muted-foreground sm:text-base">{item.answer}</p>
              </details>
            </GlassPanel>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
