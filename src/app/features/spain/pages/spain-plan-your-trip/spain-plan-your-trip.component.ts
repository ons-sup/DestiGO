import { Component, PLATFORM_ID, afterNextRender, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SPAIN_DATA } from '../../data/spain.data';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

interface TripPlan {
  destinations: string[];
  days: number;
  interests: string[];
}

const STORAGE_KEY = 'spain-trip-plan';
const DEFAULT_DESTINATIONS = ['madrid', 'barcelona'];
const DEFAULT_INTERESTS = ['History', 'Culture'];

@Component({
  selector: 'app-spain-plan-your-trip',
  standalone: true,
  imports: [FormsModule, PageHeroComponent, RevealOnScrollDirective],
  templateUrl: './spain-plan-your-trip.component.html',
  styleUrl: './spain-plan-your-trip.component.css',
})
export class SpainPlanYourTripComponent {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly destinations = SPAIN_DATA.destinations;
  readonly interests = ['History', 'Food', 'Nature', 'Coast', 'Culture'];
  readonly days = signal(5);
  readonly selectedDestinations = signal<string[]>([...DEFAULT_DESTINATIONS]);
  readonly selectedInterests = signal<string[]>([...DEFAULT_INTERESTS]);
  readonly itinerary = signal<{ day: number; text: string }[]>([]);

  readonly heroImage = this.destinations[0]?.image ?? '';

  constructor() {
    afterNextRender(() => this.restorePlan());
  }

  private restorePlan(): void {
    if (!this.isBrowser) return;
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const plan = JSON.parse(raw) as TripPlan;
      this.days.set(plan.days || 5);
      this.selectedDestinations.set(plan.destinations?.length ? plan.destinations : ['madrid']);
      this.selectedInterests.set(plan.interests ?? []);
      this.generate(false);
    } catch {
      // ignore invalid saved plan
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
    const interests = this.selectedInterests().join(', ') || 'sightseeing';
    const plan = Array.from({ length: days }, (_, i) => {
      const d = selected[i % selected.length];
      return {
        day: i + 1,
        text: `Explore ${d.name} (${d.region}) with a focus on ${interests.toLowerCase()}. Highlight: ${d.landmarks[i % d.landmarks.length]}.`,
      };
    });
    this.itinerary.set(plan);
    if (save && this.isBrowser) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          destinations: this.selectedDestinations(),
          days,
          interests: this.selectedInterests(),
        } satisfies TripPlan),
      );
    }
  }

  reset(): void {
    this.days.set(5);
    this.selectedDestinations.set([...DEFAULT_DESTINATIONS]);
    this.selectedInterests.set([...DEFAULT_INTERESTS]);
    this.itinerary.set([]);
    if (this.isBrowser) localStorage.removeItem(STORAGE_KEY);
  }
}
