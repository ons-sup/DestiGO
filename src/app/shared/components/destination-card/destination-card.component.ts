import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Destination } from '../../../core/models/destination.model';
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component';

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
}