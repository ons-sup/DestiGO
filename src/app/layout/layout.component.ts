import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CountryService } from '../core/services/country.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  private router = inject(Router);
  private countryService = inject(CountryService);

  country: 'italy' | 'turkey' | 'spain' = 'italy';
  flag: '🇮🇹' | '🇹🇷' | '🇪🇸' = '🇮🇹';

  ngOnInit(): void {
    this.updateCountry(this.router.url);
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e: any) => {
      this.updateCountry(e.urlAfterRedirects || e.url);
    });
  }

  private updateCountry(url: string): void {
    if (url.startsWith('/spain')) {
      this.country = 'spain';
      this.flag = '🇪🇸';
      this.countryService.setCountry('spain');
    } else if (url.startsWith('/turkey')) {
      this.country = 'turkey';
      this.flag = '🇹🇷';
      this.countryService.setCountry('turkey');
    } else {
      this.country = 'italy';
      this.flag = '🇮🇹';
      this.countryService.setCountry('italy');
    }
  }
}