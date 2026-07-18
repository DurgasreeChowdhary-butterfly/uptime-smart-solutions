export const ROUTES = {
  home: "/",
  /** The `/work` portfolio index page. */
  workIndex: "/work",
  /** Path pattern used to register the case-study route. */
  workPattern: "/work/:slug",
  /** Builds a concrete case-study URL for a given slug. */
  work: (slug: string) => `/work/${slug}`,
  /** The `/about` page. */
  about: "/about",
  /** The `/contact` page. */
  contact: "/contact",
  /** The `/privacy` page. */
  privacy: "/privacy",
  /** The `/terms` page. */
  terms: "/terms",
} as const;

export type RoutePath =
  | (typeof ROUTES)["home"]
  | (typeof ROUTES)["workIndex"]
  | (typeof ROUTES)["workPattern"]
  | (typeof ROUTES)["about"]
  | (typeof ROUTES)["contact"]
  | (typeof ROUTES)["privacy"]
  | (typeof ROUTES)["terms"]
  | ReturnType<typeof ROUTES.work>;
