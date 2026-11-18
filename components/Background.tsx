"use client";
import dynamic from "next/dynamic";
const Particles = dynamic(() => import("./Particles"), { ssr: false });
/** Persistent backdrop. Glows are plain radial gradients (no blur filters), which are far cheaper to animate. */
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="orb absolute -left-60 top-[0%] h-[48rem] w-[48rem] rounded-full" style={{ background: "radial-gradient(circle, rgba(139,123,255,.22), transparent 68%)" }} />
      <div className="orb absolute -right-48 bottom-[-10%] h-[42rem] w-[42rem] rounded-full" style={{ background: "radial-gradient(circle, rgba(79,216,255,.16), transparent 68%)", animationDelay: "-8s" }} />
      <div className="bg-grid absolute inset-0" />
      <Particles />
    </div>);
}
