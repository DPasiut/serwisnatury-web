import { Injectable, computed, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LightboxService {
  private readonly photos = signal<string[]>([]);
  private readonly index = signal(0);

  readonly isOpen = computed(() => this.photos().length > 0);
  readonly current = computed(() => this.photos()[this.index()] ?? '');
  readonly position = computed(() => this.index() + 1);
  readonly total = computed(() => this.photos().length);

  open(photos: string[], index: number): void {
    if (!photos.length) return;
    this.photos.set(photos);
    this.index.set(Math.max(0, Math.min(index, photos.length - 1)));
  }

  close(): void {
    this.photos.set([]);
    this.index.set(0);
  }

  step(delta: number): void {
    const total = this.photos().length;
    if (total < 2) return;
    this.index.set((this.index() + delta + total) % total);
  }
}
