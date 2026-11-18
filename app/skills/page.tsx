import type { Metadata } from "next";
import { PageHead, Wrap } from "@/components/Page";
import SkillGrid from "@/components/SkillGrid";
export const metadata: Metadata = { title: "Skills" };
export default function Skills() {
  return (<><PageHead title="Skills" lead="What I build with and what I am learning next." /><Wrap><SkillGrid /></Wrap></>);
}
