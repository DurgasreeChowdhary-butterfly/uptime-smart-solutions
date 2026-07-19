import { Boxes, Cpu, Layers, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface HeroCapability {
  label: string;
  icon: LucideIcon;
}

/** Compact capability highlights shown under the hero intro. */
export const HERO_CAPABILITIES: HeroCapability[] = [
  { label: "AI Engineering", icon: Cpu },
  { label: "Enterprise Software", icon: Boxes },
  { label: "Business Automation", icon: Workflow },
  { label: "Full-Stack Development", icon: Layers },
];
