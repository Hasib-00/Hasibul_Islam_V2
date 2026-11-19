import type { MetadataRoute } from "next";
import { nav } from "@/lib/data";
import { abs } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return nav.map((n) => ({ url: abs(n.href), lastModified: now, changeFrequency: n.href === "/" ? "weekly" : "monthly", priority: n.href === "/" ? 1 : n.href === "/about" ? 0.9 : 0.7 }));
}
