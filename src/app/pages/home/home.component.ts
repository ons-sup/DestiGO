import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { DestinationCardComponent } from '../../shared/components/destination-card/destination-card.component';
import { DestinationService } from '../../core/services/destination.service';
import { CountryService } from '../../core/services/country.service';
import { POPULAR_DESTINATIONS as ITALY_POPULAR } from '../../core/data/italy-destinations';
import { POPULAR_DESTINATIONS as SPAIN_POPULAR } from '../../core/data/spain-destinations';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, HeroSectionComponent, DestinationCardComponent, RevealOnScrollDirective],
  styles: `
    :host ::ng-deep .hero.hero-image .hero-content { padding-top: 100px; }
  `,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(
    private destinationService: DestinationService,
    private countryService: CountryService
  ) {
    this.countryService.setCountry('italy');
  }

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