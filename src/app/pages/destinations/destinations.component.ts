import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { DestinationCardComponent } from '../../shared/components/destination-card/destination-card.component';
import { DestinationService } from '../../core/services/destination.service';
import { CountryService } from '../../core/services/country.service';
import { ITALY_DESTINATIONS } from '../../core/data/italy-destinations';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, DestinationCardComponent],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css'
})
export class DestinationsComponent {
  destinations = ITALY_DESTINATIONS;

  constructor(
    private destinationService: DestinationService,
    private countryService: CountryService
  ) {}
}