"use client";
import { useEffect, useRef } from "react";

export default function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!; const ctx = c.getContext("2d")!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0; const m = { x: -999, y: -999 };
    type P = { x: number; y: number; vx: number; vy: number };
    let pts: P[] = [];
    const size = () => {
      const d = Math.min(devicePixelRatio, 2); w = c.clientWidth; h = c.clientHeight;
      c.width = w * d; c.height = h * d; ctx.setTransform(d, 0, 0, d, 0, 0);
      const n = Math.round(Math.min(90, (w * h) / 15000));
      pts = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25 }));
    };
    const draw = () => {
      if (document.documentElement.dataset.tr === "1") { if (!reduce) raf = requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        if (!reduce) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > w) p.vx *= -1; if (p.y < 0 || p.y > h) p.vy *= -1; }
        const dx = m.x - p.x, dy = m.y - p.y, d = Math.hypot(dx, dy);
        if (d < 160 && !reduce) { p.x += dx * .003; p.y += dy * .003; }
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if (d < 130) { ctx.strokeStyle = `rgba(110,150,255,${(1 - d / 130) * .22})`; ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke(); }
        }
        const near = Math.hypot(m.x - pts[i].x, m.y - pts[i].y) < 160;
        ctx.fillStyle = near ? "#4fd8ff" : "rgba(160,180,255,.55)";
        ctx.beginPath(); ctx.arc(pts[i].x, pts[i].y, near ? 2.2 : 1.4, 0, 7); ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    const move = (e: PointerEvent) => { const r = c.getBoundingClientRect(); m.x = e.clientX - r.left; m.y = e.clientY - r.top; };
    size(); draw();
    addEventListener("resize", size); addEventListener("pointermove", move);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", size); removeEventListener("pointermove", move); };
  }, []);
  return <canvas ref={ref} aria-hidden className="absolute inset-0 h-full w-full" />;
}
