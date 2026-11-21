import { Component, input, inject } from '@angular/core';
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
  destination = input.required<Destination>();
  variant = input<CardVariant>('small');

  private countryService = inject(CountryService);

  detailRoute(): string[] {
    const code = this.countryService.currentCountry();
    const prefix = code === 'spain' ? '/spain' : '';
    return [prefix, 'destinations', this.destination().id];
  }
}