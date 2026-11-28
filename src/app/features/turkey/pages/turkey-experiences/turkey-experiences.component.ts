import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TURKEY_EXPERIENCES } from '../../data/turkey.data';
import { TURKEY_EXPERIENCE_GUIDES } from '../../data/turkey-content.data';

interface ExperienceItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly location: string;
  readonly image: string;
  readonly alt: string;
  readonly category: string;
  readonly detail: string;
  readonly href: string;
  readonly cta: string;
}

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
          <p class="tr-eyebrow">Experiences in Türkiye</p>
          <h1 class="tr-title">Live the <span class="tr-accent">Turkish Way</span></h1>
          <p class="tr-lead">Go beyond sightseeing with experiences that connect you to Türkiye's culture, cuisine, landscapes and history.</p>
        </div>
      </header>

      <div class="tr-body">
        <div class="tr-filters" role="group" aria-label="Filter experiences by category">
          @for (cat of categories; track cat.value) {
            <button
              type="button"
              class="tr-filter"
              [class.active]="selected() === cat.value"
              [attr.aria-pressed]="selected() === cat.value"
              (click)="selectCategory(cat.value)"
            >{{ cat.label }}</button>
          }
          <output class="tr-count" aria-live="polite">{{ filtered().length }} of {{ experiences.length }} experiences</output>
        </div>

        <div class="tr-grid">
          @for (exp of filtered(); track exp.id; let i = $index) {
            <article class="tr-card" [style.--i]="i">
              <div class="tr-card__img-wrap">
                <img [src]="exp.image" [alt]="exp.alt" loading="lazy" width="800" height="600" />
                <span class="tr-card__cat">{{ labelFor(exp.category) }}</span>
              </div>
              <div class="tr-card__body">
                <p class="tr-card__loc">{{ exp.location }}</p>
                <h2>{{ exp.title }}</h2>
                <p class="tr-card__desc">{{ exp.description }}</p>
                <p class="tr-card__meta">{{ exp.detail }}</p>
                <a class="tr-card__cta" [routerLink]="exp.href">{{ exp.cta }} <span aria-hidden="true">→</span></a>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host{--accent:#b45309;--ink:#1f2937}
    .tr-exp{color:var(--ink)}
    .tr-hero{position:relative;min-height:52vh;display:flex;align-items:flex-end;overflow:hidden}
    .tr-hero__bg,.tr-hero__overlay{position:absolute;inset:0}
    .tr-hero__bg img{width:100%;height:100%;object-fit:cover;display:block;opacity:0;transform:scale(1.05);animation:tr-hero-bg 780ms cubic-bezier(.22,1,.36,1) forwards;transition:transform 1.2s cubic-bezier(.22,1,.36,1)}
    .tr-hero:hover .tr-hero__bg img{transform:scale(1.03)}
    @keyframes tr-hero-bg{to{opacity:1;transform:scale(1)}}
    .tr-hero__content>*{opacity:0;transform:translateY(16px);animation:tr-enter 780ms cubic-bezier(.22,1,.36,1) forwards}
    .tr-hero__content>:nth-child(1){animation-delay:.08s}.tr-hero__content>:nth-child(2){animation-delay:.2s}.tr-hero__content>:nth-child(3){animation-delay:.34s}
    @keyframes tr-enter{to{opacity:1;transform:none}}
    .tr-hero__overlay{background:linear-gradient(180deg,rgba(0,0,0,.25) 0%,rgba(0,0,0,.45) 45%,rgba(0,0,0,.72) 100%)}
    .tr-hero__content{position:relative;z-index:1;max-width:1240px;width:100%;margin:0 auto;padding:8rem 1.5rem 3.5rem;color:#fff}
    .tr-eyebrow{font-size:.78rem;font-weight:700;letter-spacing:.14em;color:#fbbf24;margin:0 0 .75rem;text-transform:uppercase}
    .tr-title{font-size:clamp(2.2rem,5vw,4rem);line-height:1.08;margin:0 0 1rem;font-weight:700;letter-spacing:-.02em}
    .tr-accent{color:#fbbf24}
    .tr-lead{max-width:46rem;color:rgba(255,255,255,.92);line-height:1.75;margin:0;font-size:1.05rem}
    .tr-body{max-width:1240px;margin:0 auto;padding:2.5rem 1.5rem 4rem}
    .tr-filters{display:flex;flex-wrap:wrap;align-items:center;gap:.6rem;margin-bottom:2rem}
    .tr-filter{border:1px solid #d1d5db;background:#fff;color:#374151;padding:.55rem 1rem;border-radius:999px;font:inherit;cursor:pointer;transition:background-color 220ms ease,color 220ms ease,border-color 220ms ease}
    .tr-filter:hover,.tr-filter.active{background:var(--accent);color:#fff;border-color:var(--accent)}
    .tr-count{margin-left:auto;color:#6b7280;font-size:.85rem}
    .tr-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem}
    .tr-card{background:#fff;border:1px solid #e5e7eb;border-radius:20px;overflow:hidden;box-shadow:0 8px 30px rgba(15,23,42,.04);transition:transform 280ms cubic-bezier(.22,1,.36,1),box-shadow 280ms cubic-bezier(.22,1,.36,1)}
    .tr-card:hover,.tr-card:focus-within{transform:translateY(-4px);box-shadow:0 16px 40px rgba(15,23,42,.1)}
    .tr-card__img-wrap{position:relative;aspect-ratio:4/3;overflow:hidden}
    .tr-card__img-wrap img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .65s cubic-bezier(.22,1,.36,1)}
    .tr-card:hover .tr-card__img-wrap img,.tr-card:focus-within .tr-card__img-wrap img{transform:scale(1.04)}
    .tr-card__cat{position:absolute;left:1rem;bottom:1rem;background:rgba(255,255,255,.92);padding:.35rem .7rem;border-radius:999px;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--accent)}
    .tr-card__body{padding:1.35rem}
    .tr-card__loc{font-size:.8rem;color:#92400e;font-weight:600;margin:0 0 .5rem;text-transform:uppercase;letter-spacing:.04em}
    .tr-card h2{margin:0 0 .75rem;font-size:1.35rem;line-height:1.3}
    .tr-card__desc{margin:0 0 .75rem;color:#4b5563;line-height:1.7}
    .tr-card__meta{margin:0 0 1rem;color:#6b7280;font-size:.85rem}
    .tr-card__cta{color:var(--accent);text-decoration:none;font-weight:600}
    .tr-card__cta:hover{text-decoration:underline}
    button:focus-visible,a:focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:4px}
    @media(max-width:600px){.tr-hero{min-height:52vh}.tr-hero__content{padding-top:7rem}.tr-count{margin-left:0;width:100%}}
    @media(prefers-reduced-motion:reduce){.tr-hero__bg img,.tr-hero__content>*,.tr-card,.tr-card__img-wrap img,.tr-filter{animation:none!important;transition:none!important;transform:none!important;opacity:1!important}}
  `],
})
export class TurkeyExperiencesComponent {
  readonly experiences: readonly ExperienceItem[] = [
    ...TURKEY_EXPERIENCES.map((exp) => ({
      id: exp.id,
      title: exp.title,
      description: exp.description,
      location: exp.location,
      image: exp.image,
      alt: exp.title,
      category: exp.category,
      detail: exp.duration,
      href: '/turkey/destinations',
      cta: 'Explore related destinations',
    })),
    ...TURKEY_EXPERIENCE_GUIDES.map((guide) => ({
      id: guide.id,
      title: guide.title,
      description: guide.description,
      location: guide.location,
      image: guide.image,
      alt: guide.altText,
      category: guide.category,
      detail: guide.bestTime,
      href: '/turkey/plan-your-trip',
      cta: 'Plan this experience',
    })),
  ];

  readonly categories = [
    { value: 'all', label: 'All' },
    { value: 'culture', label: 'Culture' },
    { value: 'food', label: 'Food' },
    { value: 'nature', label: 'Nature' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'history', label: 'History' },
  ] as const;

  readonly selected = signal<(typeof this.categories)[number]['value']>('all');
  readonly animKey = signal(0);

  selectCategory(value: (typeof this.categories)[number]['value']): void {
    this.selected.set(value);
    this.animKey.update((v) => v + 1);
  }

  readonly filtered = computed(() =>
    this.selected() === 'all'
      ? this.experiences
      : this.experiences.filter((e) => e.category === this.selected()),
  );

  labelFor(category: string): string {
    return this.categories.find((c) => c.value === category)?.label ?? category;
  }
}
