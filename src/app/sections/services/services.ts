import { Component } from '@angular/core';
import { TPipe } from '../../core/t.pipe';
import { Gallery } from '../../shared/gallery/gallery';
import { SERVICES, ServiceItem } from '../../core/content';
import { PHONE_SZYMON, tel } from '../../core/site-config';

@Component({
  selector: 'app-services',
  imports: [TPipe, Gallery],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {
  readonly services = SERVICES;
  active: ServiceItem = SERVICES[0];

  readonly phone = PHONE_SZYMON;
  readonly phoneHref = tel(PHONE_SZYMON);

  readonly heading = { pl: 'Usługi i realizacje', en: 'Services and projects' };
  readonly lead = {
    pl: 'Wybierz usługę, żeby zobaczyć zdjęcia z tego rodzaju prac.',
    en: 'Pick a service to see photographs from that kind of job.'
  };
  readonly ctaLabel = { pl: 'Darmowa wycena pod numerem', en: 'Free quote — call and book a visit' };

  select(service: ServiceItem): void {
    this.active = service;
  }
}
