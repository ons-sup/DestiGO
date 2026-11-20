import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { SPAIN_DATA } from '../../data/spain.data';
import { Destination } from '../../models/destination.model';

@Component({
  selector: 'app-destination-detail',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (destination(); as d) {
      <article class="detail">
        <header class="detail__header">
          <img class="detail__image" [src]="d.image" [alt]="d.name" (error)="onError($event)" />
          <div class="detail__meta">
            <a class="detail__back" routerLink="/spain">← Back to Spain</a>
            <h1 class="detail__title">{{ d.name }}</h1>
            <p class="detail__tagline">{{ d.tagline }}</p>
          </div>
        </header>
        <section><h2>About</h2><p>{{ d.description }}</p></section>
        <section><h2>Famous places to see</h2><ul>@for (l of d.landmarks; track l) { <li>{{ l }}</li> }</ul></section>
        <section><h2>What to eat</h2><ul>@for (x of d.dishes; track x) { <li>{{ x }}</li> }</ul></section>
        <section><h2>Neighborhoods / where to stay</h2><ul>@for (n of d.neighborhoods; track n) { <li>{{ n }}</li> }</ul></section>
        <section><h2>Good to know</h2><p>Best time: {{ d.bestTimeToVisit }}</p><p>Duration: {{ d.duration }}</p><ul>@for (t of d.tips; track t) { <li>{{ t }}</li> }</ul></section>
        <nav class="detail__nav">
          @if (prev(); as p) { <a [routerLink]="['/spain', p.id]">← {{ p.name }}</a> }
          @if (next(); as n) { <a [routerLink]="['/spain', n.id]">{{ n.name }} →</a> }
        </nav>
      </article>
    } @else {
      <div class="notfound"><h1>Destination not found</h1><a routerLink="/spain">Back to Spain</a></div>
    }
  `,
  styles: `.detail__image{width:100%;height:240px;object-fit:cover;background:linear-gradient(135deg,#c60b1e,#ffc400)}.notfound{text-align:center;padding:2rem}`,
})
export class DestinationDetailComponent {
  private route = inject(ActivatedRoute);
  private id = this.route.snapshot.paramMap.get('id');
  destination = (): Destination | undefined =>
    SPAIN_DATA.destinations.find((d) => d.id === this.id);
  prev = (): Destination | undefined => {
    const list = SPAIN_DATA.destinations;
    const i = list.findIndex((d) => d.id === this.id);
    return i > 0 ? list[i - 1] : undefined;
  };
  next = (): Destination | undefined => {
    const list = SPAIN_DATA.destinations;
    const i = list.findIndex((d) => d.id === this.id);
    return i >= 0 && i < list.length - 1 ? list[i + 1] : undefined;
  };
  onError(e: Event) {
    const img = e.target as HTMLImageElement;
    img.style.opacity = '0';
  }
}
