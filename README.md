# Norse Gods — norsegods.org

The Norse mythology database: every god, giant, creature, realm, artifact, myth, and primary
source — searchable, cross-referenced, cited back to the Eddas, and built to be consumed by
humans, search engines, and AI models alike.

## Stack

- **Next.js 15** (App Router, TypeScript) — fully static-generated pages
- **No CMS**: the mythology lives as structured TypeScript records in `src/data/`
- Deployable to Vercel as-is (`vercel --prod`), domain: `norsegods.org`

## Architecture

Content is a database, not pages. Every entity (Odin, Mjölnir, Ragnarök…) is a record in
`src/data/<category>.ts` conforming to the `Entity` type (`src/data/types.ts`):
name, Old Norse form, pronunciation, epithets, summary, body paragraphs, at-a-glance facts,
cross-references to other entities, and primary-source attestations.

From those records the site generates:

| Surface | Where |
|---|---|
| Entity pages (`/gods/odin`, `/realms/asgard`, …) | `src/app/[category]/[slug]/page.tsx` |
| Category indexes (`/gods`, `/creatures`, …) | `src/app/[category]/page.tsx` |
| Instant client-side search | `src/components/SearchBox.tsx` |
| JSON-LD structured data (Article + BreadcrumbList + WebSite) | in each page |
| `sitemap.xml`, `robots.txt` | `src/app/sitemap.ts`, `robots.ts` |
| `llms.txt` (AI-readable index) | `src/app/llms.txt/route.ts` |
| Full database as JSON (`/api/db`) | `src/app/api/db/route.ts` |

## Growing the database

Add a record to the right file in `src/data/` (or a new category: add it to
`types.ts` + `index.ts`). Everything else — page, search, sitemap, llms.txt, API —
picks it up automatically at build.

## Develop

```bash
npm install
npm run dev
```
