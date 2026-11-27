import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FooterLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-spain-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './spain-footer.component.html',
  styleUrl: './spain-footer.component.css',
})
export class SpainFooterComponent {
  readonly year = new Date().getFullYear();

  readonly exploreLinks: FooterLink[] = [
    { label: 'Türkiye', path: '/turkey' },
    { label: 'Italy', path: '/italy' },
    { label: 'Spain', path: '/spain' },
  ];

  readonly navigationLinks: FooterLink[] = [
    { label: 'Home', path: '/spain' },
    { label: 'Destinations', path: '/spain/destinations' },
    { label: 'Experiences', path: '/spain/experiences' },
    { label: 'About', path: '/spain/about' },
    { label: 'Plan Your Trip', path: '/spain/plan-your-trip' },
    { label: 'Favorites', path: '/spain/favorites' },
  ];
}
