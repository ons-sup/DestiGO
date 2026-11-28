import { Component } from '@angular/core';
import { SPAIN_DATA } from '../../data/spain.data';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { SafeImageComponent } from '../../components/safe-image/safe-image.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-spain-about',
  standalone: true,
  imports: [PageHeroComponent, SafeImageComponent, RevealOnScrollDirective],
  templateUrl: './spain-about.component.html',
  styleUrl: './spain-about.component.css',
})
export class SpainAboutComponent {
  readonly introduction = SPAIN_DATA.introduction;
  readonly heroImage = SPAIN_DATA.image;
  readonly destinations = SPAIN_DATA.destinations;

  readonly dishes = [...new Set(SPAIN_DATA.destinations.flatMap((d) => d.dishes))].slice(0, 6);
  readonly landmarks = [...new Set(SPAIN_DATA.destinations.flatMap((d) => d.landmarks))].slice(
    0,
    6,
  );
}
