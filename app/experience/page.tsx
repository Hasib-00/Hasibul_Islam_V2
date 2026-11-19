import { pageMeta } from "@/lib/seo";
import { Reveal, PageHead, Wrap } from "@/components/Page";
import { TLink } from "@/components/Transition";
import { experience, projects } from "@/lib/data";
export const metadata = pageMeta({ title: "Experience & Training", description: "Experience of Md Hasibul Islam: a mobile development internship and hands-on software projects, ahead of a career in AI and data science.", path: "/experience" });
export default function Experience() {
  return (<><PageHead title="Experience" lead="Practical training, internships and hands-on project work." /><Wrap><div className="space-y-5">
    {experience.map((e, i) => <Reveal key={e.title} i={i}><article className="glass rounded-3xl p-7"><h2 className="font-display text-2xl">{e.title}</h2><p className="text-mute">{e.place}</p><p className="mt-3">{e.note}</p></article></Reveal>)}
    <Reveal i={1}><article className="glass rounded-3xl p-7"><h2 className="font-display text-2xl">Hands-on project work</h2><p className="mt-2 text-mute">Software projects built end to end, the engineering base for my path into AI and data science.</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">{projects.map((p) => <li key={p.slug}><TLink href="/projects" className="block rounded-xl border border-edge px-4 py-3 transition hover:border-cyan/50">{p.title}</TLink></li>)}</ul></article></Reveal>
  </div></Wrap></>);
}
