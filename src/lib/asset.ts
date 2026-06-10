/**
 * Prefixes a public asset path with the configured base path so that raw
 * <img> tags (which Next.js does NOT auto-prefix, unlike <Link> and next/image)
 * resolve correctly when the site is served from a sub-path such as a GitHub
 * Pages project URL (/new_website_tranquilai/).
 *
 * When NEXT_PUBLIC_BASE_PATH is empty (e.g. served from a custom domain root),
 * paths are returned unchanged.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${BASE_PATH}${path}`;
}
