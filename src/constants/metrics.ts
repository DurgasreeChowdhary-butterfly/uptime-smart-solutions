export interface HeroMetric {
  value: string;
  label: string;
}

/** Placeholder figures — swap for real numbers once available. */
export const HERO_METRICS: HeroMetric[] = [
  { value: "30+", label: "Countries Served" },
  { value: "120+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "99.9%", label: "On-Time Delivery" },
];
