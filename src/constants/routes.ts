export const ROUTES = {
  home: "/",
  /** The `/work` portfolio index page. */
  workIndex: "/work",
  /** Path pattern used to register the case-study route. */
  workPattern: "/work/:slug",
  /** Builds a concrete case-study URL for a given slug. */
  work: (slug: string) => `/work/${slug}`,
} as const;

export type RoutePath =
  | (typeof ROUTES)["home"]
  | (typeof ROUTES)["workIndex"]
  | (typeof ROUTES)["workPattern"]
  | ReturnType<typeof ROUTES.work>;
