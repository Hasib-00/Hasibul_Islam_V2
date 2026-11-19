import { pageMeta } from "@/lib/seo";
import { Reveal, PageHead, Wrap } from "@/components/Page";
import Journey from "@/components/Journey";
import { profile } from "@/lib/data";
export const metadata = pageMeta({ title: "About – AI & Data Science Student", description: "About Md Hasibul Islam: an AI and Data Science student in Dhaka with a software background, focused on machine learning, deep learning and analytics.", path: "/about" });
export default function About() {
  return (<><PageHead title="About me" lead="Software foundations, AI direction." />
    <Wrap><div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
      <div className="max-w-prose space-y-5 text-lg text-mute">
        {["I am Md Hasibul Islam, an Artificial Intelligence and Data Science student based in Dhaka, Bangladesh, drawn to how machines learn from data.", "I started in software: a diploma in Computer Science & Technology, then hands-on application development training. That gave me practical experience with APIs, databases, real-time data and clean architecture, the same discipline I now bring to AI and data work.", "My focus now is artificial intelligence, machine learning, deep learning and data science, applying the engineering discipline of software development to data-driven problems."].map((t, i) => <Reveal key={i} i={i}><p>{t}</p></Reveal>)}
        <Reveal i={3}><p className="text-sm">{profile.location} · {profile.email}</p></Reveal>
      </div>
      <div><h2 className="mb-6 font-display text-2xl">Journey</h2><Journey /></div>
    </div></Wrap></>);
}
