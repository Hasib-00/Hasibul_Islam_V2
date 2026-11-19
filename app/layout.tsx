import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Cursor, ToTop } from "@/components/Extras";
import Background from "@/components/Background";
import SmoothScroll from "@/components/SmoothScroll";
import { TransitionProvider } from "@/components/Transition";
import { SITE, SITE_URL, abs } from "@/lib/site";
import { profile } from "@/lib/data";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE.title, template: "%s | Md Hasibul Islam" },
  description: SITE.description,
  keywords: SITE.keywords,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: abs("/") }],
  creator: SITE.name,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", siteName: SITE.name, locale: "en_US", title: SITE.title, description: SITE.description, images: [{ url: SITE.image, width: 900, height: 900, alt: "Portrait of Md Hasibul Islam, AI and Data Science student" }] },
  twitter: { card: "summary", title: SITE.title, description: SITE.description, images: [SITE.image] },
  // Search Console "HTML tag" verification. Put only the code (content="...") in NEXT_PUBLIC_GSC_VERIFICATION. Not needed if you verify by DNS.
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } : undefined,
};

// Structured data (JSON-LD): tells Google this site is the official site of one specific Person.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": `${abs("/")}#website`, url: abs("/"), name: SITE.name, description: SITE.shortDescription, inLanguage: "en", publisher: { "@id": `${abs("/")}#person` } },
    {
      "@type": "Person", "@id": `${abs("/")}#person`, name: SITE.name, alternateName: SITE.alternateNames,
      url: abs("/"), image: `${SITE_URL}${SITE.image}`, jobTitle: SITE.jobTitle,
      description: SITE.description, knowsAbout: SITE.knowsAbout,
      homeLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" } },
      affiliation: { "@type": "CollegeOrUniversity", name: "Green University of Bangladesh" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Dhaka Polytechnic Institute" },
      sameAs: [profile.linkedin, profile.github],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-black">Skip to content</a>
        <TransitionProvider><SmoothScroll /><Background /><Nav /><main id="main" className="flex-1">{children}</main><Footer /><ToTop /><Cursor /></TransitionProvider>
      </body>
    </html>);
}
