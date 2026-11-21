import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

type FooterVariant = 'global' | 'turkey';

interface FooterLink {
  label: string;
  path?: string;
  disabled?: boolean;
  note?: string;
}

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.css',
})
export class SiteFooterComponent {
  readonly variant = input<FooterVariant>('global');
  readonly year = new Date().getFullYear();

  protected readonly tagline = computed(() => {
    return this.variant() === 'turkey'
      ? 'Discover destinations, cultures, and unforgettable Turkish journeys.'
      : 'Discover destinations, cultures, and experiences across the globe.';
  });

  protected readonly exploreLinks: FooterLink[] = [
    { label: 'Türkiye', path: '/turkey' },
    { label: 'Italy', path: '/italy' },
    { label: 'Spain', disabled: true, note: 'Coming Soon' },
  ];

  protected readonly navigationLinks = computed<FooterLink[]>(() => {
    if (this.variant() === 'turkey') {
      return [
        { label: 'Home', path: '/turkey' },
        { label: 'Destinations', path: '/turkey/destinations' },
        { label: 'Experiences', path: '/turkey/experiences' },
        { label: 'About', path: '/turkey/about' },
        { label: 'Plan Your Trip', path: '/turkey/plan-your-trip' },
      ];
    }

    return [
      { label: 'Home', path: '/' },
      { label: 'Destinations', path: '/destinations' },
      { label: 'Experiences', path: '/experiences' },
      { label: 'About', path: '/about' },
      { label: 'Plan Your Trip', path: '/plan-your-trip' },
    ];
  });
}
