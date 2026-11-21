import { Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Destination } from '../../../core/models/destination.model';
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component';
import { CountryService } from '../../../core/services/country.service';

type CardVariant = 'small' | 'large';

@Component({
  selector: 'app-destination-card',
  standalone: true,
  imports: [CommonModule, RouterLink, FavoriteButtonComponent],
  templateUrl: './destination-card.component.html',
  styleUrl: './destination-card.component.css'
})
export class DestinationCardComponent {
  private readonly countryService = inject(CountryService);

  destination = input.required<Destination>();
  variant = input<CardVariant>('small');

  readonly destinationRoute = computed(() => [
    '/',
    this.countryService.currentCountry(),
    'destinations',
    this.destination().id,
  ]);
}