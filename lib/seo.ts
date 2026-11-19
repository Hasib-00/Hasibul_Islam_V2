import type { Metadata } from "next";
import { SITE, abs } from "./site";

/** Full per-page metadata. Next replaces (not merges) openGraph/twitter objects, so each page restates them here. */
export function pageMeta({ title, description, path }: { title?: string; description: string; path: string }): Metadata {
  const full = title ? `${title} | ${SITE.name}` : SITE.title;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: abs(path) },
    openGraph: { type: "website", siteName: SITE.name, locale: "en_US", url: abs(path), title: full, description, images: [{ url: SITE.image, width: 900, height: 900, alt: "Portrait of Md Hasibul Islam, AI and Data Science student" }] },
    twitter: { card: "summary", title: full, description, images: [SITE.image] },
  };
}
