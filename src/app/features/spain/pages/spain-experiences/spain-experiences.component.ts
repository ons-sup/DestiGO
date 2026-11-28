import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { SafeImageComponent } from '../../components/safe-image/safe-image.component';
import {
  SPAIN_EXPERIENCES,
  SPAIN_EXPERIENCE_CATEGORIES,
  SpainExperienceCategory,
  getSpainExperienceCategoryLabel,
} from '../../data/spain-experiences.data';

@Component({
  selector: 'app-spain-experiences',
  standalone: true,
  imports: [RouterLink, PageHeroComponent, SafeImageComponent],
  templateUrl: './spain-experiences.component.html',
  styleUrl: './spain-experiences.component.css',
})
export class SpainExperiencesComponent {
  readonly experiences = SPAIN_EXPERIENCES;
  readonly categories = SPAIN_EXPERIENCE_CATEGORIES;
  readonly selected = signal<SpainExperienceCategory | 'all'>('all');
  readonly animKey = signal(0);

  readonly heroImage = SPAIN_EXPERIENCES[0]?.imageUrl ?? '';

  selectCategory(value: SpainExperienceCategory | 'all'): void {
    this.selected.set(value);
    this.animKey.update((v) => v + 1);
  }

  readonly filtered = computed(() =>
    this.selected() === 'all'
      ? this.experiences
      : this.experiences.filter((e) => e.category === this.selected()),
  );

  labelFor(category: string): string {
    return getSpainExperienceCategoryLabel(category);
  }
}
