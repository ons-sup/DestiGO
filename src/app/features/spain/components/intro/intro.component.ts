import { Component, input } from '@angular/core';
import { SafeImageComponent } from '../safe-image/safe-image.component';

@Component({
  selector: 'app-spain-intro',
  standalone: true,
  imports: [SafeImageComponent],
  template: `
    <section class="intro">
      <div class="intro__wrapper">
        <div class="intro__text">
          <h2 class="intro__heading reveal-item" style="--item-delay:40ms">
            A land of timeless wonders
          </h2>
          <p class="intro__body reveal-item" style="--item-delay:120ms">{{ introduction() }}</p>
        </div>
        <figure class="intro__figure reveal-media reveal-item" style="--item-delay:160ms">
          <app-spain-safe-image
            class="intro__image"
            [src]="image()"
            alt="Spain landscape"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  `,
  styleUrl: './intro.component.css',
})
export class IntroComponent {
  readonly introduction = input.required<string>();
  readonly image = input.required<string>();
}
