"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { nav } from "@/lib/data";
import { TLink } from "./Transition";

export default function Nav() {
  const path = usePathname(); const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div initial={{ y: -80 }} animate={{ y: 0 }} transition={{ delay: 1.6, duration: .7, ease: [.2, .8, .2, 1] }} className="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full glass px-5 py-2.5">
        <TLink href="/" className="font-display text-lg font-semibold tracking-tight">Hasibul<span className="grad-text">.</span></TLink>
        <nav aria-label="Primary" className="hidden lg:flex">
          {nav.map((n) => { const on = n.href === path; return (
            <TLink key={n.href} href={n.href} aria-current={on ? "page" : undefined} className={`relative px-3 py-1.5 text-sm transition-colors ${on ? "text-white" : "text-mute hover:text-white"}`}>
              {on && <motion.span layoutId="pill" className="absolute inset-0 -z-10 rounded-full bg-white/10 ring-1 ring-cyan/30" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
              {n.label}
            </TLink>); })}
        </nav>
        <button className="relative h-6 w-6 lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <motion.span className="absolute left-0 top-1.5 h-px w-6 bg-white" animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} />
          <motion.span className="absolute left-0 top-3 h-px w-6 bg-white" animate={{ opacity: open ? 0 : 1 }} />
          <motion.span className="absolute left-0 top-[18px] h-px w-6 bg-white" animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} />
        </button>
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.nav aria-label="Mobile" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .4, ease: [.2, .8, .2, 1] }}
            className="glass mx-3 mt-2 overflow-hidden rounded-2xl lg:hidden">
            <div className="flex flex-col p-2">
              {nav.map((n, i) => (
                <motion.div key={n.href} initial={{ x: -16, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: .08 + i * .04 }}>
                  <TLink href={n.href} onClick={() => setOpen(false)} className={`block rounded-xl px-4 py-3 ${n.href === path ? "bg-white/10" : "text-mute"}`}>{n.label}</TLink>
                </motion.div>))}
            </div>
          </motion.nav>)}
      </AnimatePresence>
    </header>
  );
}
