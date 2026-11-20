import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-spain-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <img class="hero__image" [src]="image()" [alt]="title()" (error)="onError($event)" />
      <div class="hero__overlay">
        <h1 class="hero__title">{{ title() }}</h1>
        <p class="hero__subtitle">{{ subtitle() }}</p>
        <a class="hero__cta" [routerLink]="ctaLink()">{{ ctaLabel() }}</a>
      </div>
    </section>
  `,
  styles: `.hero{position:relative;height:320px;overflow:hidden;border-radius:12px}.hero__image{width:100%;height:100%;object-fit:cover}.hero__overlay{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#fff;background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,.6));text-align:center;padding:1rem}.hero__title{margin:0;font-size:2rem}.hero__subtitle{margin:.5rem 0 1rem}.hero__cta{background:#c60b1e;color:#fff;padding:.6rem 1.2rem;border-radius:8px;text-decoration:none}`,
})
export class HeroComponent {
  readonly title = input.required<string>();
  readonly subtitle = input.required<string>();
  readonly image = input.required<string>();
  readonly ctaLabel = input('Explore');
  readonly ctaLink = input<string | any[]>('/spain');
  onError(e: Event) {
    const img = e.target as HTMLImageElement;
    img.style.display = 'none';
    img.parentElement?.classList.add('hero--placeholder');
  }
}
