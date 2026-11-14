import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Destination } from '../../models/destination.model';

@Component({
  selector: 'app-destination-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './destination-card.component.html',
  styleUrl: './destination-card.component.css',
})
export class DestinationCardComponent {
  readonly destination = input.required<Destination>();
}
