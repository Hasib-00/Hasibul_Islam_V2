import { pageMeta } from "@/lib/seo";
import { PageHead, Wrap } from "@/components/Page";
import ProjectGrid from "@/components/ProjectGrid";
export const metadata = pageMeta({ title: "Projects – Software, APIs & Data", description: "Projects by Md Hasibul Islam: real-time apps, REST API integration and clean architecture, the engineering base for a career in AI and data science.", path: "/projects" });
export default function Projects() {
  return (<><PageHead title="Projects" lead="Software projects built with real-time data, REST APIs and clean architecture: the engineering foundation behind my move into AI and data science." /><Wrap><ProjectGrid /></Wrap></>);
}
