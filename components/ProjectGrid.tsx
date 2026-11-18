"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, X } from "lucide-react";
import { projects, profile, type Project } from "@/lib/data";
import { Tilt } from "./Motion";

const kinds = ["All", ...Array.from(new Set(projects.map((p) => p.kind)))];

export default function ProjectGrid() {
  const [f, setF] = useState("All"); const [sel, setSel] = useState<Project | null>(null);
  const list = projects.filter((p) => f === "All" || p.kind === f);
  useEffect(() => { const k = (e: KeyboardEvent) => e.key === "Escape" && setSel(null); addEventListener("keydown", k); return () => removeEventListener("keydown", k); }, []);
  return (
    <>
      <div role="tablist" aria-label="Filter projects" className="mb-8 flex gap-2">
        {kinds.map((k) => <button key={k} role="tab" aria-selected={f === k} onClick={() => setF(k)} className={`rounded-full border px-4 py-1.5 text-sm transition ${f === k ? "border-cyan/60 bg-cyan/10 text-white" : "border-edge text-mute hover:text-white"}`}>{k}</button>)}
      </div>
      <motion.div layout className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.div layout key={p.slug} initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .92 }} transition={{ type: "spring", stiffness: 260, damping: 28 }}>
              <Tilt max={7}><button data-cursor="View" onClick={() => setSel(p)} className="glass relative block w-full overflow-hidden rounded-3xl p-5 text-left transition-colors hover:border-cyan/40">
                <div aria-hidden className="relative mb-5 h-36 overflow-hidden rounded-2xl bg-[#0b0c10]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,123,255,.35),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(79,216,255,.25),transparent_55%)] transition-transform duration-700 ease-out group-hover:scale-125" />
                  <div className="absolute inset-0 flex flex-wrap content-center gap-x-3 p-4 font-display text-2xl text-white/15 transition-all duration-700 group-hover:scale-105 group-hover:text-white/30">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
                </div>
                <div className="px-2 pb-2"><p className="text-sm text-mute">{p.kind}</p>
                <h3 className="mt-1 font-display text-2xl">{p.title}</h3>
                <p className="mt-3 text-mute">{p.summary}</p></div>
              </button></Tilt>
            </motion.div>))}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {sel && (
          <motion.div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}>
            <motion.div data-lenis-prevent role="dialog" aria-modal="true" aria-label={sel.title} onClick={(e) => e.stopPropagation()} initial={{ opacity: 0, scale: .92, clipPath: "inset(28% 0 28% 0 round 24px)" }} animate={{ opacity: 1, scale: 1, clipPath: "inset(0% 0 0% 0 round 24px)" }} exit={{ opacity: 0, scale: .96 }} transition={{ duration: .5, ease: [.2, .8, .2, 1] }}
              className="glass max-h-[85vh] w-full max-w-2xl overflow-auto rounded-3xl bg-panel p-8">
              <div className="flex items-start justify-between gap-4"><h2 className="font-display text-3xl">{sel.title}</h2>
                <button aria-label="Close" autoFocus onClick={() => setSel(null)} className="text-mute hover:text-white"><X /></button></div>
              <p className="mt-3 text-mute">{sel.summary}</p>
              <ul className="mt-6 space-y-3">{sel.points.map((x) => <li key={x} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />{x}</li>)}</ul>
              <div className="mt-6 flex flex-wrap gap-2">{sel.tech.map((t) => <span key={t} className="rounded-full border border-edge px-3 py-1 text-xs">{t}</span>)}</div>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm text-cyan hover:underline"><Github size={16} /> Browse my work on GitHub</a>
            </motion.div>
          </motion.div>)}
      </AnimatePresence>
    </>);
}
