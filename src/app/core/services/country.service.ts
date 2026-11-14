import { Injectable, signal } from '@angular/core';
import { Country, CountryCode, COUNTRIES } from '../models/country.model';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private _currentCountry = signal<CountryCode>('italy');
  currentCountry = this._currentCountry.asReadonly();

  getCountry(code: CountryCode): Country {
    return COUNTRIES[code];
  }

  getCurrentCountry(): Country {
    return COUNTRIES[this._currentCountry()];
  }

  setCountry(code: CountryCode): void {
    this._currentCountry.set(code);
  }

  getAvailableCountries(): Country[] {
    return Object.values(COUNTRIES);
  }
}