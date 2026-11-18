import type { Metadata } from "next";
import { Reveal, PageHead, Wrap } from "@/components/Page";
import { TLink } from "@/components/Transition";
import { experience, projects } from "@/lib/data";
export const metadata: Metadata = { title: "Experience" };
export default function Experience() {
  return (<><PageHead title="Experience" lead="Practical training, internships and hands-on project work." /><Wrap><div className="space-y-5">
    {experience.map((e, i) => <Reveal key={e.title} i={i}><article className="glass rounded-3xl p-7"><h2 className="font-display text-2xl">{e.title}</h2><p className="text-mute">{e.place}</p><p className="mt-3">{e.note}</p></article></Reveal>)}
    <Reveal i={1}><article className="glass rounded-3xl p-7"><h2 className="font-display text-2xl">Hands-on project work</h2><p className="mt-2 text-mute">Native Android applications built end to end.</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">{projects.map((p) => <li key={p.slug}><TLink href="/projects" className="block rounded-xl border border-edge px-4 py-3 transition hover:border-cyan/50">{p.title}</TLink></li>)}</ul></article></Reveal>
  </div></Wrap></>);
}
