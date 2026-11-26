---
paths:
  - "public/images/gallery/**"
  - "scripts/**/*.mjs"
  - "src/app/core/gallery*.ts"
  - "src/app/shared/gallery/**"
  - "src/app/shared/lightbox/**"
---

# Gallery system

- File-based, no CMS, no localStorage, no admin UI. Photos live in `public/images/gallery/<key>/`.
- `scripts/generate-gallery-manifest.mjs` scans those folders and writes `src/app/core/gallery-manifest.generated.ts` (`Record<string, string[]>`). It runs via `prebuild`/`pretest` and live via `scripts/dev.mjs` (`fs.watch`).
- `GalleryService.photos(key)` only reads the generated manifest.
- Folder name is the gallery key, always. Renaming a folder means updating every reference in `content.ts` (`SERVICES`, `TUJE`, `TUJE_GALLERY_TITLES`) and section components.
- Current keys: `wycinka`, `modelowanie`, `frezowanie`, `rebak`, `zywoploty`, `krzewy`, `about`, `hero`, `tuje-oferta` (dug from ground, shown first), `tuje-oferta-sadzonki` (potted seedlings), `tuje-realizacje`, `fspirala`, `fbonsai`.
- Empty galleries keep a `.gitkeep`.
- New photos are committed as `.webp`.
- Hero background slices come from `gallery.photos('hero')`.
- Thumbnails use `object-fit: cover` with fixed aspect-ratio tiles (square / 16:10). `contain` and variable-ratio layouts were tried and rejected — do not reintroduce them.
