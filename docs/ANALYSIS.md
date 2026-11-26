# walkingtree.co: repo analysis and custom CMS plan (Supabase + Vercel)

## 1. What exists

| Repo | Role | Stack |
|---|---|---|
| `walkingtree_frontend` | Live site (confirmed: walkingtree.co serves this app, images from cdn.sanity.io/1me0hcdt) | Next.js 12.1 (pages router, SSG via `getStaticProps`), React 18, Redux, GSAP, Swiper/Slick, Sass |
| `walkingtree_sanity` | Sanity Studio v2 (`projectId 1me0hcdt`, dataset `production`) | ~190 schema files, ~7.5k lines |

Sanity is used for: structured content (GROQ), rich text (portable text via `@sanity/block-content-to-react`), image CDN and transforms (`@sanity/image-url`), video/file hosting (`buildFileUrl`), and the Studio UI (desk structure plus a "preview" URL resolver pointing at `walkingtree-staging.vercel.app/preview`).

## 2. Content model

**Core idea: a page builder.** Almost every page is `pageDetails { seo, name, uri, content }` + a `heroModule`, where `content` is a `blockContent` array.
That array holds normal rich text plus about 90 section types (`threeStepText`, `collectionCarousel`, `meetTheTeam`, `videoSection`, `exploreArticle`, ...). `serialiser.js` maps each `_type` to one of about 190 React components.

**Document types (10):**

| Type | Route on site | Notes |
|---|---|---|
| `home` (singleton `home_en`) | `/` | hero and page builder |
| `businessToBusiness` (singleton) | `/business-to-business` | |
| `designStudio` | `/business-to-business/[slug]` | pageTitle, pageDetails, heroModule |
| `directToConsumer` | `/direct-to-consumer/[slug]` | Aneka, Unsaid |
| `creativeProcess` | `/creative-process/[slug]` | |
| `group` (singleton `group_en`) and `csr` | `/our-story`, `/our-story/[slug]` | |
| `cultureAndCareers` (singleton), `people` | `/people`, `/people/[slug]` | |
| `jobOpening` and `department` | `/people/job-openings/[slug]` | slug, location, 3x heading+points |
| `article`, `articleCategory`, `blogCategoryPage` | `/article/[slug]`, `/blog`, `/articles` | many images, order fields, SEO, author |
| `contact` (singleton) | `/contact-us` | |
| `menu` (commented out) | menu is hardcoded in `staticData/menuData.js` | should become CMS-driven |

**Reusable object types:** SEO (title, image, description, all required), `callToAction`, `textContent`, `imageCollection`, `videoSchema` (desktop and mobile file), `singleImageBanner`, `countItem`, footer link panels.

**Field type usage:** string 271, object 182, image 177, text 170, array 45, boolean 24, number 23, reference 12, file 6, slug 3. Images dominate, and nearly every image has a desktop/mobile pair.

## 3. Findings and risks

- **Section sprawl.** Many of the ~90 sections are near-duplicates (`threeStepText*` x8, `twoImage*` x6, `imageAndText*` x5). Don't port 1:1. Consolidate to ~25-30 configurable blocks.
- **Hardcoded content.** The nav menu, footer, plus `staticData/` and some logos live in code. These should become CMS content.
- **Unused or incomplete code.** `API_URL: http://localhost:8080` in `config.js`, `home_d.js`, `loading2.js`, `article1.js`, `certificateAndBrandLogoSlider.js.js`. The contact and application forms need checking, since there is no visible backend (likely Mailchimp via `chimpstatic`).
- **Heavy repo.** `public/` is 562 MB (304 MB images, 224 MB video). These should move to Supabase Storage.
- **Dated deps.** Next 12.1.6, Sanity v2 (end-of-life). A rebuild on Next 15 (App Router) is warranted anyway.
- **Preview.** Uses a token-based draft fetch on `/preview/*` duplicate pages, which can be replaced by Next Draft Mode.
- **Secrets.** Preview uses `SANITY_PREVIEW_TOKEN`. There is no `.env` in the repo.
- **Fonts.** Typekit (Adobe) kits are loaded, so check licensing before the move. 33 MB of local fonts are also present.

## 4. Target architecture

```
Vercel
 ├─ apps/web   Next.js 15 (App Router, ISR + on-demand revalidation, Draft Mode)
 └─ apps/admin Next.js admin (same repo or /admin route group), our own "Studio"

Supabase
 ├─ Postgres  (content tables + JSONB sections, RLS)
 ├─ Auth      (editors/admins, roles)
 ├─ Storage   (images, video, PDFs; public bucket + transforms)
 └─ Edge Fn / DB webhooks → Vercel revalidate hook
```

### Data model (Postgres)

- `pages` (id, type, slug, path, title, status draft|published, hero jsonb, seo jsonb, sections jsonb[], locale, published_at, updated_by)
- `page_versions` (page_id, snapshot jsonb, created_at, author): history, restore, draft vs published
- `articles`, `article_categories`, `article_category_map`
- `people_profiles`, `job_departments`, `job_openings`
- `navigation` (menu tree jsonb) and `site_settings` (footer, social, contact, global SEO)
- `media` (id, bucket path, kind, width, height, alt, focal point, mobile_variant_id)
- `form_submissions` (contact, job applications)
- `profiles` (user_id, role: admin|editor|viewer) with RLS on all tables

Sections are stored as an ordered JSON array of `{ id, type, data }`. Each block type has a Zod schema that is the single source of truth. It validates in the admin, drives the form UI, and types the frontend renderer.

### Admin CMS features (Sanity parity)

1. Schema-driven form builder from the Zod/JSON schemas: strings, rich text (Tiptap), image/video pickers, references, arrays with drag-reorder, conditional fields.
2. Page builder UI: add, reorder, duplicate and remove sections, with field validation.
3. Media library: upload, crop and focal point, alt text, desktop/mobile pairing, usage tracking.
4. Draft, publish, schedule and version history.
5. Live preview via Next Draft Mode (iframe side-by-side).
6. Roles and audit log via Supabase Auth and RLS.
7. Menu and footer editor, redirects, SEO and sitemap management.
8. Webhook to revalidate affected paths on publish.

## 5. Phases

0. **Discovery** (done): this document.
1. **Foundation:** monorepo, Supabase project, schema and RLS migrations, auth, admin shell.
2. **Content migration:** script that exports Sanity (`sanity dataset export`) and the asset CDN, then transforms into Supabase rows and Storage uploads, rewriting image refs and portable text.
3. **Frontend port:** Next 15 renderer, with the block registry consolidating the 190 components down to ~30 while keeping the visual design (GSAP animations, styles).
4. **Admin builder:** forms, media, drafts and versions, preview.
5. **Parity QA:** visual diff against the live site, SEO and redirect checks, forms. Then cut over DNS on Vercel.
6. **Decommission Sanity.**

## 6. Open questions

1. Does the new site need pixel-identical visuals (preferred) or can we modernise?
2. Who are the editors and how many? Do we need roles, approvals or scheduling?
3. Single locale (English) only? The Sanity IDs suggest `_en` suffixes for future locales.
4. Where do the forms go today (Mailchimp, email, other)? Is `wt_api` involved?
5. Is `wt-engineering/aneka_frontend` and `unsaid_next` content in scope, or only walkingtree.co?
6. One monorepo for site and admin, or separate deployments?
