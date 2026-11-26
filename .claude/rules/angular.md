---
paths:
  - "src/**/*.{ts,html,scss}"
---

# Angular conventions

- Standalone components only (no NgModules); dependencies via `imports: [...]` in `@Component`.
- Use `inject()` instead of constructor injection, and signals for state (see `LangService.lang`).
- Code must be SSR-safe: every route is prerendered. Guard `document`/`window` access with `isPlatformBrowser(inject(PLATFORM_ID))`.
- Component files: `<name>.ts`, `<name>.html`, `<name>.scss` in the same folder; class name without the `Component` suffix (e.g. `About`).
- Tests: Jasmine specs as `<name>.spec.ts` next to the tested file.
