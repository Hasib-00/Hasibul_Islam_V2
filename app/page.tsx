import HomePage from "@/components/HomePage";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMeta({ description: SITE.description, path: "/" });

export default function Page() {
  return <HomePage />;
}
