import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Destination } from '../../models/destination.model';
import { SPAIN_DATA } from '../../data/spain.data';
import { HeroSectionComponent } from '../../../../shared/components/hero-section/hero-section.component';

@Component({
  selector: 'app-spain-home',
  standalone: true,
  imports: [RouterLink, HeroSectionComponent],
  template: `
    <app-hero-section
      [eyebrow]="'DISCOVER SPAIN'"
      [title]="'Discover '"
      [titleAccent]="'Spain'"
      [subtitle]="SPAIN_DATA.introduction"
      [imageSrc]="heroImage"
      [ctaText]="'Explore Destinations'"
      [ctaRoute]="'/spain'"
      [showCta]="false"
    />
    <section class="popular-destinations">
      <div class="section-header">
        <h2>Popular Destinations</h2>
      </div>
      <div class="destination-cards">
        @for (d of destinations; track d.id) {
          <article class="card">
            <img [src]="d.image" [alt]="d.name" class="card__image" />
            <div class="card__body">
              <h3>{{ d.name }}</h3>
              <p>{{ d.tagline }}</p>
              <a [routerLink]="['/spain', d.id]" class="card__link">View →</a>
            </div>
          </article>
        }
      </div>
    </section>
  `,
  styles: `
    .popular-destinations { padding: 2rem 1rem; max-width: 1200px; margin: 0 auto; }
    .section-header h2 { font-size: 1.5rem; margin-bottom: 1rem; color: #c60b1e; }
    .destination-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; }
    .card { background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,.08); transition: transform .2s; }
    .card:hover { transform: translateY(-4px); }
    .card__image { width: 100%; height: 200px; object-fit: cover; border-radius: 12px 12px 0 0; }
    .card__body { padding: 1rem; }
    .card__body h3 { margin: 0 0 .25rem; font-size: 1.15rem; }
    .card__body p { margin: 0 0 .75rem; color: #555; font-size: .95rem; }
    .card__link { color: #c60b1e; text-decoration: none; font-weight: 600; }
  `,
})
export class SpainHomeComponent {
  readonly heroImage = '/images/spain/hero.jpg';
  readonly SPAIN_DATA = SPAIN_DATA;
  readonly introduction = SPAIN_DATA.introduction;
  readonly destinations: Destination[] = SPAIN_DATA.destinations;
}
