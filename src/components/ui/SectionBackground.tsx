import { cn } from "@/lib/utils";

const GLOW_POSITION = {
  top: "50% -10%",
  center: "50% 50%",
  bottom: "50% 110%",
} as const;

/** Inline fractal-noise SVG, encoded once at module load — no image asset required. */
const NOISE_DATA_URI = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
    <filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter>
    <rect width='100%' height='100%' filter='url(#n)'/>
  </svg>`,
)}")`;

export interface SectionBackgroundProps {
  /** Soft radial color wash. Defaults to `true`. */
  glow?: boolean;
  glowPosition?: keyof typeof GLOW_POSITION;
  /** Faint grid of lines, masked to fade at the edges. Defaults to `true`. */
  grid?: boolean;
  /** Very subtle film-grain texture. Defaults to `true`. */
  noise?: boolean;
  className?: string;
}

/** Reusable layered section backdrop — radial glow, grid overlay, and subtle noise. Purely decorative. */
export function SectionBackground({
  glow = true,
  glowPosition = "top",
  grid = true,
  noise = true,
  className,
}: SectionBackgroundProps) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      {glow && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 55% at ${GLOW_POSITION[glowPosition]}, color-mix(in oklab, var(--color-primary) 18%, transparent), transparent)`,
          }}
        />
      )}
      {grid && (
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 70% 55% at 50% 30%, black 40%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 55% at 50% 30%, black 40%, transparent 90%)",
          }}
        />
      )}
      {noise && (
        <div
          className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
          style={{ backgroundImage: NOISE_DATA_URI, backgroundRepeat: "repeat", backgroundSize: "180px 180px" }}
        />
      )}
    </div>
  );
}
