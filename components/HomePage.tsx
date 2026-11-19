"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Avatar from "@/components/Avatar";
import HomeSections from "@/components/HomeSections";
import { Chars, Cube, Magnetic } from "@/components/Motion";
import { TLink } from "@/components/Transition";
import { profile } from "@/lib/data";

const D = 1.35; // hero choreography starts as the boot curtain lifts
const rise = (d: number) => ({ initial: { y: 24, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: .7, delay: D + d, ease: [.2, .8, .2, 1] as const } });

export default function HomePage() {
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI((x) => (x + 1) % profile.roles.length), 2400); return () => clearInterval(t); }, []);
  const { scrollY } = useScroll();
  const yAv = useTransform(scrollY, [0, 700], [0, -80]), yCube = useTransform(scrollY, [0, 700], [0, -220]), fade = useTransform(scrollY, [0, 500], [1, 0]);
  return (
    <>
    <section className="relative flex min-h-screen items-center overflow-hidden">
            <motion.div style={{ y: yCube }} aria-hidden className="absolute right-[6%] top-[16%] hidden md:block"><Cube size={72} /></motion.div>
      <motion.div style={{ y: yCube }} aria-hidden className="absolute bottom-[14%] left-[46%] hidden md:block"><Cube size={36} speed={12} /></motion.div>
      <motion.div style={{ opacity: fade }} className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 pb-16 pt-32 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.p {...rise(0)} className="text-mute">Artificial Intelligence and Data Science enthusiast</motion.p>
          <h1 className="mt-4 font-display text-6xl font-semibold leading-[.95] tracking-tight md:text-8xl" aria-label={profile.name}>
            <Chars text="Md Hasibul" delay={D + .1} /><br /><Chars text="Islam" delay={D + .5} />
          </h1>
          <motion.div {...rise(1)} className="mt-6 flex h-9 items-center gap-3 font-display text-2xl md:text-3xl">
            <span className="text-mute">Exploring</span>
            <AnimatePresence mode="wait"><motion.span key={i} className="grad-text" initial={{ y: 16, opacity: 0, clipPath: "inset(0 100% 0 0)" }} animate={{ y: 0, opacity: 1, clipPath: "inset(0 0% 0 0)" }} exit={{ y: -16, opacity: 0 }} transition={{ duration: .4 }}>{profile.roles[i]}</motion.span></AnimatePresence>
          </motion.div>
          <motion.p {...rise(1.2)} className="mt-6 max-w-xl text-lg text-mute">{profile.intro}</motion.p>
          <motion.div {...rise(1.4)} className="mt-9 flex flex-wrap items-center gap-3">
            <Magnetic><TLink href="/projects" className="block rounded-full bg-gradient-to-r from-cyan to-violet px-7 py-3 font-medium text-black transition hover:brightness-110">Explore my work</TLink></Magnetic>
            <Magnetic><TLink href="/contact" className="glass block rounded-full px-7 py-3 transition hover:border-cyan/50">Contact me</TLink></Magnetic>
            <a href={profile.cv} download className="inline-flex items-center gap-2 px-4 py-3 text-mute hover:text-white"><Download size={18} /> Download CV</a>
          </motion.div>
          <motion.div {...rise(1.6)} className="mt-8 flex gap-4 text-mute">
            <a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:-translate-y-0.5 hover:text-cyan"><Linkedin /></a>
            <a aria-label="GitHub" href={profile.github} target="_blank" rel="noopener noreferrer" className="transition hover:-translate-y-0.5 hover:text-cyan"><Github /></a>
            <a aria-label="Email" href={`mailto:${profile.email}`} className="transition hover:-translate-y-0.5 hover:text-cyan"><Mail /></a>
          </motion.div>
        </div>
        <motion.div style={{ y: yAv }} className="justify-self-center"><Avatar /></motion.div>
      </motion.div>
    </section>
    <HomeSections />
    </>);
}
