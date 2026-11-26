# serwisnatury-web

Business-card website for serwisnatury.pl (tree removal, green-space care, Emerald Thuja sales; Małopolska).
Angular 21, standalone components, SSR with every route prerendered (`app.routes.server.ts`), bilingual PL/EN.

Project overview, stages roadmap and versioning policy: @README.md

## Current stage

Stage 1: static site, no backend, no CMS. Content is hardcoded in TypeScript, photos are static files.
Contact form is hidden (`showQuoteForm = false` in `src/app/sections/contact/contact.ts`) because there is nowhere to submit it yet.
Stage 2 (admin panel, backend) is planned in `docs/stage-2-admin-plan.md` — do not start it unless asked.

## Commands

- `npm start` — dev server plus gallery watcher (`scripts/dev.mjs`); adding photos needs no restart
- `npm run build` — production build (`prebuild` regenerates the gallery manifest)
- `npm test` — Karma + Jasmine (`pretest` regenerates the gallery manifest)
- Node version is pinned in `.nvmrc` (24.x)

Before pushing, run what CI runs on PRs (`.github/workflows/ci.yml`):

```bash
npx tsc --noEmit -p tsconfig.json
npx ng build
npx ng test --watch=false --browsers=ChromeHeadless
```

## Layout

- `src/app/core/` — services (`GalleryService`, `LangService`, `LightboxService`), `t` pipe, content and config
- `src/app/core/site-config.ts` — single source of truth for phones, email, social links, map, brand name, `tel()` helper
- `src/app/core/content.ts` — UI copy only: nav, services list, thuja groups, area lists
- `src/app/sections/<name>/` — one component per page section (header, hero, about, services, thuja, area, contact, footer)
- `src/app/shared/` — reusable UI: `gallery`, `lightbox`, `icons`
- `public/images/gallery/<key>/` — gallery photos, one folder per gallery key
- `scripts/` — `generate-gallery-manifest.mjs`, `dev.mjs`

## Conventions

- Code, comments, commits and PR descriptions in English. User-facing copy in Polish with English translation.
- Formatting: Prettier config in `package.json` (printWidth 100, single quotes), 2-space indent per `.editorconfig`.
- Contact and brand values are imported from `site-config.ts`, never hardcoded in sections or `content.ts`.
- Prefer reversible boolean feature flags (`SHOW_FACEBOOK`, `showQuoteForm`) over deleting functionality likely to return.
- Every component change ships with a spec; existing specs live next to services in `src/app/core/*.spec.ts`.
- Never edit `src/app/core/gallery-manifest.generated.ts` by hand.

## Deploy

Hosting is Cloudflare Pages (project `serwisnatury`, output `dist/serwisnatury/browser`); development and CI/CD stay on GitHub + GitHub Actions (`wrangler-action`):

- push to `main` → dev preview at `dev.serwisnatury.pages.dev` (`.github/workflows/deploy-dev.yml`)
- tag `vX.Y.Z` → production at `https://serwisnatury.pl` (`.github/workflows/deploy-prod.yml`)

Production releases follow the manual SemVer flow in README: bump `package.json`, then `git tag -a vX.Y.Z` and `git push --tags`.
