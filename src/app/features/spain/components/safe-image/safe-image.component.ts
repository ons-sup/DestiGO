import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-spain-safe-image',
  standalone: true,
  template: `
    @if (!failed() && src()) {
      <img
        [src]="src()"
        [alt]="decorative() ? '' : alt()"
        [attr.aria-hidden]="decorative() ? 'true' : null"
        [loading]="loading()"
        (error)="failed.set(true)"
      />
    } @else {
      <span
        class="safe-image__fallback"
        [attr.role]="decorative() ? null : 'img'"
        [attr.aria-label]="decorative() ? null : title() || alt()"
        [attr.aria-hidden]="decorative() ? 'true' : null"
        >{{ title() || alt() }}</span
      >
    }
  `,
  styles: `
    :host {
      display: block;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .safe-image__fallback {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 1rem;
      box-sizing: border-box;
      background: var(--placeholder-bg, linear-gradient(135deg, #e8e8e8, #d0d0d0));
      color: var(--placeholder-text, #888);
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.3;
    }
  `,
})
export class SafeImageComponent {
  readonly src = input<string>('');
  readonly alt = input<string>('');
  readonly title = input<string>('');
  readonly decorative = input<boolean>(false);
  readonly loading = input<'lazy' | 'eager'>('lazy');

  readonly failed = signal(false);
}
