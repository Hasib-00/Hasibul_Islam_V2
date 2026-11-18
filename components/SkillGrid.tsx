"use client";
import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { Tilt } from "./Motion";
import { Reveal } from "./Page";

const list = { hide: {}, show: { transition: { staggerChildren: .05, delayChildren: .15 } } };
const item = { hide: { opacity: 0, scale: .8, y: 8 }, show: { opacity: 1, scale: 1, y: 0 } };
export default function SkillGrid() {
  const max = Math.max(...skillGroups.map((g) => g.items.length));
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {skillGroups.map((g, i) => (
        <Reveal key={g.name} i={i}><Tilt max={5} className="h-full"><section className="glass h-full rounded-3xl p-7">
          <div className="flex items-baseline justify-between"><h2 className="font-display text-xl">{g.name}</h2><span className="text-sm text-mute">{g.items.length} items</span></div>
          <div className="mt-3 h-1 rounded bg-white/5"><motion.div className="h-full origin-left rounded bg-gradient-to-r from-cyan to-violet" initial={{ scaleX: 0 }} whileInView={{ scaleX: g.items.length / max }} viewport={{ once: true }} transition={{ duration: 1, delay: .2, ease: [.2, .8, .2, 1] }} /></div>
          <motion.ul className="mt-5 flex flex-wrap gap-2" variants={list} initial="hide" whileInView="show" viewport={{ once: true }}>
            {g.items.map((s) => <motion.li key={s} variants={item} whileHover={{ y: -3, borderColor: "rgba(79,216,255,.7)", color: "#fff" }} className="rounded-full border border-edge px-4 py-1.5 text-sm text-mute">{s}</motion.li>)}
          </motion.ul></section></Tilt></Reveal>))}
    </div>);
}
