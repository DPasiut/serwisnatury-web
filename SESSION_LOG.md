# Session log — 2026-09-16

Summary of the work done in this session, for context in future sessions.

## Gallery system (file-based, no CMS/backend)

- Static site → photos live in `public/images/gallery/<key>/`, one folder per section.
- `scripts/generate-gallery-manifest.mjs` scans those folders and writes
  `src/app/core/gallery-manifest.generated.ts` (a `Record<string, string[]>`).
  Runs via `prebuild`/`pretest` npm hooks, and continuously via `scripts/dev.mjs`
  (used by `npm start`) which watches `public/images/gallery/` with `fs.watch`
  and regenerates on change — no restart needed while developing.
- `GalleryService.photos(key)` just reads the generated manifest. No
  `localStorage`, no admin add/remove UI — that was removed (`AdminService`
  deleted too, it had no other use).
- Gallery keys in use: `wycinka`, `modelowanie`, `frezowanie`, `rebak`,
  `zywoploty`, `krzewy`, `about`, `hero`, `tuje-oferta` (kopane z gruntu — now
  listed first), `tuje-oferta-sadzonki` (p9/sadzonki), `tuje-realizacje`,
  `fspirala`, `fbonsai`. Keys were renamed by the user directly on disk at one
  point (`k150`→`tuje-oferta`, `p9`→`tuje-oferta-sadzonki`, `tuje`→
  `tuje-realizacje`) — `content.ts`/`TUJE_GALLERY_TITLES` were updated to
  match; folder name = gallery key, always.
- Hero section (`hero.ts`) now pulls its 3 background slices from
  `gallery.photos('hero')` instead of hardcoded image paths.
- Gallery thumbnail crop (`object-fit`) was tried as `contain` then a
  variable-aspect-ratio layout, per user's request — both were reverted back
  to the original `cover` + fixed aspect-ratio (square / 16:10) tiles.

## Site-wide config

- `src/app/core/site-config.ts` — single source of truth for phone numbers,
  email, social links, map link/embed, `SITE_NAME`/`SITE_TLD`/`SITE_DOMAIN`,
  and the `tel()` href helper. Previously these lived scattered inside
  `content.ts`; now every section imports from `site-config.ts` instead.
- Phone constants were renamed by the user on disk: `PHONE_SALES` →
  `PHONE_DOMINIK`, `PHONE_QUOTES` → `PHONE_SZYMON`.
- `SHOW_FACEBOOK = false` flag added — Facebook links hidden site-wide
  (header + contact) until the user has an actual Facebook page. Flip to
  `true` and set `FACEBOOK` once it exists.
- Footer copyright year is now computed (`new Date().getFullYear()`) instead
  of hardcoded; brand name in the header comes from `SITE_NAME`/`SITE_TLD`.

## Sections

- **Reviews section removed entirely** (component, template, styles, spec,
  and its wiring in `app.ts`/`app.html`).
- **About section** reworked to match the site's `.page` (1180px) + `.split`
  two-column layout used by Services/Thuja, instead of a narrow `max-width:
  42em` block. A gallery column was added and then removed again by the user
  (currently just the text, full-width).
- **About text** (`body`/`closing`) switched from plain interpolation
  (`{{ }}`) to `[innerHTML]` binding so `<strong>`/`<p>`/`<ul>` render — the
  wrapping tag changed from `<p>` to `<div>` since `<p>` can't nest. Angular's
  built-in DOM sanitizer handles safety (content is hardcoded, not user
  input, so no `bypassSecurityTrustHtml` needed). EN copy was translated to
  match the current PL content (kept in sync twice already — re-check EN
  whenever PL changes, the user has been editing PL directly and asking for
  EN sync afterwards).
- **Thuja section**: `tuje-oferta` ("Kopane z gruntu") reordered to appear
  before `tuje-oferta-sadzonki` ("Sadzonki") — first entry in the `TUJE`
  array is what's active/shown by default.
- **Contact section**: quote form hidden behind `showQuoteForm = false` in
  `contact.ts` (no backend to send it anywhere yet — `submit()` just sets
  `sent = true`, does not actually send). Layout reworked into `.contact__info`
  (3-column grid: phones / email / social) spanning the full page width
  instead of one narrow column, since the form column is gone for now.
  Re-enable by flipping `showQuoteForm` once a form backend exists.
