import { Component, input } from '@angular/core';

@Component({
  selector: 'app-turkey-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  readonly countryName = input.required<string>();
  readonly countryTagline = input.required<string>();
  readonly countryImage = input.required<string>();
}
