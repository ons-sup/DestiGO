import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-turkey-mobile-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="mobile-nav" aria-label="Türkiye mobile navigation">
      <a routerLink="/turkey" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
      <a routerLink="/turkey/destinations" routerLinkActive="active">Destinations</a>
      <a routerLink="/turkey/experiences" routerLinkActive="active">Experiences</a>
      <a routerLink="/turkey/plan-your-trip" routerLinkActive="active">Plan</a>
      <a routerLink="/turkey/about" routerLinkActive="active">About</a>
      <a routerLink="/turkey/favorites" routerLinkActive="active">Favorites ♡</a>
    </nav>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .mobile-nav {
        display: none;
        position: sticky;
        top: 0;
        z-index: 20;
        gap: 0.35rem;
        overflow-x: auto;
        padding: 0.6rem 1rem;
        background: #fffdf9;
        border-block: 1px solid #e7e2da;
        box-shadow: 0 6px 18px -12px rgba(28, 25, 23, 0.5);
        scrollbar-width: none;
      }

      .mobile-nav::-webkit-scrollbar {
        display: none;
      }

      .mobile-nav a {
        flex: 0 0 auto;
        padding: 0.45rem 0.85rem;
        border: 1px solid #e7e2da;
        border-radius: 999px;
        color: #57534e;
        font-size: 0.85rem;
        font-weight: 600;
        text-decoration: none;
        transition:
          background-color 200ms ease,
          color 200ms ease;
      }

      .mobile-nav a.active {
        background: #b45309;
        border-color: #b45309;
        color: #fff;
      }

      .mobile-nav a:focus-visible {
        outline: 2px solid #b45309;
        outline-offset: 2px;
      }

      @media (max-width: 768px) {
        .mobile-nav {
          display: flex;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .mobile-nav a {
          transition: none;
        }
      }
    `,
  ],
})
export class TurkeyMobileNavComponent {}
