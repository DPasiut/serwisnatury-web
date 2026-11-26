---
paths:
  - "src/app/core/content.ts"
  - "src/app/core/site-config.ts"
  - "src/app/core/lang.service.ts"
  - "src/app/sections/**"
---

# Content and translations

- Every user-facing text is a `Copy` pair `{ pl, en }` (see `lang.service.ts`), rendered with the `t` pipe (`{{ copy | t }}`) or `LangService.text()`.
- Polish is the primary language. When PL copy changes, update the EN translation in the same change.
- The user often edits PL copy directly on disk — when asked to "sync EN", translate the current PL as it is on disk.
- About section (`sections/about/about.ts`) stores HTML strings and renders them with `[innerHTML]` on a `<div>` (not `<p>`, which cannot nest block elements). Angular's built-in sanitizer is enough because content is hardcoded — do not add `bypassSecurityTrustHtml`.
- Contact and brand values (`PHONE_DOMINIK`, `PHONE_SZYMON`, `EMAIL`, `INSTAGRAM`, `FACEBOOK`, `MAP_LINK`, `MAP_EMBED`, `SITE_NAME`, `SITE_TLD`, `SITE_DOMAIN`) come from `site-config.ts`; build `tel:` links with `tel()`.
- `SHOW_FACEBOOK = false` hides Facebook links site-wide until a real page exists.
- Sections use the shared `.page` container (1180px) and `.split` two-column layout; new sections should match it.
