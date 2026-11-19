import { pageMeta } from "@/lib/seo";
import { Reveal, PageHead, Wrap } from "@/components/Page";
import { education } from "@/lib/data";
export const metadata = pageMeta({ title: "Education – BSc in AI & Data Science", description: "Md Hasibul Islam studies BSc in Artificial Intelligence and Data Science at Green University of Bangladesh, after a Diploma in Computer Science & Technology.", path: "/education" });
export default function Education() {
  return (<><PageHead title="Education" lead="Where I am studying and what came before." />
    <Wrap><ol className="relative space-y-6 border-l border-edge pl-8">
      {education.map((e, i) => (<Reveal key={e.title} i={i}><li className="relative"><span className="absolute -left-[37px] top-8 h-3 w-3 rounded-full bg-cyan shadow-[0_0_12px_#4fd8ff]" />
        <div className="glass rounded-3xl p-7"><p className="text-sm text-cyan">{e.status}</p><h2 className="mt-1 font-display text-2xl">{e.title}</h2><p className="text-mute">{e.place}</p><p className="mt-3">{e.note}</p></div></li></Reveal>))}
    </ol></Wrap></>);
}
