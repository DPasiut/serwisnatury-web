import { Component, inject, input } from '@angular/core';
import { Copy, LangService } from '../../core/lang.service';
import { GalleryService } from '../../core/gallery.service';
import { LightboxService } from '../../core/lightbox.service';
import { TPipe } from '../../core/t.pipe';

/** How many photos are shown above the "more photos" panel. */
const LEAD_COUNT = 3;

@Component({
  selector: 'app-gallery',
  imports: [TPipe],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery {
  /** Category key — photos are stored under it. */
  readonly key = input.required<string>();
  readonly heading = input.required<Copy>();

  private readonly gallery = inject(GalleryService);
  private readonly lightbox = inject(LightboxService);
  private readonly lang = inject(LangService);

  moreOpen = false;

  all(): string[] { return this.gallery.photos(this.key()); }
  lead(): string[] { return this.all().slice(0, LEAD_COUNT); }
  extra(): string[] { return this.all().slice(LEAD_COUNT); }

  emptyLabel(): string {
    return this.lang.lang() === 'en' ? 'Photos coming soon' : 'Zdjęcia wkrótce';
  }

  moreLabel(): string {
    if (this.lang.lang() === 'en') return this.moreOpen ? 'Fewer photos' : 'More photos';
    return this.moreOpen ? 'Mniej zdjęć' : 'Więcej zdjęć';
  }

  openAt(index: number): void {
    this.lightbox.open(this.all(), index);
  }
}
