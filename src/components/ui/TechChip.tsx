import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { transitionFast } from "@/animations";
import { cn } from "@/lib/utils";

import type { BadgeAccent } from "./Badge";
import { Badge } from "./Badge";

export interface TechChipProps {
  label: string;
  icon?: LucideIcon;
  /** Case-study accent hue for the chip outline. Defaults to the neutral technology style. */
  accent?: BadgeAccent;
  className?: string;
}

/** Interactive technology-stack chip (e.g. "React", "Python") — a `Badge` with a hover lift. */
export function TechChip({ label, icon, accent, className }: TechChipProps) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.04 }}
      transition={transitionFast}
      className={cn("inline-flex", className)}
    >
      <Badge variant="technology" accent={accent} icon={icon}>
        {label}
      </Badge>
    </motion.div>
  );
}
