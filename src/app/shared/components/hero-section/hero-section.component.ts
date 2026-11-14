import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
  title = input<string>('');
  titleLines = input<string[]>([]);
  titleFlag = input<string>(''); // Optional flag image for title
  subtitle = input<string>('');
  videoSrc = input<string>('');
  imageSrc = input<string>('');
  ctaText = input<string>('');
  ctaRoute = input<string>('');
  showCta = input<boolean>(false);
  smallTitle = input<string>('');
  isDestinationsHero = input<boolean>(false);
}