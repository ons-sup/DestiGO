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
        <div class="tr-hero__bg"><img src="/images/turkey/experiences/bosphorus-cruise.jpg" alt="" aria-hidden="true" /></div>
        <div class="tr-hero__overlay"></div>
        <div class="tr-hero__content">
        <p class="tr-eyebrow reveal-item" style="--item-delay:40ms">EXPERIENCES IN TÜRKİYE</p>
        <h1 class="tr-title reveal-item" style="--item-delay:120ms">Live the <span class="tr-accent">Turkish Way</span></h1>
        <p class="tr-lead reveal-item" style="--item-delay:200ms">Go beyond sightseeing with experiences that connect you to Türkiye's culture, cuisine, landscapes, and history.</p>
        </div>
      </header>
      <div class="tr-body">
        <div class="tr-filters reveal-item" style="--item-delay:80ms" role="group" aria-label="Filter experiences by category">
          @for (cat of categories; track cat.value) {
            <button type="button" class="tr-filter" [class.active]="selected() === cat.value" (click)="selectCategory(cat.value)">{{ cat.label }}</button>
          }
        </div>
      <div class="tr-grid">
        @for (exp of filtered(); track exp.id + '-' + animKey(); let i = $index) {
          <article class="tr-card" [style.--i]="i">
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
      </div>
    </section>
  `,
  styles: [`
    .tr-exp{color:#1f2937;}
    .tr-hero{position:relative;min-height:52vh;display:flex;align-items:flex-end;overflow:hidden;}
    .tr-hero__bg,.tr-hero__overlay{position:absolute;inset:0;}
    .tr-hero__bg img{width:100%;height:100%;object-fit:cover;display:block;opacity:0;transform:scale(1.05);animation:tr-hero-bg var(--motion-hero,780ms) var(--ease-standard,cubic-bezier(.22,1,.36,1)) forwards;transition:transform 1.8s var(--ease-standard,cubic-bezier(.22,1,.36,1));} .tr-hero:hover .tr-hero__bg img{transform:scale(1.03);} @keyframes tr-hero-bg{to{opacity:1;transform:scale(1)}} .tr-hero__content>*{opacity:0;transform:translateY(16px);animation:tr-enter var(--motion-hero,780ms) var(--ease-standard,cubic-bezier(.22,1,.36,1)) forwards;} .tr-hero__content>:nth-child(1){animation-delay:.08s}.tr-hero__content>:nth-child(2){animation-delay:.2s}.tr-hero__content>:nth-child(3){animation-delay:.34s} @keyframes tr-enter{to{opacity:1;transform:none}}
    .tr-hero__overlay{background:linear-gradient(180deg,rgba(0,0,0,.25) 0%,rgba(0,0,0,.45) 45%,rgba(0,0,0,.72) 100%);}
    .tr-hero__content{position:relative;z-index:1;max-width:1240px;width:100%;margin:0 auto;padding:8rem 1.5rem 3.5rem;color:#fff;}
    .tr-body{max-width:1240px;margin:0 auto;padding:2.5rem 1.5rem 4rem;}
    .tr-eyebrow{font-size:.78rem;font-weight:700;letter-spacing:.14em;color:#fbbf24;margin:0 0 .75rem;}
    .tr-title{font-size:clamp(2.2rem,5vw,4rem);line-height:1.08;margin:0 0 1rem;font-weight:700;}
    .tr-accent{color:#fbbf24;}
    .tr-lead{max-width:46rem;color:rgba(255,255,255,.92);line-height:1.75;margin:0;font-size:1.05rem;}
    .tr-filters{display:flex;flex-wrap:wrap;gap:.6rem;margin-bottom:2rem;}
    .tr-filter{border:1px solid #d1d5db;background:#fff;color:#374151;padding:.55rem 1rem;border-radius:999px;font:inherit;cursor:pointer;}
    .tr-filter:hover,.tr-filter.active{background:#1f2937;color:#fff;border-color:#1f2937;}
    .tr-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;}
    .tr-card{background:#fff;border:1px solid #e5e7eb;border-radius:20px;overflow:hidden;box-shadow:0 8px 30px rgba(15,23,42,.04);transition:transform var(--motion-hover,280ms) var(--ease-standard),box-shadow var(--motion-hover,280ms) var(--ease-standard);} .reveal-on-scroll.is-revealed .tr-card{opacity:0;transform:translateY(18px);animation:card-in var(--motion-reveal,560ms) var(--ease-standard) calc(var(--i,0)*70ms) forwards;} .tr-card:hover,.tr-card:focus-within{transform:translateY(-4px);box-shadow:0 16px 40px rgba(15,23,42,.08);} @keyframes card-in{to{opacity:1;transform:none}}
    .tr-card__img-wrap{position:relative;aspect-ratio:4/3;overflow:hidden;}
    .tr-card__img-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .65s var(--ease-standard,cubic-bezier(.22,1,.36,1));}
    .tr-card:hover .tr-card__img-wrap img,.tr-card:focus-within .tr-card__img-wrap img{transform:scale(1.04);}
    .tr-card__cat{position:absolute;left:1rem;bottom:1rem;background:rgba(255,255,255,.92);padding:.35rem .7rem;border-radius:999px;font-size:.72rem;font-weight:700;text-transform:uppercase;}
    .tr-card__body{padding:1.35rem;}
    .tr-card__loc{font-size:.8rem;color:#92400e;font-weight:600;margin:0 0 .5rem;text-transform:uppercase;letter-spacing:.04em;}
    .tr-card h2{margin:0 0 .75rem;font-size:1.35rem;line-height:1.3;}
    .tr-card__desc{margin:0 0 1rem;color:#4b5563;line-height:1.7;}
    .tr-card__cta{color:#b45309;text-decoration:none;font-weight:600;}
    .tr-card__cta:hover{text-decoration:underline;}
    .tr-filter:focus-visible,.tr-card__cta:focus-visible{outline:2px solid #b45309;outline-offset:3px;} @media (prefers-reduced-motion: reduce){.tr-hero__bg img,.tr-hero__content>*,.tr-card,.tr-card__img-wrap img,.tr-filter{animation:none!important;transition:none!important;transform:none!important;opacity:1!important;}}
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
  readonly animKey = signal(0);
  selectCategory(value: (typeof this.categories)[number]['value']) { this.selected.set(value); this.animKey.update((v) => v + 1); }
  readonly filtered = computed(() => this.selected() === 'all' ? this.experiences : this.experiences.filter((e) => e.category === this.selected()));
  labelFor(cat: string) { return this.categories.find((c) => c.value === cat)?.label ?? cat; }
}

