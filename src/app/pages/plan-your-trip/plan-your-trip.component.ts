import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { CountryService } from '../../core/services/country.service';
import { TripPlan, TravelStyle, BudgetRange, ITALY_DESTINATIONS_FOR_PLANNING, TRAVEL_STYLES, BUDGET_RANGES, generateItinerary, ItineraryDay } from './plan-your-trip.data';
import { SPAIN_DESTINATIONS_FOR_PLANNING, generateSpainItinerary } from '../../core/data/spain-plan-your-trip';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-plan-your-trip',
  standalone: true,
  imports: [CommonModule, FormsModule, HeroSectionComponent, RevealOnScrollDirective],
  templateUrl: './plan-your-trip.component.html',
  styleUrl: './plan-your-trip.component.css'
})
export class PlanYourTripComponent {
  private countryService = inject(CountryService);
  isSpain = this.countryService.currentCountry() === 'spain';

  destinations = this.isSpain ? SPAIN_DESTINATIONS_FOR_PLANNING : ITALY_DESTINATIONS_FOR_PLANNING;
  travelStyles = TRAVEL_STYLES;
  budgetRanges = BUDGET_RANGES;

  plan = signal<TripPlan>({
    destination: '',
    days: 5,
    travelStyle: 'balanced',
    budget: 'mid-range',
    travelers: 2
  });

  showItinerary = signal(false);
  itinerary = computed(() => {
    if (!this.showItinerary()) return [];
    return this.isSpain ? generateSpainItinerary(this.plan()) : generateItinerary(this.plan());
  });

  onSubmit() {
    if (this.plan().destination) {
      this.showItinerary.set(true);
    }
  }

  resetForm() {
    this.plan.set({
      destination: '',
      days: 5,
      travelStyle: 'balanced',
      budget: 'mid-range',
      travelers: 2
    });
    this.showItinerary.set(false);
  }

  getTravelStyleLabel(value: TravelStyle): string {
    return this.travelStyles.find(s => s.value === value)?.label || value;
  }

  getBudgetLabel(value: BudgetRange): string {
    return this.budgetRanges.find(b => b.value === value)?.label || value;
  }

  countryName() {
    return this.countryService.getCurrentCountry().name;
  }

  heroImage() {
    return this.isSpain ? '/images/spain/spain1.jpg' : '/assets/images/italy-destinations.jpg';
  }
}