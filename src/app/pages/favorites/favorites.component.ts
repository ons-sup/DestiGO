import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { FavoriteButtonComponent } from '../../shared/components/favorite-button/favorite-button.component';
import { FavoritesService } from '../../shared/services/favorites.service';
import { Destination } from '../../core/models/destination.model';
import { ITALY_DESTINATIONS } from '../../core/data/italy-destinations';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, FavoriteButtonComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  private favoritesService = inject(FavoritesService);

  favoriteIds = this.favoritesService.favorites;

  favoriteDestinations = computed(() => {
    const ids = this.favoriteIds();
    return ITALY_DESTINATIONS.filter(d => ids.includes(d.id));
  });

  removeFavorite(destinationId: string): void {
    this.favoritesService.remove(destinationId);
  }
}