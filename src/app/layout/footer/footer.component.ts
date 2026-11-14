import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../core/services/country.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(public countryService: CountryService) {}

  getCountry() {
    return this.countryService.getCurrentCountry();
  }
}