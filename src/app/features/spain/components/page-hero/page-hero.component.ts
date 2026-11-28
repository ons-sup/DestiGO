import { Component, input } from '@angular/core';
import { SafeImageComponent } from '../safe-image/safe-image.component';

@Component({
  selector: 'app-spain-page-hero',
  standalone: true,
  imports: [SafeImageComponent],
  template: `
    <header class="tr-hero">
      <div class="tr-hero__bg">
        <app-spain-safe-image [src]="image()" alt="" [decorative]="true" />
      </div>
      <div class="tr-hero__overlay"></div>
      <div class="tr-hero__content">
        <p class="tr-eyebrow reveal-item" style="--item-delay:40ms">{{ eyebrow() }}</p>
        <h1 class="tr-title reveal-item" style="--item-delay:120ms">
          {{ title() }}<span class="tr-accent">{{ titleAccent() }}</span>
        </h1>
        <p class="tr-lead reveal-item" style="--item-delay:200ms">{{ lead() }}</p>
      </div>
    </header>
  `,
  styleUrl: './page-hero.component.css',
})
export class PageHeroComponent {
  readonly eyebrow = input<string>('');
  readonly title = input<string>('');
  readonly titleAccent = input<string>('');
  readonly lead = input<string>('');
  readonly image = input<string>('');
}
