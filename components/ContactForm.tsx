"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";

type Key = "name" | "email" | "subject" | "message";
type Errs = Partial<Record<Key, string>>;
const empty: Record<Key, string> = { name: "", email: "", subject: "", message: "" };
const field = "w-full rounded-xl border border-edge bg-white/[.03] px-4 py-3 outline-none transition focus:border-cyan/60 focus:shadow-[0_0_0_4px_rgba(79,216,255,.08)]";

export default function ContactForm() {
  // Controlled inputs: what you type lives in state, so it can never be lost by a re-render, an error or a failed send.
  const [v, setV] = useState(empty);
  const [errs, setErrs] = useState<Errs>({});
  const [state, setState] = useState<"idle" | "sending" | "ok" | "fail">("idle");
  const [msg, setMsg] = useState(""); const [n, setN] = useState(0);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); const er: Errs = {};
    if (v.name.trim().length < 2) er.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(v.email.trim())) er.email = "Enter a valid email address.";
    if (v.subject.trim().length < 3) er.subject = "Add a short subject.";
    if (v.message.trim().length < 20) er.message = "Write at least 20 characters.";
    setErrs(er); if (Object.keys(er).length) { setN((x) => x + 1); setState("idle"); return; }
    setState("sending");
    try {
      const r = await fetch("https://formspree.io/f/YOUR_FORM_ID", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(v) });
      const d = await r.json().catch(() => ({})); if (!r.ok) throw new Error(d.error || "Message not sent. Email me directly instead.");
      setState("ok"); setV(empty); // cleared only after a successful send
    } catch (x) { setMsg((x as Error).message || "Message not sent. Email me directly instead."); setState("fail"); /* text stays */ }
  }

  const F = (id: Key, label: string, i: number, type = "text") => (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .5 + i * .08 }}>
      <label htmlFor={id} className="mb-1.5 block text-sm text-mute">{label}</label>
      {/* The shake alternates between two keyframe names so it replays without re-creating (and clearing) the input. */}
      <div style={errs[id] ? { animation: `${n % 2 ? "shakeA" : "shakeB"} .4s` } : undefined}>
        {id === "message"
          ? <textarea id={id} name={id} rows={6} value={v[id]} onChange={(e) => setV({ ...v, [id]: e.target.value })} aria-invalid={!!errs[id]} className={field} />
          : <input id={id} name={id} type={type} value={v[id]} onChange={(e) => setV({ ...v, [id]: e.target.value })} aria-invalid={!!errs[id]} className={field} />}
      </div>
      <AnimatePresence>{errs[id] && <motion.p role="alert" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-1 text-sm text-red-400">{errs[id]}</motion.p>}</AnimatePresence>
    </motion.div>);

  return (
    <form onSubmit={submit} noValidate className="glass space-y-5 rounded-3xl p-7">
      <div className="grid gap-5 sm:grid-cols-2">{F("name", "Name", 0)}{F("email", "Email", 1, "email")}</div>
      {F("subject", "Subject", 2)}{F("message", "Message", 3)}
      <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: .96 }} disabled={state === "sending"} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-violet px-6 py-3 font-medium text-black disabled:opacity-60">
        {state === "sending" ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}{state === "sending" ? "Sending" : "Send message"}</motion.button>
      <div aria-live="polite" className="min-h-6">
        <AnimatePresence mode="wait">
          {state === "ok" && <motion.p key="ok" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-cyan">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" opacity=".3" /><motion.path d="M7 12.5l3.2 3.2L17 9" initial={{ pathLength: 0 } as never} animate={{ pathLength: 1 } as never} transition={{ duration: .6, delay: .15 }} /></svg>Message sent. I will reply by email.</motion.p>}
          {state === "fail" && <motion.p key="fail" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-red-400">{msg} Your text is still here, so you can try again.</motion.p>}
        </AnimatePresence></div>
    </form>);
}
