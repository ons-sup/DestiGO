import { Component, computed, signal } from '@angular/core';
import { SPAIN_DATA } from '../../data/spain.data';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { DestinationCardComponent } from '../../components/destination-card/destination-card.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-spain-destinations',
  standalone: true,
  imports: [PageHeroComponent, DestinationCardComponent, RevealOnScrollDirective],
  templateUrl: './spain-destinations.component.html',
  styleUrl: './spain-destinations.component.css',
})
export class SpainDestinationsComponent {
  readonly destinations = SPAIN_DATA.destinations;
  readonly regions = [...new Set(this.destinations.map((d) => d.region))];
  readonly selectedRegion = signal('all');
  readonly animKey = signal(0);
  readonly heroImage = this.destinations[0]?.image ?? '';

  selectRegion(region: string): void {
    this.selectedRegion.set(region);
    this.animKey.update((v) => v + 1);
  }

  readonly filteredDestinations = computed(() => {
    const region = this.selectedRegion();
    return region === 'all'
      ? this.destinations
      : this.destinations.filter((d) => d.region === region);
  });
}
