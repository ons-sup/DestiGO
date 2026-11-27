import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FavoriteButtonComponent } from '../../../../shared/components/favorite-button/favorite-button.component';
import { SafeImageComponent } from '../safe-image/safe-image.component';
import { Destination } from '../../models/destination.model';

@Component({
  selector: 'app-spain-destination-card',
  standalone: true,
  imports: [RouterLink, FavoriteButtonComponent, SafeImageComponent],
  template: `
    <article class="card">
      <div class="card__image-wrapper">
        <app-spain-safe-image
          class="card__image"
          [src]="destination().image"
          [alt]="destination().name"
          [title]="destination().name"
          loading="lazy"
        />
        <div class="card__overlay"></div>
        <span class="card__badge">{{ destination().region }}</span>
        <div class="card__favorite">
          <app-favorite-button
            [destinationId]="destination().id"
            [ariaLabel]="'Add ' + destination().name + ' to favorites'"
            size="small"
          />
        </div>
      </div>
      <div class="card__content">
        <h2 class="card__title">
          <a class="card__link" [routerLink]="['/spain/destinations', destination().id]">
            {{ destination().name }}
          </a>
        </h2>
        <p class="card__tagline">{{ destination().tagline }}</p>
        <p class="card__description">{{ destination().description }}</p>
        <ul class="card__highlights">
          @for (highlight of destination().landmarks; track highlight) {
            <li>{{ highlight }}</li>
          }
        </ul>
        <span class="card__meta">Best time: {{ destination().bestTimeToVisit }}</span>
      </div>
    </article>
  `,
  styleUrl: './destination-card.component.css',
})
export class DestinationCardComponent {
  readonly destination = input.required<Destination>();
}
