import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../layout/header/header.component';
import { CountryService } from '../../core/services/country.service';
import { SpainFooterComponent } from './components/site-footer/spain-footer.component';

@Component({
  selector: 'app-spain',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SpainFooterComponent],
  template: `
    <header>
      <app-header countryName="spain" flag="🇪🇸" />
    </header>
    <router-outlet />
    <app-spain-footer />
  `,
})
export class SpainComponent {
  private readonly countryService = inject(CountryService);

  constructor() {
    this.countryService.setCountry('spain');
  }
}
