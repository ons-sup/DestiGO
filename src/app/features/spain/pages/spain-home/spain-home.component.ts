import { Component } from '@angular/core';
import { Destination } from '../../models/destination.model';
import { SPAIN_DATA } from '../../data/spain.data';
import { HeroComponent } from '../../components/hero/hero.component';
import { IntroComponent } from '../../components/intro/intro.component';
import { DestinationCardComponent } from '../../components/destination-card/destination-card.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { SafeImageComponent } from '../../components/safe-image/safe-image.component';

@Component({
  selector: 'app-spain-home',
  standalone: true,
  imports: [
    HeroComponent,
    IntroComponent,
    DestinationCardComponent,
    RevealOnScrollDirective,
    SafeImageComponent,
  ],
  templateUrl: './spain-home.component.html',
  styleUrl: './spain-home.component.css',
})
export class SpainHomeComponent {
  readonly countryName = SPAIN_DATA.name;
  readonly countryTagline = SPAIN_DATA.tagline;
  readonly countryImage = '/images/spain/hero.webp';
  readonly introduction = SPAIN_DATA.introduction;
  readonly destinations: Destination[] = SPAIN_DATA.destinations;
  readonly introImage = SPAIN_DATA.image;

  readonly placesToVisit: string[] = [
    ...new Set(SPAIN_DATA.destinations.flatMap((d) => d.landmarks)),
  ].slice(0, 4);

  readonly experiencesImage =
    SPAIN_DATA.destinations.find((d) => d.id === 'barcelona')?.image ??
    SPAIN_DATA.destinations[0]?.image ??
    '';
}
