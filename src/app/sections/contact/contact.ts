import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TPipe } from '../../core/t.pipe';
import { FacebookIcon, InstagramIcon } from '../../shared/icons/social-icons';
import { EMAIL, FACEBOOK, INSTAGRAM, PHONE_SZYMON, PHONE_DOMINIK, SHOW_FACEBOOK, tel } from '../../core/site-config';

export interface QuoteRequest {
  name: string;
  phone: string;
  place: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule, TPipe, InstagramIcon, FacebookIcon],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  /** Quote form has no backend yet — hidden until one is wired up (see submit()). */
  readonly showQuoteForm = false;

  readonly phoneSales = PHONE_DOMINIK;
  readonly phoneSalesHref = tel(PHONE_DOMINIK);
  readonly phoneQuotes = PHONE_SZYMON;
  readonly phoneQuotesHref = tel(PHONE_SZYMON);
  readonly email = EMAIL;
  readonly instagram = INSTAGRAM;
  readonly facebook = FACEBOOK;
  readonly showFacebook = SHOW_FACEBOOK;

  readonly heading = { pl: 'Kontakt', en: 'Contact' };
  readonly lead = {
    pl: 'Zadzwoń albo napisz — powiedz, co planujesz, a odpowiemy z wyceną i najbliższym możliwym terminem.',
    en: 'Call or write — tell us what you are planning and we will reply with a quote and the nearest possible date.'
  };
  readonly callLabel = { pl: 'Zadzwoń', en: 'Call' };
  readonly salesLabel = { pl: 'Sprzedaż tui', en: 'Thuja sales' };
  readonly quotesLabel = { pl: 'Wyceny usług', en: 'Service quotes' };
  readonly writeLabel = { pl: 'Lub napisz', en: 'Or write' };
  readonly socialLabel = { pl: 'Zajrzyj na nasze media społecznościowe', en: 'See the latest jobs on social media' };
  readonly nameLabel = { pl: 'Imię i nazwisko', en: 'Name' };
  readonly phoneLabel = { pl: 'Telefon', en: 'Phone' };
  readonly placeLabel = { pl: 'Miejscowość / lokalizacja prac', en: 'Location of the work' };
  readonly messageLabel = { pl: 'Czego potrzebujesz?', en: 'What do you need?' };
  readonly submitLabel = { pl: 'Poproś o wycenę', en: 'Ask for a quote' };
  readonly thanks = {
    pl: 'Dziękujemy — odezwiemy się z wyceną.',
    en: 'Thank you — we will get back to you with a quote.'
  };

  model: QuoteRequest = { name: '', phone: '', place: '', message: '' };
  sent = false;

  /** Wire up your own endpoint / mail service here. */
  submit(): void {
    this.sent = true;
  }
}
