import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Cursor, ToTop } from "@/components/Extras";
import Background from "@/components/Background";
import SmoothScroll from "@/components/SmoothScroll";
import { TransitionProvider } from "@/components/Transition";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Md Hasibul Islam | AI & Data Science", template: "%s | Md Hasibul Islam" },
  description: "Portfolio of Md Hasibul Islam, AI and Data Science enthusiast building with machine learning, data and software.",
  openGraph: { title: "Md Hasibul Islam | AI & Data Science", description: "AI, machine learning, data science and software development.", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-black">Skip to content</a>
        <TransitionProvider><SmoothScroll /><Background /><Nav /><main id="main" className="flex-1">{children}</main><Footer /><ToTop /><Cursor /></TransitionProvider>
      </body>
    </html>);
}
