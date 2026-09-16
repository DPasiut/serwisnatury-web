import { Component, HostListener, inject } from '@angular/core';
import { LightboxService } from '../../core/lightbox.service';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.html',
  styleUrl: './lightbox.scss'
})
export class Lightbox {
  readonly lb = inject(LightboxService);

  @HostListener('document:keydown', ['$event'])
  onKey(event: KeyboardEvent): void {
    if (!this.lb.isOpen()) return;
    if (event.key === 'Escape') this.lb.close();
    else if (event.key === 'ArrowLeft') this.lb.step(-1);
    else if (event.key === 'ArrowRight') this.lb.step(1);
  }
}
