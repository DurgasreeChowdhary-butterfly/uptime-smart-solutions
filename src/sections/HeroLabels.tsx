import { motion } from "framer-motion";
import { Boxes, Code2, Cpu, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { EASE_SMOOTH } from "@/animations";

interface FloatingLabel {
  label: string;
  icon: LucideIcon;
  /** Line target and approximate badge position, in percent (0-100) of the visual's box. */
  x: number;
  y: number;
  side: "left" | "right";
  delay: number;
}

const LABELS: FloatingLabel[] = [
  { label: "AI Engineering", icon: Cpu, x: 4, y: 12, side: "left", delay: 0.7 },
  { label: "Automation", icon: Workflow, x: 96, y: 24, side: "right", delay: 0.9 },
  { label: "Software", icon: Code2, x: 4, y: 68, side: "left", delay: 1.1 },
  { label: "Products", icon: Boxes, x: 96, y: 80, side: "right", delay: 1.3 },
];

/** Floating capability badges around the 3D core, tied to it with thin animated connector lines. */
export function HeroLabels() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden sm:block">
      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="hero-label-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0" />
            <stop offset="55%" stopColor="var(--color-primary)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        {LABELS.map((item) => (
          <motion.line
            key={item.label}
            x1="50"
            y1="50"
            x2={item.x}
            y2={item.y}
            stroke="url(#hero-label-line)"
            strokeWidth={0.6}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: item.delay, ease: EASE_SMOOTH }}
          />
        ))}
        {/* Faint traveling pulse along each connector, once the line has drawn in */}
        {LABELS.map((item) => (
          <motion.line
            key={`pulse-${item.label}`}
            x1="50"
            y1="50"
            x2={item.x}
            y2={item.y}
            stroke="var(--color-accent)"
            strokeWidth={0.5}
            strokeLinecap="round"
            strokeDasharray="1.2 7"
            vectorEffect="non-scaling-stroke"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.55, 0], strokeDashoffset: [0, -24] }}
            transition={{
              opacity: {
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay + 1.2,
              },
              strokeDashoffset: {
                duration: 2.6,
                repeat: Infinity,
                ease: "linear",
                delay: item.delay + 1.2,
              },
            }}
          />
        ))}
      </svg>

      {LABELS.map((item) => (
        <div
          key={item.label}
          className="absolute -translate-y-1/2"
          style={{ top: `${item.y}%`, [item.side]: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: item.delay, ease: EASE_SMOOTH }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay + 0.6,
              }}
              whileHover={{ scale: 1.07, y: 0 }}
              className="pointer-events-auto relative flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-surface/60 px-3 py-1.5 text-xs whitespace-nowrap text-foreground shadow-[0_8px_30px_-8px_rgba(59,91,253,0.35)] backdrop-blur-xl transition-[box-shadow,border-color] duration-300 hover:border-white/20 hover:shadow-[0_10px_36px_-6px_rgba(16,224,164,0.4)]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/10 via-transparent to-transparent"
              />
              <item.icon className="h-3.5 w-3.5 text-primary" aria-hidden />
              {item.label}
            </motion.div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
