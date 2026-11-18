"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./Page";

const steps = [
  { t: "BSc in Artificial Intelligence and Data Science", d: "In progress. Machine learning, deep learning, data science and analytics." },
  { t: "Android Mobile Application Development (Level 4)", d: "Professional training certified by the National Skill Development Authority." },
  { t: "Academic internship in Flutter", d: "Mobile application development at Daffodil International Professional Training Institute." },
  { t: "Diploma in Computer Science & Technology", d: "Dhaka Polytechnic Institute: programming, databases and software development." },
];
export default function Journey() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const h = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div ref={ref} className="relative space-y-8 pl-9">
      <span className="absolute left-0 top-0 h-full w-px bg-edge" />
      <motion.span style={{ height: h }} className="absolute left-0 top-0 w-px bg-gradient-to-b from-cyan to-violet" />
      {steps.map((s, i) => (
        <Reveal key={s.t} i={i * .5}><div className="relative"><span className="absolute -left-[41px] top-2 h-3 w-3 rounded-full bg-cyan shadow-[0_0_12px_#4fd8ff]" /><h3 className="font-display text-xl">{s.t}</h3><p className="mt-1 text-mute">{s.d}</p></div></Reveal>))}
    </div>);
}
