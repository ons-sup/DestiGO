import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Destination } from '../../../core/models/destination.model';

type CardVariant = 'small' | 'large';

@Component({
  selector: 'app-destination-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destination-card.component.html',
  styleUrl: './destination-card.component.css'
})
export class DestinationCardComponent {
  destination = input.required<Destination>();
  variant = input<CardVariant>('small');
}