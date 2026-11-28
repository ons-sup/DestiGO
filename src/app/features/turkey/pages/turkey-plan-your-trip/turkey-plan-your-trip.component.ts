import { Component, computed, inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TURKEY_DATA } from '../../data/turkey.data';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

interface TripPlan {
  destinations: string[];
  days: number;
  interests: string[];
}

interface ItineraryDay {
  day: number;
  title: string;
  text: string;
  highlight: string;
}

@Component({
  selector: 'app-turkey-plan-your-trip',
  standalone: true,
  imports: [FormsModule, RouterLink, RevealOnScrollDirective],
  template: `
    <section class="tr-plan">
      <header class="tr-hero">
        <div class="tr-hero__bg"><img src="/images/turkey/destinations/cappadocia.jpg" alt="" aria-hidden="true" /></div>
        <div class="tr-hero__overlay"></div>
        <div class="tr-hero__content">
          <p class="tr-eyebrow">Plan your trip</p>
          <h1 class="tr-title">Build your <span class="tr-accent">Türkiye journey</span></h1>
          <p class="tr-lead">Choose destinations, trip length and interests to generate a simple itinerary suggestion. Your plan is saved locally in this browser.</p>
        </div>
      </header>

      <div class="tr-body" appRevealOnScroll>
        <div class="tr-layout">
          <form class="tr-form" (ngSubmit)="generate()" aria-label="Trip planner form">
            <div class="tr-form__head">
              <h2>Your preferences</h2>
              <p>Adjust the inputs and generate a new suggestion.</p>
            </div>

            <label class="tr-label" for="days">Trip duration (days)</label>
            <input id="days" class="tr-input" type="number" min="2" max="14" [ngModel]="days()" (ngModelChange)="days.set($event)" name="days" />
            @if (days() < 2 || days() > 14) {
              <p class="tr-error" role="alert">Choose between 2 and 14 days.</p>
            }

            <fieldset class="tr-fieldset">
              <legend>Destinations</legend>
              @for (d of destinations; track d.id) {
                <label class="tr-check"><input type="checkbox" [checked]="selectedDestinations().includes(d.id)" (change)="toggleDestination(d.id)" /> {{ d.name }}</label>
              }
            </fieldset>

            <fieldset class="tr-fieldset">
              <legend>Interests</legend>
              @for (interest of interests; track interest) {
                <label class="tr-check"><input type="checkbox" [checked]="selectedInterests().includes(interest)" (change)="toggleInterest(interest)" /> {{ interest }}</label>
              }
            </fieldset>

            <div class="tr-actions">
              <button type="submit" class="tr-btn">Generate itinerary</button>
              <button type="button" class="tr-btn tr-btn--ghost" (click)="reset()">Reset</button>
            </div>
          </form>

          <section class="tr-result" aria-labelledby="result-title" aria-live="polite">
            <div class="tr-result__head">
              <h2 id="result-title">Suggested itinerary</h2>
              @if (itinerary().length) {
                <span class="tr-badge">{{ itinerary().length }} days</span>
              }
            </div>
            @if (itinerary().length === 0) {
              <div class="tr-empty">
                <span aria-hidden="true">✦</span>
                <p>Select at least one destination and generate your plan.</p>
              </div>
            } @else {
              <ol class="tr-itinerary">
                @for (day of itinerary(); track day.day) {
                  <li>
                    <span class="tr-day">Day {{ day.day }}</span>
                    <strong>{{ day.title }}</strong>
                    <span class="tr-day-text">{{ day.text }}</span>
                    <span class="tr-highlight">{{ day.highlight }}</span>
                  </li>
                }
              </ol>
              <p class="tr-note">This is a simple suggestion based on your selections. Check official local information before traveling.</p>
              <a class="tr-explore" routerLink="/turkey/destinations">Discover the destinations <span aria-hidden="true">→</span></a>
            }
          </section>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host{--accent:#b45309;--ink:#1f2937;--muted:#57534e;--line:#e7e2da}
    .tr-plan{color:var(--ink)}
    .tr-hero{position:relative;min-height:52vh;display:flex;align-items:flex-end;overflow:hidden}
    .tr-hero__bg,.tr-hero__overlay{position:absolute;inset:0}
    .tr-hero__bg img{width:100%;height:100%;object-fit:cover;display:block;opacity:0;transform:scale(1.05);animation:tr-hero-bg 780ms cubic-bezier(.22,1,.36,1) forwards;transition:transform 1.2s cubic-bezier(.22,1,.36,1)}
    @keyframes tr-hero-bg{to{opacity:1;transform:scale(1)}}
    .tr-hero__content>*{opacity:0;transform:translateY(16px);animation:tr-enter 780ms cubic-bezier(.22,1,.36,1) forwards}
    .tr-hero__content>:nth-child(1){animation-delay:.08s}.tr-hero__content>:nth-child(2){animation-delay:.2s}.tr-hero__content>:nth-child(3){animation-delay:.34s}
    @keyframes tr-enter{to{opacity:1;transform:none}}
    .tr-hero__overlay{background:linear-gradient(180deg,rgba(0,0,0,.25) 0%,rgba(0,0,0,.45) 45%,rgba(0,0,0,.72) 100%)}
    .tr-hero__content{position:relative;z-index:1;max-width:1240px;width:100%;margin:0 auto;padding:8rem 1.5rem 3.5rem;color:#fff}
    .tr-eyebrow{font-size:.78rem;font-weight:700;letter-spacing:.14em;color:#fbbf24;margin:0 0 .75rem;text-transform:uppercase}
    .tr-title{font-size:clamp(2.2rem,5vw,4rem);line-height:1.08;margin:0 0 1rem;font-weight:700;letter-spacing:-.02em}
    .tr-accent{color:#fbbf24}
    .tr-lead{max-width:48rem;color:rgba(255,255,255,.92);line-height:1.75;margin:0;font-size:1.05rem}
    .tr-body{max-width:1240px;margin:0 auto;padding:2.5rem 1.5rem 4rem}
    .tr-layout{display:grid;grid-template-columns:1fr;gap:1.5rem}
    .tr-form,.tr-result{background:#fff;border:1px solid var(--line);border-radius:20px;padding:1.5rem;box-shadow:0 8px 30px rgba(15,23,42,.04)}
    .tr-form__head h2,.tr-result h2{margin:0 0 1.25rem;font-size:1.5rem}
    .tr-form__head p{margin:-.9rem 0 1.25rem;color:var(--muted);font-size:.92rem}
    .tr-label{display:block;font-weight:700;margin-bottom:.4rem}
    .tr-input{width:100%;max-width:160px;margin:0 0 1.25rem;padding:.7rem .85rem;border:1px solid #d1d5db;border-radius:10px;font:inherit}
    .tr-error{margin:-.9rem 0 1rem;color:#b91c1c;font-size:.85rem}
    .tr-fieldset{border:0;padding:0;margin:0 0 1.25rem;display:grid;gap:.55rem}
    .tr-fieldset legend{font-weight:700;margin-bottom:.5rem}
    .tr-check{display:flex;gap:.55rem;align-items:center;color:#374151;line-height:1.4;cursor:pointer}
    .tr-check input{accent-color:var(--accent);width:16px;height:16px}
    .tr-actions{display:flex;gap:.75rem;flex-wrap:wrap}
    .tr-btn{border:0;background:var(--accent);color:#fff;padding:.75rem 1.15rem;border-radius:999px;font:inherit;font-weight:600;cursor:pointer;transition:transform 180ms ease,background-color 220ms ease}
    .tr-btn:hover{transform:translateY(-1px);background:#92400e}
    .tr-btn--ghost{background:#fff;color:var(--ink);border:1px solid #d1d5db}
    .tr-btn--ghost:hover{background:#f5f5f4}
    .tr-result__head{display:flex;align-items:center;justify-content:space-between;gap:1rem}
    .tr-result__head h2{margin-bottom:1rem}
    .tr-badge{padding:.3rem .7rem;border-radius:999px;background:#fef3c7;color:#92400e;font-size:.78rem;font-weight:700;white-space:nowrap}
    .tr-empty{display:grid;justify-items:center;gap:.5rem;padding:3rem 1rem;text-align:center;border:1px dashed #d6d3d1;border-radius:14px;background:#fffdf9}
    .tr-empty span{color:var(--accent);font-size:1.6rem}
    .tr-empty p{margin:0;color:var(--muted)}
    .tr-itinerary{margin:0;padding:0;list-style:none;display:grid;gap:.75rem}
    .tr-itinerary li{display:grid;gap:.2rem;padding:1rem;border:1px solid var(--line);border-radius:14px;background:#fffdf9}
    .tr-day{color:var(--accent);font-size:.72rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
    .tr-day-text{color:var(--muted);font-size:.92rem;line-height:1.6}
    .tr-highlight{color:#92400e;font-size:.85rem;font-weight:600}
    .tr-note{margin:1.25rem 0 0;color:var(--muted);font-size:.85rem;line-height:1.6}
    .tr-explore{display:inline-block;margin-top:1rem;color:var(--accent);font-weight:700;text-decoration:none}
    .tr-explore:hover{text-decoration:underline}
    input:focus-visible,button:focus-visible,a:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
    @media(min-width:900px){.tr-layout{grid-template-columns:1fr 1fr}}
    @media(max-width:600px){.tr-hero__content{padding-top:7rem}}
    @media(prefers-reduced-motion:reduce){.tr-hero__bg img,.tr-hero__content>*,.tr-btn{animation:none!important;transition:none!important;transform:none!important;opacity:1!important}}
  `],
})
export class TurkeyPlanYourTripComponent {
  private readonly platformId = inject(PLATFORM_ID);

