import { Component, input, output } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-error-state',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './error-state.component.html',
  styleUrl: './error-state.component.css',
})
export class ErrorStateComponent {
  title = input('Something went wrong');
  message = input('');
  actionLabel = input<string | null>(null);
  actionLink = input<string | null>(null);
  action = output<void>();
}
