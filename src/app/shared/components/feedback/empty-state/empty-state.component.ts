import { Component, input, output } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.css',
})
export class EmptyStateComponent {
  icon = input('◇');
  title = input.required<string>();
  message = input('');
  actionLabel = input<string | null>(null);
  actionLink = input<string | null>(null);
  action = output<void>();
}
