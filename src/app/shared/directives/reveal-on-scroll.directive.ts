import { Directive, ElementRef, Input, OnDestroy, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true,
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;
  private revealTimer: ReturnType<typeof setTimeout> | null = null;

  @Input() revealDelay = 0;
  @Input() revealThreshold = 0.12;
  @Input() revealOnce = true;

  ngOnInit(): void {
    const element = this.el.nativeElement;
    element.classList.add('reveal-on-scroll');
    if (this.revealDelay > 0) {
      element.style.setProperty('--reveal-delay', `${this.revealDelay}ms`);
    }

    if (!isPlatformBrowser(this.platformId)) {
      element.classList.add('is-revealed');
      return;
    }

    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      element.classList.add('is-revealed');
      return;
    }

// Immediately reveal element if already in viewport on page load
    const rect = element.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.98 && rect.bottom > 0;
    if (inView) {
      element.classList.add('is-revealed');
      element.classList.remove('reveal-pending');
      this.observer = new IntersectionObserver(
        () => {},
        { threshold: this.revealThreshold, rootMargin: '0px 0px -6% 0px' }
      );
      this.observer.observe(element);
      return;
    }

    element.classList.add('reveal-pending');

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.reveal(element);
          } else if (!this.revealOnce) {
            element.classList.remove('is-revealed');
          }
        }
      },
      { threshold: this.revealThreshold, rootMargin: '0px 0px -6% 0px' },
    );

    this.observer.observe(element);

    this.revealTimer = setTimeout(() => this.reveal(element), 1800);
  }

  private reveal(element: HTMLElement): void {
    element.classList.add('is-revealed');
    if (this.revealOnce) this.observer?.unobserve(element);
    if (this.revealTimer !== null) {
      clearTimeout(this.revealTimer);
      this.revealTimer = null;
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.revealTimer !== null) clearTimeout(this.revealTimer);
  }
}
