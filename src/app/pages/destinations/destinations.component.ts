import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { DestinationCardComponent } from '../../shared/components/destination-card/destination-card.component';
import { DestinationService } from '../../core/services/destination.service';
import { CountryService } from '../../core/services/country.service';
import { ITALY_DESTINATIONS } from '../../core/data/italy-destinations';
import { SPAIN_DESTINATIONS } from '../../core/data/spain-destinations';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, DestinationCardComponent, RevealOnScrollDirective],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css'
})
export class DestinationsComponent {
  private countryService = inject(CountryService);
  private destinationService = inject(DestinationService);

  get destinations() {
    return this.countryService.currentCountry() === 'spain' ? SPAIN_DESTINATIONS : ITALY_DESTINATIONS;
  }

  countryName() {
    return this.countryService.getCurrentCountry().name;
  }

  heroImage() {
    return this.countryService.currentCountry() === 'spain' ? '/images/spain/spain1.jpg' : '/assets/images/italy-destinations.jpg';
  }
}