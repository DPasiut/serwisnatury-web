import { Component } from '@angular/core';
import { TPipe } from '../../core/t.pipe';
import { FACEBOOK, INSTAGRAM, SITE_DOMAIN } from '../../core/site-config';

const YEAR = new Date().getFullYear();

@Component({
  selector: 'app-footer',
  imports: [TPipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  readonly instagram = INSTAGRAM;
  readonly facebook = FACEBOOK;
  readonly rights = {
    pl: `© ${YEAR} ${SITE_DOMAIN} — tuje szmaragd i usługi ogrodnicze, Małopolska`,
    en: `© ${YEAR} ${SITE_DOMAIN} — emerald thuja and garden services, Małopolska`
  };
  readonly toTop = { pl: 'Do góry', en: 'Back to top' };
}
