import { Component, input } from '@angular/core';

@Component({
  selector: 'app-turkey-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css',
})
export class IntroComponent {
  readonly introduction = input.required<string>();
  readonly image = input.required<string>();
}
