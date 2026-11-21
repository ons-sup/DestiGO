import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeroSectionComponent } from '../../../../shared/components/hero-section/hero-section.component';
import { FavoriteButtonComponent } from '../../../../shared/components/favorite-button/favorite-button.component';
import { SPAIN_DATA } from '../../data/spain.data';
import { Destination } from '../../models/destination.model';

@Component({
  selector: 'app-destination-detail',
  standalone: true,
  imports: [RouterLink, HeroSectionComponent, FavoriteButtonComponent],
  template: `
    @if (destination(); as d) {
      <app-hero-section
        [isDetailPage]="true"
        [eyebrow]="d.tagline"
        [title]="d.name"
        [titleAccent]="' '"
        [imageSrc]="d.image"
      />
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
            <a routerLink="/spain" class="back-link" aria-label="Back to Spain">← Spain</a>
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
            <ul>@for (l of d.landmarks; track l) { <li>{{ l }}</li> }</ul>
          </div>
        </section>
        <section class="detail-section" aria-labelledby="food-heading">
          <div class="section-container">
            <h2 id="food-heading">What to Eat</h2>
            <ul>@for (x of d.dishes; track x) { <li>{{ x }}</li> }</ul>
          </div>
        </section>
        <section class="detail-section" aria-labelledby="neigh-heading">
          <div class="section-container">
            <h2 id="neigh-heading">Neighborhoods / Where to Stay</h2>
            <ul>@for (n of d.neighborhoods; track n) { <li>{{ n }}</li> }</ul>
          </div>
        </section>
        <section class="detail-section" aria-labelledby="tips-heading">
          <div class="section-container">
            <h2 id="tips-heading">Good to Know</h2>
            <p><strong>Best time:</strong> {{ d.bestTimeToVisit }}</p>
            <p><strong>Duration:</strong> {{ d.duration }}</p>
            <ul>@for (t of d.tips; track t) { <li>{{ t }}</li> }</ul>
          </div>
        </section>
        <nav class="detail-nav" aria-label="Previous and next destinations">
          <div class="nav-inner">
            @if (prev(); as p) {
              <a [routerLink]="['/spain', p.id]" class="nav-link prev">← {{ p.name }}</a>
            } @else {
              <div class="nav-link prev disabled"></div>
            }
            @if (next(); as n) {
              <a [routerLink]="['/spain', n.id]" class="nav-link next">{{ n.name }} →</a>
            } @else {
              <div class="nav-link next disabled"></div>
            }
          </div>
        </nav>
      </main>
    } @else {
      <div class="notfound"><h1>Destination not found</h1><a routerLink="/spain">Back to Spain</a></div>
    }
  `,
  styles: `
    .detail-main { padding: 0; }
    .detail-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; padding: 12px 2%; border-bottom: 1px solid #eee; }
    .header-content h2 { font-size: 1.5rem; margin: 0; }
    .tagline { color: #666; margin: 4px 0 0; }
    .header-actions { display: flex; align-items: center; gap: 8px; }
    .back-link { color: #666; text-decoration: none; }
    .detail-section { padding: 1.5rem 2%; }
    .section-container { max-width: 900px; margin: 0 auto; }
    .section-container h2 { font-size: 1.25rem; margin-bottom: .75rem; color: #c60b1e; }
    .section-container ul { padding-left: 1.25rem; }
    .section-container li { margin-bottom: .4rem; }
    .detail-nav { padding: 1.5rem 2%; border-top: 1px solid #eee; }
    .nav-inner { display: flex; justify-content: space-between; max-width: 900px; margin: 0 auto; }
    .nav-link { color: #c60b1e; text-decoration: none; font-weight: 600; }
    .notfound { text-align: center; padding: 3rem; }
  `,
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
