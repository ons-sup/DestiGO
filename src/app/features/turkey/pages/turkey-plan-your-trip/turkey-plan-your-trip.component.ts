import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TURKEY_DATA } from '../../data/turkey.data';

interface TripPlan { destinations: string[]; days: number; interests: string[]; }

@Component({
  selector: 'app-turkey-plan-your-trip',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="tr-plan">
      <header class="tr-hero">
        <div class="tr-hero__bg"><img src="/images/turkey/destinations/cappadocia.jpg" alt="" aria-hidden="true" /></div>
        <div class="tr-hero__overlay"></div>
        <div class="tr-hero__content">
        <p class="tr-eyebrow">PLAN YOUR TRIP</p>
        <h1 class="tr-title">Build your <span class="tr-accent">TÃ¼rkiye journey</span></h1>
        <p class="tr-lead">Choose destinations, trip length, and interests to generate a simple itinerary suggestion. Your plan is saved locally in this browser.</p>
        </div>
      </header>

      <div class="tr-body">
      <div class="tr-layout">
        <form class="tr-form" (ngSubmit)="generate()" aria-label="Trip planner form">
          <label class="tr-label" for="days">Trip duration (days)</label>
          <input id="days" class="tr-input" type="number" min="2" max="14" [ngModel]="days()" (ngModelChange)="days.set($event)" name="days" />

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

        <section class="tr-result" aria-live="polite">
          <h2>Suggested itinerary</h2>
          @if (itinerary().length === 0) {
            <p class="tr-empty">Select at least one destination and generate your plan.</p>
          } @else {
            <ol class="tr-itinerary">
              @for (day of itinerary(); track day.day) {
                <li><strong>Day {{ day.day }}:</strong> {{ day.text }}</li>
              }
            </ol>
            <p class="tr-note">This is a simple suggestion based on your selections. Check official local information before traveling.</p>
          }
        </section>
      </div>
      </div>
    </section>
  `,
  styles: [`
    .tr-plan{color:#1f2937;}
    .tr-hero{position:relative;min-height:52vh;display:flex;align-items:flex-end;overflow:hidden;}
    .tr-hero__bg,.tr-hero__overlay{position:absolute;inset:0;}
    .tr-hero__bg img{width:100%;height:100%;object-fit:cover;display:block;}
    .tr-hero__overlay{background:linear-gradient(180deg,rgba(0,0,0,.25) 0%,rgba(0,0,0,.45) 45%,rgba(0,0,0,.72) 100%);}
    .tr-hero__content{position:relative;z-index:1;max-width:1240px;width:100%;margin:0 auto;padding:8rem 1.5rem 3.5rem;color:#fff;}
    .tr-body{max-width:1240px;margin:0 auto;padding:2.5rem 1.5rem 4rem;}
    .tr-eyebrow{font-size:.78rem;font-weight:700;letter-spacing:.14em;color:#fbbf24;margin:0 0 .75rem;}
    .tr-title{font-size:clamp(2.2rem,5vw,4rem);line-height:1.08;margin:0 0 1rem;font-weight:700;}
    .tr-accent{color:#fbbf24;}
    .tr-lead{max-width:48rem;color:rgba(255,255,255,.92);line-height:1.75;margin:0;font-size:1.05rem;}
    .tr-layout{display:grid;grid-template-columns:1fr;gap:1.5rem;}
    .tr-form,.tr-result{background:#fff;border:1px solid #e5e7eb;border-radius:20px;padding:1.5rem;box-shadow:0 8px 30px rgba(15,23,42,.04);}
    .tr-label,.tr-fieldset legend,h2{font-weight:700;}
    .tr-input{width:100%;max-width:160px;margin:.5rem 0 1.25rem;padding:.7rem .85rem;border:1px solid #d1d5db;border-radius:10px;font:inherit;}
    .tr-fieldset{border:0;padding:0;margin:0 0 1.25rem;display:grid;gap:.5rem;}
    .tr-check{display:flex;gap:.5rem;align-items:center;color:#374151;}
    .tr-actions{display:flex;gap:.75rem;flex-wrap:wrap;}
    .tr-btn{border:0;background:#b45309;color:#fff;padding:.75rem 1.15rem;border-radius:999px;font:inherit;font-weight:600;cursor:pointer;}
    .tr-btn--ghost{background:#fff;color:#1f2937;border:1px solid #d1d5db;}
    .tr-result h2{margin:0 0 1rem;font-size:1.5rem;}
    .tr-empty,.tr-note{color:#4b5563;line-height:1.7;}
    .tr-itinerary{margin:0;padding-left:1.25rem;display:grid;gap:.75rem;color:#374151;line-height:1.7;}
    .tr-input:focus-visible,.tr-btn:focus-visible,.tr-check input:focus-visible{outline:2px solid #b45309;outline-offset:2px;}
    @media(min-width:900px){.tr-layout{grid-template-columns:1fr 1fr;}}
  `],
})
export class TurkeyPlanYourTripComponent {
  readonly destinations = TURKEY_DATA.destinations;
  readonly interests = ['History', 'Food', 'Nature', 'Coast', 'Culture'];
  readonly days = signal(5);
  readonly selectedDestinations = signal<string[]>(['istanbul', 'cappadocia']);
  readonly selectedInterests = signal<string[]>(['History', 'Culture']);
  readonly itinerary = signal<{ day: number; text: string }[]>([]);

  constructor() {
    if (typeof localStorage !== 'undefined') {
      const raw = localStorage.getItem('turkey-trip-plan');
      if (raw) {
        try {
          const plan = JSON.parse(raw) as TripPlan;
          this.days.set(plan.days || 5);
          this.selectedDestinations.set(plan.destinations?.length ? plan.destinations : ['istanbul']);
          this.selectedInterests.set(plan.interests ?? []);
          this.generate(false);
        } catch { /* ignore invalid saved plan */ }
      }
    }
  }

  toggleDestination(id: string) {
    this.selectedDestinations.update((list) => list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);
  }
  toggleInterest(interest: string) {
    this.selectedInterests.update((list) => list.includes(interest) ? list.filter((x) => x !== interest) : [...list, interest]);
  }
  generate(save = true) {
    const selected = this.destinations.filter((d) => this.selectedDestinations().includes(d.id));
    if (selected.length === 0) { this.itinerary.set([]); return; }
    const days = Math.max(2, Math.min(14, Number(this.days()) || 5));
    const interests = this.selectedInterests().join(', ') || 'sightseeing';
    const plan = Array.from({ length: days }, (_, i) => {
      const d = selected[i % selected.length];
      return { day: i + 1, text: `Explore ${d.name} (${d.region}) with a focus on ${interests.toLowerCase()}. Highlight: ${d.highlights[i % d.highlights.length]}.` };
    });
    this.itinerary.set(plan);
    if (save && typeof localStorage !== 'undefined') {
      localStorage.setItem('turkey-trip-plan', JSON.stringify({ destinations: this.selectedDestinations(), days, interests: this.selectedInterests() } satisfies TripPlan));
    }
  }
  reset() {
    this.days.set(5); this.selectedDestinations.set(['istanbul', 'cappadocia']); this.selectedInterests.set(['History', 'Culture']); this.itinerary.set([]);
    if (typeof localStorage !== 'undefined') localStorage.removeItem('turkey-trip-plan');
  }
}
