import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Destination } from '../../models/destination.model';
import { TURKEY_DATA } from '../../data/turkey.data';
import {
  TURKEY_CULTURE_NOTES,
  TURKEY_EXPERIENCE_GUIDES,
  TURKEY_WORLD_HERITAGE,
} from '../../data/turkey-content.data';
import { HeroComponent } from '../../components/hero/hero.component';
import { IntroComponent } from '../../components/intro/intro.component';
import { DestinationCardComponent } from '../../components/destination-card/destination-card.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-turkey-home',
  standalone: true,
  imports: [
    RouterLink,
    HeroComponent,
    IntroComponent,
    DestinationCardComponent,
    RevealOnScrollDirective,
  ],
  templateUrl: './turkey-home.component.html',
  styleUrl: './turkey-home.component.css',
})
export class TurkeyHomeComponent {
  readonly countryName = TURKEY_DATA.name;
  readonly countryTagline = TURKEY_DATA.tagline;
  readonly countryImage = TURKEY_DATA.image;
  readonly introduction = TURKEY_DATA.introduction;
  readonly introImage = '/images/turkey/editorial/hagia-sophia-interior.jpg';
  readonly destinations: Destination[] = TURKEY_DATA.destinations;
  readonly featuredExperiences = TURKEY_EXPERIENCE_GUIDES.slice(0, 3);
  readonly cultureNotes = TURKEY_CULTURE_NOTES.slice(0, 2);
  readonly heritage = TURKEY_WORLD_HERITAGE;
}
