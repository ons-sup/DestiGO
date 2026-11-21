import { Destination } from '../models/destination.model';

export const SPAIN_DESTINATIONS: Destination[] = [
  {
    id: 'madrid',
    number: '01',
    name: 'Madrid',
    subtitle: 'Royal Capital',
    description: 'Walk through grand boulevards and world-class museums in Spain\u2019s lively capital.',
    imageUrl: '/images/spain/Madrid.jpg',
    linkText: 'Discover Madrid →'
  },
  {
    id: 'barcelona',
    number: '02',
    name: 'Barcelona',
    subtitle: 'Modernist by the Sea',
    description: 'Gaud\u00ed\u2019s fantastical architecture meets Mediterranean beaches.',
    imageUrl: '/images/spain/Barcelona.jpg',
    linkText: 'Discover Barcelona →'
  },
  {
    id: 'seville',
    number: '03',
    name: 'Seville',
    subtitle: 'Flamenco & Moorish Palaces',
    description: 'Flamenco, orange trees and the Alc\u00e1zar in the heart of Andalusia.',
    imageUrl: '/images/spain/cities/seville0.jpg',
    linkText: 'Discover Seville →'
  },
  {
    id: 'valencia',
    number: '04',
    name: 'Valencia',
    subtitle: 'City of Arts & Sciences',
    description: 'Futuristic architecture, historic markets and authentic paella.',
    imageUrl: '/images/spain/valencia.jpg',
    linkText: 'Discover Valencia →'
  },
  {
    id: 'granada',
    number: '05',
    name: 'Granada',
    subtitle: 'The Alhambra',
    description: 'Moorish palaces at the foot of the Sierra Nevada.',
    imageUrl: '/images/spain/granada.jpg',
    linkText: 'Discover Granada →'
  },
  {
    id: 'mallorca',
    number: '06',
    name: 'Mallorca',
    subtitle: 'Island Coves',
    description: 'Turquoise coves and mountain roads in the Balearic Islands.',
    imageUrl: '/images/spain/mallorca.jpg',
    linkText: 'Discover Mallorca →'
  }
];

export const POPULAR_DESTINATIONS = SPAIN_DESTINATIONS.slice(0, 3);
