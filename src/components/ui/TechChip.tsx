import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { transitionFast } from "@/animations";
import { cn } from "@/lib/utils";

import { Badge } from "./Badge";

export interface TechChipProps {
  label: string;
  icon?: LucideIcon;
  className?: string;
}

/** Interactive technology-stack chip (e.g. "React", "Python") — a `Badge` with a hover lift. */
export function TechChip({ label, icon, className }: TechChipProps) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.04 }}
      transition={transitionFast}
      className={cn("inline-flex", className)}
    >
      <Badge variant="technology" icon={icon}>
        {label}
      </Badge>
    </motion.div>
  );
}
