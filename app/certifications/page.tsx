import { pageMeta } from "@/lib/seo";
import { Award } from "lucide-react";
import { Reveal, PageHead, Wrap } from "@/components/Page";
import { certifications } from "@/lib/data";
export const metadata = pageMeta({ title: "Certifications", description: "Professional training and certifications of Md Hasibul Islam, an AI and Data Science student in Dhaka, including a Level 4 qualification certified by NSDA Bangladesh.", path: "/certifications" });
export default function Certs() {
  return (<><PageHead title="Certifications" lead="Formal training and recognised credentials." /><Wrap><div className="space-y-5">
    {certifications.map((c, i) => <Reveal key={c.title} i={i}><article className="glass flex gap-5 rounded-3xl p-7"><Award className="mt-1 shrink-0 text-cyan" /><div><h2 className="font-display text-2xl">{c.title}</h2><p className="text-mute">{c.issuer}</p><p className="mt-3">{c.note}</p></div></article></Reveal>)}</div></Wrap></>);
}
