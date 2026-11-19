# Getting found on Google by your name: step-by-step

## Read this first (honest expectations)
- **Nobody can guarantee position 1.** Google decides rankings; what you can do is make it very easy for Google to recognise this site as the official home of *you*.
- **"Md Hasibul Islam" is a very common name in Bangladesh.** Many people share it, so ranking #1 for the bare name will take longer and needs outside signals (Step 5). The realistic early wins are searches like **"Md Hasibul Islam AI"**, **"Hasibul Islam data science"** and **"Md Hasibul Islam Dhaka"**. Once those rank, the bare name usually follows.
- **Timeline:** a new site is typically indexed in a few days to 2 weeks. Ranking for your name usually takes **1 to 3 months** of consistent signals.

---

## Fix first: Google still shows "Android Developer"
Google currently shows your site as "Md Hasibul Islam | Android Developer", and its AI Overview repeats old details (Jetpack Compose, SocialChat, WeatherNow). That text is **not in the current code**, so Google is showing an old copy. There are two possible causes, and both must be handled:
1. **The new version may never have gone live.** Your original code failed `npm run build` (the `ContactForm.tsx` type error, fixed in this version), so every GitHub Actions deploy may have failed and the old site stayed online. Check: GitHub repo → **Actions** tab → is the latest "Deploy to GitHub Pages" run green? After you push this version, it must be green.
2. **Google keeps the old copy until it re-crawls.** After a green deploy:
   - Open the live site → right-click → **View page source** → confirm the `<title>` says "AI & Data Science Student", not "Android Developer".
   - Search Console → URL Inspection → `https://hasibulislamm.com/` → **Test live URL** → then **Request indexing**. Repeat for `/about/`, `/projects/`, `/skills/`.
   - Submit `sitemap.xml` (Step 2).
   - Expect the search title/snippet to update in **a few days to 2 weeks**. The AI Overview updates **after** the page itself is re-indexed, often later.
3. **Other places feed Google the same story.** Update LinkedIn headline/About, the GitHub bio and any other profile that says "Android Developer" to the AI & Data Science wording. Google reads those too.

---

## Step 1. Deploy with your real domain (required first)
1. Buy/choose your domain. A domain with your name (e.g. `hasibulislam.com`, `hasibul.dev`) helps a lot. Avoid a generic one.
2. Your domain `hasibulislamm.com` is already set in `public/CNAME` and `.github/workflows/deploy.yml`. Decide if you want people to see `hasibulislamm.com` or `www.hasibulislamm.com`, and make sure the other one redirects to it (GitHub Pages does this automatically for a correctly configured apex domain).
3. In your domain registrar's DNS, point the domain to GitHub Pages (GitHub docs: "Managing a custom domain for your GitHub Pages site"). In the repo: **Settings → Pages → Custom domain**, then tick **Enforce HTTPS**.
4. Replace `YOUR_FORM_ID` in `components/ContactForm.tsx` with your Formspree form ID, otherwise the contact form can't send.
5. Push to `main`. Open the live site and check these load:
   - `https://hasibulislamm.com/sitemap.xml`
   - `https://hasibulislamm.com/robots.txt`

## Step 2. Set up Google Search Console
1. Go to https://search.google.com/search-console and sign in with your Google account.
2. Click **Add property**.
   - **Recommended: "Domain" property.** Enter `hasibulislamm.com`. Google gives you a **TXT record**; add it in your DNS settings, wait a few minutes, click **Verify**. This covers http/https and www/non-www.
   - **Alternative: "URL prefix"** (`https://hasibulislamm.com/`) → verification method **HTML tag**. Copy only the code inside `content="..."`. In GitHub: **Settings → Secrets and variables → Actions → Variables → New variable**, name `GSC_VERIFICATION`, value = that code. Re-run the deploy workflow, then click **Verify**. (The site is already wired to output the tag.)
3. **Submit the sitemap:** left menu → **Sitemaps** → enter `sitemap.xml` → Submit. Status should become "Success".
4. **Request indexing:** top search bar → paste `https://hasibulislamm.com/` → **Request indexing**. Repeat for `/about/`, `/projects/`, `/education/`, `/skills/`. (Limited per day; do the home and About pages first.)
5. After a few days check **Pages** (indexing report) and **Performance** (which searches show your site).

## Step 3. Confirm the technical setup is read correctly
- **Rich Results Test** (search "Google Rich Results Test") → enter your home URL → it should detect the structured data without errors.
- **PageSpeed Insights** → test home on mobile. Fix anything flagged red.
- Search `site:hasibulislamm.com` on Google. Pages appear here once indexed.
- Use **View source** on the live home page and confirm there is one `<title>`, a `<link rel="canonical">` pointing to your domain, and a JSON-LD block.

## Step 4. Use your name consistently everywhere
Google matches entities by repeating the same name. Always write it **exactly**: `Md Hasibul Islam`. Do not alternate with "MD", "Md.", "Hasibul" unless required.

## Step 5. Build outside signals (this is what moves you to #1)
Do all of these, each linking to your site and using the same name and photo:
1. **LinkedIn:** headline "AI & Data Science Student | Machine Learning", fill About, put your website in **Contact info → Website**, and add it to your Featured section.
2. **GitHub:** put the site URL in your profile's website field, write a short bio in the same wording as your site, and add a pinned README profile (`Hasib-00/Hasib-00` repo). Make this portfolio's repo public with a good description.
3. **Create profiles on AI/data platforms** with the same name, photo and site link: **Kaggle, Hugging Face, Medium or Dev.to, ResearchGate**. Each is a strong, relevant mention.
4. **Your university** (Green University of Bangladesh): ask whether there is a student profile, club page or project showcase that can link to you.
5. **Friends, teachers, communities:** a few genuine links from people's sites or profiles beat many low-quality ones. **Never buy links or use link farms**; it can get the site penalised.

## Step 6. Add real AI and Data Science content over time
Your projects are currently software projects (honest and fine). Google, and recruiters, will rank you for AI/data science once there is proof of it. I did not invent any, so add these as you complete them in `lib/data.ts`:
- A Kaggle notebook or a small machine-learning project (e.g. classification on a public dataset) with the GitHub link.
- A data analysis project with a short write-up.
- Short blog posts or write-ups explaining what you learned. Each one is a new page that can rank for your name plus topic.
Also add real tools to the skills list once you actually use them (e.g. pandas, NumPy, scikit-learn).

## Step 7. Monitor and be patient
- Weekly in Search Console → **Performance** → look at queries containing your name and your average position.
- If a page is "Discovered, currently not indexed", wait 1 to 2 weeks and re-request indexing once.
- After the site is indexed, also check **Google "Results about you"** (in your Google account) to control contact info shown publicly.

## What changed in the code (for reference)
| Area | Change |
|---|---|
| Titles & descriptions | Unique, keyword-aware title and meta description on all 8 pages |
| Canonical & social tags | Each page has its own canonical URL, Open Graph and Twitter card |
| Structured data | schema.org `Person` + `WebSite` JSON-LD with name variants, `knowsAbout`, education and your LinkedIn/GitHub as `sameAs` |
| Crawling | `sitemap.xml` and `robots.txt` generated at build; favicon added |
| Search Console | Optional HTML-tag verification support via env variable |
| Text | Android-first wording on Projects, Experience, Home focus and Skills reframed as an engineering foundation for AI and Data Science; your name added to the About intro |
| Build fix | A type error in `ContactForm.tsx` (pre-existing) that made `npm run build` fail with current framer-motion |
