import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { SafeImageComponent } from '../../components/safe-image/safe-image.component';
import {
  getSpainExperience,
  getSpainExperienceCategoryLabel,
} from '../../data/spain-experiences.data';
import { getExperienceDetail } from '../../data/experience-details.data';

@Component({
  selector: 'app-spain-experience-detail',
  standalone: true,
  imports: [RouterLink, SafeImageComponent],
  templateUrl: './spain-experience-detail.component.html',
  styleUrl: './spain-experience-detail.component.css',
})
export class SpainExperienceDetailComponent {
  private readonly route = inject(ActivatedRoute);

  private readonly id = toSignal(this.route.paramMap.pipe(map((p) => p.get('id') ?? '')), {
    initialValue: this.route.snapshot.paramMap.get('id') ?? '',
  });

  readonly experience = computed(() => getSpainExperience(this.id()));
  readonly detail = computed(() => getExperienceDetail(this.id()));
  readonly notFound = computed(() => !this.experience() && !this.detail());

  labelFor(category: string): string {
    return getSpainExperienceCategoryLabel(category);
  }
}
