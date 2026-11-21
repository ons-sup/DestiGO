import { Component } from '@angular/core';
import { Destination } from '../../models/destination.model';
import { TURKEY_DATA } from '../../data/turkey.data';
import { HeroComponent } from '../../components/hero/hero.component';
import { IntroComponent } from '../../components/intro/intro.component';
import { DestinationCardComponent } from '../../components/destination-card/destination-card.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-turkey-home',
  standalone: true,
  imports: [HeroComponent, IntroComponent, DestinationCardComponent, RevealOnScrollDirective],
  templateUrl: './turkey-home.component.html',
  styleUrl: './turkey-home.component.css',
})
export class TurkeyHomeComponent {
  readonly countryName = TURKEY_DATA.name;
  readonly countryTagline = TURKEY_DATA.tagline;
  readonly countryImage = TURKEY_DATA.image;
  readonly introduction = TURKEY_DATA.introduction;
  readonly destinations: Destination[] = TURKEY_DATA.destinations;
}
