import { Injectable } from '@angular/core';
import { GALLERY_MANIFEST } from './gallery-manifest.generated';

/**
 * Gallery photos, keyed by category (e.g. 'wycinka', 'k150').
 *
 * Backed by a static manifest generated at build/serve time from
 * public/images/gallery/<key>/ (see scripts/generate-gallery-manifest.mjs).
 * To add photos, drop image files into that directory — no code change needed.
 */
@Injectable({ providedIn: 'root' })
export class GalleryService {
  photos(key: string): string[] {
    return GALLERY_MANIFEST[key] ?? [];
  }
}
