import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-spain-destination-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article class="card">
      <img class="card__image" [src]="image()" [alt]="name()" (error)="onError($event)" />
      <div class="card__body">
        <h3 class="card__title">{{ name() }}</h3>
        <p class="card__tagline">{{ tagline() }}</p>
        <a class="card__link" [routerLink]="['/spain', id()]">View</a>
      </div>
    </article>
  `,
  styles: `.card{border:1px solid #ddd;border-radius:12px;overflow:hidden}.card__image{width:100%;height:160px;object-fit:cover;background:linear-gradient(135deg,#c60b1e,#ffc400)}.card__body{padding:.75rem}.card__title{margin:0}.card__tagline{font-size:.9rem;color:#555}.card__link{text-decoration:none;color:#c60b1e}`,
})
export class DestinationCardComponent {
  readonly id = input.required<string>();
  readonly name = input.required<string>();
  readonly tagline = input.required<string>();
  readonly image = input.required<string>();
  onError(e: Event) {
    const img = e.target as HTMLImageElement;
    img.style.opacity = '0';
  }
}
