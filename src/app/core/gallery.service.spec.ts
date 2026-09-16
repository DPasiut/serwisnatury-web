import { TestBed } from '@angular/core/testing';
import { GalleryService } from './gallery.service';
import { GALLERY_MANIFEST } from './gallery-manifest.generated';

describe('GalleryService', () => {
  let service: GalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an empty array for a category with no photos', () => {
    expect(service.photos('nonexistent')).toEqual([]);
  });

  it('should return the manifest photos for a known category', () => {
    const [key, photos] = Object.entries(GALLERY_MANIFEST)[0];
    expect(service.photos(key)).toEqual(photos);
  });
});
