import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { FavoriteButtonComponent } from '../../../../shared/components/favorite-button/favorite-button.component';
import { SafeImageComponent } from '../safe-image/safe-image.component';
import {
  getDestinationDetail,
  getPreviousDestinationId,
  getNextDestinationId,
} from '../../data/destination-details.data';

@Component({
  selector: 'app-destination-detail',
  standalone: true,
  imports: [RouterLink, FavoriteButtonComponent, SafeImageComponent],
  templateUrl: './destination-detail.component.html',
  styleUrl: './destination-detail.component.css',
})
export class DestinationDetailComponent {
  private readonly route = inject(ActivatedRoute);

  private readonly id = toSignal(this.route.paramMap.pipe(map((p) => p.get('id') ?? '')), {
    initialValue: this.route.snapshot.paramMap.get('id') ?? '',
  });

  readonly destination = computed(() => getDestinationDetail(this.id()));

  readonly previousId = computed(() => {
    const dest = this.destination();
    return dest ? getPreviousDestinationId(dest.id) : undefined;
  });

  readonly nextId = computed(() => {
    const dest = this.destination();
    return dest ? getNextDestinationId(dest.id) : undefined;
  });

  getDestinationName(id: string): string | undefined {
    return getDestinationDetail(id)?.name;
  }
}
