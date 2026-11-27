import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FavoritesService } from '../../../../shared/services/favorites.service';
import { FavoriteButtonComponent } from '../../../../shared/components/favorite-button/favorite-button.component';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { SafeImageComponent } from '../../components/safe-image/safe-image.component';
import { SPAIN_DATA } from '../../data/spain.data';

@Component({
  selector: 'app-spain-favorites',
  standalone: true,
  imports: [RouterLink, FavoriteButtonComponent, PageHeroComponent, SafeImageComponent],
  templateUrl: './spain-favorites.component.html',
  styleUrl: './spain-favorites.component.css',
})
export class SpainFavoritesComponent {
  private readonly favoritesService = inject(FavoritesService);

  readonly favoriteIds = this.favoritesService.favorites;
  readonly heroImage = SPAIN_DATA.destinations[0]?.image ?? '';

  readonly favoriteDestinations = computed(() => {
    const ids = this.favoriteIds();
    return SPAIN_DATA.destinations.filter((d) => ids.includes(d.id));
  });

  removeFavorite(destinationId: string): void {
    this.favoritesService.remove(destinationId);
  }
}
