import { Pipe, PipeTransform, inject } from '@angular/core';
import { Copy, LangService } from './lang.service';

/** {{ copy | t }} — picks the active language variant. Impure so it reacts to language changes. */
@Pipe({ name: 't', standalone: true, pure: false })
export class TPipe implements PipeTransform {
  private readonly lang = inject(LangService);
  transform(value: Copy | string | null | undefined): string {
    return this.lang.text(value);
  }
}
