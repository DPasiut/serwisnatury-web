import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Lang = 'pl' | 'en';
/** Every text on the site is a PL/EN pair. */
export interface Copy { pl: string; en: string; }

@Injectable({ providedIn: 'root' })
export class LangService {
  private readonly platformId = inject(PLATFORM_ID);
  readonly lang = signal<Lang>('pl');

  set(lang: Lang): void {
    this.lang.set(lang);
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.lang = lang;
    }
  }

  text(copy: Copy | string | null | undefined): string {
    if (copy == null) return '';
    if (typeof copy === 'string') return copy;
    return this.lang() === 'en' ? copy.en : copy.pl;
  }
}
