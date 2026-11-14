import { Component, input, output, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-favorite-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite-button.component.html',
  styleUrl: './favorite-button.component.css'
})
export class FavoriteButtonComponent {
  private favoritesService = inject(FavoritesService);

  destinationId = input.required<string>();
  ariaLabel = input('Add to favorites');
  size = input<'small' | 'medium' | 'large'>('medium');

  toggled = output<boolean>();

  isFavorite = computed(() => this.favoritesService.isFavorite(this.destinationId()));

  onClick(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.favoritesService.toggle(this.destinationId());
    this.toggled.emit(this.favoritesService.isFavorite(this.destinationId()));
  }
}