import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { FavoriteButtonComponent } from '../../../../shared/components/favorite-button/favorite-button.component';
import { SafeImageComponent } from '../../components/safe-image/safe-image.component';
import { SPAIN_DATA } from '../../data/spain.data';
import { Destination } from '../../models/destination.model';

@Component({
  selector: 'app-destination-detail',
  standalone: true,
  imports: [RouterLink, FavoriteButtonComponent, SafeImageComponent],
  template: `
    @if (destination(); as d) {
      <div class="detail-banner-wrap">
        <app-spain-safe-image
          class="detail-banner"
          [src]="d.image"
          [alt]="d.name"
          [title]="d.name"
          loading="lazy"
        />
      </div>
      <main class="detail-main">
        <div class="detail-header">
          <div class="header-content">
            <h2>{{ d.name }}</h2>
            <p class="tagline">{{ d.tagline }}</p>
          </div>
          <div class="header-actions">
            <app-favorite-button
              [destinationId]="d.id"
              [ariaLabel]="'Add ' + d.name + ' to favorites'"
              size="large"
            />
            <a routerLink="/spain/destinations" class="back-link" aria-label="Back to destinations"
              >← Destinations</a
            >
          </div>
        </div>
        <section class="detail-section" aria-labelledby="about-heading">
          <div class="section-container">
            <h2 id="about-heading">About</h2>
            <p>{{ d.description }}</p>
          </div>
        </section>
        <section class="detail-section" aria-labelledby="places-heading">
          <div class="section-container">
            <h2 id="places-heading">Famous Places to See</h2>
            <ul>
              @for (l of d.landmarks; track l) {
                <li>{{ l }}</li>
              }
            </ul>
          </div>
        </section>
        <section class="detail-section" aria-labelledby="food-heading">
          <div class="section-container">
            <h2 id="food-heading">What to Eat</h2>
            <ul>
              @for (x of d.dishes; track x) {
                <li>{{ x }}</li>
              }
            </ul>
          </div>
        </section>
        <section class="detail-section" aria-labelledby="neigh-heading">
          <div class="section-container">
            <h2 id="neigh-heading">Neighborhoods / Where to Stay</h2>
            <ul>
              @for (n of d.neighborhoods; track n) {
                <li>{{ n }}</li>
              }
            </ul>
          </div>
        </section>
        <section class="detail-section" aria-labelledby="tips-heading">
          <div class="section-container">
            <h2 id="tips-heading">Good to Know</h2>
            <p><strong>Best time:</strong> {{ d.bestTimeToVisit }}</p>
            <p><strong>Duration:</strong> {{ d.duration }}</p>
            <ul>
              @for (t of d.tips; track t) {
                <li>{{ t }}</li>
              }
            </ul>
          </div>
        </section>
        <nav class="detail-nav" aria-label="Previous and next destinations">
          <div class="nav-inner">
            @if (prev(); as p) {
              <a [routerLink]="['/spain/destinations', p.id]" class="nav-link prev"
                >← {{ p.name }}</a
              >
            } @else {
              <div class="nav-link prev disabled"></div>
            }
            @if (next(); as n) {
              <a [routerLink]="['/spain/destinations', n.id]" class="nav-link next"
                >{{ n.name }} →</a
              >
            } @else {
              <div class="nav-link next disabled"></div>
            }
          </div>
        </nav>
      </main>
    } @else {
      <div class="notfound">
        <h1>Destination not found</h1>
        <a routerLink="/spain/destinations">Back to destinations</a>
      </div>
    }
  `,
  styles: `
    .detail-banner-wrap {
      width: 100%;
      height: 280px;
      overflow: hidden;
    }
    .detail-banner {
      width: 100%;
      height: 100%;
    }
    .detail-main {
      padding: 0;
    }
    .detail-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 8px;
      padding: 12px 2%;
      border-bottom: 1px solid #e5e7eb;
    }
    .header-content h2 {
      font-size: 1.5rem;
      margin: 0;
    }
    .tagline {
      color: #6b7280;
      margin: 4px 0 0;
    }
    .header-actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .back-link {
      color: #6b7280;
      text-decoration: none;
    }
    .detail-section {
      padding: 1.5rem 2%;
    }
    .section-container {
      max-width: 900px;
      margin: 0 auto;
    }
    .section-container h2 {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
      color: #c2185b;
    }
    .section-container ul {
      padding-left: 1.25rem;
    }
    .section-container li {
      margin-bottom: 0.4rem;
    }
    .detail-nav {
      padding: 1.5rem 2%;
      border-top: 1px solid #e5e7eb;
    }
    .nav-inner {
      display: flex;
      justify-content: space-between;
      max-width: 900px;
      margin: 0 auto;
    }
    .nav-link {
      color: #c2185b;
      text-decoration: none;
      font-weight: 600;
    }
    .notfound {
      text-align: center;
      padding: 3rem;
    }
  `,
})
export class DestinationDetailComponent {
  private readonly route = inject(ActivatedRoute);

  private readonly id = toSignal(this.route.paramMap.pipe(map((p) => p.get('id') ?? '')), {
    initialValue: this.route.snapshot.paramMap.get('id') ?? '',
  });

  readonly destination = computed<Destination | undefined>(() =>
    SPAIN_DATA.destinations.find((d) => d.id === this.id()),
  );

  readonly prev = computed<Destination | undefined>(() => {
    const list = SPAIN_DATA.destinations;
    const i = list.findIndex((d) => d.id === this.id());
    return i > 0 ? list[i - 1] : undefined;
  });

  readonly next = computed<Destination | undefined>(() => {
    const list = SPAIN_DATA.destinations;
    const i = list.findIndex((d) => d.id === this.id());
    return i >= 0 && i < list.length - 1 ? list[i + 1] : undefined;
  });
}
