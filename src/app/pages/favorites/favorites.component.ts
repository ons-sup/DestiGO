import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { FavoriteButtonComponent } from '../../shared/components/favorite-button/favorite-button.component';
import { FavoritesService } from '../../shared/services/favorites.service';
import { CountryService } from '../../core/services/country.service';
import { Destination } from '../../core/models/destination.model';
import { ITALY_DESTINATIONS } from '../../core/data/italy-destinations';
import { SPAIN_DESTINATIONS } from '../../core/data/spain-destinations';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterLink, HeroSectionComponent, FavoriteButtonComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  private favoritesService = inject(FavoritesService);
  private countryService = inject(CountryService);

  favoriteIds = this.favoritesService.favorites;

  private allDestinations(): Destination[] {
    return this.countryService.currentCountry() === 'spain' ? SPAIN_DESTINATIONS : ITALY_DESTINATIONS;
  }

  favoriteDestinations = computed(() => {
    const ids = this.favoriteIds();
    return this.allDestinations().filter(d => ids.includes(d.id));
  });

  removeFavorite(destinationId: string): void {
    this.favoritesService.remove(destinationId);
  }

  countryName() {
    return this.countryService.getCurrentCountry().name;
  }

  heroImage() {
    return this.countryService.currentCountry() === 'spain' ? '/images/spain/spain1.jpg' : '/assets/images/cinque-terre.jpg';
  }

  destinationsRoute() {
    const prefix = this.countryService.currentCountry() === 'spain' ? '/spain' : '';
    return prefix + '/destinations';
  }
}