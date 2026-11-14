import { Injectable } from '@angular/core';
import { Destination } from '../models/destination.model';
import { ITALY_DESTINATIONS, POPULAR_DESTINATIONS } from '../data/italy-destinations';

@Injectable({ providedIn: 'root' })
export class DestinationService {
  getDestinations(countryCode: string): Destination[] {
    switch (countryCode) {
      case 'italy':
        return ITALY_DESTINATIONS;
      case 'turkey':
      case 'spain':
        return [];
      default:
        return ITALY_DESTINATIONS;
    }
  }

  getPopularDestinations(countryCode: string): Destination[] {
    switch (countryCode) {
      case 'italy':
        return POPULAR_DESTINATIONS;
      case 'turkey':
      case 'spain':
        return [];
      default:
        return POPULAR_DESTINATIONS;
    }
  }

  getDestinationById(countryCode: string, id: string): Destination | undefined {
    return this.getDestinations(countryCode).find(d => d.id === id);
  }
}