import { Component } from '@angular/core';
import { TPipe } from '../../core/t.pipe';
import { Gallery } from '../../shared/gallery/gallery';
import { Copy } from '../../core/lang.service';
import { TUJE, TUJE_GALLERY_TITLES, TujaGroup } from '../../core/content';
import { PHONE_DOMINIK, tel } from '../../core/site-config';

@Component({
  selector: 'app-thuja',
  imports: [TPipe, Gallery],
  templateUrl: './thuja.html',
  styleUrl: './thuja.scss'
})
export class Thuja {
  readonly groups = TUJE;
  /** Key of the active gallery, e.g. 'p9' or 'fbonsai'. */
  activeKey = TUJE[0].key;

  readonly phone = PHONE_DOMINIK;
  readonly phoneHref = tel(PHONE_DOMINIK);

  readonly heading = { pl: 'Tuje szmaragd', en: 'Emerald thuja' };
  readonly lead = {
    pl: 'Tuje prosto z naszej własnej szkółki, rosną w ciężkiej gliniasto-kamienistej ziemi a więc gwarantujemy, że u Ciebie też się przyjmą! Sadzone w dużych odstępach więc oprócz wysokości są bardzo szerokie i gęste.',
    en: 'Thuja straight from our own nursery, grown in heavy clay and stony soil — so we can guarantee they will take root at your place too. Planted far apart, so besides height they are very wide and dense.'
  };
  readonly ctaLabel = { pl: 'Zamówienia tui pod numerem', en: 'Thuja orders by phone' };

  isGroupOpen(group: TujaGroup): boolean {
    return this.activeKey.startsWith(group.prefix);
  }

  select(key: string): void {
    this.activeKey = key;
  }

  galleryTitle(): Copy {
    return TUJE_GALLERY_TITLES[this.activeKey] ?? { pl: 'Tuje', en: 'Thuja' };
  }
}
