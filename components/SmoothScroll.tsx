"use client";
import { useEffect } from "react";
import Lenis from "lenis";
export default function SmoothScroll() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const l = new Lenis({ lerp: .09, wheelMultiplier: .9 });
    (window as unknown as { __lenis?: Lenis }).__lenis = l;
    let id = 0; const raf = (t: number) => { l.raf(t); id = requestAnimationFrame(raf); }; id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); l.destroy(); (window as unknown as { __lenis?: Lenis }).__lenis = undefined; };
  }, []);
  return null;
}
