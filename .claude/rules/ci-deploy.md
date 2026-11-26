---
paths:
  - ".github/workflows/**"
  - "src/index.html"
  - "angular.json"
  - "public/robots.txt"
  - "public/sitemap.xml"
---

# CI and deploy

- Hosting is Cloudflare Pages only. Secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.
  - `deploy-dev.yml`: push to `main` → `pages deploy dist/serwisnatury/browser --project-name=serwisnatury`
  - `deploy-prod.yml`: tag `v*.*.*` → same command with `--branch=main` (production)
- `ci.yml` runs on PRs to `main`: `npm ci`, `tsc --noEmit`, `ng build`, `ng test --watch=false --browsers=ChromeHeadless`.
- Custom domains `serwisnatury.pl` and `www.serwisnatury.pl` are attached to the Pages project; DNS zone is hosted in Cloudflare (registrar: home.pl). No `CNAME` file is needed in `public/`.
- `https://serwisnatury.pl/` (apex) is the canonical URL used in `canonical`, `og:url`, `sitemap.xml` and `robots.txt`.
- GitHub Pages is no longer used — do not reintroduce a GitHub Pages workflow.
- `<base href="/">` in `src/index.html` must stay `/` — the site is served from the domain root. A sub-path base href breaks assets, JS and routing.
- Release Please was removed; versioning is manual (see README).
