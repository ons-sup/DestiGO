import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HeroSectionComponent } from '../../../../shared/components/hero-section/hero-section.component';
import {
  ExperienceDetail,
  ExperienceCategory,
  getExperienceDetail,
  getAllExperienceIds
} from '../../data/experience-details.data';

@Component({
  selector: 'app-experience-detail',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, RouterLink],
  templateUrl: './experience-detail.component.html',
  styleUrl: './experience-detail.component.css'
})
export class ExperienceDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  experience = signal<ExperienceDetail | null>(null);
  notFound = signal(false);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const detail = getExperienceDetail(id);
      if (detail) {
        this.experience.set(detail);
      } else {
        this.notFound.set(true);
      }
    } else {
      this.notFound.set(true);
    }
  }

  getCategoryLabel(category: ExperienceCategory): string {
    const labels: Record<ExperienceCategory, string> = {
      'food-wine': 'Food & Wine',
      'art-culture': 'Art & Culture',
      'coast-beaches': 'Coast & Beaches',
      'mountains-lakes': 'Mountains & Lakes'
    };
    return labels[category] || category;
  }

  trackByName(index: number, item: { name: string }): string {
    return item.name;
  }
}