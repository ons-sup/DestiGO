import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { DestinationCardComponent } from '../../shared/components/destination-card/destination-card.component';
import { DestinationService } from '../../core/services/destination.service';
import { CountryService } from '../../core/services/country.service';
import { ITALY_DESTINATIONS, POPULAR_DESTINATIONS as ITALY_POPULAR } from '../../core/data/italy-destinations';
import { SPAIN_DESTINATIONS, POPULAR_DESTINATIONS as SPAIN_POPULAR } from '../../core/data/spain-destinations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, DestinationCardComponent],
  styles: `
    :host ::ng-deep .hero.hero-image .hero-content { padding-top: 100px; }
  `,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private countryService = inject(CountryService);
  private destinationService = inject(DestinationService);

  get popularDestinations() {
    return this.countryService.currentCountry() === 'spain' ? SPAIN_POPULAR : ITALY_POPULAR;
  }

  getHeroVideo() {
    return this.countryService.getCurrentCountry().heroVideo || '';
  }

  getHeroImage() {
    return this.countryService.currentCountry() === 'spain' ? '/images/spain/spain.jpg' : (this.countryService.getCurrentCountry().heroImage || '');
  }

  countryName() {
    return this.countryService.getCurrentCountry().name;
  }
}