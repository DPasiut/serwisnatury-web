import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TPipe } from '../../core/t.pipe';
import { AREA_SALES, AREA_SERVICES } from '../../core/content';
import { MAP_EMBED, MAP_LINK } from '../../core/site-config';

@Component({
  selector: 'app-area',
  imports: [TPipe],
  templateUrl: './area.html',
  styleUrl: './area.scss'
})
export class Area {
  private readonly sanitizer = inject(DomSanitizer);

  readonly services = AREA_SERVICES;
  readonly sales = AREA_SALES;
  readonly mapLink = MAP_LINK;
  readonly mapEmbed: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(MAP_EMBED);

  readonly heading = { pl: 'Obszar działania', en: 'Service area' };
  readonly servicesHeading = { pl: 'Usługi ogrodnicze', en: 'Garden services' };
  readonly salesHeading = { pl: 'Sprzedaż tui', en: 'Thuja sales' };
  readonly pickup = { pl: 'Odbiór własny', en: 'Self collection' };
}
