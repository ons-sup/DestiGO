import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { TURKEY_DATA } from '../../data/turkey.data';

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
}
