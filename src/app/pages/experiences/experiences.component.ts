import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { Experience, ExperienceCategory, ITALY_EXPERIENCES, EXPERIENCE_CATEGORIES } from './experience.data';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule, RouterLink, HeroSectionComponent],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
  experiences = ITALY_EXPERIENCES;
  categories = EXPERIENCE_CATEGORIES;
  selectedCategory = signal<ExperienceCategory>('all');

  filteredExperiences = computed(() => {
    const cat = this.selectedCategory();
    if (cat === 'all') return this.experiences;
    return this.experiences.filter(e => e.category === cat);
  });

  selectCategory(category: ExperienceCategory) {
    this.selectedCategory.set(category);
  }

  getCategoryLabel(category: ExperienceCategory): string {
    return this.categories.find(c => c.value === category)?.label || category;
  }
}