/**
 * Plain JS mirror of the CSS custom properties in `styles/globals.css`.
 * Kept in sync with the dark palette by hand — needed anywhere a CSS var
 * can't be read directly, e.g. Three.js materials/lights or canvas contexts.
 */
export const THEME_COLORS = {
  background: "#05070d",
  foreground: "#f5f6fa",
  surface: "#0d1120",
  border: "#1e2536",
  muted: "#131829",
  mutedForeground: "#8891a6",
  primary: "#3b5bfd",
  primaryForeground: "#f5f6fa",
  accent: "#10e0a4",
  accentForeground: "#04150f",
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;