  readonly destinations = TURKEY_DATA.destinations;
  readonly interests = ['History', 'Food', 'Nature', 'Coast', 'Culture'];
  readonly days = signal(5);
  readonly selectedDestinations = signal<string[]>(['istanbul', 'cappadocia']);
  readonly selectedInterests = signal<string[]>(['History', 'Culture']);
  readonly itinerary = signal<ItineraryDay[]>([]);

  readonly activeCount = computed(
    () => this.selectedDestinations().length + this.selectedInterests().length,
  );

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const raw = localStorage.getItem('turkey-trip-plan');
      if (raw) {
        try {
          const plan = JSON.parse(raw) as TripPlan;
          this.days.set(plan.days || 5);
          this.selectedDestinations.set(plan.destinations?.length ? plan.destinations : ['istanbul']);
          this.selectedInterests.set(plan.interests ?? []);
          this.generate(false);
        } catch {
          localStorage.removeItem('turkey-trip-plan');
        }
      }
    }
  }

  toggleDestination(id: string): void {
    this.selectedDestinations.update((list) =>
      list.includes(id) ? list.filter((x) => x !== id) : [...list, id],
    );
  }

  toggleInterest(interest: string): void {
    this.selectedInterests.update((list) =>
      list.includes(interest) ? list.filter((x) => x !== interest) : [...list, interest],
    );
  }

  generate(save = true): void {
    const selected = this.destinations.filter((d) => this.selectedDestinations().includes(d.id));
    if (selected.length === 0) {
      this.itinerary.set([]);
      return;
    }

    const days = Math.max(2, Math.min(14, Number(this.days()) || 5));
    const interests = this.selectedInterests();
    const plan = Array.from({ length: days }, (_, i): ItineraryDay => {
      const destination = selected[i % selected.length];
      const highlight = destination.highlights[i % destination.highlights.length];
      const focus = interests.length ? interests[i % interests.length].toLowerCase() : 'sightseeing';
      return {
        day: i + 1,
        title: destination.name,
        text: `Explore ${destination.name} in ${destination.region} with a focus on ${focus}.`,
        highlight,
      };
    });
    this.itinerary.set(plan);

    if (save && isPlatformBrowser(this.platformId)) {
      localStorage.setItem(
        'turkey-trip-plan',
        JSON.stringify({
          destinations: this.selectedDestinations(),
          days,
          interests,
        } satisfies TripPlan),
      );
    }
  }

  reset(): void {
    this.days.set(5);
    this.selectedDestinations.set(['istanbul', 'cappadocia']);
    this.selectedInterests.set(['History', 'Culture']);
    this.itinerary.set([]);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('turkey-trip-plan');
    }
  }
}
