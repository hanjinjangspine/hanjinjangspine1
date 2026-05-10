# Hanjin Jang, MD Academic Microsite

English academic physician profile and clinical knowledge base for Hanjin Jang, MD, focused on biportal endoscopic spine surgery, UBE, UBE-TLIF, endoscopic lumbar fusion, revision spine surgery, lumbar spinal stenosis, adjacent segment disease, and complex degenerative lumbar spine disease.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static-friendly routes and generated sitemap/robots
- Schema.org JSON-LD for professional profile, physician, medical organization, articles, breadcrumbs, and FAQ pages

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For production:

```bash
npm run build
npm run start
```

## Editing Content

Most editable academic content lives in:

- `lib/site.ts` for site name, URLs, navigation, profile keywords, and institution details
- `lib/content.ts` for clinical focus sections, technique pages, case templates, academic activity, and operative concept articles
- `app/contact/page.tsx` for official hospital contact placeholders
- `public/og-image.svg` for the social preview image

Before publishing, replace placeholders for publications, lectures, case metrics, hospital URL, official contact channels, and any verified biographical details.

## SEO and Structured Data

SEO metadata is generated through `lib/metadata.ts`. Structured data helpers are in `lib/schema.ts`.

Included structured data:

- `Person`
- `Physician`
- `MedicalOrganization`
- `WebSite`
- `Article`
- `BreadcrumbList`
- `FAQPage`

The robots route allows indexing and explicitly allows `OAI-SearchBot`, `GPTBot`, and `ChatGPT-User`. OpenAI's current crawler documentation recommends allowing `OAI-SearchBot` for ChatGPT search visibility: https://platform.openai.com/docs/bots/

## Canonical URL

The production canonical URL is fixed in `lib/site.ts` as `https://hanjinjangspine1.com`.
Sitemap, robots, canonical metadata, Open Graph URLs, and JSON-LD URLs are generated from that value.

## Deploying to Vercel

1. Push the project to a Git repository.
2. Import the repository into Vercel.
3. Confirm the deployment domain is `https://hanjinjangspine1.com`.
4. Deploy.
5. After deployment, confirm:
   - `/sitemap.xml`
   - `/robots.txt`
   - page titles and meta descriptions
   - JSON-LD output in the rendered HTML

## Editorial Guardrails

This site is written as an academic physician-authored resource, not a patient advertisement. Keep future edits neutral and avoid promotional claims, anecdotal endorsements, or outcome promises. Use language such as clinical focus, surgical concept, technical considerations, limitations, risks, patient selection, and imaging-symptom concordance.
