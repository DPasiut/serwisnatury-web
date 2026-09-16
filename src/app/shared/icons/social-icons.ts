import { Component, input } from '@angular/core';

/** Colored social-media icons, sized by the parent. */
@Component({
  selector: 'app-instagram-icon',
  template: `
    <svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <radialGradient [attr.id]="gradientId" cx="0.28" cy="1.05" r="1.25">
          <stop offset="0" stop-color="#FFDD55"></stop>
          <stop offset="0.12" stop-color="#FFDD55"></stop>
          <stop offset="0.28" stop-color="#FF993B"></stop>
          <stop offset="0.5" stop-color="#D92E7F"></stop>
          <stop offset="0.72" stop-color="#962FBF"></stop>
          <stop offset="1" stop-color="#4F5BD5"></stop>
        </radialGradient>
      </defs>
      <circle cx="12" cy="12" r="12" [attr.fill]="'url(#' + gradientId + ')'"></circle>
      <rect x="6.4" y="6.4" width="11.2" height="11.2" rx="3.6" fill="none" stroke="#fff" stroke-width="1.5"></rect>
      <circle cx="12" cy="12" r="2.9" fill="none" stroke="#fff" stroke-width="1.5"></circle>
      <circle cx="15.5" cy="8.5" r="0.85" fill="#fff"></circle>
    </svg>
  `
})
export class InstagramIcon {
  readonly size = input(38);
  /** Unique gradient id — lets the icon be reused multiple times on the page. */
  readonly gradientId = 'snIgGrad' + Math.random().toString(36).slice(2, 8);
}

@Component({
  selector: 'app-facebook-icon',
  template: `
    <svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 24 24" aria-hidden="true">
      <g transform="translate(12 12) scale(1.2) translate(-12 -12)">
        <path fill="#1877F2" d="M22 12.06C22 6.48 17.52 2 12 2S2 6.48 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z"></path>
        <path fill="#fff" d="M15.89 14.97l.45-2.91h-2.78v-1.88c0-.79.39-1.57 1.63-1.57h1.26V6.15s-1.15-.2-2.24-.2c-2.28 0-3.77 1.39-3.77 3.9v2.21H7.9v2.91h2.54V22a10.1 10.1 0 0 0 3.12 0v-7.03h2.33Z"></path>
      </g>
    </svg>
  `
})
export class FacebookIcon {
  readonly size = input(38);
}
