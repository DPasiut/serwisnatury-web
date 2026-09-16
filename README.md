# serwisnatury.pl

Strona internetowa dla firmy zajmującej się wycinką i pielęgnacją zieleni oraz sprzedażą i nasadzeniami tui szmaragd (usługi ogrodnicze, Małopolska).

Zbudowana w Angularze (SSR + prerendering), dwujęzyczna (PL/EN).

## Stan projektu — Etap 1

Obecna wersja to **statyczna strona wizytówkowa**, bez własnego backendu:

- Treści (usługi, opisy, dane kontaktowe) są zaszyte w kodzie (`src/app/core/content.ts`, `src/app/core/site-config.ts`).
- Zdjęcia w galeriach są plikami statycznymi w `public/images/gallery/<sekcja>/`, a lista zdjęć per sekcja generowana jest automatycznie przy buildzie/serve przez skrypt `scripts/generate-gallery-manifest.mjs` (skanuje foldery, generuje `src/app/core/gallery-manifest.generated.ts`). Dodanie/usunięcie zdjęcia = wrzucenie/skasowanie pliku w odpowiednim folderze — bez zmian w kodzie.
- Formularz kontaktowy jest tymczasowo ukryty (brak backendu do wysyłki wiadomości).

### Rozwój — kolejne etapy

Planowane w kolejnych etapach:

- **Panel admina** — logowanie i zarządzanie treścią strony bez edycji kodu.
- **Zarządzanie zdjęciami przez admina** — dodawanie i usuwanie zdjęć w galeriach z poziomu panelu (zamiast ręcznego wgrywania plików).
- **Edycja treści przez admina** — modyfikacja opisów usług, danych kontaktowych itp. bez ingerencji w kod.
- **Statystyki odwiedzin** — śledzenie ruchu na stronie (liczba odwiedzin, źródła, popularne sekcje).
- **Optymalizacja pod SEO** — meta tagi, sitemap, strukturalne dane, poprawa widoczności w wyszukiwarkach.
- **Formularz kontaktowy z realną wysyłką** — podłączenie backendu/usługi mailowej.

## Uruchomienie lokalne

```bash
npm install
npm start
```

`npm start` odpala dev server (`ng serve`) razem z watcherem galerii — dodanie/zmiana zdjęcia w `public/images/gallery/` automatycznie przelicza manifest i odświeża stronę, bez restartu procesu.

## Build produkcyjny

```bash
npm run build
```

Manifest galerii jest regenerowany automatycznie przed buildem (`prebuild`).

## Wersjonowanie

Wersja w `package.json` (`MAJOR.MINOR.PATCH`, [Semantic Versioning](https://semver.org/)) jest podbijana ręcznie przy commicie z istotną zmianą, wg zasady:

- **PATCH** (`1.0.0` → `1.0.1`) — poprawka błędu, drobna korekta treści/stylu, bez nowej funkcjonalności.
- **MINOR** (`1.0.0` → `1.1.0`) — nowa funkcjonalność wsteczne kompatybilna (np. nowa sekcja, nowy typ galerii, nowe pole kontaktowe).
- **MAJOR** (`1.0.0` → `2.0.0`) — zmiana łamiąca dotychczasowe działanie lub duży kamień milowy (np. wdrożenie panelu admina / backendu — Etap 2).

Po podbiciu wersji: `git tag vX.Y.Z && git push --tags` (opcjonalnie też `gh release create vX.Y.Z`).
