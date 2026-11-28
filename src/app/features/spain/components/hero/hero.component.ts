import { Component, input } from '@angular/core';
import { SafeImageComponent } from '../safe-image/safe-image.component';

@Component({
  selector: 'app-spain-hero',
  standalone: true,
  imports: [SafeImageComponent],
  template: `
    <header class="hero">
      <app-spain-safe-image
        class="hero__bg"
        [src]="countryImage()"
        alt="Spain landscape"
        [decorative]="true"
        loading="eager"
      />
      <div class="hero__content">
        <span class="hero__kicker">Spain</span>
        <h1 class="hero__title">{{ countryName() }}</h1>
        <p class="hero__tagline">{{ countryTagline() }}</p>
        <a class="hero__cta" href="#destinations">Explore destinations</a>
      </div>
    </header>
  `,
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  readonly countryName = input.required<string>();
  readonly countryTagline = input.required<string>();
  readonly countryImage = input.required<string>();
}
