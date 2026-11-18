"use client";
import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { ArrowUpRight, Award, Code2, GraduationCap, Layers } from "lucide-react";
import { certifications, education, projects, skillGroups } from "@/lib/data";
import { Reveal } from "./Page";
import { Tilt, Magnetic } from "./Motion";
import { TLink } from "./Transition";

const focus: [string, string][] = [
  ["Artificial Intelligence", "How intelligent systems are designed, built and put to use."],
  ["Machine Learning", "Models that learn patterns from data to predict and decide."],
  ["Data Science", "Turning raw data into insight that supports decisions."],
  ["Deep Learning", "Neural networks and the architectures behind modern AI."],
  ["Data Analytics", "Exploring, cleaning and communicating what the data says."],
  ["Software Development", "Native Android apps in Kotlin with clean architecture and Firebase."],
];
const H = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div className="mb-10"><p className="text-sm uppercase tracking-[.2em] text-cyan">{eyebrow}</p><h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">{title}</h2></div>);

function Count({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null), seen = useInView(ref, { once: true }); const [n, setN] = useState(0);
  useEffect(() => { if (!seen) return; const c = animate(0, to, { duration: 1.4, ease: "easeOut", onUpdate: (x) => setN(Math.round(x)) }); return () => c.stop(); }, [seen, to]);
  return <span ref={ref}>{n}</span>;
}

export default function HomeSections() {
  const items = skillGroups.flatMap((g) => g.items), techs = new Set(projects.flatMap((p) => p.tech)).size;
  const nums: [typeof Layers, number, string][] = [[Layers, projects.length, "Projects built"], [Code2, techs, "Technologies used"], [Award, certifications.length, "Certified training"], [GraduationCap, education.length, "Academic programmes"]];
  return (
    <div className="relative">
      <div className="marq border-y border-edge py-5" aria-hidden><div>{[...items, ...items].map((s, i) => <span key={i} className="mx-6 font-display text-2xl text-white/25">{s}</span>)}</div></div>

      <section className="mx-auto max-w-6xl px-6 py-28">
        <Reveal><H eyebrow="Focus" title="Where I am heading" /></Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {focus.map(([t, d], i) => (
            <Reveal key={t} i={i}><Tilt max={6} className="h-full"><div className="glass h-full rounded-3xl p-7"><span className="font-display text-sm text-cyan">0{i + 1}</span><h3 className="mt-3 font-display text-xl">{t}</h3><p className="mt-2 text-mute">{d}</p></div></Tilt></Reveal>))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28">
        <Reveal><H eyebrow="Selected work" title="Things I have built" /></Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} i={i}><Tilt max={6} className="h-full"><TLink href="/projects" data-cursor="View" className="glass group/c relative block h-full overflow-hidden rounded-3xl p-7">
              <div aria-hidden className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet/20 blur-3xl transition-colors group-hover/c:bg-cyan/25" />
              <div className="relative"><div className="flex items-start justify-between"><p className="text-sm text-mute">{p.kind}</p><ArrowUpRight className="text-mute transition group-hover/c:-translate-y-1 group-hover/c:translate-x-1 group-hover/c:text-cyan" size={20} /></div>
                <h3 className="mt-2 font-display text-2xl">{p.title}</h3><p className="mt-3 text-mute">{p.summary}</p></div>
            </TLink></Tilt></Reveal>))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <Reveal><div className="mb-5 flex items-end justify-between"><h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">By the numbers</h2><span className="hidden text-sm text-mute sm:block">Built, learned, certified</span></div></Reveal>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {nums.map(([Icon, n, l], i) => (
            <Reveal key={l} i={i}><div className="glass flex items-center gap-4 rounded-2xl p-4 transition-colors hover:border-cyan/40">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/5 text-cyan"><Icon size={18} /></span>
              <div><p className="grad-text font-display text-3xl font-semibold leading-none"><Count to={n} /></p><p className="mt-1 text-xs text-mute">{l}</p></div>
            </div></Reveal>))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32">
        <Reveal><div className="glass relative overflow-hidden rounded-[2rem] px-6 py-16 text-center">
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(50%_80%_at_50%_120%,rgba(139,123,255,.25),transparent)]" />
          <h2 className="relative font-display text-4xl font-semibold tracking-tight md:text-6xl">Let&rsquo;s build something intelligent.</h2>
          <p className="relative mx-auto mt-4 max-w-lg text-mute">Open to collaboration, internships and conversations about AI and data.</p>
          <div className="relative mt-8"><Magnetic><TLink href="/contact" className="block rounded-full bg-gradient-to-r from-cyan to-violet px-8 py-3.5 font-medium text-black">Contact me</TLink></Magnetic></div>
        </div></Reveal>
      </section>
    </div>);
}
