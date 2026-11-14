import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { DestinationWheelComponent } from './destination-wheel.component';
import { WheelCountry } from './destination-wheel.model';

@Component({
  selector: 'app-destination-wheel-nav',
  standalone: true,
  imports: [DestinationWheelComponent],
  templateUrl: './destination-wheel-nav.component.html',
  styleUrl: './destination-wheel-nav.component.css',
})
export class DestinationWheelNavComponent implements OnDestroy {
  private readonly router = inject(Router);
  private readonly dialog = viewChild<ElementRef<HTMLElement>>('dialog');

  private previousFocus: HTMLElement | null = null;
  private previousBodyOverflow = '';
  private previousBodyPaddingRight = '';

  protected readonly isOpen = signal(false);

  protected openWheel(): void {
    if (this.isOpen()) {
      return;
    }
    this.previousFocus =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    this.lockScroll();
    this.isOpen.set(true);
    setTimeout(() => this.dialog()?.nativeElement.focus());
  }

  protected closeWheel(): void {
    if (!this.isOpen()) {
      return;
    }
    this.isOpen.set(false);
    this.unlockScroll();
    const previous = this.previousFocus;
    this.previousFocus = null;
    setTimeout(() => previous?.focus());
  }

  protected onExplore(country: WheelCountry): void {
    void this.router.navigateByUrl(country.route).finally(() => this.closeWheel());
  }

  @HostListener('document:keydown', ['$event'])
  protected onDocumentKeydown(event: KeyboardEvent): void {
    if (!this.isOpen()) {
      return;
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeWheel();
      return;
    }
    if (event.key === 'Tab') {
      this.trapFocus(event);
    }
  }

  ngOnDestroy(): void {
    if (this.isOpen()) {
      this.unlockScroll();
    }
  }

  private trapFocus(event: KeyboardEvent): void {
    const dialog = this.dialog()?.nativeElement;
    if (!dialog) {
      return;
    }
    const focusable = Array.from(
      dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    );
    if (!focusable.length) {
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!first || !last) {
      return;
    }
    if (document.activeElement === dialog) {
      event.preventDefault();
      (event.shiftKey ? last : first).focus();
      return;
    }
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  private lockScroll(): void {
    const body = document.body;
    this.previousBodyOverflow = body.style.overflow;
    this.previousBodyPaddingRight = body.style.paddingRight;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = 'hidden';
    if (scrollbar > 0) {
      body.style.paddingRight = `${scrollbar}px`;
    }
  }

  private unlockScroll(): void {
    document.body.style.overflow = this.previousBodyOverflow;
    document.body.style.paddingRight = this.previousBodyPaddingRight;
  }
}
