/** Single source of truth for SEO values. The production URL comes from NEXT_PUBLIC_SITE_URL (set in .github/workflows/deploy.yml). */
const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
if (process.env.NODE_ENV === "production" && /localhost|yourdomain\.com/.test(raw)) {
  console.warn("\n[SEO] NEXT_PUBLIC_SITE_URL is still a placeholder (" + raw + "). Set your real domain before deploying, or canonical URLs, the sitemap and structured data will be wrong.\n");
}
export const SITE_URL = raw.replace(/\/+$/, "");

export const SITE = {
  name: "Md Hasibul Islam",
  // Spelling variants people actually type into Google. Used for structured data only.
  alternateNames: ["Hasibul Islam", "Md. Hasibul Islam", "MD Hasibul Islam"],
  title: "Md Hasibul Islam | AI & Data Science Student, Dhaka",
  description: "Md Hasibul Islam is an Artificial Intelligence and Data Science student in Dhaka, Bangladesh, focused on machine learning, deep learning and data analytics.",
  shortDescription: "AI, machine learning, data science and software development portfolio of Md Hasibul Islam.",
  jobTitle: "Artificial Intelligence and Data Science student",
  keywords: ["Md Hasibul Islam", "Hasibul Islam", "Hasibul Islam AI", "Hasibul Islam Data Science", "Artificial Intelligence student Bangladesh", "Data Science student Dhaka", "Machine Learning", "Deep Learning", "Data Analytics", "Green University of Bangladesh", "portfolio"],
  image: "/profile.jpg",
  knowsAbout: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Data Science", "Data Analytics", "Python", "Software Development"],
};

/** Absolute, trailing-slash URL for a route (matches next.config trailingSlash: true). */
export const abs = (path: string) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path.replace(/\/?$/, "/")}`);
