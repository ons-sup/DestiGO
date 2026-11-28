import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../layout/header/header.component';
import { SiteFooterComponent } from '../../layout/site-footer/site-footer.component';
import { CountryService } from '../../core/services/country.service';
import { TurkeyMobileNavComponent } from './components/mobile-nav/mobile-nav.component';

@Component({
  selector: 'app-turkey',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SiteFooterComponent, TurkeyMobileNavComponent],
  styles: [
    `
      :host {
        display: block;
        position: relative;
      }

      .header-scrim {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 110px;
        z-index: 2;
        pointer-events: none;
        background: linear-gradient(180deg, rgba(20, 17, 15, 0.88), rgba(20, 17, 15, 0));
      }

      @media (max-width: 768px) {
        .header-scrim {
          height: 84px;
        }
      }
    `,
  ],
  template: `
    <header>
      <div class="header-scrim" aria-hidden="true"></div>
      <app-header countryName="turkey" flag="🇹🇷" />
    </header>
    <app-turkey-mobile-nav />
    <router-outlet />
    <app-site-footer variant="turkey" />
  `,
})
export class TurkeyComponent {
  private readonly countryService = inject(CountryService);

  constructor() {
    this.countryService.setCountry('turkey');
  }
}
