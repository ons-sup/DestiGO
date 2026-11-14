import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Destination } from '../../models/destination.model';

@Component({
  selector: 'app-destination-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './destination-detail.component.html',
  styleUrl: './destination-detail.component.css',
})
export class DestinationDetailComponent {
  readonly destination = input.required<Destination>();
}
