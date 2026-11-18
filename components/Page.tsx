"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHead({ title, lead }: { title: string; lead: string }) {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-12 pt-36">
      <h1 className="font-display text-5xl font-semibold tracking-tight md:text-7xl">
        {title.split(" ").map((w, i) => (
          <span key={i} className="mr-[.25em] inline-block overflow-hidden align-bottom">
            <motion.span className="inline-block" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: .7, delay: i * .08, ease: [.2, .8, .2, 1] }}>{w}</motion.span>
          </span>))}
      </h1>
      <p className="mt-5 max-w-xl text-lg text-mute">{lead}</p>
    </div>);
}

export function Reveal({ children, i = 0, className = "" }: { children: ReactNode; i?: number; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: .5, delay: i * .07 }}>{children}</motion.div>;
}

export const Wrap = ({ children }: { children: ReactNode }) => <div className="mx-auto max-w-6xl px-6 pb-28">{children}</div>;
