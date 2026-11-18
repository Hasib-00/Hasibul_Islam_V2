"use client";
import { createContext, useCallback, useContext, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useReducedMotion } from "framer-motion";

type L = { stop: () => void; start: () => void; scrollTo: (n: number, o: object) => void };
const lenis = () => (window as unknown as { __lenis?: L }).__lenis;
const Ctx = createContext<(href: string) => void>(() => {});

/** Zoom transition. Smoothness: only compositor-friendly properties (transform, opacity) are animated, and while it runs
 *  `data-tr` on <html> pauses the expensive extras (backdrop blur, looping animations, particle canvas, smooth-scroll loop). */
export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter(), path = usePathname(), reduce = useReducedMotion();
  const busy = useRef(false), pending = useRef(false), anim = useRef<Animation | null>(null);

  const clear = useCallback(() => {
    anim.current?.cancel(); anim.current = null; pending.current = false;
    setTimeout(() => { busy.current = false; delete document.documentElement.dataset.tr; }, 800); // keep extras paused during the zoom-in
  }, []);

  const go = useCallback((href: string) => {
    if (busy.current || href === path) return;
    const main = document.getElementById("main");
    if (reduce || !main) { router.push(href); return; }
    busy.current = pending.current = true;
    document.documentElement.dataset.tr = "1"; lenis()?.stop();
    main.style.transformOrigin = `50% ${scrollY + innerHeight / 2}px`;
    anim.current = main.animate([{ transform: "scale(1)", opacity: 1 }, { transform: "scale(.92)", opacity: 0 }], { duration: 380, easing: "cubic-bezier(.4,0,.2,1)", fill: "forwards" });
    setTimeout(() => router.push(href), 380);
    setTimeout(() => { if (pending.current) { lenis()?.start(); clear(); } }, 5000); // safety net
  }, [path, reduce, router, clear]);

  useEffect(() => {
    if (!pending.current) return;
    anim.current?.cancel();
    const l = lenis(); l?.scrollTo(0, { immediate: true }); l?.start();
    clear();
  }, [path, clear]);

  return <Ctx.Provider value={go}>{children}</Ctx.Provider>;
}

export function TLink({ href, onClick, ...p }: Omit<React.ComponentProps<typeof Link>, "href"> & { href: string }) {
  const go = useContext(Ctx);
  return <Link href={href} {...p} onClick={(e) => { onClick?.(e); if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return; e.preventDefault(); go(href); }} />;
}
