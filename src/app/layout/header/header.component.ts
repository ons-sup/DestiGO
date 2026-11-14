import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CountryService } from '../../core/services/country.service';
import { FavoritesService } from '../../shared/services/favorites.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private countryService = inject(CountryService);
  private favoritesService = inject(FavoritesService);

  navLinks = [
    { path: '/', label: 'Home' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/experiences', label: 'Experiences' },
    { path: '/plan-your-trip', label: 'Plan Your Trip' },
    { path: '/about', label: 'About' }
  ];

  icons = ['♡'];

  countryName = computed(() => {
    const country = this.countryService.getCurrentCountry();
    return `${country.name} ${country.flag}`;
  });

  favoritesCount = this.favoritesService.count;
}