- **Hero**: background photos come from `gallery.photos('hero')` now; fixed
  a bug where narrowing the photo box to reduce zoom left diagonal triangles
  uncovered (clip-path bounding box must match exactly:
  slice1 x:[0,42], slice2 x:[18,82], slice3 x:[58,100]). Veil overlay opacity
  reduced (0.9/0.76/0.6 → 0.7/0.56/0.4) to lighten the section per request.

## Contact form — no backend yet

Site is static (GitHub Pages), so the quote form has nowhere to submit to.
Discussed options: Web3Forms / Formspree (free, client-side POST, no backend
needed) vs EmailJS vs a serverless function. **Not decided yet** — user asked
to just hide the form for now. Revisit when ready to wire up sending.

## Git & deployment

- Repo initialized and pushed to `https://github.com/DPasiut/serwisnatury-web`
  (was not a git repo before this session).
- `.github/workflows/deploy.yml` (already existed, untouched logic) builds
  with `ng build` and deploys to GitHub Pages via `actions/deploy-pages@v4`.
- Repo had to be switched from **private → public** — GitHub Pages on the
  free plan doesn't work on private repos. Confirmed with the user first.
- First deploy failed: Pages wasn't enabled on the repo at all. Enabled via
  `gh api -X POST repos/DPasiut/serwisnatury-web/pages -f build_type=workflow`.
- Second deploy succeeded but the site was broken (missing images, service
  picker not working) because `<base href="/">` in `src/index.html` didn't
  match the GitHub Pages project-page subpath
  (`https://dpasiut.github.io/serwisnatury-web/`). Fixed temporarily by
  building with `--base-href /serwisnatury-web/` and removing `public/CNAME`
  for that test.
- User then asked to switch to the real custom domain (`serwisnatury.pl`,
  `CNAME` file was already in the repo from before this session). Reverted
  the base-href override back to default `/`, restored `public/CNAME`, and
  set the custom domain via
  `gh api -X PUT repos/DPasiut/serwisnatury-web/pages -f cname=serwisnatury.pl`.
- Walked the user through adding 4 GitHub Pages A records at their DNS
  registrar (host field left empty = apex domain):
  `185.199.108.153`, `.109.153`, `.110.153`, `.111.153`
  (AAAA optional: `2606:50c0:8000::153` … `8003::153`; `www` CNAME →
  `dpasiut.github.io` if wanted).
- DNS records confirmed live via `dig @8.8.8.8 serwisnatury.pl A` and a
  direct `curl --resolve` returned `200 OK` from GitHub's edge — the site is
  reachable at the IP level. The user's own browser still shows
  `DNS_PROBE_FINISHED_NXDOMAIN` — this is local DNS cache / propagation
  delay on their end, not a config problem. `https_enforced` was still
  `false` at last check — GitHub's automatic TLS cert issuance follows once
  DNS is verified, can take up to ~an hour. **Worth checking back**: has
  `https_enforced` flipped to `true` yet
  (`gh api repos/DPasiut/serwisnatury-web/pages`), and does
  `https://serwisnatury.pl` load correctly end to end.

## README.md

Added, documents the project as **Stage 1** (static site, no backend) and
lists the planned next stages: admin panel, admin-managed photo add/remove,
admin content editing, visit/traffic statistics, SEO work, and a working
contact form backend.

## Working style notes for this user

- Always explain a change and wait for approval before making it (global
  CLAUDE.md rule) — except read-only/inspection actions.
- When a UI/visual change is ambiguous, use AskUserQuestion rather than
  guessing (was done for the contact-section width request and the GitHub
  Pages domain/visibility tradeoff).
- The user edits code directly on disk between turns fairly often (renamed
  gallery folders, renamed phone constants, tweaked about.ts copy). Treat
  disk-state-changed notices as authoritative, don't revert them, and rebase
  subsequent edits on top of what's actually there.
- Prefers minimal, reversible changes (feature flags like `showQuoteForm` /
  `SHOW_FACEBOOK` rather than deleting code that will come back soon).
