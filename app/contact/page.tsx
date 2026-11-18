import type { Metadata } from "next";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { PageHead, Wrap } from "@/components/Page";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/lib/data";
export const metadata: Metadata = { title: "Contact" };
export default function Contact() {
  const L = [[Mail, profile.email, `mailto:${profile.email}`], [Linkedin, "LinkedIn", profile.linkedin], [Github, "GitHub", profile.github]] as const;
  return (<><PageHead title="Get in touch" lead="Open to collaboration, internships and conversations about AI and data." />
    <Wrap><div className="grid gap-8 md:grid-cols-[1fr_1.3fr]">
      <ul className="space-y-3">{L.map(([I, t, h]) => <li key={t}><a href={h} target={h.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="glass flex items-center gap-4 rounded-2xl p-5 transition hover:border-cyan/50"><I className="text-cyan" />{t}</a></li>)}
        <li className="flex items-center gap-4 p-5 text-mute"><MapPin />{profile.location}</li></ul>
      <ContactForm /></div></Wrap></>);
}
