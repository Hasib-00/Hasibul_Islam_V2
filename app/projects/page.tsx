import type { Metadata } from "next";
import { PageHead, Wrap } from "@/components/Page";
import ProjectGrid from "@/components/ProjectGrid";
export const metadata: Metadata = { title: "Projects" };
export default function Projects() {
  return (<><PageHead title="Projects" lead="Native Android applications built with real-time data, APIs and clean architecture." /><Wrap><ProjectGrid /></Wrap></>);
}
