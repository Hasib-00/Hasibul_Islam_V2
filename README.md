# Md Hasibul Islam — Portfolio

Static Next.js site, deployed to GitHub Pages.

## Before publishing, replace these placeholders
1. Domain: already set to `hasibulislamm.com` in `public/CNAME` and `.github/workflows/deploy.yml`.
2. `YOUR_FORM_ID` in `components/ContactForm.tsx` (your Formspree form ID). Until then the contact form cannot send.

## SEO files (all content/SEO only, no design)
- `lib/site.ts`: site URL, name variants, default title/description, keywords. Edit wording here.
- `lib/seo.ts`: builds each page's title, description, canonical and social-card tags.
- `app/layout.tsx`: global metadata and the JSON-LD (schema.org Person + WebSite) block.
- `app/sitemap.ts` and `app/robots.ts`: generate `/sitemap.xml` and `/robots.txt` at build time.
- `app/icon.svg` and `app/favicon.ico`: favicon shown next to your result in Google.
- Each `app/*/page.tsx` has its own `pageMeta({ title, description, path })` line.

The full step-by-step ranking plan is in `SEO-GUIDE.md`.

Local: `npm install` then `npm run dev`. Build check: `npm run build` (creates `out/`).
Photo: `public/profile.jpg`. All content lives in `lib/data.ts`.
