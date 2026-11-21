import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeroSectionComponent } from '../../../../shared/components/hero-section/hero-section.component';
import { CountryService } from '../../../../core/services/country.service';
import {
  ExperienceDetail,
  ExperienceCategory,
  getExperienceDetail
} from '../../data/experience-details.data';
import {
  SPAIN_EXPERIENCE_DETAILS,
  getExperienceDetail as getSpainExperienceDetail
} from '../../../spain/data/experience-details.data';

@Component({
  selector: 'app-experience-detail',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, RouterLink],
  templateUrl: './experience-detail.component.html',
  styleUrl: './experience-detail.component.css'
})
export class ExperienceDetailComponent {
  private route = inject(ActivatedRoute);
  private countryService = inject(CountryService);

  isSpain = this.countryService.currentCountry() === 'spain';

  experience = signal<ExperienceDetail | (typeof SPAIN_EXPERIENCE_DETAILS)[number] | null>(null);
  notFound = signal(false);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const detail = this.isSpain ? getSpainExperienceDetail(id) : getExperienceDetail(id);
      if (detail) {
        this.experience.set(detail);
      } else {
        this.notFound.set(true);
      }
    } else {
      this.notFound.set(true);
    }
  }

  backRoute(path: string): string {
    const prefix = this.isSpain ? '/spain' : '';
    return prefix + path;
  }

  getCategoryLabel(category: ExperienceCategory | 'all'): string {
    const labels: Record<ExperienceCategory | 'all', string> = {
      'food-wine': 'Food & Wine',
      'art-culture': 'Art & Culture',
      'coast-beaches': 'Coast & Beaches',
      'mountains-lakes': 'Mountains & Lakes',
      'all': 'All'
    };
    return labels[category] || category;
  }

  trackByName(index: number, item: { name: string }): string {
    return item.name;
  }
}