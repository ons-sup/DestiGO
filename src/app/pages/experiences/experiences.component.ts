import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';
import { Experience, ExperienceCategory, ITALY_EXPERIENCES, EXPERIENCE_CATEGORIES } from './experience.data';
import { SPAIN_EXPERIENCES } from '../../core/data/spain-experiences';
import { CountryService } from '../../core/services/country.service';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule, RouterLink, HeroSectionComponent],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
  private countryService = inject(CountryService);
  experiences = this.countryService.currentCountry() === 'spain' ? SPAIN_EXPERIENCES : ITALY_EXPERIENCES;
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

  experienceRoute(id: string): string[] {
    const prefix = this.countryService.currentCountry() === 'spain' ? '/spain' : '';
    return [prefix, 'experiences', id];
  }

  getCategoryLabel(category: ExperienceCategory): string {
    return this.categories.find(c => c.value === category)?.label || category;
  }

  countryName(): string {
    return this.countryService.getCurrentCountry().name;
  }

  heroImage(): string {
    return this.countryService.currentCountry() === 'spain' ? '/images/spain/hero.jpg' : '/assets/images/amalfi.jpg';
  }
}