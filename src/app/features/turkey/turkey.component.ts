import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../layout/header/header.component';
import { SiteFooterComponent } from '../../layout/site-footer/site-footer.component';
import { CountryService } from '../../core/services/country.service';

@Component({
  selector: 'app-turkey',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SiteFooterComponent],
  template: `
    <header>
      <app-header countryName="turkey" flag="🇹🇷" />
    </header>
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
