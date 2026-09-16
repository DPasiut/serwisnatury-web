import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, PLATFORM_ID, inject, viewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TPipe } from '../../core/t.pipe';
import { PHONE_DOMINIK, tel } from '../../core/site-config';
import { GalleryService } from '../../core/gallery.service';

/** Background positions applied to the slices in order, cycling if there are more photos than positions. */
const SLICE_POSITIONS = ['55% 45%', '50% 45%', '45% 45%'];

@Component({
  selector: 'app-hero',
  imports: [TPipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero implements AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly gallery = inject(GalleryService);
  private readonly section = viewChild.required<ElementRef<HTMLElement>>('section');

  readonly phone = PHONE_DOMINIK;
  readonly phoneHref = tel(PHONE_DOMINIK);

  /** Slanted background strips — photos come from public/images/gallery/hero/. */
  readonly slices = this.gallery
    .photos('hero')
    .map((image, i) => ({ image, position: SLICE_POSITIONS[i % SLICE_POSITIONS.length] }));

  readonly title = {
    pl: 'Zadbamy o zieleń w Twoim ogrodzie.',
    en: 'We will take care of the greenery in your garden.'
  };
  readonly lead = {
    pl: 'Wycinamy, przycinamy i pielęgnujemy drzewa, krzewy i wszelkie rośliny. Frezujemy pnie i zrębkujemy gałęzie, więc po wykonanej usłudze klient może liczyć na całkowitą czystość. Zajmujemy się też żywopłotami oraz sprzedażą i nasadzeniami tui szmaragd — dla klientów, którzy oczekują precyzji i estetyki, nie tylko niskiej ceny.',
    en: 'We fell, prune and care for trees, shrubs and all kinds of plants. We grind stumps and chip branches, so after the job the client can count on the site being completely clean. We also handle hedges and the sale and planting of emerald thuja — for clients who expect precision and aesthetics, not just a low price.'
  };
  readonly note = {
    pl: 'Pracujemy na sprzęcie akumulatorowym — cicho i bez spalin, więc idealnie nadajemy się do miejsc, które wymagają ciszy: szpitali, szkół, hoteli i gęstej zabudowy.',
    en: 'We work with battery-powered equipment — quiet and without exhaust fumes, so we fit places that need calm: hospitals, schools, hotels and dense housing.'
  };
  readonly ctaArea = { pl: 'Sprawdź obszar działania', en: 'Check the service area' };

  private frame = 0;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.applyCollapse();
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) cancelAnimationFrame(this.frame);
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  onViewportChange(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(() => this.applyCollapse());
  }

  /**
   * The hero collapses to 25% of the viewport height over the first 35% of
   * scroll — matches the original design's motion.
   */
  private applyCollapse(): void {
    const el = this.section().nativeElement;
    const vh = window.innerHeight;
    const past = Math.max(-el.getBoundingClientRect().top, 0);
    const progress = Math.min(past / (vh * 0.35), 1);
    el.style.minHeight = (vh - progress * vh * 0.75).toFixed(0) + 'px';
  }
}
