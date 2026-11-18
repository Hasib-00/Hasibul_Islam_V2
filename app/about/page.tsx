import type { Metadata } from "next";
import { Reveal, PageHead, Wrap } from "@/components/Page";
import Journey from "@/components/Journey";
import { profile } from "@/lib/data";
export const metadata: Metadata = { title: "About" };
export default function About() {
  return (<><PageHead title="About me" lead="Software foundations, AI direction." />
    <Wrap><div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
      <div className="max-w-prose space-y-5 text-lg text-mute">
        {["I am an AI and Data Science student based in Dhaka, drawn to how machines learn from data.", "I started in software: a diploma in Computer Science & Technology, then hands-on mobile development training. That gave me practical experience building Android apps with Kotlin, Firebase and clean architecture.", "My focus now is artificial intelligence, machine learning, deep learning and data analytics, applying the engineering discipline of app development to data-driven problems."].map((t, i) => <Reveal key={i} i={i}><p>{t}</p></Reveal>)}
        <Reveal i={3}><p className="text-sm">{profile.location} · {profile.email}</p></Reveal>
      </div>
      <div><h2 className="mb-6 font-display text-2xl">Journey</h2><Journey /></div>
    </div></Wrap></>);
}
