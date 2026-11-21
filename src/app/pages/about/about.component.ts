import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../shared/components/hero-section/hero-section.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, RevealOnScrollDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  developers = [
    {
      name: 'Ahmed Ben Mim',
      role: 'TÃ¼rkiye Portal Developer',
      description: 'Responsible for the TÃ¼rkiye portal including Istanbul, Cappadocia, and Antalya content.'
    },
    {
      name: 'Ons Chtioui',
      role: 'Italy Portal Developer',
      description: 'Responsible for the Italy portal including Rome, Venice, and Florence content.'
    }
  ];

  getInitials(name: string): string {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  }
}