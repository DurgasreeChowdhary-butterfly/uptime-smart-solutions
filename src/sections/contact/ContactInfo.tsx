import { Clock, ExternalLink, Mail, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { GlassPanel, Reveal, Section, SectionHeading } from "@/components/ui";
import { CONTACT_INFO } from "@/constants";

interface InfoItem {
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon;
}

const INFO_ITEMS: InfoItem[] = [
  { label: "Email", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}`, icon: Mail },
  { label: "LinkedIn", value: "Uptime Smart Solutions", href: CONTACT_INFO.linkedin, icon: ExternalLink },
  { label: "Location", value: CONTACT_INFO.location, icon: MapPin },
  { label: "Business Hours", value: CONTACT_INFO.hours, icon: Clock },
];

/** Direct contact channels — email, LinkedIn, location, and business hours. */
export function ContactInfo() {
  return (
    <Section id="contact-info" className="scroll-mt-24">
      <SectionHeading eyebrow="OTHER WAYS TO REACH US" heading="Contact Information" />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {INFO_ITEMS.map((item, i) => {
          const content = (
            <GlassPanel glow={false} className="h-full">
              <item.icon className="h-6 w-6 text-accent" aria-hidden />
              <p className="mt-4 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                {item.label}
              </p>
              <p className="mt-1.5 text-sm font-medium break-words text-foreground">{item.value}</p>
            </GlassPanel>
          );

          return (
            <Reveal key={item.label} delay={i * 0.08}>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block h-full rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label={`${item.label}: ${item.value}`}
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
