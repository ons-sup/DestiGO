import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { TURKEY_DATA } from '../../data/turkey.data';
import { TURKEY_DESTINATION_DETAILS } from '../../data/turkey-content.data';
import { TURKEY_FACT_SOURCES } from '../../data/turkey-fact-sources.data';

@Component({
  selector: 'app-destination-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './destination-detail.component.html',
  styleUrl: './destination-detail.component.css',
})
export class DestinationDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly id = toSignal(this.route.paramMap.pipe(map((p) => p.get('id') ?? '')), {
    initialValue: this.route.snapshot.paramMap.get('id') ?? '',
  });

  readonly destination = computed(() =>
    TURKEY_DATA.destinations.find((d) => d.id === this.id()),
  );

  readonly guide = computed(() =>
    TURKEY_DESTINATION_DETAILS.find((d) => d.id === this.id()),
  );

  readonly related = computed(() =>
    TURKEY_DATA.destinations.filter((d) => d.id !== this.id()).slice(0, 3),
  );

  readonly sources = computed(() => {
    const ids = this.guide()?.sourceIds ?? [];
    return TURKEY_FACT_SOURCES.filter((source) => ids.includes(source.id));
  });
}
