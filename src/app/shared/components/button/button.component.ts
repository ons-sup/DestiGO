import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export type ButtonVariant = 'primary' | 'secondary' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  host: {
    '[class.btn-host--full]': 'fullWidth()',
  },
})
export class ButtonComponent {
  variant = input<ButtonVariant>('primary');
  size = input<ButtonSize>('md');
  type = input<ButtonType>('button');
  link = input<string | null>(null);
  disabled = input(false);
  loading = input(false);
  fullWidth = input(false);
  ariaLabel = input<string | null>(null);

  protected readonly isInactive = computed(() => this.disabled() || this.loading());

  protected readonly classes = computed(() => {
    const parts = ['btn', `btn--${this.variant()}`, `btn--${this.size()}`];
    if (this.fullWidth()) {
      parts.push('btn--full');
    }
    if (this.loading()) {
      parts.push('btn--loading');
    }
    return parts.join(' ');
  });

  protected readonly linkClasses = computed(() => {
    const classes = this.classes();
    return this.isInactive() ? `${classes} btn--inactive` : classes;
  });

  protected handleLinkClick(event: Event): void {
    if (this.isInactive()) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
