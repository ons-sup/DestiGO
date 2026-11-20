import { Component } from '@angular/core';
import { Destination } from '../../models/destination.model';
import { SPAIN_DATA } from '../../data/spain.data';
import { HeroComponent } from '../../components/hero/hero.component';
import { IntroComponent } from '../../components/intro/intro.component';
import { DestinationCardComponent } from '../../components/destination-card/destination-card.component';

@Component({
  selector: 'app-spain-home',
  standalone: true,
  imports: [HeroComponent, IntroComponent, DestinationCardComponent],
  template: `
    <app-spain-hero [title]="countryName" [subtitle]="countryTagline" [image]="countryImage" ctaLabel="Explore destinations" ctaLink="/spain" />
    <app-spain-intro [text]="introduction" />
    <section class="grid">
      @for (d of destinations; track d.id) {
        <app-spain-destination-card [id]="d.id" [name]="d.name" [tagline]="d.tagline" [image]="d.image" />
      }
    </section>
  `,
  styles: `.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem;margin-top:1rem}`,
})
export class SpainHomeComponent {
  readonly countryName = SPAIN_DATA.name;
  readonly countryTagline = SPAIN_DATA.tagline;
  readonly countryImage = SPAIN_DATA.image;
  readonly introduction = SPAIN_DATA.introduction;
  readonly destinations: Destination[] = SPAIN_DATA.destinations;
}
