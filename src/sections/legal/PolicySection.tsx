import type { ReactNode } from "react";

import { Reveal } from "@/components/ui";

export interface PolicySectionProps {
  heading: string;
  delay?: number;
  children: ReactNode;
}

/** Heading + body block shared by every clause in `PrivacyContent` and `TermsContent`. */
export function PolicySection({ heading, delay = 0, children }: PolicySectionProps) {
  return (
    <Reveal delay={delay} className="border-t border-border pt-8 first:border-t-0 first:pt-0">
      <h2 className="font-display text-xl font-semibold sm:text-2xl">{heading}</h2>
      <div className="mt-3 flex flex-col gap-3 text-sm text-muted-foreground sm:text-base">{children}</div>
    </Reveal>
  );
}
