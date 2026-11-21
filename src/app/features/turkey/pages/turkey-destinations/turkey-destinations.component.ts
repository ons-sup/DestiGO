import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TURKEY_DATA } from '../../data/turkey.data';

@Component({
  selector: 'app-turkey-destinations',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="tr-dest">
      <header class="tr-hero">
        <div class="tr-hero__bg"><img src="/images/turkey/destinations/istanbul.jpg" alt="" aria-hidden="true" /></div>
        <div class="tr-hero__overlay"></div>
        <div class="tr-hero__content">
          <p class="tr-eyebrow">EXPLORE TÜRKİYE</p>
          <h1 class="tr-title">Destinations across <span class="tr-accent">Türkiye</span></h1>
          <p class="tr-lead">From ancient cities to coastal harbors and surreal landscapes, explore Türkiye through places that define its culture, history, and natural beauty.</p>
        </div>
      </header>

      <div class="tr-body">
        <div class="tr-filters" role="group" aria-label="Filter destinations by region">
          <button type="button" class="tr-filter" [class.active]="selectedRegion() === 'all'" (click)="selectedRegion.set('all')">All</button>
          @for (region of regions; track region) {
            <button type="button" class="tr-filter" [class.active]="selectedRegion() === region" (click)="selectedRegion.set(region)">{{ region }}</button>
          }
        </div>

        <div class="tr-grid">
          @for (destination of filteredDestinations(); track destination.id) {
            <article class="tr-card">
              <a [routerLink]="['/turkey/destinations', destination.id]" class="tr-card__img-wrap">
                <img [src]="destination.image" [alt]="destination.name + ' - ' + destination.tagline" loading="lazy" />
                <span class="tr-card__region">{{ destination.region }}</span>
              </a>
              <div class="tr-card__body">
                <h2><a [routerLink]="['/turkey/destinations', destination.id]">{{ destination.name }}</a></h2>
                <p class="tr-card__tagline">{{ destination.tagline }}</p>
                <p class="tr-card__desc">{{ destination.description }}</p>
                <div class="tr-card__meta"><span>Best time: {{ destination.bestTimeToVisit }}</span></div>
                <a class="tr-card__cta" [routerLink]="['/turkey/destinations', destination.id]">View destination →</a>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .tr-dest{color:#1f2937;}
    .tr-hero{position:relative;min-height:56vh;display:flex;align-items:flex-end;overflow:hidden;}
    .tr-hero__bg,.tr-hero__overlay{position:absolute;inset:0;}
    .tr-hero__bg img{width:100%;height:100%;object-fit:cover;display:block;}
    .tr-hero__overlay{background:linear-gradient(180deg,rgba(0,0,0,.25) 0%,rgba(0,0,0,.45) 45%,rgba(0,0,0,.72) 100%);}
    .tr-hero__content{position:relative;z-index:1;max-width:1240px;width:100%;margin:0 auto;padding:8rem 1.5rem 3.5rem;color:#fff;}
    .tr-eyebrow{font-size:.78rem;font-weight:700;letter-spacing:.14em;color:#fbbf24;margin:0 0 .75rem;}
    .tr-title{font-size:clamp(2.2rem,5vw,4rem);line-height:1.08;margin:0 0 1rem;font-weight:700;letter-spacing:-.02em;}
    .tr-accent{color:#fbbf24;}
    .tr-lead{max-width:46rem;color:rgba(255,255,255,.92);line-height:1.75;margin:0;font-size:1.05rem;}
    .tr-body{max-width:1240px;margin:0 auto;padding:2.5rem 1.5rem 4rem;}
    .tr-filters{display:flex;flex-wrap:wrap;gap:.6rem;margin-bottom:2rem;}
    .tr-filter{border:1px solid #d1d5db;background:#fff;color:#374151;padding:.55rem 1rem;border-radius:999px;font:inherit;cursor:pointer;transition:all .2s;}
    .tr-filter:hover,.tr-filter.active{background:#1f2937;color:#fff;border-color:#1f2937;}
    .tr-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;}
    .tr-card{background:#fff;border:1px solid #e5e7eb;border-radius:20px;overflow:hidden;box-shadow:0 8px 30px rgba(15,23,42,.04);transition:transform .25s,box-shadow .25s;}
    .tr-card:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(15,23,42,.08);}
    .tr-card__img-wrap{display:block;position:relative;aspect-ratio:4/3;overflow:hidden;}
    .tr-card__img-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .4s ease;}
    .tr-card:hover .tr-card__img-wrap img{transform:scale(1.03);}
    .tr-card__region{position:absolute;left:1rem;bottom:1rem;background:rgba(255,255,255,.92);color:#1f2937;padding:.35rem .7rem;border-radius:999px;font-size:.72rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;}
    .tr-card__body{padding:1.35rem;}
    .tr-card h2{margin:0 0 .25rem;font-size:1.55rem;}
    .tr-card h2 a{color:inherit;text-decoration:none;}
    .tr-card__tagline{margin:0 0 .75rem;color:#92400e;font-weight:500;}
    .tr-card__desc{margin:0 0 1rem;color:#4b5563;line-height:1.7;font-size:.96rem;}
    .tr-card__meta{font-size:.84rem;color:#6b7280;margin-bottom:1rem;}
    .tr-card__cta{color:#b45309;text-decoration:none;font-weight:600;}
    .tr-card__cta:hover{text-decoration:underline;}
    .tr-filter:focus-visible,.tr-card h2 a:focus-visible,.tr-card__cta:focus-visible,.tr-card__img-wrap:focus-visible{outline:2px solid #b45309;outline-offset:3px;border-radius:4px;}
    @media (max-width:600px){.tr-hero{min-height:52vh;}.tr-hero__content{padding-top:7rem;}}
  `],
})
export class TurkeyDestinationsComponent {
  readonly destinations = TURKEY_DATA.destinations;
  readonly regions = [...new Set(this.destinations.map((d) => d.region))];
  readonly selectedRegion = signal('all');
  readonly filteredDestinations = computed(() => {
    const region = this.selectedRegion();
    return region === 'all' ? this.destinations : this.destinations.filter((d) => d.region === region);
  });
}