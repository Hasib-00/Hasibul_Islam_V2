"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

/** Liquid blob cursor: one gradient dot that stretches along its direction of travel, swells over links and flattens into a bar over text fields.
 *  Transform-only, no blend modes, refs + rAF only (no re-renders). */
export function Cursor() {
  const blob = useRef<HTMLDivElement>(null), lab = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setOn(true); document.body.classList.add("has-cursor");
    return () => document.body.classList.remove("has-cursor");
  }, []);
  useEffect(() => {
    if (!on) return;
    const b = blob.current!, l = lab.current!;
    let mx = -100, my = -100, x = -100, y = -100, m = 1, tm = 1, st = "idle", dn = false, raf = 0;
    const move = (e: PointerEvent) => {
      mx = e.clientX; my = e.clientY;
      const t = (e.target as HTMLElement).closest?.("a,button,input,textarea,[data-cursor]") as HTMLElement | null;
      const s = !t ? "idle" : t.matches("input,textarea") ? "text" : "link";
      if (s !== st) { st = s; b.dataset.s = s; tm = s === "link" ? 2.8 : 1; }
      const lb = t?.dataset.cursor ?? ""; if (l.textContent !== lb) l.textContent = lb; l.style.opacity = lb && s === "link" ? "1" : "0";
    };
    const down = () => { dn = true; }, up = () => { dn = false; };
    const tick = () => {
      const dx = mx - x, dy = my - y; x += dx * .25; y += dy * .25;
      const sp = Math.min(Math.hypot(dx, dy), 50), a = Math.atan2(dy, dx) * 180 / Math.PI;
      m += (tm * (dn ? .8 : 1) - m) * .2;
      const sx = st === "text" ? .15 : m * (1 + sp / 90), sy = st === "text" ? 1.4 : m * (1 - sp / 260);
      b.style.transform = `translate(${x}px,${y}px) rotate(${st === "text" ? 0 : a}deg) scale(${sx},${sy})`;
      l.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };
    tick(); addEventListener("pointermove", move); addEventListener("pointerdown", down); addEventListener("pointerup", up);
    return () => { cancelAnimationFrame(raf); removeEventListener("pointermove", move); removeEventListener("pointerdown", down); removeEventListener("pointerup", up); };
  }, [on]);
  if (!on) return null;
  return (<><div ref={blob} aria-hidden className="cur-blob" /><div ref={lab} aria-hidden className="cur-lab" /></>);
}

export function ToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => { const f = () => setShow(scrollY > 600); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f); }, []);
  return (
    <AnimatePresence>{show && (
      <motion.button initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} aria-label="Back to top"
        onClick={() => { const l = (window as unknown as { __lenis?: { scrollTo: (n: number) => void } }).__lenis; l ? l.scrollTo(0) : scrollTo({ top: 0, behavior: "smooth" }); }} className="glass fixed bottom-6 right-6 z-40 rounded-full p-3 hover:text-cyan"><ArrowUp size={18} /></motion.button>)}
    </AnimatePresence>);
}
