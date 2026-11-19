import { pageMeta } from "@/lib/seo";
import { PageHead, Wrap } from "@/components/Page";
import SkillGrid from "@/components/SkillGrid";
export const metadata = pageMeta({ title: "Skills – Python, ML & Data Science", description: "Skills of Md Hasibul Islam: Python, SQL and software engineering tools, with a focus on machine learning, deep learning, data science and data analytics.", path: "/skills" });
export default function Skills() {
  return (<><PageHead title="Skills" lead="What I build with and what I am learning next." /><Wrap><SkillGrid /></Wrap></>);
}
