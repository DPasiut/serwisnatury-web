import { Copy } from './lang.service';

export interface NavLink { href: string; label: Copy; }
export interface ServiceItem { key: string; title: Copy; desc: Copy; galleryTitle: Copy; }
/** Pozycja podlisty: bez `key` jest tylko etykietą (np. wysokość tui). */
export interface SubItem { key?: string; label: string; note?: string; }
export interface TujaGroup {
  /** Prefiks kluczy galerii należących do tej grupy. */
  prefix: string;
  key: string;
  title: Copy;
  desc: Copy;
  subs: SubItem[];
}

export const NAV: NavLink[] = [
  { href: '#uslugi', label: { pl: 'Usługi i realizacje', en: 'Services & projects' } },
  { href: '#tuje', label: { pl: 'Tuje', en: 'Thuja' } },
  { href: '#obszar', label: { pl: 'Obszar działania', en: 'Service area' } },
  { href: '#kontakt', label: { pl: 'Kontakt', en: 'Contact' } }
];

export const SERVICES: ServiceItem[] = [
  {
    key: 'wycinka',
    title: { pl: 'Wycinka drzew', en: 'Tree removal' },
    desc: {
      pl: 'Bezpieczne usuwanie drzew, także w trudnym dostępie, z pełnym sprzątaniem terenu.',
      en: 'Safe tree removal, also in hard-to-reach places, with the site fully cleaned up.'
    },
    galleryTitle: { pl: 'Wycinka drzew — realizacje', en: 'Tree removal — projects' }
  },
  {
    key: 'modelowanie',
    title: { pl: 'Modelowanie drzew', en: 'Tree shaping' },
    desc: {
      pl: 'Korekta korony i kształtu drzewa bez utraty jego charakteru.',
      en: 'Correcting the crown and shape of a tree without losing its character.'
    },
    galleryTitle: { pl: 'Modelowanie drzew — realizacje', en: 'Tree shaping — projects' }
  },
  {
    key: 'frezowanie',
    title: { pl: 'Frezowanie pni', en: 'Stump grinding' },
    desc: {
      pl: 'Usuwanie pozostałości po wycince — teren gotowy pod nasadzenia lub trawnik.',
      en: 'Removing what is left after felling — the ground ready for planting or a lawn.'
    },
    galleryTitle: { pl: 'Frezowanie pni — realizacje', en: 'Stump grinding — projects' }
  },
  {
    key: 'rebak',
    title: { pl: 'Usługi rębakiem', en: 'Wood chipping' },
    desc: {
      pl: 'Rozdrabnianie gałęzi i drewna na miejscu, bez wywózki.',
      en: 'Shredding branches and wood on site, with nothing to haul away.'
    },
    galleryTitle: { pl: 'Usługi rębakiem — realizacje', en: 'Wood chipping — projects' }
  },
  {
    key: 'zywoploty',
    title: { pl: 'Przycinanie żywopłotów', en: 'Hedge trimming' },
    desc: {
      pl: 'Regularna pielęgnacja formowanych żywopłotów, w tym z tui.',
      en: 'Regular care of shaped hedges, including thuja.'
    },
    galleryTitle: { pl: 'Przycinanie żywopłotów — realizacje', en: 'Hedge trimming — projects' }
  },
  {
    key: 'krzewy',
    title: { pl: 'Formowanie krzewów', en: 'Shrub shaping' },
    desc: {
      pl: 'Precyzyjne cięcie krzewów ozdobnych pod zadany kształt.',
      en: 'Precise cutting of ornamental shrubs to a given shape.'
    },
    galleryTitle: { pl: 'Formowanie krzewów — realizacje', en: 'Shrub shaping — projects' }
  },
  {
    key: 'tuje-realizacje',
    title: { pl: 'Sadzenie tui', en: 'Thuja planting' },
    desc: {
      pl: 'Nasadzenia tui szmaragd — od sadzonki po dojrzały egzemplarz kopany z gruntu.',
      en: 'Emerald thuja plantings — from a seedling to a mature specimen dug from the ground.'
    },
    galleryTitle: { pl: 'Sadzenie tui — realizacje', en: 'Thuja planting — projects' }
  }
];

export const TUJE: TujaGroup[] = [
  {
    prefix: 'tuje-oferta',
    key: 'tuje-oferta',
    title: { pl: 'Kopane z gruntu', en: 'Dug from the ground' },
    desc: {
      pl: 'Dojrzałe egzemplarze kopane z gruntu — gotowy, gęsty żywopłot bez wieloletniego czekania. Wysokość mierzona bez bryły korzeniowej!',
      en: 'Mature specimens dug from the ground — a dense hedge straight away, without years of waiting.'
    },
    subs: [
      { label: '150–160 cm' },
      { label: '160–170 cm' },
      { label: '170–180 cm' },
      { label: '180–190 cm' },
      { label: '190–200 cm' },
      { label: '200–210 cm' },
      { label: '210–220 cm' }
    ]
  },
  {
    prefix: 'tuje-oferta-sadzonki',
    key: 'tuje-oferta-sadzonki',
    title: { pl: 'Sadzonki', en: 'P9 seedlings' },
    desc: {
      pl: 'Młode rośliny w doniczkach — sprawdzają się przy samodzielnym sadzeniu i formowaniu żywopłotu od podstaw. Sadzonki posiadają solidny system korzeniowy.',
      en: 'Young plants in pots — a good fit when you want to plant and shape the hedge yourself from the start.'
    },
    subs: [{ label: '30-40 cm', note: 'Wysokość mierzona bez doniczki, silny system korzeniowy' }]
  },
  {
    prefix: 'f',
    key: 'fspirala',
    title: { pl: 'Formowane', en: 'Shaped' },
    desc: {
      pl: 'Tuje cięte w ozdobne formy — pojedynczy akcent w ogrodzie lub przy wejściu. Wybierz formę.',
      en: 'Thuja cut into decorative forms — a single accent for a garden or an entrance. Pick a form.'
    },
    subs: [
      { key: 'fspirala', label: 'Spirala' },
      { key: 'fbonsai', label: 'Bonsai' }
    ]
  }
];

export const TUJE_GALLERY_TITLES: Record<string, Copy> = {
  'tuje-oferta-sadzonki': { pl: 'Sadzonki', en: 'P9 seedlings' },
  'tuje-oferta': { pl: 'Kopane z gruntu', en: 'Dug from the ground' },
  fspirala: { pl: 'Formowane — spirala', en: 'Shaped — spiral' },
  fbonsai: { pl: 'Formowane — bonsai', en: 'Shaped — bonsai' }
};

export const AREA_SERVICES: Copy[] = [
  { pl: 'Powiat nowosądecki', en: 'Nowy Sącz county' },
  { pl: 'Powiat limanowski', en: 'Limanowa county' },
  { pl: 'Kraków i okolice', en: 'Kraków and surroundings' }
];

export const AREA_SALES: Copy[] = [
  { pl: 'Transport za dopłatą', en: 'Transport for an extra fee' },
  { pl: 'Przy większych zamówieniach — dalej, do ustalenia', en: 'For larger orders — further, by arrangement' }
];
