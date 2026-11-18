"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Tilt } from "./Motion";
export default function Avatar() {
  const [ok, setOk] = useState(true);
  return (
    <Tilt max={10} className="aspect-square w-64 md:w-80">
      <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan/30 to-violet/30 blur-2xl" />
      <motion.div className="glass relative h-full w-full overflow-hidden rounded-[2rem]" initial={{ clipPath: "inset(100% 0 0 0)" }} animate={{ clipPath: "inset(0% 0 0 0)" }} transition={{ duration: 1.1, delay: 1.6, ease: [.2, .8, .2, 1] }}>
        {ok ? /* eslint-disable-next-line @next/next/no-img-element */ <img src="/profile.jpg" alt="Portrait of Md Hasibul Islam" className="h-full w-full object-cover" onError={() => setOk(false)} />
          : <div className="grid h-full place-items-center font-display text-7xl grad-text">MHI</div>}
      </motion.div>
    </Tilt>);
}
