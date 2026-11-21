import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { DestinationCardComponent } from '../../shared/components/destination-card/destination-card.component';
import { DestinationService } from '../../core/services/destination.service';
import { CountryService } from '../../core/services/country.service';
import { POPULAR_DESTINATIONS } from '../../core/data/italy-destinations';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, HeroSectionComponent, DestinationCardComponent, RevealOnScrollDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  popularDestinations = POPULAR_DESTINATIONS;

  constructor(
    private destinationService: DestinationService,
    private countryService: CountryService
  ) {
    this.countryService.setCountry('italy');
  }

  getHeroVideo() {
    return this.countryService.getCurrentCountry().heroVideo || '';
  }
}