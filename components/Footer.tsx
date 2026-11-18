import { TLink as Link } from "@/components/Transition";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile, nav } from "@/lib/data";
export default function Footer() {
  return (
    <footer className="border-t border-edge">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div><p className="font-display text-lg">{profile.name}</p><p className="text-sm text-mute">AI & Data Science, Dhaka</p></div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-mute">{nav.map((n) => <Link key={n.href} href={n.href} className="hover:text-white">{n.label}</Link>)}</nav>
        <div className="flex gap-4 text-mute">
          <a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan"><Linkedin size={20} /></a>
          <a aria-label="GitHub" href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan"><Github size={20} /></a>
          <a aria-label="Email" href={`mailto:${profile.email}`} className="hover:text-cyan"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
