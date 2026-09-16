import { Component, inject } from '@angular/core';
import { LangService } from '../../core/lang.service';
import { TPipe } from '../../core/t.pipe';
import { FacebookIcon, InstagramIcon } from '../../shared/icons/social-icons';
import { NAV } from '../../core/content';
import { FACEBOOK, INSTAGRAM, SHOW_FACEBOOK, SITE_NAME, SITE_TLD } from '../../core/site-config';

@Component({
  selector: 'app-header',
  imports: [TPipe, InstagramIcon, FacebookIcon],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  readonly lang = inject(LangService);
  readonly nav = NAV;
  readonly instagram = INSTAGRAM;
  readonly facebook = FACEBOOK;
  readonly showFacebook = SHOW_FACEBOOK;
  readonly siteName = SITE_NAME;
  readonly siteTld = SITE_TLD;
}
