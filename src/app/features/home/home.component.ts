import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  PLATFORM_ID,
  inject,
  signal,
  viewChildren,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { SiteFooterComponent } from '../../layout/site-footer/site-footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, SiteFooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  protected readonly auth = inject(AuthService);
  private readonly platformId = inject(PLATFORM_ID);

  private observer: IntersectionObserver | null = null;
  private heroTimeout: ReturnType<typeof setTimeout> | null = null;

  protected readonly heroVisible = signal(false);
  protected readonly revealElements = viewChildren<ElementRef<HTMLElement>>('reveal');

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.heroTimeout = setTimeout(() => {
      this.heroVisible.set(true);
    }, 100);

    if (prefersReducedMotion) {
      this.revealElements().forEach((el) => {
        el.nativeElement.classList.add('is-revealed');
      });
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('is-revealed');
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );

    this.revealElements().forEach((el) => {
      this.observer?.observe(el.nativeElement);
    });
  }

  ngOnDestroy(): void {
    if (this.heroTimeout !== null) {
      clearTimeout(this.heroTimeout);
    }
    this.observer?.disconnect();
  }

  protected openWheel(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const launcher = document.querySelector<HTMLButtonElement>('.wheel-launcher');
    launcher?.click();
  }
}
