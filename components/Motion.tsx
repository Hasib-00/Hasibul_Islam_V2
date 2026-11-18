"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";

export function Chars({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  return (
    <span aria-label={text} className={className}>
      {[...text].map((c, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden align-bottom">
          <motion.span className="inline-block" initial={{ y: "115%", rotate: 8 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: .8, delay: delay + i * .035, ease: [.2, .8, .2, 1] }}>{c === " " ? "\u00A0" : c}</motion.span>
        </span>))}
    </span>);
}

export function Magnetic({ children, s = .3 }: { children: ReactNode; s?: number }) {
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16 }), sy = useSpring(y, { stiffness: 220, damping: 16 });
  return (
    <motion.div style={{ x: sx, y: sy, display: "inline-block" }}
      onPointerMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * s); y.set((e.clientY - r.top - r.height / 2) * s); }}
      onPointerLeave={() => { x.set(0); y.set(0); }}>{children}</motion.div>);
}

/** 3D tilt toward the pointer, plus a soft spotlight that follows it. */
export function Tilt({ children, max = 8, className = "" }: { children: ReactNode; max?: number; className?: string }) {
  const rx = useMotionValue(0), ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 20 }), sry = useSpring(ry, { stiffness: 200, damping: 20 });
  return (
    <motion.div className={`group relative ${className}`} style={{ rotateX: srx, rotateY: sry, transformPerspective: 900, transformStyle: "preserve-3d" }}
      onPointerMove={(e) => {
        const el = e.currentTarget, r = el.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
        ry.set(px * max * 2); rx.set(-py * max * 2); el.style.setProperty("--mx", `${e.clientX - r.left}px`); el.style.setProperty("--my", `${e.clientY - r.top}px`);
      }} onPointerLeave={() => { rx.set(0); ry.set(0); }}>
      {children}
      <div aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(240px circle at var(--mx) var(--my), rgba(79,216,255,.13), transparent)" }} />
    </motion.div>);
}

const faces = ["rotateY(0)", "rotateY(90deg)", "rotateY(180deg)", "rotateY(270deg)", "rotateX(90deg)", "rotateX(-90deg)"];
export function Cube({ size = 64, speed = 18 }: { size?: number; speed?: number }) {
  return (
    <div className="scene" aria-hidden><div className="cube" style={{ "--s": `${size}px`, width: size, height: size, animationDuration: `${speed}s` } as React.CSSProperties}>
      {faces.map((f) => <i key={f} style={{ transform: `${f} translateZ(calc(var(--s) / 2))` }} />)}</div></div>);
}
