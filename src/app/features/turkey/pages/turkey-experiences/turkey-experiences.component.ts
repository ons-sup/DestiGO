import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TURKEY_EXPERIENCES } from '../../data/turkey.data';

@Component({
  selector: 'app-turkey-experiences',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="tr-exp">
      <header class="tr-hero">
        <p class="tr-eyebrow">EXPERIENCES IN TÜRKİYE</p>
        <h1 class="tr-title">Live the <span class="tr-accent">Turkish Way</span></h1>
        <p class="tr-lead">Go beyond sightseeing with experiences that connect you to Türkiye’s culture, cuisine, landscapes, and history.</p>
        <div class="tr-filters" role="group" aria-label="Filter experiences by category">
          @for (cat of categories; track cat.value) {
            <button type="button" class="tr-filter" [class.active]="selected() === cat.value" (click)="selected.set(cat.value)">{{ cat.label }}</button>
          }
        </div>
      </header>
      <div class="tr-grid">
        @for (exp of filtered(); track exp.id) {
          <article class="tr-card">
            <div class="tr-card__img-wrap">
              <img [src]="exp.image" [alt]="exp.title" loading="lazy" />
              <span class="tr-card__cat">{{ labelFor(exp.category) }}</span>
            </div>
            <div class="tr-card__body">
              <p class="tr-card__loc">{{ exp.location }} · {{ exp.duration }}</p>
              <h2>{{ exp.title }}</h2>
              <p class="tr-card__desc">{{ exp.description }}</p>
              <a class="tr-card__cta" [routerLink]="['/turkey/destinations']">Explore related destinations →</a>
            </div>
          </article>
        }
      </div>
    </section>
  `,
  styles: [`
    .tr-exp{max-width:1240px;margin:0 auto;padding:7rem 1.5rem 4rem;color:#1f2937;}
    .tr-eyebrow{font-size:.78rem;font-weight:700;letter-spacing:.14em;color:#b45309;margin:0 0 .75rem;}
    .tr-title{font-size:clamp(2.2rem,5vw,4rem);line-height:1.08;margin:0 0 1rem;font-weight:700;}
    .tr-accent{color:#b45309;}
    .tr-lead{max-width:46rem;color:#4b5563;line-height:1.75;margin:0 0 1.75rem;font-size:1.05rem;}
    .tr-filters{display:flex;flex-wrap:wrap;gap:.6rem;margin-bottom:2rem;}
    .tr-filter{border:1px solid #d1d5db;background:#fff;color:#374151;padding:.55rem 1rem;border-radius:999px;font:inherit;cursor:pointer;}
    .tr-filter:hover,.tr-filter.active{background:#1f2937;color:#fff;border-color:#1f2937;}
    .tr-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;}
    .tr-card{background:#fff;border:1px solid #e5e7eb;border-radius:20px;overflow:hidden;box-shadow:0 8px 30px rgba(15,23,42,.04);}
    .tr-card__img-wrap{position:relative;aspect-ratio:4/3;overflow:hidden;}
    .tr-card__img-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .4s ease;}
    .tr-card:hover .tr-card__img-wrap img{transform:scale(1.03);}
    .tr-card__cat{position:absolute;left:1rem;bottom:1rem;background:rgba(255,255,255,.92);padding:.35rem .7rem;border-radius:999px;font-size:.72rem;font-weight:700;text-transform:uppercase;}
    .tr-card__body{padding:1.35rem;}
    .tr-card__loc{font-size:.8rem;color:#92400e;font-weight:600;margin:0 0 .5rem;text-transform:uppercase;letter-spacing:.04em;}
    .tr-card h2{margin:0 0 .75rem;font-size:1.35rem;line-height:1.3;}
    .tr-card__desc{margin:0 0 1rem;color:#4b5563;line-height:1.7;}
    .tr-card__cta{color:#b45309;text-decoration:none;font-weight:600;}
    .tr-card__cta:hover{text-decoration:underline;}
    .tr-filter:focus-visible,.tr-card__cta:focus-visible{outline:2px solid #b45309;outline-offset:3px;}
  `],
})
export class TurkeyExperiencesComponent {
  readonly experiences = TURKEY_EXPERIENCES;
  readonly categories = [
    { value: 'all', label: 'All' },
    { value: 'culture', label: 'Culture' },
    { value: 'food', label: 'Food' },
    { value: 'nature', label: 'Nature' },
    { value: 'adventure', label: 'Adventure' },
  ] as const;
  readonly selected = signal<(typeof this.categories)[number]['value']>('all');
  readonly filtered = computed(() => this.selected() === 'all' ? this.experiences : this.experiences.filter((e) => e.category === this.selected()));
  labelFor(cat: string) { return this.categories.find((c) => c.value === cat)?.label ?? cat; }
}