import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HeroSectionComponent } from '../../../../shared/components/hero-section/hero-section.component';
import { FavoriteButtonComponent } from '../../../../shared/components/favorite-button/favorite-button.component';
import {
  DestinationDetail,
  getDestinationDetail,
  getPreviousDestinationId,
  getNextDestinationId,
  getAllDestinationIds
} from '../../data/destination-details.data';

@Component({
  selector: 'app-destination-detail',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, FavoriteButtonComponent, RouterLink],
  templateUrl: './destination-detail.component.html',
  styleUrl: './destination-detail.component.css'
})
export class DestinationDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  destination = signal<DestinationDetail | null>(null);
  notFound = signal(false);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const detail = getDestinationDetail(id);
      if (detail) {
        this.destination.set(detail);
      } else {
        this.notFound.set(true);
      }
    } else {
      this.notFound.set(true);
    }
  }

  previousId = computed(() => {
    const dest = this.destination();
    return dest ? getPreviousDestinationId(dest.id) : undefined;
  });

  nextId = computed(() => {
    const dest = this.destination();
    return dest ? getNextDestinationId(dest.id) : undefined;
  });

  trackByName(index: number, item: { name: string }): string {
    return item.name;
  }

  getDestinationName(id: string): string | undefined {
    return getDestinationDetail(id)?.name;
  }
}